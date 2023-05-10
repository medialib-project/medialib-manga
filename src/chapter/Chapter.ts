import { AbstractMedia } from '@medialib/medialib';
import { chapterDetails } from './chapterTypes';

export default class Chapter<
  T extends chapterDetails = chapterDetails
> extends AbstractMedia<T> {
  public constructor(details: T) {
    super(details);
  }
}
