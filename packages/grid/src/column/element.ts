import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { baseStyles, dynamicControllers } from '@blueprintui/components/internals';
import { GridColumnWidthController } from './width.controller.js';
import { focusStyles } from '../internals/index.js';
import styles from './element.css' assert { type: 'css' };

/**
 * Grid Column
 *
 * ```typescript
 * import '@blueprintui/grid/include/core.js';
 * ```
 *
 * @element bp-grid-column
 * @slot - column content
 * @cssprop --min-height
 * @cssprop --min-width
 * @cssprop --justify-content
 * @cssprop --padding-block
 * @cssprop --padding-inline
 * @cssprop --background
 * @cssprop --font-size
 * @cssprop --color
 */
@dynamicControllers()
export class BpGridColumn extends LitElement {
  /** control width of grid column via numeric or CSS value types */
  @property({ type: String }) width: string;

  /** position individual column relative to the grid scroll container */
  @property({ type: String, reflect: true }) position: 'sticky' | 'fixed';

  static styles = [baseStyles, styles, focusStyles];

  /** @private */
  _internals = this.attachInternals();

  render() {
    return html`
      <div role="group" part="internal" focusable>
        <slot>&nbsp;</slot>
        <slot name="resize">
          <div class="border"></div>
        </slot>
        <div class="line"></div>
      </div>
    `;
  }

  constructor() {
    super();
    new GridColumnWidthController(this);
    this._internals.role = 'columnheader';
    this._internals.ariaSort = 'none';
  }

  connectedCallback() {
    super.connectedCallback();
    this.slot = 'columns';
  }
}
