import { fetchResultType, sourceOptionsType } from '@medialib/medialib';
import Manga from './manga/Manga';
import Chapter from './chapter/Chapter';
import Page from './page/Page';

export interface fetchMangaResultType extends fetchResultType {
  content: Array<Manga>;
}

export interface fetchChapterResultType extends fetchResultType {
  content: Array<Chapter>;
}

export interface fetchPageResultType extends fetchResultType {
  content: Array<Page>;
}

export interface mangaSourceOptionsType extends sourceOptionsType {}

export interface chapterSourceOptionsType extends sourceOptionsType {}

export interface pageSourceOptionsType extends sourceOptionsType {}
