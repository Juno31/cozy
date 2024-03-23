import { useKeyboardControls } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const KeyboardRotateMeshController = ({
  element: Element,
  mesh,
  geometry,
  material,
}) => {
  const ref = useRef();
  const [subscribeKeys, getKeys] = useKeyboardControls();

  useFrame((state, delta) => {
    const { moveForward, moveBackward, moveLeft, moveRight, jump } = getKeys();
    const mesh = ref.current.mesh;
    const active = ref.current.active;

    if (mesh && active) {
      let x = mesh.rotation.x;
      let y = mesh.rotation.y;

      if (moveForward) {
        x = x + 0.1;
      }

      if (moveBackward) {
        x = x - 0.1;
      }

      if (moveLeft) {
        y = y + 0.1;
      }

      if (moveRight) {
        y = y - 0.1;
      }

      mesh.rotation.x = x;
      mesh.rotation.y = y;
    }
  });

  return (
    <Element meshRef={ref} />
  );
};

export default KeyboardRotateMeshController;
