import author from './documents/author';
import className from './documents/class';
import project from './documents/project';
import promotion from './documents/promotion';
import staff from './documents/staff';
import staffRole from './documents/staffRole';
import student from './documents/student';
import timeline from './documents/timeline';
import blockContent from './objects/blockContent';
import link from './objects/link';
import socials from './objects/socials';

const objects = [blockContent, socials, link];
const documents = [promotion, student, project, timeline, staff, staffRole, className, author];

export const schemaTypes = [...objects, ...documents];