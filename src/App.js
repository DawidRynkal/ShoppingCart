import React, { Component } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Subtotal from './components/Subtotal/Subtotal'
import PickupSaving from './components/PickupSaving/PickupSaving'
import TaxesFees from './components/TaxesFees/TaxesFees'
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      PickupSaving: -4.56,
      taxes: 0,
      estimatedTotal: 0,
    }
  }
  render() {
    return (
      <div className='container' >
        <Container className='purchase-card'>
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupSaving price={this.state.PickupSaving} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
        </Container>

      </div>
    );
  }

}

export default App;
