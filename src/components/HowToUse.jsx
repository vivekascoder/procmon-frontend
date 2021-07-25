import {Row, Col} from 'react-bootstrap';

export default function HowToUse() {
  return (
    <Row>
      <Col style={{marginTop: '5rem'}}>
        <h3 className="text-center" style={{marginBottom: '2rem'}}>💁 How to use ?</h3>

        <h5 className="mb-3">1. How to setup procmon ?</h5>
        <code className="code-block">
          sudo procmon --install
        </code>

        <h5 className="mb-3" style={{marginTop: '2rem'}}>1. Uninstall Procmon ?</h5>
        <code className="code-block">
          procmon remove --file ~/.procmon.cfg --now
        </code>
      </Col>
    </Row>
  );
}