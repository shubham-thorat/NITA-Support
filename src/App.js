import './App.css';
import { Route, Switch } from 'react-router-dom'
import Gallery from './containers/gallery';
import Contact from './containers/contact';
import Home from './containers/home';
import Error from './containers/Error';
import Department from './containers/Department';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path='/' exact component={Home} /> 
          <Route path='/about' exact component={Gallery} />  
          <Route path='/contact' exact component={Contact} />
          <Route path='/department'  component={Department} />
          <Route path='*' exact component={Error}/> 
        </Switch>
    </div>
  );
}

export default App;
