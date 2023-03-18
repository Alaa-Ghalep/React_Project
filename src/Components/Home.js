import React, { Component } from 'react'
import Header from'./Header';
import Style from'./Style.css';
import Card from './Card';
import Slider from './Slider';
import Footer from './Footer';
import Form from './Form';
import Table from './Table';
import Burger from './Burger';
import Pizza from './Pizza';
import Pasta from './Pasta';
import Fries from './Fries';
import Form2 from './Form2';




export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Card/>
        {/* <Burger/> */}
        {/* <Pizza/> */}
{/* <Pasta/> */}
{/* <Fries/> */}
        {/* <Slider/> */}
        <Form/>
        <Table/>
       {/* <Form2/> */}

        <Footer/>
      
      </div>
    )
  }
}
