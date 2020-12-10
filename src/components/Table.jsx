import React from 'react';
import { Row, Col, Card, CardTitle, CardText, Button } from "reactstrap";

const Table = ({item, index}) => (
    <Card body>
        <CardTitle tag="h5">Stůl: {index + 1}</CardTitle>
        <CardText>Konzumace: </CardText>
        <Row>
            {item.map((index) => <Button>{index}</Button>)}
            <Button color="success">+</Button>
        </Row>
    </Card>
)

export default Table;