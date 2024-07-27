const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('./features/cake/cakeSlice')

// ConfigureStore() accepts an object as argument
const store = configureStore({
    reducer: {
        // add all reducers that we made in slices here
        cake: cakeReducer,
    }
})

module.exports = store