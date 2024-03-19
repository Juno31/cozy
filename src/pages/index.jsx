import { Canvas } from '@react-three/fiber';
import Model from '@/components/model';
import ArrowPerspectiveCamera from '@/components/ArrowPerspectiveCamera';
import { KeyboardControls } from '@react-three/drei';

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
        <Canvas className={'h-full w-full'}>
          <ArrowPerspectiveCamera>
            <Model path={'assets/room.glb'} />
          </ArrowPerspectiveCamera>
        </Canvas>
      </KeyboardControls>
    </div>
  );
};

export default Home;
