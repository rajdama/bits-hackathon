import {
  Route,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";
import SignInForm from "./components/SignInForm";
import SignUpForm from './components/SignUpForm';
import Home from './components/Home';

function App() {

  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path = "/signin" element = {<SignInForm />} />
      <Route path = "/signup" element = {<SignUpForm />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
