import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';

const BoxMesh = forwardRef(({ ...props }, ref) => {
  const activeRef = useRef(true);

  const handlePointerOver = useCallback(() => {
    console.log('handlePointerOver');
    activeRef.current = true;
  }, []);

  const handlePointerOut = useCallback(() => {
    console.log('handlePointerOut');
    activeRef.current = false;
  }, []);

  useImperativeHandle(ref, () => {
    return {
      mesh: ref.current,
      active: activeRef.current,
    };
  });

  return (
    <mesh
      ref={ref}
      {...props.mesh}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <boxGeometry {...props.geometry} />
      <meshStandardMaterial {...props.material} />
    </mesh>
  );
});

BoxMesh.displayName = 'BoxMesh';

export default BoxMesh;
