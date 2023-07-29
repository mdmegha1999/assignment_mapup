const initialState = {
    selectedRegion: null,
    regionInfo: null,
    regionCoordinates: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_REGION':
        return {
          ...state,
          selectedRegion: action.payload,
        };
      case 'SET_REGION_INFO':
        return {
          ...state,
          regionInfo: action.payload,
        };
      case 'SET_REGION_COORDINATES':
        return {
          ...state,
          regionCoordinates: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  