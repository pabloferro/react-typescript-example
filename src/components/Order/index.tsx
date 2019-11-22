import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdStar } from 'react-icons/md';
import { MdStarBorder } from 'react-icons/md';

interface Props {
  name: string;
  empanadasAmount: number;
}

interface State {
  starred: boolean;
}

class Order extends Component<Props, State> {
  state = {
    starred: false
  };

  handleToggleStarred = () => this.setState(prevState => ({ starred: !prevState.starred }));

  render() {
    const { starred } = this.state;
    const { name, empanadasAmount } = this.props;
    const Starred = starred ? MdStar: MdStarBorder;

    return (
      <div>
        <div className="row center middle">
          <Link to={`/orders/${name}`} className="m-right-1">
            {name} (${empanadasAmount * 30})
          </Link>
          <Starred onClick={this.handleToggleStarred} />
        </div>
        <p>{empanadasAmount} Empanadas</p>
      </div>
    );
  }
}

export default Order;
