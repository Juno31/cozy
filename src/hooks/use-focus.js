import { useContext } from 'react';
import FocusContext from '@/module/focus/focus-context';

const useFocus = () => {
  return useContext(FocusContext);
};

export default useFocus;
