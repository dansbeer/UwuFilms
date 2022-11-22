import {Card, Col, Container, Image, Row} from 'react-bootstrap';
import duneImage from '../assets/images/trending/dune.jpg'
import everythingImage from '../assets/images/trending/everything.jpg'
import infinteImage from '../assets/images/trending/infinite.jpg'
import jokerImage from '../assets/images/trending/joker.jpg'
import lightyearImage from '../assets/images/trending/lightyear.jpg'
import morbiusImage from '../assets/images/trending/morbius.jpg'

const Trending =() => {
    return (
        <Container>
            <br />
            <h1 className='text-white' id='trending'>TRENDING</h1>
            <br />
            <Row>
                <Col md={4} className="movieWrapper">
                    <Card className="text-white movieImage">
                    <Image src={duneImage} alt="Dune Movies" className="images"/>
                    <div className='bg-dark'>
                    <div className="p2 m-1 text-white">
                        <Card.Title className="text-center">DUNE</Card.Title>
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
                    <Image src={everythingImage} alt="Dune Movies" className="images"/>
                    <div className='bg-dark'>
                    <div className="p2 m-1 text-white">
                        <Card.Title className="text-center">EVERYTHING</Card.Title>
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
                    <Image src={infinteImage} alt="Dune Movies" className="images"/>
                    <div className='bg-dark'>
                    <div className="p2 m-1 text-white">
                        <Card.Title className="text-center">INFINTE</Card.Title>
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
                    <Image src={jokerImage} alt="Dune Movies" className="images"/>
                    <div className='bg-dark'>
                    <div className="p2 m-1 text-white">
                        <Card.Title className="text-center">JOKER</Card.Title>
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
                    <Image src={lightyearImage} alt="Dune Movies" className="images"/>
                    <div className='bg-dark'>
                    <div className="p2 m-1 text-white">
                        <Card.Title className="text-center">LIGHTYEAR</Card.Title>
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
                    <Image src={morbiusImage} alt="Dune Movies" className="images"/>
                    <div className='bg-dark'>
                    <div className="p2 m-1 text-white">
                        <Card.Title className="text-center">MORBIUS</Card.Title>
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

export default Trending