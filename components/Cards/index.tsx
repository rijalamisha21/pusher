import React from "react";

interface CardProps{
    className?:string;
    children:any;
}
const Cards:React.FC<CardProps>=({className="",children})=>{
    return (
        <div className={className}>{children}</div>
    );
}
export default Cards;
