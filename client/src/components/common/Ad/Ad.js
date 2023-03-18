import { Col, Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import styles from './Ad.module.scss';
import { IMG_URL } from './../../../config';

const Ad = ({ title, photo, location }) => {
  return (
    <Card className={`col-3 m-2 ${styles.adContainer}`}>
      <img src={IMG_URL + photo} alt={title} className={styles.image}/>
      <CardBody>
        <CardTitle tag='h3'>{title}</CardTitle>
        <CardSubtitle>{location}</CardSubtitle>
      </CardBody>
      <Button className='mb-2'>Read more</Button>
    </Card>
  );
};

export default Ad;
