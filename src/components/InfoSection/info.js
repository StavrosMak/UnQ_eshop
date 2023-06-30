

import React from "react";


import data from "../data/infoCards.json";
import InfoCard from "./infoCard";
import "./info.css"
import img1 from '../../Images/free-shipping.svg'
import img3 from '../../Images/money-recive-svgrepo-com.svg'
import img2 from '../../Images/24-hours-support.svg'

const images = [img1, img2, img3];
export default function Info() {
    return (
        <section className="infoSection">
            <section className="infoSection">
                {data.cards.map((card, index) => (
                    <InfoCard key={index}
                        // icon={images[index % images.length]}
                         title={card.title}
                        description={card.description} />
                ))}
                    </section>


        </section>

            )




}