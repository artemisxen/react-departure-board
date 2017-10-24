import React from 'react';

class Train extends React.Component {
  render() {
    return(
        <li className="train_item w-clearfix" data-ix="upate-on-click">
          <div className="board_message_container" data-ix="upate-on-click">
            <div className="board_message">{this.props.train.aimed_departure_time} {this.props.train.destination_name}</div>
            <div className="_2 board_message">{this.props.train.platform}</div>
            <div className="_3 board_message">{this.props.train.expected_departure_time}</div>
          </div>
        </li>
    )
  }
}

export default Train;
