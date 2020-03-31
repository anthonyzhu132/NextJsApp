class Prices extends React.Component {
  state = {
    currency: 'EUR'
  }


  render() {
    let list = '';

    if(this.state.currency === 'USD') {
      list =
      <li className="list-group-item">
      Bitcoin Rate For {this.props.bpi.USD.description}
      : <strong>{this.props.bpi.USD.rate}</strong>
      </li>

    } else if(this.state.currency === 'GBP') {

      list =
      <li className="list-group-item">
      Bitcoin Rate For {this.props.bpi.GBP.description}
      : <strong>{this.props.bpi.GBP.rate}</strong>
      </li>

    } else if(this.state.currency === 'EUR') {

      list =
      <li className="list-group-item">
      Bitcoin Rate For {this.props.bpi.EUR.description}
      : <strong>{this.props.bpi.EUR.rate}</strong>
      </li>

    }


    return (
    <div>
      <ul className="list-group">
        {list}
      </ul>
    </div>
    );
  }
}

export default Prices; 