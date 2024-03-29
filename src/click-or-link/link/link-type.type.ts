import { IStringOrURL } from '@lifaon/rx-dom';
import { INavigationNavigateOptions } from '../../navigation/navigation';
import { ILinkTypeEventOptions } from '../shared/link-type-event-options.type';

export interface ILinkType extends ILinkTypeEventOptions, INavigationNavigateOptions {
  type: 'link';
  url: IStringOrURL;
}
