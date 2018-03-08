import React        from 'react';
import Dialog         from './DialogPage';
import FlatButton         from './FlatButtonPage';
import TextField         from './TextFieldPage';

import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Link to='/'>FlatButton</Link>{' '} | {' '}
      <Link to='/dialog'>Dialog</Link>{' '} | {' '}
      <Link to='/textfield'>TextField</Link>{' '} | {' '}

      <hr />
      <Route exact path='/'     component={FlatButton} />
      <Route  path='/dialog'     component={Dialog} />
      <Route  path='/textfield'     component={TextField} />
    </div>
  </Router>
)

export default App;
