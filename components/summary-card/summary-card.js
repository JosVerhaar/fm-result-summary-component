import { LitElement, html, css } from 'lit';

import { baseStyles } from '../styles/base-styles';
import { SummaryItem } from '../summary-item/summary-item';

export class SummaryCard extends LitElement {
  static styles = [
    baseStyles,
    css``
  ];

  static properties = {
    _summaryItems: { state: true },
  };

  constructor() {
    super();
    this._summaryItems = [
      {
        "category": "Reaction",
        "score": 80,
        "icon": "./assets/images/icon-reaction.svg"
      },
      {
        "category": "Memory",
        "score": 92,
        "icon": "./assets/images/icon-memory.svg"
      },
      {
        "category": "Verbal",
        "score": 61,
        "icon": "./assets/images/icon-verbal.svg"
      },
      {
        "category": "Visual",
        "score": 72,
        "icon": "./assets/images/icon-visual.svg"
      }
    ];
  }

  render() {
    return html`
    <h2 class="section-title">Summary</h2>

    <div class="grid-flow">
      ${this._summaryItems.map((item, idx) => html`
        <summary-item data-item-type="accent-${idx + 1}"></summary-item>
      `)}




    <div class="summary-item">

      <div class="flex-group">
        <svg class="summary-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
          viewBox="0 0 20 20">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"
            d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z" />
        </svg>
        <h3 class="summary-item-title">Reaction</h3>
      </div>

      <p class="summary-score">
        <span>80</span> / 100
      </p>

    </div>
  `;
  }
}
customElements.define('summary-card', SummaryCard);