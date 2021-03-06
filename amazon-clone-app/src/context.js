import React , {useContext,useReducer} from 'react'
import { reducer } from './reducer'

const AppContext = React.createContext()

const AppProvider = ({children}) => {

    const initialState = {
        cart:[],
        user:null
    }

    const setUser = (authUser) => {
        dispatch({type:'SET_USER',payload:authUser})
    }

    const addToCart = (id,title,image,price,description,hasPrime,rating) => {
        dispatch({type:'ADD', payload:{
            id: id,
            title:title,
            image:image,
            price:price,
            description:description,
            hasPrime:hasPrime,
            rating:rating
        }})   
    }

    const removeItem = (id) => {
        dispatch({type:'REMOVE', payload:id})
    }
    

    const [state,dispatch] = useReducer(reducer,initialState)

    let totalAmount = state.cart.reduce((amount,item)=>{
            return(
                amount = item.price + amount
            )
        },0)

    return(
        <AppContext.Provider value={{addToCart,...state,totalAmount,removeItem,setUser,dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return(
        useContext(AppContext)
    )
}

export {AppProvider}