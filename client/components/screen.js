import React from 'react'
import ScreenRow from './components/screen-row'

const Screen = (props) => {

  return (
    </div className ="screen">
      <ScreenRow value={props.question} />
      <ScreenRow value={props.answer} />
    </div>
  );
}

ScreenRow.proptypes ={
  question: React.PropTypes.string.IsRequired,
  answer:   React.PropTypes.string.IsRequired
}

export default Screen;
