import {
  Route,
  Routes,
  BrowserRouter as Router,
  BrowserRouter
} from "react-router-dom";
import SignInForm from "./components/SignInForm";
import SignUpForm from './components/SignUpForm';
import Calendar from './components/Calender';
import Chart from './components/Chart';
import SignupWelcome from './components/SignupWelcome';
import SignupWeightGoal from "./components/SignupWeightGoal";


function App() {

  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path = "/goal" element = {<SignupWeightGoal />} />
      <Route path = "/calendar" element = {<Calendar />} />
      <Route path = "/welcome" element = {<SignupWelcome />} />
      <Route path = "/signin" element = {<SignInForm />} />
      <Route path = "/signup" element = {<SignUpForm />} />
      <Route path = "/chart" element = {<Chart />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
