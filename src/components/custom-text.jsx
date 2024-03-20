import { Text } from '@react-three/drei';

const CustomText = ({ position, children, bold = false, scale = 1 }) => {
  // Use ternary operator to determine the font style
  const fontWeight = bold ? 'assets/fonts/bold.ttf' : 'assets/fonts.ttf';

  return (
    <Text
      position={position}
      color={'black'}
      font={fontWeight}
      scale={scale}
    >
      {children}
    </Text>
  );
};

export default CustomText;
