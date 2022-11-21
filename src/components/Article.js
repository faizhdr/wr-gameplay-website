import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const Article = () => {
    return (
        <div className='container mt-5'>
            <p data-aos="fade-right" data-aos-delay="200" className="judul text-decoration-underline">Article</p>

            <Row xs={1} className="article">

            <Col>
            <div data-aos="fade-up" data-aos-delay="200"className=" mb-5">
                <Button  className='title-article'>
                    <Card.Title >New Patch</Card.Title>
                </Button>
                <iframe className='card-img-top' height={'315'} src="https://www.youtube.com/embed/EALr_uuouSU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
            </div>
            </Col>

            <Col>
            <div data-aos="fade-up" data-aos-delay="250" className=" mb-5">
                <Button  className='title-article'>
                    <Card.Title >New Hero</Card.Title>
                </Button>
                <iframe className='card-img-top' height={'315'} src="https://www.youtube.com/embed/9JEDqX8Y3MM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
            </div>
            </Col>
            
            <Col>
            <div data-aos="fade-up" data-aos-delay="300" className=" mb-5">
                <Button  className='title-article'>
                    <Card.Title >New Skin</Card.Title>
                </Button>
                <iframe className='card-img-top' height={'315'} src="https://www.youtube.com/embed/sYf0SWUjzp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
            </div>
            </Col>
            

            
            </Row>            

            

        </div>
        
    );
}

export default Article;
