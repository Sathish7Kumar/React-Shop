import React, { useEffect, useState } from "react";
import axios from 'axios';
import Card from "./Card";

export default function Item({cart,setCart}){

    const Url = `https://fakestoreapi.com`;
    const ratings = [5,3,4,5,2,3,4,4];

    const [products,setProducts] = useState([]);
    useEffect(async()=>{
        await axios.get(`${Url}/products?limit=8`)
        .then(resp => 
            setProducts(resp.data)
            )
    },[])
    return(
        <div className="container">
            <div className="row">
                {
                    products.map((product,index)=>{
                        return <Card key={product.id} product={product} cart={cart} setCart={setCart} rating={ratings[index]} />
                    })
                }
            </div>
        </div>
    )
}