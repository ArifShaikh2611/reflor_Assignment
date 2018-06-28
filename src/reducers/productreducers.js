export default function productReducer(state, {type , payload}){
    console.log(state);
    switch(type){
        case 'changeState' : return {...state,filter:payload.filter};

        default : return state;
    }
    
}