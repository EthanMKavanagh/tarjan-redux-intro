const initialProfile = {
    name: 'Edan',
    location: {
      city: 'Minneapolis',
      state: 'MN',
    }
}

const profileReducer = (state = initialProfile, action) => {
  if (action.type === 'SET_CITY') {
    return {
      ...state,
      location: {
        ...state.location,
        city: action.payload
      }
    }
  }

  if (action.type === 'SET_STATE') {
    return {
      ...state,
      location: {
        ...state.location,
        state: action.payload
      }
    }
  }

  return state;
}

export default profileReducer;