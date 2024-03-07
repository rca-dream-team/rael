import { groq } from 'next-sanity';

export const getAllStudentsQuery = groq`
  *[_type == 'student'] {
    _id,
    names,
    email,
    picture,
    classes,
    promotion,
    occupation,
    leaderTitle,
  }
`;

export const getStudentByIdQuery = groq`
    *[_type == 'student' && _id == $id]  {
        _id,
        names,
        email,
        picture,
        pictureUrls,
        bio,
        classes,
        promotion,
        occupation,
        leaderTitle,
        projects,
        images,
        socials,
    }
    `;
