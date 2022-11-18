import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  NavLink
} from "react-router-dom";
import SignInForm from "./components/SignInForm";
import SignUpForm from './components/SignUpForm';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path = "/" element = {<SignInForm />} />
      <Route path = "/sign-in" element = {<SignUpForm />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
