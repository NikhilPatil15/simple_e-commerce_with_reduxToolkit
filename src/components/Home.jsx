import React, { useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardData from "./CardData";
import './cartStyle.css'
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import toast from 'react-hot-toast'
const Home = () => {
  const [cartData, setCartdata] = useState(CardData);
  const dispatch = useDispatch();

  const send = (e)=>{
    dispatch(addToCart(e))
    toast.success("Item added to cart ")
  }

  return (
    <>
      <section className="item_section mt-4 container" >
        <h2 className="px-2" style={{ fontWeight: 400 ,color:"white"}}>
          Starving? Order something to eat then
        </h2>
        <br />
        <div
          className="row mt-2 d-flex justify-content-around align-items-center "
          style={{ gap: "1rem" }}
        >
          {cartData.map((elem, index) => {return(
            <Card
              style={{ width: "25rem", border: "none" }}
              className="hove mb-4"
              key={elem.rname}
            >
              <Card.Img  variant="top" className="cd" srcSet={elem.imgdata}/>

              <div className="card_body">
                <div className="upper_data d-flex justify-content-between  align-items-center">
                  <h4 className="mt-2"> {elem.rname} </h4>
                  <span>{elem.rating}&nbsp; ★</span>
                </div>

                <div className="lower_data d-flex justify-content-between  align-items-center">
                  <h5>{elem.address}</h5>
                  <span>₹&nbsp;{elem.price}</span>
                </div>
                <div className="extra"></div>

                <div className="last_data d-flex justify-content-between  align-items-center">
                  <img  srcSet={elem.arrimg} alt="" className="limg" />
                  <Button
                    style={{
                      width: "150px",
                      background: "#ff3054db",
                      border: "none",
                    }}
                    variant="outline-light"
                    className="mt-2 mb-4"
                    onClick={()=>send(elem)}
                  >
                    Add to Cart
                  </Button>
                  <img
                    srcSet={elem.delimg}
                    alt=""

                    className="laimg"
                  />
                </div>
              </div>
            </Card>
          )})}
        </div>
      </section>
    </>
  );
};

export default Home;
