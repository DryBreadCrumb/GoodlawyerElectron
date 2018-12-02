import React from 'react';
import Sidebar from './Sidebar';

class Message extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(

      <div>
      <div className='sidebar-general'>
          <Sidebar/>
      </div>
        <div className='main-content'>
        <div>
        <h1>Messages</h1>
        </div>
      </div>
  </div>
    );
  }
}

export default Message;
