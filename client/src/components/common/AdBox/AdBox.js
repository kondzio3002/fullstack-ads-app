import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import styles from './AdBox.module.scss';
import { IMG_URL } from '../../../config';
import { Link } from 'react-router-dom';

const AdBox = ({ title, photo, location, _id }) => {
  return (
    <Card className={`col-4 m-2 ${styles.adContainer}`} style={{ width: '26.5rem' }}>
      <img src={IMG_URL + photo} alt={title} className={styles.image}/>
      <CardBody>
        <CardTitle tag='h3'>{title}</CardTitle>
        <CardSubtitle>{location}</CardSubtitle>
      </CardBody>
      <Link to={'/ads/' + _id}><Button className='mb-2'>Read more</Button></Link>
    </Card>
  );
};

export default AdBox;
