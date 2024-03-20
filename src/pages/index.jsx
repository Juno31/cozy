import { Canvas, events } from '@react-three/fiber';
import { KeyboardControls } from '@react-three/drei';
import KeyboardRotateController from '@/controllers/keyboard-rotate-controller';
import GlassBoxMesh from '@/components/glass-box-mesh';
import CustomText from '@/components/custom-text';
import KeyboardPerspectiveCamera from '@/controllers/keyboard-perspective-camera';
import { useRef } from 'react';
import CordinateLines from '@/components/cordinate-lines';

const Home = () => {
  const canvasRef = useRef();

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
          events={(state) => {
            return {
              ...events(state),
              enabled: true,
            };
          }}
          camera={{
            position: [1, 0, 10],
          }}
        >
          <KeyboardPerspectiveCamera position={[0, 0, 0]}>
            <directionalLight
              color="white"
              position={[10, 10, 10]}
            />
            <CustomText
              position={[0, 3, -5]}
              bold
            >
              JUNO UM ARCHIVE
            </CustomText>
            <CustomText
              position={[0, 2, -5]}
              bold
              scale={0.5}
            >
              ROTATING BOX ON KEYBOARD
            </CustomText>
            <KeyboardRotateController
              mesh={{ position: [-2, -2, 2] }}
              element={GlassBoxMesh}
            />
            <KeyboardRotateController
              mesh={{ position: [2, 2, 2] }}
              element={GlassBoxMesh}
            />
            <KeyboardRotateController
              mesh={{ position: [2, 2, -2] }}
              element={GlassBoxMesh}
            />
            <CordinateLines />
          </KeyboardPerspectiveCamera>
        </Canvas>
      </KeyboardControls>
    </div>
  );
};

export default Home;
