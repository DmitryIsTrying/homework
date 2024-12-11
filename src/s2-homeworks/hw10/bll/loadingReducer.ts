type Loading = {
  isLoading: boolean
}
const initState: Loading = {
  isLoading: false,
}

export const loadingReducer = (state: Loading = initState, action: loadingActions): Loading => {
  // fix any
  switch (action.type) {
    // пишет студент  // need to fix
    case 'CHANGE_LOADING': {
      return { ...state, isLoading: action.isLoading }
    }
    default:
      return state
  }
}

type LoadingActionType = {
  type: 'CHANGE_LOADING'
  isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
  type: 'CHANGE_LOADING',
  isLoading,
})

type ChangeLoading = ReturnType<typeof loadingAC>

type loadingActions = ChangeLoading
