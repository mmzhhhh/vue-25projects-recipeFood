import { ref } from "vue";
import { useRouter } from "vue-router";

export function useGlobalState() {
  const searchParam = ref("");
  const loading = ref(false);
  const recipeList = ref([]);
  const recipeDetailsData=ref([]);
  const favoritesList=ref([]);

  const router=useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    loading.value=true;
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam.value}`
      );
      const data = await response.json();
      console.log(data);
      if (data?.data?.recipes) {
        recipeList.value = data?.data?.recipes;
        console.log(recipeList.value);
        loading.value = false;
        searchParam.value = "";
        router.push('/');
      }
    } catch (error) {
      console.log(error);
      loading.value = false;
      searchParam.value = "";
    }
  }

  function handleAddToFavorites(getCurrentItem) {
    let cpyFavoritesList=[...favoritesList.value];
    console.log(cpyFavoritesList);
    
    const index=cpyFavoritesList.findIndex(item=>item.id===getCurrentItem.id);    
    if(index===-1){
      cpyFavoritesList.push(getCurrentItem);
    }else{
      cpyFavoritesList.splice(index,1);
    }
    favoritesList.value=cpyFavoritesList;
  } 

  return {
    searchParam,
    loading,
    recipeList,
    handleSubmit,
    recipeDetailsData,
    handleAddToFavorites,
    favoritesList,
  };
}
