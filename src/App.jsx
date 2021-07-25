import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavHeader from './components/Navbar';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavHeader />
        <Container>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/" component={About} />
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  )
}