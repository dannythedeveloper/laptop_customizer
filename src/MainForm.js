import React from 'react';
import Specs from './Specs';

export default function MainForm(props) {
  return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <Specs 
              key={props.featureHash} 
              featureHash={props.featureHash} 
              feature={props.feature} 
              options={props.options}
              selected={props.selected} 
              updateFeature={props.updateFeature} />
        </form>
    )
}

MainForm.defaultProps = {
  featureList: {},
  selected: {},
  onItemChange: () => {},
};