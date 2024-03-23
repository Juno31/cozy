import { PerspectiveCamera, useKeyboardControls } from '@react-three/drei';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

const ControllablePerspectiveCamera = ({ children, keyboardFlag = false, mouseFlag = false }) => {
  const cameraRef = useRef();
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const { width, height } = useThree((state) => state.viewport);
  const initial = useRef();

  const pressedCoordinate = useRef()
  const pressedRef = useRef(false)

  const handleUp = useCallback(() => {

    setPressed(false)
  }, [])

  const handleDown = useCallback(() => {

    setPressed(true)
  }, [])

  const handleKeyboardFeature = useCallback(() => {
    const camera = cameraRef.current;

    if(!camera) return

    const { rotateForward, rotateBackward, rotateLeft, rotateRight } = getKeys();

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

    camera.rotation.x = rotateX;
    camera.rotation.y = rotateY;
  }, [])

  const handleMouseFeature = useCallback(() => {

  }, [width])

  const handleResponsiveFeature = useCallback(() => {
    const camera = cameraRef.current

    if (!initial.current) {
      initial.current = {
        width,
        height,
      };
    }

    if (initial.current.width !== width) {
      camera.position.z = width / initial.current.width;
    }
  }, [width])

  useFrame(() => {
    if(keyboardFlag){
      handleKeyboardFeature()
    }

    if(mouseFlag){
      handleMouseFeature()
    }

    handleResponsiveFeature()
  });

  useEffect(() => {
    const handleMouseDown = (e) => {
      //activate handlers
      pressedRef.current = true

      //save initial coordinate
      pressedCoordinate.current = {
        x: e.pageX,
        y: e.pageY
      }
    }
    const handleMouseMove = (e) => {
      if(!pressedRef.current) return

      //get gap of saved coordinate and current coordinate
      const xGap = pressedCoordinate.current.x - e.pageX
      const yGap = pressedCoordinate.current.y - e.pageY

      //apply to rotation
      cameraRef.current.rotation.x = cameraRef.current.rotation.x + yGap/100
      cameraRef.current.rotation.y = cameraRef.current.rotation.y + xGap/100

      //save new coordinate
      pressedCoordinate.current = {
        x: e.pageX,
        y: e.pageY
      }
    }
    const handleMouseUp = () => {
      //deactivate handlers
      pressedRef.current = false

      //reset coordinate

    }

    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)

    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
    }
  }, []);

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

export default ControllablePerspectiveCamera;
