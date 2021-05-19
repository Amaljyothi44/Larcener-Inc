import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nreg from './nreg';
import Nav from './nav';
import Login from './login';


function App() {

    return (
        <Router>
            <div className="App" >
                <Nav />
                <Switch>
                    <Route exact path="/">
                    </Route>
                    <Route path="/nreg">
                        <Nreg />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </div >
        </Router>
    );
}

export default App;