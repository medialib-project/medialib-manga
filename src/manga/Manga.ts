import { AbstractMedia } from '@medialib/medialib';
import { mangaDetails } from './mangaTypes';

export default class Manga<
  T extends mangaDetails = mangaDetails
> extends AbstractMedia<T> {
  public constructor(details: T) {
    super(details);
  }
}
