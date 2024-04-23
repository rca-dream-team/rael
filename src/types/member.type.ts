export interface ICommon {
   _id: string;
   _type: string;
   _rev: string;
   _createdAt: string;
   _updatedAt: string;
   _key: string;
   _weak: boolean;
   bio: string;
   occupation: string[];
   promotion: string;
   email: string;
   socials: ISocial;
   leaderTitle: string;
}

export interface IStudent extends ICommon {
   projects: null;
   pictureUrls: string[];
   names: string;
   picture: null;
   currentClass: null;
   images: any[];
   // isMaintainer?: boolean;
}

export interface ProfileRequest extends ICommon {
   requester: IStudent;
   isApproved: boolean;
}

export interface IStaff {
   _id: string;
   names: string;
   image: string;
   role: string;
   email: string;
}

export interface ISocial {
   github: SocialLink;
   portfolio: SocialLink;
   facebook: SocialLink;
   instagram: SocialLink;
   linkedIn: SocialLink;
   twitter: SocialLink;
   behance: SocialLink;
   dribbble: SocialLink;
}

interface SocialLink {
   label: string;
   url: string;
}
