// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards'
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="App">
            <Header />
      <Router>
        <Switch>
          <Route path='/chat'>
            <h1>I am a chat page</h1>
          </Route>
          <Route path='/'>
            {/* <TinderCards /> */}
          {/* <h1>I am homePage</h1>     */}
          <SwipeButtons />
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
