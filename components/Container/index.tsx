import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../Cards";
import Heading from "../Heading";
import Button from "../Button";
import Image from "next/image";

const Container = () => {
  const [card, setCards] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/cards").then((resp) => {
      setCards(resp.data);
    });
  }, []);
  if (!card) return null;
  return (
    <>
      {card.map((el) => {
        // {    console.log("card",el.paragraph)}
        return (
          <>
          <Cards className="rounded-sm m-2 shadow-sm ">
            <div className="image">
              <Image src={el.image} width={300} height={180} alt={`${el.title} image`} />
            </div>
            <div className="text-wrap">
              <Heading type="h4">{el.title}</Heading>
              <p>{el.paragraph}</p>
              <Button>Learn More</Button>
            </div>
            </Cards>
          </>
        );
      })}
    </>
  );
};
export default Container;
