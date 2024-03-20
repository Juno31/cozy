import { Canvas } from '@react-three/fiber';
import { KeyboardControls } from '@react-three/drei';
import KeyboardRotateController from '@/controllers/keyboard-rotate-controller';
import GlassBoxMesh from '@/components/glass-box-mesh';
import CustomText from '@/components/custom-text';

const Home = () => {
  return (
    <div className="h-screen w-full">
      <KeyboardControls
        map={[
          { keys: ['w', 'ArrowUp'], name: 'moveForward' },
          { keys: ['s', 'ArrowDown'], name: 'moveBackward' },
          { keys: ['a', 'ArrowLeft'], name: 'moveLeft' },
          { keys: ['d', 'ArrowRight'], name: 'moveRight' },
          { keys: ['Space'], name: 'jump' },
        ]}
      >
        <Canvas className={''}>
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
            mesh={{ position: [0, -1, 0] }}
            element={GlassBoxMesh}
          />
        </Canvas>
      </KeyboardControls>
    </div>
  );
};

export default Home;
