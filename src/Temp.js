import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardGroup} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";
import {useState} from "react";

function CityCard(props) {
    const [time, setTime] = useState("")
    function getTime(){
        setTime(Date().toLocaleString())
        console.log(time)
    }
    console.log(props.tem)
    return (
        <div className = "container">
            <Card className = "justify-content-center width: 5px">
                <Card.Img/>
                <Card.Body>
                    <Card.Title className="text-center">{props.tem.name}</Card.Title>
                    <Card.Text className="text-center">
                        Temperatur: {Math.floor(props.tem.main.temp - 273.15)}° ({Math.floor(props.tem.main.temp_max - 273.15)}°/{Math.floor(props.tem.main.temp_min - 273.15)}°)
                        <br/>
                        Gefühlt wie {Math.floor(props.tem.main.feels_like - 273.15)}°
                        <br/>
                        Wetter: {props.tem.weather[0].description}

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    );
}

export default CityCard;