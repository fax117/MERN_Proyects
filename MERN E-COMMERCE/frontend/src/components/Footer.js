import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'; 

export const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col classanme='text-center py-3'>
                        Copyright &copy; Fabricio Fuentes
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer