const userProfileReducer = (state ={},action) => {
    switch(action.type) {
        case 'createProfile': 
            return {
                name: action.payload.name,
                email: action.payload.email,
                imageURL: action.payload.imageURL
            }
        case 'eraseProfile': {
            return {}
        }
        default :
            return state

    }
} 

export default userProfileReducer