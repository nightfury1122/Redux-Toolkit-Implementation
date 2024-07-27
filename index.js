const store = require('./app/store')
const cakeActions = require('./app/features/cake/cakeSlice').cakeActions
const IceCreamActions = require("./app/features/iceCream/iceCreamSlice").icecreamActions

console.log('Initial State', store.getState())

// Subscribing to the store to get the latest state

const unsubscribe = store.subscribe(() => {
    console.log('Updated State', store.getState())
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

store.dispatch(IceCreamActions.ordered())
store.dispatch(IceCreamActions.ordered())
store.dispatch(IceCreamActions.ordered())
store.dispatch(IceCreamActions.restocked(3))


unsubscribe() 