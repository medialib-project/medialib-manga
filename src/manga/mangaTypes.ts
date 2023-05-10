import { basicMediaDetails } from '@medialib/medialib';
import { downloadImage } from '../downloadImageTypes';

export type mangaDetails = {
  authors: Array<string>;
  description: string;
  language: string;
  tags: Array<string>;
  genres: Array<string>;
  themes: Array<string>;
  formats: Array<string>;
  downloadCover: downloadImage;
} & basicMediaDetails;
