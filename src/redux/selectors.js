export const getContacts = state =>
  state.contacts ? state.contacts.contacts : [];

export const getFilter = state => (state.filter ? state.filter.value : '');
