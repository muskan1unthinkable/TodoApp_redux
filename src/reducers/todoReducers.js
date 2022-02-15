const initialData = {
  list: [
    //     {
    //     id:"1",
    //     date:"one"
    // }
  ],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO": 
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    
     
            
    case "DELETE_TODO": {
        const id=action.id;
        const newList=state.list.filter((item)=>item.id!==id)
        return{
            ...state,
            list:newList,
        }
    }
    case "REMOVE_TODO": {
        return{
            ...state,
            list:[],
        }
    }
    default:
      return state;
  }
};

export default todoReducers;
