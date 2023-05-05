import { AbstractMedia } from '@medialib/medialib';
import { mangaOptions } from './mangaTypes';

export default class Manga extends AbstractMedia {
  private authors: Array<string>;
  private description: string;
  private languages: Array<string>;
  private tags: Array<string>;
  private genres: Array<string>;
  private themes: Array<string>;
  private formats: Array<string>;

  public constructor({
    id,
    title,
    authors = [],
    description,
    languages = [],
    tags = [],
    genres = [],
    themes = [],
    formats = [],
  }: mangaOptions) {
    super({ id, title });
    this.authors = authors;
    this.description = description;
    this.languages = languages;
    this.tags = tags;
    this.genres = genres;
    this.themes = themes;
    this.formats = formats;
  }

  public getAuthors() {
    return this.authors;
  }

  public getDescription() {
    return this.description;
  }

  public getLanguages() {
    return this.languages;
  }

  public getTags() {
    return this.tags;
  }

  public getGenres() {
    return this.genres;
  }

  public getThemes() {
    return this.themes;
  }

  public getFormats() {
    return this.formats;
  }
}
