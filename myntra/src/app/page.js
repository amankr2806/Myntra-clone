"use client";
import { useSelector } from "react-redux";
import Footer from "/src/components/Footer";
import Header from "/src/components/Header";
import HomeItem from "/src/components/HomeItem";
import FetchItems from "@/components/FetchItems";


export default function Home() {
  const items = useSelector((store) => store.items);

  return (
    <>
      <Header></Header>
      <FetchItems />
      <div className="items-container">
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
      <Footer></Footer>
    </>
  );
}
