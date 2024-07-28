const store = require('./app/store')
const cakeActions = require('./app/features/cake/cakeSlice').cakeActions
const IceCreamActions = require("./app/features/iceCream/iceCreamSlice").icecreamActions
const fetchUsers = require("./app/features/user/userSlice").fetchUsers

console.log('Initial State', store.getState())

// Subscribing to the store to get the latest state

const unsubscribe = store.subscribe(() => {
    console.log("updated State", store.getState())
})

// ************ Information about Logger middleware ***************

// Just as an example the below is the structure of the response logger gives you
// As you can see rtk generates the action type itself
// It takes the name of the Slice as the first part and the key of the reducer function as the second part
// In line number 2 of the response below //  action cake/ordered @ 11:56:37.468 cake/ordered is the action type

// Initial State { cake: { numberOfCakes: 10 }, icecream: { numberOfIcecreams: 10 } }
//  action cake/ordered @ 11:56:37.468
//    prev state { cake: { numberOfCakes: 10 }, icecream: { numberOfIcecreams: 10 } }
//    action     { type: 'cake/ordered', payload: undefined }
//    next state { cake: { numberOfCakes: 9 }, icecream: { numberOfIcecreams: 10 } }
//  action cake/ordered @ 11:56:37.470

// *****************************************************************

store.dispatch(fetchUsers())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))

// store.dispatch(IceCreamActions.ordered())
// store.dispatch(IceCreamActions.ordered())
// store.dispatch(IceCreamActions.ordered())
// store.dispatch(IceCreamActions.restocked(3))


// unsubscribe()

