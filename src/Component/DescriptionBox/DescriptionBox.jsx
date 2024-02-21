import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () =>{
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
                <div className="descriptionbox-description">
                    <p>An e-commerce website is an online platform that facilitate buying and selling of product or services over the internet service as a virtual marketplace where businesses and indivdual showcase there products, internet with costumers, and conduct transaction without the need for a physical presence. Ecommerce websites have gained immense popularity due to thier convent accessibility, and the global reach they offer.</p>
                    <p>
                        E-commerce website typically display product or service detailed descrition, images, prices, and any avaliable vs(e.g, sizes, colors). Each product usally have it own dedline with relevant information.
                    </p>
                </div>
        </div>
    )
}

export default DescriptionBox