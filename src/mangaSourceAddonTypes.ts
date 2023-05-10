import {
  mediaSourceAddonDetails,
  mediaSourceAddonResources,
  mediaSourceAddonSettings,
} from '@medialib/medialib';

export type mangaSourceAddonDetails = {
  type: 'media-source.manga' | 'media-source' | (string & {});
} & mediaSourceAddonDetails;
export type mangaSourceAddonResources = {} & mediaSourceAddonResources;
export type mangaSourceAddonSettings = {} & mediaSourceAddonSettings;
