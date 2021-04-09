import Home from './components/pages/Home'
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router,
Switch,
Route} from 'react-router-dom'
import Eventos from './components/pages/Eventos'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <Router>
      <Navbar/>   
        <Switch>
          <Route path='/' exact component={Home}/>   
          <Route path='/eventos' component={Eventos}/>
             
        </Switch> 
    </Router>
    <Footer/>
    </>
  );
}

export default App;
