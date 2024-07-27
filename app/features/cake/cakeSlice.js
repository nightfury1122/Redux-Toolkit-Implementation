const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numberOfCakes: 10
}

// Once the cakeSlice function is imported we assign it to a constant
// This functions takes an object as an argument
// CreateSlice handles the actions , actionCreators , Switch statements , etc under the hood, reducing the boilerplate.

const cakeSlice = createSlice({
    // The object takes three things 1) name , 2) intiialState , 3) reducer function
    name: "cake",
    initialState,
    reducers: {

        // In this object we specify individual state transitions. 
        // In this case we have only two action types / creators. We do not need to use switch case in rtk.

        // Ordered is going to be a function that takes state and actions as arguments.
        // In ordered we do not need actions but we will need it in the later ones.

        ordered: (state) => {
            // In rtk we do not need to return the state everytime like in redux. We can directly mutate the state in rtk.
            // CreateSlice uses Immer library under the hood so things are easy here.
            state.numberOfCakes--
        },
        restocked: (state, action) => {
            state.numberOfCakes = state.numberOfCakes + action.payload
        }
    }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions