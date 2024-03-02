import Navbar from './Navbar';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContacUs from './ContactUs';
import 'antd/dist/reset.css';
import ViewCars from './ViewCars';
import 'antd/dist/reset.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ContactUs" component={ContacUs} />
          <Route exact path="/ViewCars" component={ViewCars} /> {/* Add this line */}
        </Switch>
        <ToastContainer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
