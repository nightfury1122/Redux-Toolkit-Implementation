const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('./features/cake/cakeSlice')
const icecreamReducer = require('./features/iceCream/iceCreamSlice')

// ConfigureStore() accepts an object as argument
const store = configureStore({
    reducer: {
        // add all reducers that we made in slices here
        cake: cakeReducer,
        icecream: icecreamReducer,
    }
})

module.exports = store