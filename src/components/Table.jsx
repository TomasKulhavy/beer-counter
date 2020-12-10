import React from 'react';
import { Row, Col, Card, CardTitle, CardText, Button } from "reactstrap";

const Table = ({tables, index, total, setTotal}) => (
    <Card body>
        <CardTitle tag="h5">Stůl: {index + 1}</CardTitle>
        <CardText>Konzumace: </CardText>
        <Row>
            {tables.map((item, index) => (<Button index={index} item={item}/>))}
            <Button color="success" onClick={() => setTotal(total + 1)}>+</Button>
        </Row>
    </Card>
)

export default Table;