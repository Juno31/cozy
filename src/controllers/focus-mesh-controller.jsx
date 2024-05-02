import { useFrame } from '@react-three/fiber';
import { useCallback, useRef, useState } from 'react';
import useFocus from '@/hooks/use-focus';

let id = 1;

const FocusMeshController = ({
  element: Element,
  mesh,
  geometry,
  material,
}) => {
  const meshRef = useRef();
  const [thisId] = useState(() => id++);
  const { add, remove } = useFocus();

  const handlePointerDown = useCallback(() => {
    add({
      id: thisId,
      x: meshRef.current.mesh.position.x,
      y: meshRef.current.mesh.position.y,
      z: meshRef.current.mesh.position.z + 5,
    });
  }, []);

  return (
    <Element
      id={id++}
      meshRef={meshRef}
      mesh={{ onPointerDown: handlePointerDown, ...mesh }}
      geometry={geometry}
      material={material}
    />
  );
};

export default FocusMeshController;
