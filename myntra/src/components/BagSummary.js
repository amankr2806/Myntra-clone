'use client'

const BagSummary = () => {
  const summary = {
    totalItem: 1,
    totalMRP: 999,
    totalDiscount: 99,
    finalPayment: 800,
  };
  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS {summary.totalItem} Items
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{summary.totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{summary.totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹100</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{summary.finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order" onClick={() => console.log('Order placed')}>
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
};

export default BagSummary;
