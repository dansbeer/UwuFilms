import {Card, Col, Container, Image, Row} from 'react-bootstrap';
import antmanImage from '../assets/images/superhero/antman.jpg'
import avengerImage from '../assets/images/superhero/avenger.jpg'
import batmanImage from '../assets/images/superhero/batman.jpg'
import robinhoodImage from '../assets/images/superhero/robinhood.jpg'
import spidermanImage from '../assets/images/superhero/spiderman-cover.jpg'
import supermanImage from '../assets/images/superhero/superman.jpg'

const Superhero =() => {
    return (
        <Container>
            <br />
            <h1 className='text-white' id='superhero'>SUPERHERO MOVIES</h1>
            <br />
            <Row>
                <Col md={4} className="movieWrapper">
                    <Card className="text-white movieImage">
                    <Image src={antmanImage} alt="Dune Movies" className="images"/>
                    <div className='bg-dark'>
                    <div className="p2 m-1 text-white">
                        <Card.Title className="text-center">ANTMAN</Card.Title>
                        <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural 
                        </Card.Text>
                        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                    </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="text-white movieImage">
                    <Image src={avengerImage} alt="Dune Movies" className="images"/>
                    <div className='bg-dark'>
                    <div className="p2 m-1 text-white">
                        <Card.Title className="text-center">AVENGER</Card.Title>
                        <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural 
                        </Card.Text>
                        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                    </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="text-white movieImage">
                    <Image src={batmanImage} alt="Dune Movies" className="images"/>
                    <div className='bg-dark'>
                    <div className="p2 m-1 text-white">
                        <Card.Title className="text-center">BATMAN</Card.Title>
                        <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural 
                        </Card.Text>
                        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                    </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="text-white movieImage">
                    <Image src={robinhoodImage} alt="Dune Movies" className="images"/>
                    <div className='bg-dark'>
                    <div className="p2 m-1 text-white">
                        <Card.Title className="text-center">ROBINHOOD</Card.Title>
                        <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural 
                        </Card.Text>
                        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                    </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="text-white movieImage">
                    <Image src={spidermanImage} alt="Dune Movies" className="images"/>
                    <div className='bg-dark'>
                    <div className="p2 m-1 text-white">
                        <Card.Title className="text-center">SPIDERMAN</Card.Title>
                        <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural 
                        </Card.Text>
                        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                    </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="text-white movieImage">
                    <Image src={supermanImage} alt="Dune Movies" className="images"/>
                    <div className='bg-dark'>
                    <div className="p2 m-1 text-white">
                        <Card.Title className="text-center">SUPERMAN</Card.Title>
                        <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural 
                        </Card.Text>
                        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                    </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Superhero