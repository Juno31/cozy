import { forwardRef, useImperativeHandle } from 'react';

const BoxMesh = forwardRef(({ ...props }, ref) => {
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
      <meshStandardMaterial {...props.material} />
    </mesh>
  );
});

BoxMesh.displayName = 'BoxMesh';

export default BoxMesh;
