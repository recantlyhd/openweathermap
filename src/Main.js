import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import App from "./App";
import Input from "./Input";

function Main(){
    const [zip, setZip] = useState("");
    return(
        <div>
            <h1 className="text-center">OpenWeatherMap</h1>
            <Input name = "Please enter the Zip-Code" handleInput = {(value) => setZip(value)}></Input>
            <App className="text-center" zipcode = {zip}></App>
        </div>
    );
}
export default Main;