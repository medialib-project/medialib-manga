import { mediaOptions } from '@medialib/medialib';

export interface chapterOptions extends mediaOptions {
  language: string;
  number: string;
  size: number;
}
