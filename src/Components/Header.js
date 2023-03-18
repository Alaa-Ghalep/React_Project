import React, { Component } from 'react'
import  { Link } from 'react-router-dom'
import Section from './Section';
import Style from'./Style.css';
import bg from './images/hero-bg.jpg';
import About from'./About'


export default class Header extends Component {
  render() {


    return( 
      <div class="hero_area">
      <div class="bg-box">
        <img src={bg} alt=""/>
      </div>
      <header class="header_section">
      <div class="container">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <a class="navbar-brand" href="index.html">
            <span>
              Feane
            </span>
          </a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class=""> </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  mx-auto ">
              <li class="nav-item active">
                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="menu.html">Menu</a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li> */}
              <li ><Link className='text-black text-decoration-none' to="/About">About</Link></li>

              <li class="nav-item">
                <a class="nav-link" href="book.html">Book Table</a>
              </li>
            </ul>
            <div class="user_option">
              <a href="" class="user_link">
                <i class="fa fa-user" aria-hidden="true"></i>
              </a>
           
              <form class="form-inline">
                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
              <a href="" class="order_online">
                Order Online
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
   

   <Section/>
   
   
   
    </div>

);

  }
}
