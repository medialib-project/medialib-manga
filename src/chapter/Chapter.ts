import { AbstractMedia } from '@medialib/medialib';
import { chapterOptions } from './chapterTypes';

export default class Chapter extends AbstractMedia {
  private language: string;
  private number: string;
  private size: number;

  public constructor({ id, title, language, number, size }: chapterOptions) {
    super({ id, title });
    this.language = language;
    this.number = number;
    this.size = size;
  }

  public getLanguage() {
    return this.language;
  }

  public getNumber() {
    return this.number;
  }

  public getSize() {
    return this.size;
  }
}
