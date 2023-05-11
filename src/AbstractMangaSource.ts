import { AbstractWebSource, optionDefinition } from '@medialib/medialib';
import {
  mangaSourceSettings,
  mangaSourceFetchOption,
  mangaSourceFetchResult,
  chapterSourceFetchOption,
  chapterSourceFetchResult,
  pageSourceFetchOption,
  pageSourceFetchResult,
} from './mangaSourceTypes';
import Manga from './manga/Manga';
import Chapter from './chapter/Chapter';

export default abstract class AbstractMangaSource<
  T extends mangaSourceSettings = mangaSourceSettings,
  U extends mangaSourceFetchOption = mangaSourceFetchOption,
  V extends mangaSourceFetchResult = mangaSourceFetchResult,
  W extends chapterSourceFetchOption = chapterSourceFetchOption,
  X extends chapterSourceFetchResult = chapterSourceFetchResult,
  Y extends pageSourceFetchOption = pageSourceFetchOption,
  Z extends pageSourceFetchResult = pageSourceFetchResult
> extends AbstractWebSource<T, U, V> {
  public constructor(settingsDefinition?: optionDefinition<T>) {
    super(settingsDefinition);
  }

  public async fetch(options: U): Promise<V> {
    return this.fetchMangas(options);
  }

  public getFetchOptionsDefinition(): Promise<optionDefinition<U>> {
    return this.getFetchMangaOptionsDefinition();
  }

  public abstract fetchMangas(options: U): Promise<V>;

  public abstract fetchMangaById(id: string, options: U): Promise<V>;

  public abstract getFetchMangaOptionsDefinition(): Promise<
    optionDefinition<U>
  >;

  public abstract fetchChaptersByManga(manga: Manga, options: W): Promise<X>;

  public abstract fetchChaptersByMangaId(id: string, options: W): Promise<X>;

  public abstract fetchChapters(options: W): Promise<X>;

  public abstract fetchChapterById(id: string, options: W): Promise<X>;

  public abstract getFetchChapterOptionsDefinition(): Promise<
    optionDefinition<X>
  >;

  public abstract fetchPagesByChapter(chapter: Chapter, options: Y): Promise<Z>;

  public abstract fetchPagesByChapterId(id: string, options: Y): Promise<Z>;

  public abstract getFetchPageOptionsDefinition(): Promise<optionDefinition<Y>>;
}
