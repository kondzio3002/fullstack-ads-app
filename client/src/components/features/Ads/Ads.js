import styles from './Ads.module.scss';
import Ad from '../../common/Ad/Ad';
import { Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import { getAds, getRequest } from '../../../redux/adsRedux';

import Loader from '../../common/Loader/Loader';

const Ads = () => {
  const ads = useSelector(getAds);
  const request = useSelector(getRequest);

  if (request.pending) return <Loader />
  else if (request.error) return <h1>Error...</h1>
  else if (request.success) return (
    <div>
      <Row className='justify-content-center'>
        {ads.map(ad => <Ad key={ad._id} {...ad} />)}
      </Row>
    </div>
  );
};

export default Ads;