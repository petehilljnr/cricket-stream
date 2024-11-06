import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const MatchDetail = ({ match }) => {
    return (
        <Card className="mb-4"  style={{ borderRadius: '15px', backgroundColor: 'darkblue' }}> {/* Adjust the radius here */}
            <Card.Body>
                <Card.Title className="text-center" style={{ fontSize: '2rem', color: "white", fontWeight: 'bolder' }}>{match.fixture_name}</Card.Title>
                <Card.Subtitle className="mb-2 text-center" style={{ fontSize: '1.1rem', color: "white" }}>
                    {new Date(match.fixture_date).toLocaleDateString()} - {match.fixture_loc}
                </Card.Subtitle>
                <Row className="mt-4">
                    <Col>
                        <Card className="text-center" style={{ borderRadius: '15px' }}> {/* Adjust the radius here */}
                            <Card.Header style={{ fontSize: '1.5rem', fontWeight: 'bolder', }}>{match.home_organisation}</Card.Header>
                            <Card.Body>
                                <img 
                                    src={`/assets/${match.home_logo}`} 
                                    alt={`${match.home_organisation} logo`} 
                                    style={{ width: '75px', height: '75px', marginBottom: '5px' }} 
                                />
                                <Card.Text style={{ fontSize: '1.3rem' }}>{match.home_team}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-center" style={{ borderRadius: '15px' }}> {/* Adjust the radius here */}
                            <Card.Header style={{ fontSize: '1.5rem', fontWeight: 'bolder' }}>{match.away_organisation}</Card.Header>
                            <Card.Body>
                                <img 
                                    src={`/assets/${match.away_logo}`} 
                                    alt={`${match.away_organisation} logo`} 
                                    style={{ width: '75px', height: '75px', marginBottom: '5px' }} 
                                />
                                <Card.Text style={{ fontSize: '1.3rem' }}>{match.away_team}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default MatchDetail;
