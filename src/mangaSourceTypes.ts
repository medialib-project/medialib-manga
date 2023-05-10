import {
  webMediaSourceFetchOption,
  webMediaSourceFetchResult,
  webMediaSourceSettings,
} from '@medialib/medialib';
import Manga from './manga/Manga';
import Chapter from './chapter/Chapter';
import Page from './page/Page';

export type mangaSourceSettings = {
  defaultLanguage: string;
} & webMediaSourceSettings;

export type basicMangaSourceFetchOption = {
  ids?: Array<string>;
  text?: string;
  language?: string;
} & webMediaSourceFetchOption;

export type mangaSourceFetchOption = {} & basicMangaSourceFetchOption;

export type mangaSourceFetchResult<T extends Manga = Manga> =
  {} & webMediaSourceFetchResult<T>;

export type chapterSourceFetchOption = {} & basicMangaSourceFetchOption;

export type chapterSourceFetchResult<T extends Chapter = Chapter> =
  {} & webMediaSourceFetchResult<T>;

export type pageSourceFetchOption = {} & basicMangaSourceFetchOption;

export type pageSourceFetchResult<T extends Page = Page> =
  {} & webMediaSourceFetchResult<T>;
