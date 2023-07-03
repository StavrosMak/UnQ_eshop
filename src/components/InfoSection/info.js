

import React from "react";

import cards from "../data/InfoCardsData";
import InfoCard from "./infoCard";
import "./info.css"
 

export default function Info() {
    return (
        <section className="infoSection">
            <section className="infoSection">
                {cards.map((card, index) => (
                    <InfoCard key={index}
                        icon={card.icon}
                        title={card.title}
                        description={card.description} />
                ))}
            </section>


        </section>

    )




}