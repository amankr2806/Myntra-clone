import { itemAction } from "@/store/itemslice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const FetchItems = () => {
 
  const dispatch = useDispatch();

  useEffect(() => {
    
    const getData = async () => {
      const res = await axios.get("http://localhost:8080/items");
      //   const data = res.data;
      //   const items = data.items;
      const { items } = res.data;
    
      dispatch(itemAction.initialItem(items[0]));
    };
    getData();
  }, [dispatch]);
  return <></>;
};

export default FetchItems;
