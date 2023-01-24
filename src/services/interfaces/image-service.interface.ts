// TODO: split and organize type and interface files

export type ImageInfo = {
  url: string;
  title?: string;
};

export interface IImageService {
  /**
   * Returns an array of image links with titles matching the search terms
   * @param searchTerms array of search terms
   */
  getImageUrls(...searchTerms: string[]): Promise<ImageInfo[]>;
}
