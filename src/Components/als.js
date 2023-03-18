import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import About from './About';
import Home from './Home';
export default class als extends Component {
  render() {
    return (
      <div>
        {/* <BrowserRouter>

        <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/About' exact element={<About/>}/>
        </Routes>
        </BrowserRouter> */}
      </div>
    )
  }
}

