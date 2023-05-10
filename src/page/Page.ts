import { AbstractMedia } from '@medialib/medialib';
import { pageDetails } from './pageTypes';

export default class Page<
  T extends pageDetails = pageDetails
> extends AbstractMedia<T> {
  public constructor(details: T) {
    super(details);
  }
}
