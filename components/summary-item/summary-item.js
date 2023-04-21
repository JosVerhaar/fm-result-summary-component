import { LitElement, html, css } from 'lit';
import { baseStyles } from '../styles/base-styles';
import { svg } from 'lit';

export class SummaryItem extends LitElement {
  static styles = [
    baseStyles,
    css`
      .summary-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border-radius: .5rem;
        background-color: hsl(var(--item-color), .1);
      }

      slot {
        stroke: hsl(var(--item-color));
      }

      .summary-item-title {
        color: hsl(var(--item-color));
        font-weight: var(--fw-bold);
      }

      .summary-score {
        font-weight: var(--fw-black);
        color: hsl(var(--clr-neutral-hsl-700), .7)
      }

      .summary-score span {
        color: var(--clr-neutral-700);
      }
  `];

  static properties = {
    icon: { type: String },
    category: { type: String },
    score: { type: Number },
  }

  render() {
    return html`
    <div class="summary-item">

      <div class="flex-group">
        <slot></slot>
        <h3 class="summary-item-title">${this.category}</h3>
      </div>

      <p class="summary-score">
        <span>${this.score}</span> / 100
      </p>

    </div>
    `;
  }
}
customElements.define('summary-item', SummaryItem);
