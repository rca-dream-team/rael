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
   socials: ISocial[];
}

interface ISocial {
   github: string;
   portfolio: string;
   facebook: string;
   instagram: string;
   linkedIn: string;
}
