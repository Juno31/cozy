import FocusContext from '@/module/focus/focus-context';
import { useCallback, useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { INITIAL } from '@/constants/camera';

const duration = 30;

const FocusProvider = ({ children }) => {
  const actions = useRef(null);
  const animationActions = useRef(null);

  const add = useCallback((action) => {
    actions.current = action;
  });

  const remove = useCallback((id) => {
    actions.current = null;
    animationActions.current = null;
  });

  const contextValues = useMemo(() => {
    return {
      actions: actions.current,
      add,
      remove,
    };
  }, [actions, add, remove]);

  const processAnimation = useCallback(() => {}, []);

  useFrame(({ camera }) => {
    if (actions.current) {
      const currentX = camera.position.x;
      const currentY = camera.position.y;
      const currentZ = camera.position.z;

      const currentRotationX = camera.rotation.x;
      const currentRotationY = camera.rotation.y;
      const currentRotationZ = camera.rotation.z;

      if (!animationActions.current) {
        const xGap = currentX - actions.current.x; // 1
        const yGap = currentY - actions.current.y; // 1
        const zGap = currentZ - actions.current.z; // 1

        const xRotationGap = currentRotationX - INITIAL.camera.rotation[0]; // 1
        const yRotationGap = currentRotationY - INITIAL.camera.rotation[1]; // 1
        const zRotationGap = currentRotationZ - INITIAL.camera.rotation[2]; // 1

        animationActions.current = {
          duration,
          x: xGap / duration,
          y: yGap / duration,
          z: zGap / duration,
          rotationX: xRotationGap / duration,
          rotationY: yRotationGap / duration,
          rotationZ: zRotationGap / duration,
        };
      }

      // camera.rotation.set(
      //   currentRotationX - animationActions.current.rotationX,
      //   currentRotationY - animationActions.current.rotationY,
      //   currentRotationZ - animationActions.current.rotationZ,
      // );
      camera.position.set(
        currentX - animationActions.current.x,
        currentY - animationActions.current.y,
        currentZ - animationActions.current.z,
      );

      animationActions.current.duration = animationActions.current.duration - 1;

      if (animationActions.current.duration === 0) {
        remove();
      }
    }
  });

  return (
    <FocusContext.Provider value={contextValues}>
      {children}
    </FocusContext.Provider>
  );
};

export default FocusProvider;
