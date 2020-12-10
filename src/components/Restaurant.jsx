import React from 'react';
import Table from "./Table";
import { ListGroup } from "reactstrap";

const Restaurant = ({tables, name, total, tablesCount, setTotal}) => (
    <>
        <h2>{name}</h2>
        <h5>Celkem: {total} chlebíčků</h5>
        <ListGroup horizontal>
            {tables.map((item, index) => (<Table index={index} item={item} tables={tables} tablesCount={tablesCount} setTotal={setTotal} />))}
        </ListGroup>
    </>
)

export default Restaurant;