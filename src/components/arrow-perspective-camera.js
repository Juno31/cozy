import { PerspectiveCamera, useKeyboardControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const ArrowPerspectiveCamera = ({ initialPosition = [0, 0, 0], children }) => {
  const camera = useRef();
  const [subscribeKeys, getKeys] = useKeyboardControls();

  useFrame((state, delta) => {
    const [x, y, z] = camera.current.position;
    const { moveForward, moveBackward, moveLeft, moveRight, jump } = getKeys();

    if (moveLeft) {
      // camera.current.position.set([x + 1, y, z]);
      console.log('moveForward');

      camera.current.position.x = x - 0.1;
    }

    if (moveRight) {
      // camera.current.position.set([x - 1, y, z]);
      console.log('moveBackward');

      camera.current.position.x = x + 0.1;
    }

    if (moveForward) {
      // camera.current.position.set([x - 1, y, z]);
      console.log('moveLeft');

      camera.current.position.y = y + 0.1;
    }

    if (moveBackward) {
      // camera.current.position.set([x - 1, y, z]);
      console.log('moveRight');

      camera.current.position.y = y - 0.1;
    }

    if (jump) {
      camera.current.position.y = y - 1;
    }
  });

  return (
    <PerspectiveCamera
      ref={camera}
      position={initialPosition}
    >
      {children}
    </PerspectiveCamera>
  );
};

export default ArrowPerspectiveCamera;
