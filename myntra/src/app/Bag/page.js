"use client";
import BagItem from "@/components/BagItem";
import BagSummary from "@/components/BagSummary";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useSelector } from "react-redux";

export default function Bag() {
  const bagItem = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);

  const finalItem = items.filter((item) => {
    const itemIndex = bagItem.findIndex(bagItem => bagItem.id === item.id);
    return itemIndex >= 0;
  });

  console.log(finalItem);

  return (
    <>
      <Header />
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItem.map((item) => (
              <BagItem key={item.id} item={item} />
            ))}
          </div>
          <div className="bag-summary">
            <BagSummary />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
