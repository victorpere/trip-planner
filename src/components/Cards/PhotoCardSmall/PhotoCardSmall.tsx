import { ReactNode } from "react";

import Card from "../Card";

import styles from "./PhotoCardSmall.module.css";

type Props = {
  title: string;
  imageUrl?: string;
  className?: string;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
};

// TODO: default width

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
      <div className={`${styles["content"]} clearfix`}>
        <div className="float-left">{props.leftContent}</div>
        <div className="button float-right">{props.rightContent}</div>
      </div>
    </Card>
  );
};

export default PhotoCardSmall;
