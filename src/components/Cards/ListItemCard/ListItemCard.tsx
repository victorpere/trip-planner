import { Link } from "react-router-dom";

import Card from "../Card";

import styles from "./ListItemCard.module.css";

type Props = {
  title: string;
  imageUrl?: string;
  linkUrl: string;
  className?: string;
  onDelete?: () => void;
};

const ListItemCard = (props: Props) => {
  return (
    <Card className={`${styles["list-item-card"]} ${props.className ?? ""}`}>
      <div className={`${styles["list-item-card-image"]}`}>
        {props.imageUrl && (
          <img
            src={props.imageUrl}
            alt={props.title}
            className={styles["list-item-card-img"]}
          />
        )}
      </div>
      <div>
        <Link to={props.linkUrl}>{props.title}</Link>
        {props.onDelete && <button onClick={props.onDelete}>Delete</button>}
      </div>
    </Card>
  );
};

export default ListItemCard;
