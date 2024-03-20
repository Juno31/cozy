import { PerspectiveCamera, useKeyboardControls } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

const KeyboardPerspectiveCamera = ({ children }) => {
  const cameraRef = useRef();
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const { width, height } = useThree((state) => state.viewport);
  const initial = useRef();

  useFrame(() => {
    const { rotateForward, rotateBackward, rotateLeft, rotateRight } =
      getKeys();
    const camera = cameraRef.current;

    if (!camera) return;

    if (!initial.current) {
      initial.current = {
        width,
        height,
      };
    }

    let rotateX = camera.rotation.x;
    let rotateY = camera.rotation.y;

    if (rotateForward) {
      rotateX = rotateX + 0.1;
    }

    if (rotateBackward) {
      rotateX = rotateX - 0.1;
    }

    if (rotateLeft) {
      rotateY = rotateY + 0.1;
    }

    if (rotateRight) {
      rotateY = rotateY - 0.1;
    }

    if (initial.current.width !== width) {
      camera.position.z = width / initial.current.width;
    }

    camera.rotation.x = rotateX;
    camera.rotation.y = rotateY;
  });

  return (
    <PerspectiveCamera
      ref={cameraRef}
      rotation={[0.15, 0.5, 0]}
      position={[0, 0, 0]}
    >
      {children}
    </PerspectiveCamera>
  );
};

export default KeyboardPerspectiveCamera;
