import { groq } from 'next-sanity';

export const projectsQuery = groq`
  *[_type == "project"] | order(year desc) {
    _id,
    title,
    slug,
    category,
    location,
    year,
    mainImage
  }
`;
