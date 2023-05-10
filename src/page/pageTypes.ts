import { basicMediaDetails } from '@medialib/medialib';
import { downloadImage } from '../downloadImageTypes';

export type pageDetails = {
  uri: string;
  language: string;
  download: downloadImage;
} & basicMediaDetails;
