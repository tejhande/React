import styles from './Item.module.css';


const Item = (props) => {
  return <li className={`${styles.item} list-group-item`}>{props.foodItem}</li>;
};

export default Item;
