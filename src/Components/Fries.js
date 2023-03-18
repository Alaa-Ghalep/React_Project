import React, { Component } from 'react'
import img5 from'./images/f5.png'


export default class Card extends Component {
  render() {
    const list=[
        {img:img5,
        title:'French Fries',
        description:'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        price:10}, 
       
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
