"use client";

import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItems = useSelector((store) => store.bag);
  const totalItem = bagItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  let convenienceFee = 99;

  bagItems.forEach((item) => {
    totalMRP += item.original_price;
    totalDiscount += item.original_price - item.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + convenienceFee;

  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items)</div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">{totalItem === 0 ? '₹0' : '₹99' }</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">{totalItem === 0 ? '₹0' : finalPayment }</span>
        </div>
      </div>
      <button
        className="btn-place-order"
        onClick={() => console.log("Order placed")}
      >
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
};

export default BagSummary;
