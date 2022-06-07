import "./bootstrap.css";

import ReactDOM from "react-dom";
import {Workbox} from "workbox-window";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import HandleToken from "./pages/HandleToken";
import Home from "./pages/Home";
import {HandleAppState} from "./components/HandleAppState";

const wb = new Workbox("/sw.js");

if (location.hostname !== "localhost" && location.protocol !== "http:" && "serviceWorker" in navigator)
    wb.register().catch(console.error);


function App() 
{
    return (
        <>
            <HandleAppState wb={wb}/>
            <BrowserRouter>
                <Routes>
                    <Route path="/set_token" element={<HandleToken/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));
