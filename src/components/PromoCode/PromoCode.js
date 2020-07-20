import React, { Component } from 'react';
import {
    Button,
    Collapse,
    Form,
    Row,
    Col,
    FormGroup,
    FormControl,
    FormLabel
} from 'react-bootstrap'

class PromoCodeDiscount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            value: '',
        };
    }
    render() {
        return (
            <div>
                <Button className="promo-code-button"
                    bsStyle="link"
                    onClick={() => this.setState({ open: !this.state.open })}
                >
                    {this.state.open === false ? `Apply ` : `Hide `}
                    promo code
                    {this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Row className="show-grid">
                            <Col md={12}>
                                <Form>
                                    <FormGroup controlId="formInLineName">
                                        <FormLabel>Promo Code</FormLabel>
                                        <FormControl
                                            type="text"
                                            placeholder="Enter promo code"
                                            value={this.props.promoCode}
                                            onChange={this.handleChange}
                                        ></FormControl>
                                    </FormGroup>
                                    <Button
                                        block
                                        bsStyle="success"
                                        className="btn-round"
                                        disabled={this.props.isDisabled}
                                        onClick={this.props.giveDiscount}
                                    >Apply</Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default PromoCodeDiscount;