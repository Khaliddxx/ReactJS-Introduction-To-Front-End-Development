import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";

export default function App() {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/details/:id" exact>
                <Details />
            </Route>
            <Route path="*">
                <h1
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                    }}
                >
                    404 Page
                </h1>
            </Route>
        </Switch>
    );
}
