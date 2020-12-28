import React from 'react';
import Parts from './Parts';
import Store from './STORE';
import slugify from 'slugify';

export default function Specs(props){
    return Object.keys(Store.FEATURES).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = Store.FEATURES[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <Parts 
            key={itemHash} 
            itemHash={itemHash} 
            feature={feature} 
            item={item} 
            selected={props.selected} 
            checked={item.name === props.selected[feature].name} 
            updateFeature={props.updateFeature} />
        );
      });

    return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });
};

Specs.defaultProps = {
  featureList: {},
  selected: {},
  onItemChange: () => {},
};