import { groq } from 'next-sanity';

export const leaderTitleQuery = groq`*[_type=='leaderTitle']`;
