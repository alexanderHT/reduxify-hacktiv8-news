export const search = (title) => {
  return {
    type: 'SEARCH_TITLE_NEWS',
    payload: title
  }
}
