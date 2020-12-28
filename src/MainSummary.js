import React from 'react';
import TOTAL from './Total';
import Option from './Option';

export default function MainSummary(props) {
    const summary = Object.keys(props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.selected[feature];
  
        return (
          <Option key={featureHash} featureHash={featureHash} feature={feature} selectedOption={selectedOption} />
        );
      });
  
      const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
      );
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <TOTAL key={'Summary total'} total={total} />
        </section>
    )
}