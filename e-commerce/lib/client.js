import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
  projectId: "ik3z1ued",
  dataset: "production", //to know if we are in development or production
  apiVersion: "2022-07-08",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)