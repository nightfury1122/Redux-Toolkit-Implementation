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
        }
    }
)

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions