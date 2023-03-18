import styles from './Ads.module.scss';
import Ad from '../../common/Ad/Ad';
import { Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAds, loadAdsRequest } from '../../../redux/adsRedux';
import { useEffect } from 'react';

const Ads = () => {
  const ads = useSelector(getAds);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAdsRequest())
  }, [dispatch]);

  return (
    <div>
      <Row className='justify-content-center'>
        {ads.map(ad => <Ad key={ad._id} {...ad} />)}
      </Row>
    </div>
  );
};

export default Ads;