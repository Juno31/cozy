import { createContext } from 'react';

const FocusContext = createContext({
  actions: [],
  add: () => {},
  remove: (id) => {},
});

export default FocusContext;
