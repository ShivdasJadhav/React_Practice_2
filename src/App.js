import User_Login from "./LoginForm.jsx";
import SecretePage from "./SecretePage";
import { Switch, Route } from "react-router-dom";
function App() {
  {
    if (localStorage.getItem("user_info")) {
      return (
        <Switch>
          <Route component={SecretePage} />
        </Switch>
      );
    } else {
      return (
        <Switch>
          <Route component={User_Login} />
        </Switch>
      );
    }
  }
}
export default App;
