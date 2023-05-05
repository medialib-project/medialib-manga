import { mediaOptions } from '@medialib/medialib';
import { ReadableStream } from 'stream/web';

export interface pageOptions extends mediaOptions {
  uri: string;
  download: () => Promise<{ type: string; data: ReadableStream<ArrayBuffer> }>;
}
