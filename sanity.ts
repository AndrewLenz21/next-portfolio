import { createClient, groq } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION; // "2023-05-03"

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export const sanityClient = client;
export const urlFor = (source:any) => createImageUrlBuilder(client).image(source);
