import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '3fd4p2n4',   // aus sanity.config.ts im Studio
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-08-08'
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
