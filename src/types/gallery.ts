export interface Gallery {
   _id: string;
   name: string;
   description: string;
   coverImage: ImageAsset;
   images: Image[];
}

export interface ImageAsset {
   _type: string;
   asset: Asset;
}

export interface Asset {
   _ref: string;
   _type: string;
}

export interface Image {
   image: ImageAsset;
   title: any;
   caption: any;
   shotBy: any;
}
