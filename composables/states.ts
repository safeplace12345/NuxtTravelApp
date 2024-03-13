export const useDestinations = () => useState<any>('destinations', () => ({
    id: "",
    name: "",
    price: "",
    description: "",
    startingDate: "",
    endingDate: "",
    moods: {
        nature: "",
        relax: "",
        history: "",
        culture: "",
        party: "",
    }
}))

export const useCurrentUser = () => useState<any>('user', () => ({
    id: "",
    email: "",
    name: ""
}))

export const useCart = () => useState<any>('cart', () => ({
    email: "",
    orders: []
}))
