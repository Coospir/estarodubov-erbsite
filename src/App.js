import './App.css'
import Navbar from "./components/Navbar/Navbar"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './components/Pages/Home'
import MyWorks from "./components/Pages/MyWorks";
import SignUp from "./components/Pages/SignUp";
import AboutMe from "./components/Pages/AboutMe";
import ContactMe from "./components/Pages/ContactMe";


function App() {
  return (
        <>
            <Router>
                <Navbar />
                   <Switch>
                       <Route path="/" exact component={Home}/>
                       <Route path="/my-works" exact component={MyWorks}/>
                       <Route path="/sign-up" exact component={SignUp}/>
                       <Route path="/about-me" exact component={AboutMe}/>
                       <Route path="/contact-me" exact component={ContactMe}/>
                   </Switch>
            </Router>
        </>
  );
}

export default App;
