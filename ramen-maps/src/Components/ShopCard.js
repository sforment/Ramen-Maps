import React, { Component } from 'react';

import './ShopCard.css';

class ShopCard extends Component {
  render() {
    return (
      <div>
        <h1>results</h1>
        <ul>
          {this.props.shopData.map((businesses, i) => {
            return <div key={i}>
              <li>
                {businesses.name}
              </li><br />
              <img src={businesses.image_url} alt={businesses.name}/><br />
              <button>
              <a href={businesses.url} alt=''>
                <span>Visit Yelp Site</span>
                Visit Yelp Site
                </a>
              </button>
            </div>
          })}
        </ul>
      </div>
    )
  }
}

export default ShopCard;

// the span is in button included for better screen reader functionality 