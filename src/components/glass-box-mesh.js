import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const BoxMesh = forwardRef(({ ...props }, ref) => {
  const meshRef = useRef();
  const [active, setActive] = useState(false);
  const colorMap = useLoader(TextureLoader, 'assets/textures/colors.png');

  const handlePointerOver = useCallback(() => {
    setActive(true);
  }, []);

  const handlePointerOut = useCallback(() => {
    setActive(false);
  }, []);

  useImperativeHandle(
    ref,
    () => {
      return {
        mesh: meshRef.current,
        active: active,
      };
    },
    [active],
  );

  return (
    <mesh
      ref={meshRef}
      {...props.mesh}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <boxGeometry {...props.geometry} />
      <meshPhongMaterial
        {...props.material}
        map={colorMap}
      />
    </mesh>
  );
});

BoxMesh.displayName = 'BoxMesh';

export default BoxMesh;
