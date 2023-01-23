import { injected } from "brandi";

import { TOKENS } from "../config/tokens";
import { Api } from "./Api";
import { IImageService, ImageInfo } from "./image-service.interface";

export class WikipediaService implements IImageService {
  private baseUrl = "https://en.wikipedia.org/w/api.php";
  private apiService: Api;

  constructor(apiService: Api) {
    this.apiService = apiService;
  }

  async getImageUrls(...searchTerms: string[]): Promise<ImageInfo[]> {
    let imageInfos: ImageInfo[] = [];

    let params = {
      action: "query",
      titles: searchTerms.join("|"),
      prop: "pageimages",
      format: "json",
      pithumbsize: "500",
      redirects: "true",
      origin: "*",
    };

    try {
      const response = await this.apiService.get(this.baseUrl, params, {});

      if (response.ok) {
        const body = await response.json();
        const pages = body["query"]["pages"];
        Object.entries(pages).forEach(([key, value]) => {
          const page = value as any;
          const imageInfo: ImageInfo = {
            url: page["thumbnail"]["source"] as string,
            title: page["title"],
          };
          imageInfos.push(imageInfo);
        });
      }
    } catch (e: any) {}

    return imageInfos;
  }
}

injected(WikipediaService, TOKENS.api);
