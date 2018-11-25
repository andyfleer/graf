import React from 'react';

const Qa = (props) => (
    <React.Fragment>
        <dt>{ props.question }</dt>
        <dd>{ props.answer }</dd>
    </React.Fragment>
)

export default Qa;