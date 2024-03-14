export interface IStudent {
   bio: string;
   occupation: string[];
   projects: null;
   pictureUrls: string[];
   names: string;
   email: string;
   picture: null;
   currentClass: null;
   promotion: string;
   leaderTitle: string;
   images: any[];
   _id: string;
   socials: ISocial;
}

export interface ISocial {
   github: SocialLink;
   portfolio: SocialLink;
   facebook: SocialLink;
   instagram: SocialLink;
   linkedIn: SocialLink;
}

interface SocialLink {
   label: string;
   url: string;
}
