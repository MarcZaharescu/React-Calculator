import React from 'react'
import ScreenRow from './screen-row'
import PropTypes from 'prop-types'

const Screen = (props) => {

  return (
    <div className = "screen">
      <ScreenRow value={props.question} />
      <ScreenRow value={props.answer} />
    </div>
  );
}

ScreenRow.propTypes ={
  question: PropTypes.func.IsRequired,
  answer:   PropTypes.func.IsRequired
}

export default Screen;
