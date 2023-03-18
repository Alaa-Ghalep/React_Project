import React, { Component } from 'react'
import img2 from'./images/f2.png'
import img7 from'./images/f7.png'
import img8 from'./images/f8.png'


export default class Burger extends Component {
  render() {
    const list=[
        {img:img2,
        title:'Delicious Burger',
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
     

      
      ]
    return (
      <div>
          <section class="food_section layout_padding-bottom">
    <div class="container">
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
      </div>
      
</section>
</div>

    )
  }
}
