import React, { Component } from 'react'
import img1 from'./images/f1.png'
import img3 from'./images/f3.png'
import img6 from'./images/f6.png'

export default class Card extends Component {
  render() {
    const list=[{
        img:img1,
        title:'Delicious Pizza',
        description:'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        price:20},
      
      
        {img:img3,
        title:'Delicious Pizza',
        description:'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        price:17}, 
        
        {img:img6,
        title:'Delicious Pizza',
        description:'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        price:15},
        
    
        
      
      
      
      
      
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
