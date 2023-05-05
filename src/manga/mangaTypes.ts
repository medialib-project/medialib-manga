import { mediaOptions } from '@medialib/medialib';

export interface mangaOptions extends mediaOptions {
  authors: Array<string>;
  description: string;
  languages: Array<string>;
  tags: Array<string>;
  genres: Array<string>;
  themes: Array<string>;
  formats: Array<string>;
}
