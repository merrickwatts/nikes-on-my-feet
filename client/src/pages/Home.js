import React from "react";

import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_SHOES } from "../utils/queries";

import ShoeCard from "../components/ShoeCard";

export default function Home() {
  const { loading, data } = useQuery(QUERY_SHOES);
  const shoes = data?.shoes || [];

  return (
    <main>
      {shoes.map((e) => {
        console.log(e);
        return (
          <ShoeCard
            shoeId={e._id}
            shoeName={e.shoe_name}
            shoePrice={e.price}
            shoeDisc={e.shoe_description}
            shoeSize={e.shoe_size}
            photo={e.photo_ref}
            gender={e.gender}
            review={e.reviews}
          />
        );
      })}
    </main>
  );
}
