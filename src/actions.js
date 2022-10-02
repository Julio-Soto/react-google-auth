

export const createProfile = (userData) => ({
    type: 'createProfile',
    payload: {
        name: userData.name,
        email: userData.email,
        imageURL: userData.imageURL
    }
})

export const eraseProfile = () => ({
    type: 'eraseProfile'
})