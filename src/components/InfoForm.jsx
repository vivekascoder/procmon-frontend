import {InputGroup, FormControl} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';

export default function InfoForm({id, password}) {
  return (
    <div>
      <Row>
        <Col>
          <form>
            <h3 className="text-center mb-3">🔐 Credentials</h3>
            <InputGroup className="mb-3">
              <InputGroup.Text id="id">ID</InputGroup.Text>
              <FormControl 
                  value={id}
                  aria-describedby="id"
                  onChange={() => {}}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="password">Password</InputGroup.Text>
              <FormControl 
                  value={password}
                  aria-describedby="password"
                  onChange={() => {}}
              />
            </InputGroup>
          </form>
        </Col>
      </Row>
    </div>
  );
}