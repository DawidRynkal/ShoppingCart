import React, { Component } from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

const styles = {
    pickupSaving: {
        textDecoration: 'underline'
    },
    totalSavings: {
        color: 'red',
        fontWeight: 700,
    }
}

export default class PickupSaving extends Component {
    render() {
        const tooltip = (
            <Tooltip id="tooltip">
                <p>Picking up your order in the store helps cut costs, and we pass the savings on to you.</p>
            </Tooltip>
        )


        return (
            <Row className='show-grid'>
                <Col md={6}>
                    <OverlayTrigger placement='bottom' overlay={tooltip}>
                        <div style={styles.pickupSaving}>Pickup Savings</div>
                    </OverlayTrigger>
                </Col>
                <Col md={6} style={styles.totalSavings}>{`$${this.props.price}`}</Col>
            </Row>
        )
    }
}