import React, { useEffect, useState } from "react";
import "./cartStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, removeSingle } from "../redux/features/cartSlice";
import { removeAll } from "../redux/features/cartSlice";

const CardDetails = () => {
  const {carts} = useSelector((state)=>state.allCart)

  const [amount, setAmount] = useState(0)
  const [qty,setQty] = useState(0)
  const dispatch = useDispatch();

  //to add a quantity 
  const handlesingleIncrement = (e)=>{
      dispatch(addToCart(e))
  }
  // to subtract a quantity
  const handleSingleDecrement = (e)=>{
      dispatch(removeSingle(e))
  }
  //to calculate the total price of all the orders
  const total = ()=>{
      let totalPrice = 0

      carts.map((elem,index)=>
      totalPrice = elem.qnty * elem.price + totalPrice)
      setAmount(totalPrice)
  }

  //to change the quantity part 
  const quantity = ()=>{
    let totalQuantity = 0;
    carts.map((elem)=>
    totalQuantity = elem.qnty + totalQuantity)

    setQty(totalQuantity)
  }

  //to change it when new one add's
  useEffect(()=>{
   total()
  },[total])

  useEffect(()=>{
    quantity()
  },[quantity])
  
  return ( 
    <div className="row justify-content-center m-0">
      <div className="col-md-8 mt-5 mb-5 cardsdetails">
        <div className="card">
          <div className="card-header bg-white p-3">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h5 className="text-dark m-0"> Cart Calculation </h5>
              {carts.length > 0 ? (
                <button className="btn btn-danger mt-0 btn-sm" 
                  onClick={()=>dispatch(removeAll())}>
                  <i className="fa fa-trash-alt mr-2"></i>{" "}
                  <span>Delete Items</span>
                </button>
              ) : (
                ""
              )}
            </div>
            <hr />
            <div className="card-body p-0">
              {carts.length === 0 ? (
                <table
                  className="table cart-table mb-0"
                  style={{ verticalAlign: "middle" }}
                >
                  <tbody>
                    <tr>
                      <td colSpan={6}>
                        <div
                          className="cart-empty"
                          style={{ textAlign: "center", padding: "30px" }}
                        >
                          <i
                            className="fa fa-shopping-cart"
                            style={{ fontSize: "50px" }}
                          ></i>
                          <p>Your Cart is Empty</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table
                  className="table cart-table mb-0 table-responsive-sm"
                  style={{ backgroundColor: "" }}
                >
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th className="text-right" style={{ textAlign: "right" }}>
                        <span id="amount" className="amount">
                          Total amount
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    { carts.map((elem, i) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <button className="prdct-delete" onClick={()=>dispatch(removeFromCart(elem.id))}>
                                <i className="fa fa-trash-alt mr-2"></i>
                              </button>
                            </td>
                            <td>
                              <div className="product-img">
                                <img
                                  srcSet={elem.imgdata}
                                  alt=""
                                 
                                  style={{border:"2px solid black"}}
                                />
                              </div>
                            </td>
                            <td><div className="product-name"><p>{elem.rname}</p></div></td>
                            <td>{elem.price}</td>
                            <td>
                              <div className="prdct-qty-container">
                                  <button className="prdct-qty-btn"
                                    onClick={elem.qnty >1  ?
                                      
                                    ()  =>handleSingleDecrement(elem.id)
                                    :()=>dispatch(removeFromCart(elem.id))
                                    }
                                  >
                                    <i className="fa fa-minus"></i>
                                  </button>
                                  <input type="text" name="" id="" className="qty-input-box" disabled value={elem.qnty}/>
                                  <button className="prdct-qty-btn"
                                  onClick={()=>handlesingleIncrement(elem)}
                                 >
                                    <i className="fa fa-plus"></i>
                                  </button>
                              </div>
                            </td>
                            <td className="text-right">₹&nbsp;{elem.qnty * elem.price}</td>
                          </tr>
                          
                        </>
                      );
                    })}
                    
                  </tbody>
                  <tfoot>
                    <tr>
                      <th >&nbsp;</th>
                      <th colSpan={3}>&nbsp;</th>
                      <th>Items in cart<span className="ml-2 mr-2">:</span><span className="text-danger">{qty}</span></th>
                      <th className="text-right">Total<span className="ml-2 mr-2">:</span><span className="text-danger">₹&nbsp;{amount}</span></th>
                    </tr>
                  </tfoot>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
