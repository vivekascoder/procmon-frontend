import HowToUse from '../components/HowToUse';
import InfoForm from '../components/InfoForm';
import { Row, Col, Image, Container } from 'react-bootstrap';
import ServerImage from '../static/server.jpg'

export default function Home() {
  const ImageBoxStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    margin: '1.4rem'
  }
  return (
    <div className="mt-4">
      <Row>
        <Col md={6} sm={12} style={{ padding: '0' }} className="pattern-block">
          {/* <Image src={ServerImage} fluid /> */}
          <div className="bg-dark" style={ImageBoxStyles}>
            <h3 className='text-white mb-4'>Install Procmon on VMs.</h3>
            <p class='text-white text-center' style={{ lineHeight: '1.8rem' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iure, aperiam. Facilis saepe maiores fuga, voluptatibus
              praesentium dolores quos ad aliquam.
            </p>

            <a href="#!" className="btn-read-docs">READ DOCS</a>
          </div>
        </Col>
        <Col md={6} sm={12}>
          <Container className="" style={{ padding: '6rem 1rem' }}>
            <InfoForm id={'23j23jdw'} password={'@ejkf4564rw86&7yh3'} />
            <HowToUse />
          </Container>
        </Col>
      </Row>
    </div>
  );
}