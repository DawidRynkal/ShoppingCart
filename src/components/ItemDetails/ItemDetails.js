import React, { Component } from 'react';
import { Row, Col, Button, Collapse, Image, Media } from 'react-bootstrap';
import img from '../product.jpeg'



export default class ItemDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        }
    }

    render() {
        return (
            <div>
                <Button
                    className="item-details-button"
                    bsStyle="link"
                    onClick={() => this.setState({ open: !this.state.open })}
                >
                    {this.state.open === false ? `See` : `Hide`} item details
                    {this.state.open === false ? `+` : `-`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Media>
                            <Image
                                rounded
                                className="product-image"
                                width={300}
                                fluid
                                src={img} alt="bed" />
                        </Media>
                        <Media.Body>
                            <p>Comfortable bed</p>
                            <Row className="show-grid">
                                <Col md={6}>
                                    <strong>
                                        {`$${this.props.price}`}
                                    </strong>
                                    <br />
                                    <strong className='price-strike'>  {`$${this.props.price}`}
                                    </strong>
                                </Col>
                                <Col md={6}>Qyt: 1</Col>
                            </Row>
                        </Media.Body>
                    </div>
                </Collapse>
            </div>
        )
    }

}