import React from 'react'

function Home(props){
    console.log("home",props.data)
    return(
        <>
        <h1>Home component</h1>
        <div className="add-to-cart">
    <span className="cart-count">
        {props.data.length}
    </span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
        <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.smartprix.com/mobiles/apple-iphone-11-ppd17p0q4s2c" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={()=>{props.addToCartHandler({Price:1000,name:'i phone 11'})}}
                        >
                        Add To Cart</button>
                </div>
            </div>
        </>
    )
}
export default Home