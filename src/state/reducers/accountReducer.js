/* eslint-disable no-unused-vars */
// a function that returns a state 

// takes two parameters in inituial state and action wehat it wants to do
const reducer = (state = 0, action) => {

    // with reducers we would use switch statements

    switch(action.type){
        case "deposot" : 
        return state + action.payload;
        case "withdraw" :
        return state  - action.payload;
        default :
        return state 
    }

}

export default reducer