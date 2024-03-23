import { Canvas, events } from '@react-three/fiber';
import { KeyboardControls } from '@react-three/drei';
import KeyboardRotateMeshController from '@/controllers/keyboard-rotate-mesh-controller';
import GlassBoxMesh from '@/components/glass-box-mesh';
import CustomText from '@/components/custom-text';
import ControllablePerspectiveCamera from '@/controllers/controllable-perspective-camera';
import { useCallback, useEffect, useRef, useState } from 'react';
import CordinateLines from '@/components/cordinate-lines';
import useOverlay from '@/module/overlay/use-overlay';
import LoadingOverlay from '@/components/overlay/loading-overlay';

const Home = () => {
  const canvasRef = useRef();
  const [isCreated, setIsCreated] = useState(false);
  const { open, close, exit } = useOverlay();

  const handleCreated = useCallback(() => {
    setTimeout(() => {
      exit();
      setIsCreated(true);
    }, 2500);
  }, []);

  useEffect(() => {
    open(({ ...props }) => {
      return <LoadingOverlay {...props} />;
    });

    return () => {
      exit();
    };
  }, []);

  return (
    <div className="h-screen w-full">
      <KeyboardControls
        map={[
          { keys: ['ArrowUp'], name: 'moveForward' },
          { keys: ['w'], name: 'rotateForward' },
          { keys: ['ArrowDown'], name: 'moveBackward' },
          { keys: ['s'], name: 'rotateBackward' },
          { keys: ['ArrowLeft'], name: 'moveLeft' },
          { keys: ['a'], name: 'rotateLeft' },
          { keys: ['ArrowRight'], name: 'moveRight' },
          { keys: ['d'], name: 'rotateRight' },
          { keys: ['Space'], name: 'jump' },
        ]}
      >
        <Canvas
          className={`${isCreated ? 'transform-gpu opacity-100 duration-500' : 'opacity-0 duration-500'}`}
          events={(state) => {
            return {
              ...events(state),
              enabled: true,
            };
          }}
          camera={{
            position: [1, 0, 10],
          }}
          onCreated={handleCreated}
        >
          <ControllablePerspectiveCamera
            keyboardFlag
            mouseFlag
            position={[0, 0, 0]}
          >
            <directionalLight
              color="white"
              position={[10, 10, 10]}
            />
            <CustomText
              position={[0, 5, -5]}
              bold
            >
              JUNO UM ARCHIVE
            </CustomText>
            <CustomText
              position={[0, 4, -5]}
              bold
              scale={0.5}
            >
              1. ROTATE CAMERA WITH W,A,S,D
            </CustomText>
            <CustomText
              position={[0, 3.2, -5]}
              bold
              scale={0.5}
            >
              2. ROTATE CAMERA BY GRAB AND MOVE
            </CustomText>
            <CustomText
              position={[0, 2.4, -5]}
              bold
              scale={0.5}
            >
              3. ROTATE BOX WITH ARROW KEYS (when mouse hovered)
            </CustomText>
            <KeyboardRotateMeshController
              mesh={{ position: [2, 2, -2] }}
              element={({ meshRef, ...props }) => {
                return (
                  <GlassBoxMesh
                    ref={meshRef}
                    {...props}
                  />
                );
              }}
            />
            <CordinateLines />
          </ControllablePerspectiveCamera>
        </Canvas>
      </KeyboardControls>
    </div>
  );
};

export default Home;
