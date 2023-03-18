import styles from './Ads.module.scss';
import Ad from '../../common/Ad/Ad';
import { Row, Container } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAds, getRequest, loadAdsRequest } from '../../../redux/adsRedux';
import { useEffect } from 'react';

const Ads = () => {
  const dispatch = useDispatch();
  const ads = useSelector(getAds);
  const request = useSelector(getRequest);

  useEffect(() => {
    dispatch(loadAdsRequest())
  }, [dispatch]);

  return (
    <Container>
      <Row className='justify-content-center'>
        {ads.map(ad => <Ad key={ad._id} {...ad} />)}
      </Row>
    </Container>
  );
};

export default Ads;