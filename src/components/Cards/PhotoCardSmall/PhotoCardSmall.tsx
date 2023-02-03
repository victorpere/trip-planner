import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import Card from "../Card";

import styles from "./PhotoCardSmall.module.css";

type Props = {
  title: string;
  imageUrl?: string;
  linkUrl: string;
  className?: string;
  onDelete?: () => void;
};

// TODO: content as prop
const PhotoCardSmall = (props: Props) => {
  return (
    <Card className={`${styles["list-item-card"]} ${props.className ?? ""}`}>
      <div className={`${styles["list-item-card-img-container"]}`}>
        {props.imageUrl && (
          <img
            src={props.imageUrl}
            alt={props.title}
            className={styles["list-item-card-img"]}
          />
        )}
      </div>
      <div className="clearfix">
        <div className="float-left">
          <Link to={props.linkUrl}>{props.title}</Link>
        </div>
        <div className="button float-right">
          {props.onDelete && <FaTrashAlt onClick={props.onDelete} />}
        </div>
      </div>
    </Card>
  );
};

export default PhotoCardSmall;
