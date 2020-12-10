import React from 'react';
import { Row, Card, CardTitle, CardText, Button } from "reactstrap";

const Table = ({item, index, addChlebicek, tables}) => (
    <Card body>
        <CardTitle tag="h5">Stůl: {index + 1}</CardTitle>
        <CardText>Konzumace: {tables}</CardText>
        <Row>
            {item.map((value, indexChair) => <Button onClick={() => addChlebicek(index, indexChair)}>{value}</Button>)}
            <Button color="success">+</Button>
        </Row>
    </Card>
)

export default Table;