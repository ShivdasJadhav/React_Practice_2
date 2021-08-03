import Login from "./LoginForm.jsx";
import SecretePage from "./SecretePage";
import { Switch,Route } from "react-router";
import Login from "./LoginForm.jsx";
function App(){
    return(
        <Switch>
            <Route path="/User_Login"  ><Login/></Route>
            <Route path="/secrete" ><SecretePage/></Route>
        </Switch>
    );
}
export default App;