import React, { useEffect, useState } from "react";

import { ImageInfo } from "../../services/interfaces/image-service.interface";
import Overlay from "../elements/Overlay/Overlay";

type Props = {
  imageInfos: ImageInfo[];
  imageLoader?: () => Promise<ImageInfo[]>;
  onImagePicked?: () => ImageInfo;
};

const ImagePicker = (props: Props) => {
  const [imageInfos, setImageInfos] = useState<ImageInfo[]>(props.imageInfos);

  useEffect(() => {
    if (props.imageLoader) {
      props.imageLoader().then((value) => {
        setImageInfos((prev) => [...prev, ...value]);
      });
    }
  }, [props.imageLoader]);

  return <div></div>;
};

export default ImagePicker;
