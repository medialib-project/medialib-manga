import { ReadableStream } from 'stream/web';

export type downloadImage = () => Promise<{
  type: string;
  data: ReadableStream<ArrayBuffer>;
} | null>;
