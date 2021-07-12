export const reducer = (state,action) => {
    console.log(action)
    switch(action.type){
        case 'ADD':
            return {...state,
                cart:[...state.cart, action.payload]
            }
        case 'REMOVE':
            // const newCartValue = state.cart.filter((item)=>{
            //     return item.id !== action.payload
            // })

            const index = state.cart.findIndex((item)=>{
                return item.id === action.payload
            })


            let newCartValue = [...state.cart]

            if(index >= 0){
                newCartValue.splice(index,1)
            }
            else{
                console.warn('The item is not found')
            }

            return {
                ...state,
                cart:newCartValue
            }
        default:
            return state
    }
}
