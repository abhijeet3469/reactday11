import React from "react";
import ReactDOM from "react-dom/client";
import './cards.css'
import Fetch from "./Fetch_Axios/Fetch";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  <Fetch/>
  <Fetch/>
  <Fetch/>
  <Fetch/>
  <Fetch/>
  </>
);