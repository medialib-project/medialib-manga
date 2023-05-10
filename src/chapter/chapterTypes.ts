import { basicMediaDetails } from '@medialib/medialib';
import { downloadImage } from '../downloadImageTypes';

export type chapterDetails = {
  language: string;
  number: string;
  size: number;
  downloadCover: downloadImage;
} & basicMediaDetails;
