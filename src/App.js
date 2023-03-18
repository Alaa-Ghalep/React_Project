import { render } from "@testing-library/react";
import React from "react";
import {Switch,Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


import Burger from './Components/Burger';
import pizza from './Components/Pizza';
import Pasta from './Components/Pasta';
import Fries from './Components/Fries';

import Home from "./Components/Home";
import { paste } from "@testing-library/user-event/dist/paste";



function App() {
  return (

   <div><Home/></div>

);
}


export default App;
