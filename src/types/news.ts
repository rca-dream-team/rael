export interface News {
   title: string;
   slug: Slug;
   date: string;
   excerpt: string;
   content: Content[];
   image: string;
   category: Category;
}

export interface Slug {
   _type: string;
   current: string;
}

export interface Content {
   _key: string;
   markDefs?: any[];
   children?: Children[];
   _type: string;
   style?: string;
   asset?: Asset;
   listItem?: 'bullet' | 'number';
}
export interface Category {
   _ref: string;
   _type: string;
}

export interface Children {
   _key: string;
   _type: string;
   marks: string[];
   text: string;
}

export interface Asset {
   _ref: string;
   _type: string;
}
