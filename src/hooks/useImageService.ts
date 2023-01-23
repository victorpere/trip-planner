import { useInjection } from "brandi-react";
import { useCallback } from "react";
import { TOKENS } from "../config/tokens";
import { ImageInfo } from "../modules/image-service.interface";

export const useImageService = () => {
  const imageService = useInjection(TOKENS.imageService);

  const getImages = useCallback(
    async (
      processImages: (imageInfos: ImageInfo[]) => void,
      ...searchTerms: string[]
    ) => {
      const imageInfos = await imageService.getImageUrls(...searchTerms);
      processImages(imageInfos);
    },
    [imageService]
  );

  return { getImages };
};