import { createSelector } from 'reselect';

const rootReducer = (state) => state.rootReducer;

console.log(rootReducer.users)

export const selectUsersData = () => createSelector(rootReducer, (state) => (state.get('users'))?state.get('users').toJS():state.get('users'));
export const selectUserToken = () => createSelector(rootReducer, (state) => (state.get('token'))?state.get('token').toJS():state.get('token'));
export const selectProductsData = () => createSelector(rootReducer, (state) => (state.get('allProducts'))?state.get('allProducts').toJS():state.get('allProducts'));
