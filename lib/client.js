import sanityClient from '../sanity_e-shop/node_modules/@sanity/client'
import imageUrlBuilder from '../sanity_e-shop/node_modules/@sanity/image-url'

export const client = sanityClient({
	projectId: 'bvdw7lbz',
	dataset: 'production',
	apiVersion: '2022-04-23',
	useCdn: true,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
}