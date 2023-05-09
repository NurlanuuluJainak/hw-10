import React from "react";
import data from "./data";
import { ItemCard } from "../itemCard/ItemCard";
export const Home = () => {
  console.warn(data.praducData);

  return (
    <>
      <h1 className="text-center mt-3">All Items</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.praducData.map((item, index) => {
            return (
              <ItemCard
                img={item.img}
                title={item.title}
                desc={item.desc}
                item={item}
                price={item.price}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
