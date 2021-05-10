import React, {useContext} from "react";
import MealItemForm from './MealItemForm';
import CartContext from "../../../store/cart-contect";

import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.price}`;

  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = amount => {
    cartCtx.addItem(
      {
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      }
    );
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div>{price}</div>
      </div>
      <div>
      <MealItemForm onAddToCart={addItemToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
