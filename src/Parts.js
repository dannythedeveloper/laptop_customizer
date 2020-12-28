import React from 'react';
import STORE from './STORE';
import slugify from 'slugify';

export default function Parts(props) {
    return (
        <div key={props.itemHash} className="feature__item">
            <input
                type="radio"
                id={props.itemHash}
                className="feature__option"
                name={slugify(props.feature)}
                checked={props.checked}
                onChange={e => props.updateFeature(props.feature, props.item)}
            />
            <label htmlFor={props.itemHash} className="feature__label">
                {props.item.name} ({STORE.USCurrencyFormat.format(props.item.cost)})
            </label>
        </div>
    )
}

Parts.defaultProps = {
    onItemChange: () => {},
    itemHash: "",
    item: {},
    feature: "",
    checked: false,
  };