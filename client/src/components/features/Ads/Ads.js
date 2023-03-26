import styles from './Ads.module.scss';
import AdBox from '../../common/AdBox/AdBox';
import { Row, Col, Button } from 'reactstrap';
import { useSelector } from 'react-redux';
import { getAds, getRequest, getUser } from '../../../redux/dataRedux';

import Loader from '../../common/Loader/Loader';
import { Link } from 'react-router-dom';

const Ads = () => {
  const ads = useSelector(getAds);
  const request = useSelector(getRequest);
  const user = useSelector(getUser);

  if (request.pending) return <Loader />
  else if (request.error) return (
    <div className='mt-5' align='center'>
      <h1>Error...</h1>
    </div>
  );
  else if (request.success) return (
    <div className={`mt-4 ${styles.ads}`}>
      <Row>
        <Col className={styles.addAdButton}>
          { user !== null && <Link to='/ads/add'><Button color='secondary'>Add Ad</Button></Link> }
        </Col>
      </Row>
      <Row className={`${styles.adsContainer} mt-3`}>
        {ads.map(ad => <AdBox key={ad._id} {...ad} />)}
      </Row>
    </div>
  );
};

export default Ads;