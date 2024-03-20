import { forwardRef, useImperativeHandle } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const BoxMesh = forwardRef(({ ...props }, ref) => {
  const colorMap = useLoader(TextureLoader, 'assets/textures/colors.png');
  useImperativeHandle(ref, () => {
    return {
      mesh: ref.current,
    };
  });

  console.log(props);

  return (
    <mesh
      ref={ref}
      {...props.mesh}
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
