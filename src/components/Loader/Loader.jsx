import { RotatingLines } from 'react-loader-spinner';
import { Backdrop } from './Loader.styled';

export const Loader = () => {
  return (
    <Backdrop>
      <RotatingLines
        strokeColor="#00A698"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Backdrop>
  );
};