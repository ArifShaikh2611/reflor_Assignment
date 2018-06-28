
var prodcutIdCounter = 1;


export default function productReducer(state, {type , payload}){
    switch(type){
        case 'ADDPRODUCT' : payload ={...payload,productId:prodcutIdCounter++}
            return {...state,products:[...state.products,payload]};
        case 'UPDATEFILTER' : 
            return {...state,filter:payload};
        case 'DELETEPRODUCT' : 
            var removedProduct = state.products.filter((obj) => obj.productId != payload);
            return {...state,products:removedProduct}
                    

        default : return state;
    }
    
}