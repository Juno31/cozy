import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Model = ({ path }) => {
  const primitiveRef = useRef();
  const { scene } = useGLTF(path);

  useFrame((state, delta) => {
    const { x, y } = state.pointer;
    primitiveRef.current.rotation.y = x * Math.PI; // Rotate around Y axis based on mouse X
    // primitiveRef.current.rotation.x = -y * Math.PI;
  });

  return (
    <primitive
      ref={primitiveRef}
      object={scene}
    />
  );
};

export default Model;
