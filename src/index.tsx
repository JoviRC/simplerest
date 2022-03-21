import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "./lib/Routes";
import "./index.css";

ReactDOM.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>,
    document.getElementById("root")
);
