import React, { useState } from "react";

export default function Card({product,cart,setCart,rating}){

    const [button,setButton]= useState('Add to Cart')
    const handleClick = (e)=>{
        if (e.target.innerText === 'Add to Cart')
        {
            setCart(cart+1)
            setButton('Remove from Cart')
        }else{
            setCart(cart-1);
            setButton('Add to Cart')
        }
    }

    const showRating =(rating) =>{
        let rate=[];

        for(let i=0;i<rating;i++){
            rate.push(<span className="star" key={i}><i class="fas fa-star"></i></span>)
        }

        for(let i=rating;i<5;i++){
            rate.push(<span className="star" key={i}><i class="fal fa-star"></i></span>)
        }

        return rate;
    }

    return(
        <div className="card mb-3 mr-5" style={{width:"14.7rem"}}>
            <img src={product.image} className="card-img-top one" alt="..."  /><hr/>
            <div className="card-body">
                <h6 className="card-title">{product.title}</h6>
                <h5 className="card-text">Price : {product.price}'$</h5>
                   <h6>User Rating :{
                      // rating  
                      showRating(rating)
                    }</h6>
            </div> 
            <div className="card-footer text-center">       
                <button className={`btn btn-block ${button === 'Add to Cart' ? 'btn-success' : 'btn-danger' }`} onClick={handleClick}>{button}</button>
            </div>
        </div>
    )
}