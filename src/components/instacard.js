import React from "react";
import { BsThreeDots, BsFillHeartFill } from "react-icons/bs";
import {SlPaperPlane} from "react-icons/sl";
import "./card.css"


export default function InstaCard({card}){
    return <section className="card">
        <h3 className="name"> {card.name}</h3>
        <address className="location">{card.location}</address>
        <BsThreeDots className="dots"/>
        <img className="image" src={card.PostImage} alt="postimg"/>
        <BsFillHeartFill className="heart"></BsFillHeartFill>
        <SlPaperPlane className="plane"></SlPaperPlane>
        <time className="data">{card.date}</time>
        <sub className="likes">{card.likes}likes</sub>
        <div className="discription">{card.description}</div>
    </section>
}