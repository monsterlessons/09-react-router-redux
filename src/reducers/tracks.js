const initialState = [
  {
    id: 1234,
    name: 'My super track'
  }
];

export default function tracks(state = initialState, action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  } else if (action.type === 'FETCH_TRACKS_SUCCESS') {
    return action.payload;
  }
  return state;
}
