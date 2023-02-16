import { ReactNode } from "react";
import { Link } from "react-router-dom";

import Card from "../Card";

import styles from "./ImageCardSmall.module.css";

type Props = {
  title: string;
  linkUrl?: string;
  imageUrl?: string;
  className?: string;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
};

const ImageCardSmall = (props: Props) => {
  const imgElement = props.imageUrl && (
    <img
      src={props.imageUrl}
      alt={props.title}
      className={styles["list-item-card-img"]}
    />
  );

  return (
    <Card className={`${styles["list-item-card"]} ${props.className ?? ""}`}>
      <div className={`${styles["list-item-card-img-container"]}`}>
        {props.linkUrl ? (
          <Link to={props.linkUrl}>{imgElement}</Link>
        ) : (
          imgElement
        )}
      </div>
      <div className={`${styles["content"]} clearfix`}>
        <div className="float-left">{props.leftContent}</div>
        <div className="button float-right">{props.rightContent}</div>
      </div>
    </Card>
  );
};

export default ImageCardSmall;
