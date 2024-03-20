import { Line } from '@react-three/drei';
import CustomText from '@/components/custom-text';

const CordinateLines = () => {
  return (
    <>
      <Line
        points={[-5, 0, 0, 5, 0, 0]} // Start and end points
        color={'blue'}
        lineWidth={5} // Line width
      />
      <CustomText
        position={[6, 0, 0.1]}
        bold
      >
        X
      </CustomText>
      <Line
        points={[0, -5, 0, 0, 5, 0]} // Start and end points
        color={'red'}
        lineWidth={5} // Line width
      />
      <CustomText
        position={[0, -6, 0]}
        bold
      >
        Y
      </CustomText>
      <Line
        points={[0, 0, -5, 0, 0, 5]} // Start and end points
        color={'purple'}
        lineWidth={5} // Line width
      />
      <CustomText
        position={[0, 0, -6]}
        bold
      >
        Z
      </CustomText>
    </>
  );
};

export default CordinateLines;
