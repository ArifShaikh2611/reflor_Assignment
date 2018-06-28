import { createStore } from 'redux';
import  productReducer from '../reducers/productreducers';

const initialState ={
    filter : "",
    products : [10,20]
}


const action ={
    type: 'changeState',
    payload : {
        filter : 'New State'
    }
}






const Appstore = createStore(
    productReducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
);



Appstore.subscribe(() =>{
    console.log(Appstore.getState());
})

Appstore.dispatch(action);



export default Appstore;