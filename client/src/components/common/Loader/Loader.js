import { Spinner } from "reactstrap";

const Loader = () => {
  return (
    <div className='text-center mt-4'>
      <Spinner color='secondary'>Loading...</Spinner>
    </div>
  );
};

export default Loader;