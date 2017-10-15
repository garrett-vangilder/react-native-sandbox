export default (state = null, action) => {
  switch (action) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};
