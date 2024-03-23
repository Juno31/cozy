import { useEffect, useRef } from 'react';
import Appear from '@/module/appear/appear';

const AppearController = ({ children, delay, duration, onAppear }) => {
  const appearRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      const element = appearRef.current;

      if (element) {
        element.style.transition = `all ${duration / 1000}s linear`;
        element.style.opacity = '1';
        element.style.transform = 'translateY(0px)';
      }

      onAppear?.();
    }, delay);
  }, []);

  return <Appear appearRef={appearRef}>{children}</Appear>;
};

export default AppearController;
