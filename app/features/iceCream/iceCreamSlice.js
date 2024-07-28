const { cakeActions } = require('../cake/cakeSlice')
const createSlice = require('@reduxjs/toolkit').createSlice

initialState = {
    numberOfIcecreams: 10,
}

const icecreamSlice = createSlice({

    name: "icecream",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfIcecreams--
        },
        restocked: (state, actions) => {
            state.numberOfIcecreams += actions.payload
        },
    },
    // The extra reducer is called if you want to mutate the state of a a different slice
    // In this example we are calling the ordered cake Action and mutating the state of icecream

    // Extra reducer takes accepts a function as an argument
    // This function takes a builder as an argument

    extraReducers: (builder) => {

        // The addCase accepts an action which in this case is cakeOrdered action and a function as an argument
        // In this case the function only needs state to mutate the state
        
        builder.addCase(cakeActions.ordered, state => {
            state.numberOfIcecreams--
        })
    }
}
)

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions