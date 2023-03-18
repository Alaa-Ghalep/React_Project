import React, { Component } from 'react'
import img1 from'./images/f1.png'
import img2 from'./images/f2.png'
import img3 from'./images/f3.png'
import img4 from'./images/f4.png'
import img5 from'./images/f5.png'
import img6 from'./images/f6.png'
import img7 from'./images/f7.png'
import img8 from'./images/f8.png'
import img9 from'./images/f9.png'
import {Link,NavLink} from "react-router-dom";




export default class Card extends Component {
  render() {
    const list=[{
        img:img1,
        title:'Delicious Pizza',
        description:'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        price:20},
      
        {img:img2,
        title:'Delicious Burger',
        description:'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        price:15},
      
        {img:img3,
        title:'Delicious Pizza',
        description:'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        price:17}, 
        {img:img4,
        title:'Delicious Pasta',
        description:'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        price:18}, 
        {img:img5,
        title:'French Fries',
        description:'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        price:10}, 
        {img:img6,
        title:'Delicious Pizza',
        description:'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        price:15},
         {img:img7,
        title:'Tasty Burger',
        description:'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        price:12}, 
        {img:img8,
        title:'Tasty Burger',
        description:'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        price:14},
        {img:img9,
        title:'Delicious Pasta',
        description:'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        price:10}
        
      
      
      
      
      
      ]
    return (
      <div>
          <section class="food_section layout_padding-bottom">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Our Menu
        </h2>
      </div>

      <ul class="filters_menu">
        <li class="active" data-filter="*">All</li>
        <li data-filter=""><Link className='active text-black text-decoration-none' exact to="/">All</Link></li>
        {/* <li class="active " data-filter="*"><Link to="/">All</Link></li> */}

        {/* <NavLink data-filter=".burger" exact to="/Burger">Burger</NavLink> */}

        <li data-filter=".burger"><Link className='text-black text-decoration-none' to="/Burger">Burger</Link></li>
        <li data-filter=".pizza"><Link className='text-black text-decoration-none' to="/Pizza">Pizza</Link></li>
        <li data-filter=".pasta"><Link className='text-black text-decoration-none' to="/Pasta">Pasta</Link></li>
        <li data-filter=".fries"><Link className='text-black text-decoration-none' to="/Fries">Fries</Link></li>
        
        {/* <li data-filter=".pizza">Pizza</li>
        <li data-filter=".pasta">Pasta</li>
        <li data-filter=".fries">Fries</li> */}
      </ul>

      <div class="filters-content">
        <div class="row grid">
        {list.map((el)=>
          <div class="col-sm-6 col-lg-4 all pizza">
            <div class="box">
              <div>
                <div class="img-box">
                  <img src={el.img} alt=""/>
                </div>
                <div class="detail-box">
                  <h5>
{el.title}               
   </h5>
                  <p>
                   {el.description}
                  </p>
                  <div class="options">
                    <h6>
                     ${el.price}
                    </h6>
              
                  </div>
                </div>
              </div>
            </div>
          </div>)}
         
        </div>
      </div>
      <div class="btn-box">
        <a href="">
          View More
        </a>
      </div>
    </div>
  </section>

      </div>
    )
  }
}
