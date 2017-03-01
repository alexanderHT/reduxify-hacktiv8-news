export default (state = '', action) => {
  switch(action.type) {
    case 'SEARCH_TITLE_NEWS':
      return action.payload
    default:
      return state
  }
}
