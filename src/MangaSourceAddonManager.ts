import MediaSourceAddonManager from '@medialib/medialib/dist/source/MediaSourceAddonManager';
import { mangaSourceAddonManagerDetails } from './mangaSourceAddonManagerTypes';
import AbstractMangaSourceAddon from './AbstractMangaSourceAddon';

export default class MangaSourceAddonManager<
  T extends mangaSourceAddonManagerDetails = mangaSourceAddonManagerDetails,
  V extends AbstractMangaSourceAddon = AbstractMangaSourceAddon
> extends MediaSourceAddonManager<T, V> {
  public constructor(details?: T) {
    super({
      ...{ type: 'media-source.manga' },
      ...details,
    } as T);
  }
}
