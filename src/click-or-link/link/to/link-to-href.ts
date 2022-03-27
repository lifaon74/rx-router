import { stringOrURLToString } from '@lifaon/rx-dom';
import { ILinkType } from '../link-type.type';

export function linkToHREF(
  {
    url,
  }: ILinkType,
): string {
  return stringOrURLToString(url);
}

