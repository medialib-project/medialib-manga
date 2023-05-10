import { AbstractMediaSourceAddon } from '@medialib/medialib';
import AbstractMangaSource from './AbstractMangaSource';
import {
  mangaSourceAddonDetails,
  mangaSourceAddonResources,
} from './mangaSourceAddonTypes';
import { mangaSourceSettings } from './mangaSourceTypes';

export default abstract class AbstractMangaSourceAddon<
  T extends AbstractMangaSource = AbstractMangaSource,
  U extends mangaSourceAddonDetails = mangaSourceAddonDetails,
  V extends mangaSourceAddonResources = mangaSourceAddonResources,
  W extends mangaSourceSettings = mangaSourceSettings
> extends AbstractMediaSourceAddon<T, U, V, W> {
  public constructor(resources: V, details?: U, source?: new () => T) {
    super(
      resources,
      { ...{ type: 'media-source.manga' }, ...details } as U,
      source
    );
  }
}
