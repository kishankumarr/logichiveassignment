import React,{useEffect, useState}from "react";
import {DATA} from "./data.js";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './App.css';

function App() {
const [data, setData]=useState([]);

useEffect(()=>{
  fetch("http://localhost:8888/services", {credential:"include"})
  .then((r)=>r.json())
  .then(resp=>{
  setData([...resp])})
}, []);

  return (
    <div>
      <div>
      <h1 className="header">OUR SERVICES</h1>
      </div>
      <div>
      {data.map((data)=>(
      <Card width="6%" key={data.id} className="card">
      <CardImg  width="100%" src={data.image} />
      <CardBody>
      <CardTitle classname="cardtitle" tag="h2">{data.title}</CardTitle>
      <CardText className="line">__________</CardText>
      <CardText className="cardtext" tag="h5">{data.description}</CardText>
      </CardBody>
    </Card>
     ))}
     </div>
    </div>
    
  );
}

export default App;
