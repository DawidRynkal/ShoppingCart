import React, { Component } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Subtotal from './components/Subtotal/Subtotal'
import PickupSaving from './components/PickupSaving/PickupSaving'
import TaxesFees from './components/TaxesFees/TaxesFees'
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal'
import ItemDetails from './components/ItemDetails/ItemDetails'
import PromoCodeDiscount from './components/PromoCode/PromoCode'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      PickupSaving: -3.85,
      taxes: 0,
      estimatedTotal: 0,
      disabledPromoButton: false,
    }
  }

  componentDidMount() {
    this.setState({
      taxes: (this.state.total + this.state.PickupSaving) * 0.0875
    },

      function () {
        this.setState({
          estimatedTotal: (this.state.total + this.state.PickupSaving + this.state.taxes)
        })
      })
  };

  giveDiscountHandler = () => {
    if (this.props.promoCode === 'DISCOUNT') {
      this.setState({
        estimatedTotal: this.state.estimatedTotal * 0.9
      },
        function () {
          this.setState({
            disabledPromoButton: true
          })
        }
      )
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
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
          <hr />
          <PromoCodeDiscount
            giveDiscount={() => this.giveDiscountHandler()}
            isDisabled={this.state.disabledPromoButton}
          />
        </Container>

      </div>
    );
  }

}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value,

});



export default connect(mapStateToProps)(App);
