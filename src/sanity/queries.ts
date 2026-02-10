import { groq } from 'next-sanity';

/* ------------------------------------------
   All projects (used in /projects page)
------------------------------------------ */

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

/* ------------------------------------------
   Homepage curated projects (max 4)
------------------------------------------ */

export const homepageQuery = groq`
*[_type == "homepage"][0]{
  featuredProjects[]->{
    _id,
    title,
    slug,
    "imageUrl": mainImage.asset->url
  }
}
`;

