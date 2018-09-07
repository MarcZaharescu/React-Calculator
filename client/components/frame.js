import React from 'react';
import Screen from './screen';
import Button from './button';

class Frame extends React.Component {

  constructor() {

    super();

    this.state = {
      question: '',
      answer: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
      return (
        <div className="frame">
          <div className="calculator-title">
            React Node Calculator
          </div>
          <Screen question={this.state.question} answer={this.state.answer} />
          <div className='button-row'>
            <Button label={'1'} type={'input'} handleClick={this.handleClick}/>
            <Button label={'2'} type={'input'} handleClick={this.handleClick}/>
            <Button label={'3'} type={'input'} handleClick={this.handleClick}/>
            <Button label={'4'} type={'input'} handleClick={this.handleClick}/>
            <Button label={'+'} type={'action'} handleClick={this.handleClick}/>
            <Button label={'-'} type={'action'} handleClick={this.handleClick}/>
          </div>
          <div className='button-row'>
            <Button label={'5'} type={'input'} handleClick={this.handleClick}/>
            <Button label={'6'} type={'input'} handleClick={this.handleClick}/>
            <Button label={'7'} type={'input'} handleClick={this.handleClick}/>
            <Button label={'8'} type={'input'} handleClick={this.handleClick}/>
            <Button label={'*'} type={'action'} handleClick={this.handleClick}/>
            <Button label={'/'} type={'action'} handleClick={this.handleClick}/>
          </div>
          <div className='button-row'>
            <Button label={'9'} type={'input'} handleClick={this.handleClick}/>
            <Button label={'.'} type={'action'} handleClick={this.handleClick}/>
            <Button label={'0'} type={'input'} handleClick={this.handleClick}/>
            <Button label={'Cls'} type={'action'} handleClick={this.handleClick}/>
            <Button label={'='} type={'action'} handleClick={this.handleClick}/>
          </div>
        </div>
      );
    }



  handleClick(event){
    const value = event.target.value;

    switch(value){
      case '=': {
        console.log('a');
      }
    }
  }
}

export default Frame;
