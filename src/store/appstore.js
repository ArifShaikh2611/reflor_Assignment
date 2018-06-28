import { createStore } from 'redux';
import  productReducer from '../reducers/productreducers';

const initialState ={
    filter : {},
    products : []
}


const Appstore = createStore(
    productReducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
);



Appstore.subscribe(() =>{
    console.log(Appstore.getState());
})

export default Appstore;