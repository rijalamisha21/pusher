import React from "react";
import Link from "next/link";

const Array = ["Product", "Developer", "UserStories", "Blogs", "Pricing"];

const ListItem = () => {
  return (
    <>
      {Array.map((el) => {
        return (
          <>
            <li>
              <Link href={`/${el.toLowerCase()}`}>{el}</Link>
            </li>
          </>
        );
      })}
    </>
  );
};

export default ListItem;
