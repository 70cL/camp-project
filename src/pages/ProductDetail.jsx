import React from 'react'
import { useParams } from 'react-router-dom';
import { Container } from "semantic-ui-react";

export default function ProductDetail() {
    let {id} = useParams()
    return (
        <div>
            <Container className="centerwa" >
                Ürün : {id}
            </Container>
        </div>
    )
}
