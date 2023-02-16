import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return action.payload === 'up'
                ?
                [...state].sort((a, b) => {
                    if (a.name.toUpperCase() < b.name.toUpperCase()) {
                        return -1
                    }
                    if (a.name.toUpperCase() > b.name.toUpperCase()) {
                        return 1
                    }
                    return 0
                })
                :
                [...state].sort((a, b) => {
                    if (a.name.toUpperCase() > b.name.toUpperCase()) {
                        return -1
                    }
                    if (a.name.toUpperCase() < b.name.toUpperCase()) {
                        return 1
                    }
                    return 0
                })
        }
        case 'check': {
            return state.filter( (u) => u.age >= 18 )
        }
        default:
            return state
    }
}
