import { AbstractMedia } from '@medialib/medialib';
import { pageOptions } from './pageTypes';

export default class Page extends AbstractMedia {
  private uri: string;

  public constructor({ id, title, uri, download }: pageOptions) {
    super({ id, title });
    this.uri = uri;
    this.download = download;
  }

  public getUri() {
    return this.uri;
  }

  public download;
}
