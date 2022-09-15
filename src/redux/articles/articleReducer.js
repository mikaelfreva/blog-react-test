const INITIAL_STATE = {
    articles : []
}

function articleReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADDARTICLE":
            const newArr = [...state.articles];
            newArr.unshift(action.payload);
            return {
               
                articles: newArr,
              };
        case "LOADARTICLES": {
            return {
             
                articles: action.payload
            }
        }
    }
    return state
}
export default articleReducer;


export const getArticles = () => (dispatch, getState) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: "LOADARTICLES",
          payload: data,
        });
      });
  };
  