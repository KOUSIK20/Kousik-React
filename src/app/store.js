
import {configureStore} from '@reduxjs/toolkit'
//const { getDefaultMiddleware } = require('@reduxjs/toolkit')
import cakeReducer from '../features/cakes/cakeSlice'
import icecreamReducer from '../features/iceCream/iceCreamSlice'
import userReducer from '../features/user/userSlice'
//const reduxLogger = require('redux-logger')

//const logger = reduxLogger.createLogger()
const store = configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer,
        user:userReducer
    },
    //middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})
export default store