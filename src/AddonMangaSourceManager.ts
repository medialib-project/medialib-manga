import { AbstractAddon, AbstractAddonManager } from '@addonlib/addonlib';

export default class AddonMediaSourceManager extends AbstractAddonManager {
  protected static type = 'media-source.manga';

  public constructor(...sourcesAddons: Array<AbstractAddon>) {
    super(...sourcesAddons);
  }
}
