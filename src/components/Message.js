import React from 'react';

// const msg = <h1> Message </h1>;

class Message extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div>
        {/*<div> msg </div>*/}
        <div>
          <h1>Messages</h1>
        </div>
        <div> More to come soon... </div>
      </div>
    );
  }

}
export default Message;
