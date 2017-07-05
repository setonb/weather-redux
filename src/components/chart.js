import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return Math.round(data.reduce((sum,value) => {return sum + value}, 0) / data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  )
}
