import React from 'react'

const ScreenRow = (props) => {

  return(
    <div className = "screen-row" >
      <input type="text" readOnly value={props.value} />
    </div>
  );
}

  ScreenRow.proptypes = {
    value: React.PropTypes.string.isRequired
  }

export default ScreenRowl
