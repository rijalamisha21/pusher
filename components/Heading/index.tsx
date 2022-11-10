import React from "react";

interface HeadingProps{
    type:any;
    className?:string;
    children:string;
};

const Heading:React.FC<HeadingProps>=({type, className=" ",children})=>{
  const Head = type;
  return <Head className={className}>{children}</Head>;
}
export default Heading;



