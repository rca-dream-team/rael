import { groq } from 'next-sanity';

export const getAllTimeline = groq`*[_type == "timeline"]{
    title,
    description,
    url,
    image {
        asset -> {
            _id,
            url
        },
        alt
        },
    time
  }`;
