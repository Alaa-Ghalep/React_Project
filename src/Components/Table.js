import React, { useState }  from "react";
import {useEffect} from 'react'
import axios from 'axios'


export default function Form() {
    const [List, setListOfOrder] = useState([]);
    const [NewOrd, setNewOrd] = useState({});

  //function fetchData()
    useEffect(()=>

{
  fetch("https://example-data.draftbit.com/orders?_limit=10").then((res)=>res.json()).then((data)=> {
    //?_limit=10

    setListOfOrder(data)
  console.log(data)
  console.log({List})
})
},
[]);
function changeOrder(event) {
  const name = event.target.name;
  const value = event.target.value;
  setNewOrd((prev) => ({ ...prev, [name]: value }));
}
function Submit(e) {
  e.preventDefault();
  setListOfOrder((prev) => [...prev, NewOrd]);
}

function handleRemoveClick(i){
  alert('Are You Sure Delete Tis Item' +' '+i)
  setListOfOrder((p)=>p.filter((item)=>i!==item.id))
}
function edit(e){
 List.forEach(el => {
  if(el.filter((item)=>el==item.id));
 });
}

  return (
    <div>
    
      
      <div>
        <section class="book_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>
          Order A Table
        </h2>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form_container">
            <form action="" onSubmit={Submit}>
              <div>
                <input type="number" name="id" class="form-control" placeholder="ID" 
                onChange={changeOrder}
/>
              </div>
              <div>
                <input type="number" name="productId" class="form-control" placeholder="Product ID"
                onChange={changeOrder}
                                />
              </div>
              <div>
                <input type="text" name="title" class="form-control" placeholder="Title"
                  onChange={changeOrder}/>                               
              </div>
              <div>
                <textarea type="text" name="full_review" class="form-control" placeholder="Full Review"
                  onChange={changeOrder}/>                               
              </div>
              <div> 
              <select name="rating" value={List.rating}  onChange={changeOrder} class="form-control nice-select wide">
                  <option   disabled selected>
                    Rating?
                  </option>
                  <option value="1">
                    1
                  </option>
                  <option value="2">
                    2
                  </option>
                  <option value="3">
                    3
                  </option>
                  <option value="4">
                    4
                  </option>
                  <option value="5">
                    5
                  </option>
                </select>

              </div>
              <div>
                <input type="date" name="date" value="" class="form-control"
                  onChange={changeOrder}
                                />
              </div>
              <div class="btn_box">
                <button type="submit" >
                  Add Now Order
                </button>
              </div>
            </form>
          </div>
        </div>
      
      </div>
    </div>
  </section>

    </div>



      <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">ProductID</th>
                    <th scope="col">Title</th>
                    <th scope="col">full_review</th>
                    <th scope="col">rating</th>
                    <th scope="col">Date</th>
                    <th scope="col">Delete</th>
                    {/* <th scope="col">Edit</th> */}




                </tr>
            </thead>
             
             <tbody>
                {List.map((el)=><tr>
                    <td>{el.id}</td>
                    <td>{el.productId}</td>
                    <td>{el.title}</td>
                    <td>{el.full_review}</td>
                    <td>{el.rating}</td>
                    <td>{el.date}</td>
                     <td><button className="btn btn-danger " 
                     onClick = {()=>handleRemoveClick(el.id)}>Delete</button></td>
                       {/* <td><button className="btn btn-info " onClick={edit}
                  >Edit</button></td> */}
                </tr>)}
               
              
            </tbody> 
        </table>
        {/* <div class="row">
        <div class="col-md-6">
          <div class="form_container">
            <form action="" >
              <div>
                <input type="number" name="id" class="form-control" placeholder="ID" 
             
/>
              </div>
              <div>
                <input type="number" name="productId" class="form-control" placeholder="Product ID"
               
                                />
              </div>
              <div>
                <input type="text" name="title" class="form-control" placeholder="Title"
               />                               
              </div>
              <div>
                <textarea type="text" name="full_review" class="form-control" placeholder="Full Review"
                  />                               
              </div>
              <div> 
              <select name="rating" value={List.rating}   class="form-control nice-select wide">
                  <option   disabled selected>
                    Rating?
                  </option>
                  <option value="1">
                    1
                  </option>
                  <option value="2">
                    2
                  </option>
                  <option value="3">
                    3
                  </option>
                  <option value="4">
                    4
                  </option>
                  <option value="5">
                    5
                  </option>
                </select>

              </div>
              <div>
                <input type="date" name="date" value="" class="form-control"
                
                                />
              </div>
              <div class="btn_box">
                <button type="submit" >
save                </button>
              </div>
            </form>
          </div>
        </div>
      
      </div> */}
    </div>
  )
}
