import { bagAction } from "@/store/bagSlice";
import { useDispatch, useSelector } from "react-redux";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();

  const bagItem = useSelector((store) => store.bag);
  const itemFound = bagItem.indexOf(item.id) >= 0;

  const addToBag = () => {
    dispatch(bagAction.addToBag(item.id));
  };

  const removeFromBag = () => {
    dispatch(bagAction.removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">{item.discount_percentage}% OFF</span>
      </div>

      {itemFound ? (
        <button className="btn-add-bag" onClick={removeFromBag}>
          Remove
        </button>
      ) : (
        <button className="btn-add-bag" onClick={addToBag}>
          Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
