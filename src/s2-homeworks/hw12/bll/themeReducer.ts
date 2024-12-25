export type ThemeId = 1 | 2 | 3

const initState = {
  themeId: 1 as ThemeId,
}

export type ThemeReducerState = typeof initState

export const themeReducer = (state = initState, action: ThemeReducerActions): ThemeReducerState => {
  // fix any
  switch (action.type) {
    // дописать
    case 'SET_THEME_ID': {
      return { ...state, themeId: action.id }
    }

    default:
      return state
  }
}

export const changeThemeId = (id: ThemeId) => ({ type: 'SET_THEME_ID', id } as const) // fix any

type ChangeThemeId = ReturnType<typeof changeThemeId>

type ThemeReducerActions = ChangeThemeId
