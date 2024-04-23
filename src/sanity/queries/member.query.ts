import { groq } from 'next-sanity';

const generalStudentFields = `
  _id,
  names,
  email,
  picture,
  classes,
  "promotion": promotion->name,
  occupation,
  leaderTitle,
`;

const generalStaffFields = `
 ...,
 "role": staffRole->name,
`;

export const getAllStudentsQuery = groq`
  *[_type == 'student' && !(_id in path("drafts.**"))] {
    ${generalStudentFields}
  }
`;

export const studentFields = groq`
    _id,
    names,
    email,
    picture,
    classes,
    "promotion": promotion->name,
    occupation,
    leaderTitle,
    images,
    socials,
    bio,
`;

export const getStudentByIdQuery = groq`
    *[_type == 'student' && _id == $id][0]  {
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

export const getAllStaffsQuery = groq`
  *[_type == 'staff' && !(_id in path("drafts.**"))] {
    ${generalStaffFields}
  }
`;
