import {useEffect, useState} from "react";
import React from 'react';
import Temp from "./Temp";
import 'bootstrap/dist/css/bootstrap.min.css';
import CityCard from "./Temp";

function App(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
      {console.log(props.zipcode)}
    fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + props.zipcode + "&appid=f5ea329349ed821a393ce49bfd1418c8")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [props.zipcode])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded || items.main === undefined) {
    return <div>Loading...</div>;
  } else {
    return (
        <div>
            {console.log(items)}
            <CityCard tem = {items}></CityCard>
        </div>
    );
  }
}
export default App