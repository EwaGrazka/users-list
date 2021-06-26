
import Loader from 'react-loader-spinner';

const Spinner = () => (
  <div>
    <Loader
      type='MutatingDots'
      color='rgb(172, 170, 170)'
      height={100}
      secondaryColor='#000'
      width={100}
    />
  </div>
);
export default Spinner;
