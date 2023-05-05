import {
  AbstractMediaSourceAddon,
  addonResourcesType,
  sourceSettingsType,
} from '@medialib/medialib';
import AbstractMangaSource from './AbstractMangaSource';

export default abstract class AbstractMangaSourceAddon extends AbstractMediaSourceAddon {
  protected static type = 'media-source.manga';

  public constructor(
    instances: addonResourcesType,
    settings?: sourceSettingsType
  ) {
    super(instances, settings);
  }

  public abstract getSourceClass(): AbstractMangaSource;

  public getSource() {
    return super.getSource() as AbstractMangaSource;
  }
}
