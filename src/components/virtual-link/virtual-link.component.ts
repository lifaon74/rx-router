import { Component, componentInput$$, IComponentInput } from '@lifaon/rx-dom';
import { createEventListener } from '@lifaon/rx-js-light';
import { resolveOptionalClickOrLinkTypeOnClick } from '../../click-or-link/shared/optional/resolve-optional-click-or-link-type-on-click';

/** COMPONENT **/

@Component({
  name: 'v-link',
  extends: 'a',
})
export class AppVirtualLinkComponent extends HTMLAnchorElement {
  readonly replaceState: IComponentInput<boolean>;

  constructor() {
    super();
    this.replaceState = componentInput$$<boolean>(false);

    createEventListener(this, 'click', (event: MouseEvent) => {
      resolveOptionalClickOrLinkTypeOnClick({
        clickOrLink: {
          type: 'link',
          url: new URL(this.href, this.baseURI),
          preventDefault: true,
          replaceState: this.replaceState.value,
        },
        event,
      });
      // if (
      //   (event.button === 0)
      //   && !event.ctrlKey
      //   && (this.target !== '_blank')
      //   && ['http:', 'https:'].includes(new URL(this.href, this.baseURI).protocol)
      // ) {
      //   event.preventDefault();
      //   NAVIGATION.navigate(this.href, {
      //     replaceState: this.replaceState,
      //   });
      // }
    });
  }
}
