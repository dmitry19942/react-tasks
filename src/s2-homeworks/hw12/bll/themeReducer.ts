const initState = {
    themeId: 1,
}

type InitStateType = {
    themeId: number
}

type ChangeThemeIdType = {
    type: 'SET_THEME_ID',
    themeId: number
}

export const themeReducer = (state: InitStateType = initState, action: ChangeThemeIdType): InitStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
        return {...state, themeId: action.themeId}
        default:
            return state
    }
}

export const changeThemeId = (themeId: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', themeId }) // fix any
