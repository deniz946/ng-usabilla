export class Feed {
  count: number;
  count_nolimit: number;
  total: number;
  items: FeedItem[];
}

export class FeedItem {
  rating: number;
  comment: string;
  browser: string;
  computed_browser: ComputedBrowser;
  device: string;
  platform: string;
  screen: Screen;
  get: Geo;
  computed_location: string;
  images: Image;
}

class ComputedBrowser {
  Browser: string;
  Version: string;
  Platform: string;
}

class Screen {
  width: number;
  height: number;
}

class Geo {
  country: string;
  lat: string;
  lon: string;
}

class Image {
  thumbnail: ImageInfo;
  list: ImageInfo;
  grid: ImageInfo;
  detail: ImageInfo;
}

class ImageInfo {
  url: string;
}
