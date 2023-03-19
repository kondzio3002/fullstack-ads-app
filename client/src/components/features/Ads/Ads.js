import Ad from '../../common/Ad/Ad';
import { Row, Col, Button } from 'reactstrap';
import { useSelector } from 'react-redux';
import { getAds, getRequest } from '../../../redux/adsRedux';

import Loader from '../../common/Loader/Loader';
import { Link } from 'react-router-dom';

const Ads = () => {
  const ads = useSelector(getAds);
  const request = useSelector(getRequest);

  if (request.pending) return <Loader />
  else if (request.error) return <h1>Error...</h1>
  else if (request.success) return (
    <div>
      <Row>
        <Col className={'order-2 offset-10'}>
          <Link to='/ads/add'><Button color='info' outline>Add Ad</Button></Link>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        {ads.map(ad => <Ad key={ad._id} {...ad} />)}
      </Row>
    </div>
  );
};

export default Ads;