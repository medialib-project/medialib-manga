import { AbstractWebSource, sourceSettingsType } from '@medialib/medialib';
import {
  fetchMangaResultType,
  fetchChapterResultType,
  fetchPageResultType,
  mangaSourceOptionsType,
  chapterSourceOptionsType,
  pageSourceOptionsType,
} from './mangaSourceTypes';
import Manga from './manga/Manga';
import Chapter from './chapter/Chapter';

export default abstract class AbstractMangaSource extends AbstractWebSource {
  public constructor(settings?: sourceSettingsType) {
    super(settings);
  }

  public async fetch(
    options: mangaSourceOptionsType
  ): Promise<fetchMangaResultType> {
    return this.fetchMangas(options);
  }

  public abstract fetchMangas(
    options: mangaSourceOptionsType
  ): Promise<fetchMangaResultType>;

  public abstract fetchMangaById(id: string): Promise<fetchMangaResultType>;

  public abstract fetchChaptersByManga(
    manga: Manga,
    options: chapterSourceOptionsType
  ): Promise<fetchChapterResultType>;

  public abstract fetchChaptersByMangaId(
    id: string,
    options: chapterSourceOptionsType
  ): Promise<fetchChapterResultType>;

  public abstract fetchChapters(
    options: chapterSourceOptionsType
  ): Promise<fetchChapterResultType>;

  public abstract fetchChapterById(id: string): Promise<fetchChapterResultType>;

  public abstract fetchPagesByChapter(
    chapter: Chapter
  ): Promise<fetchPageResultType>;

  public abstract fetchPagesByChapterId(
    id: string,
    options: pageSourceOptionsType
  ): Promise<fetchPageResultType>;
}
