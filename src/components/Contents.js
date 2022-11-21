import React, {useState, useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import data from "./data";
import Model from "./Model"

const Home = () => {
    useEffect(() => {
        Aos.init({duration: 600});
    }, []);

    const [model, setModel] = useState(false)
    const [tempData, setTempdata] = useState([])

    const getData = (title, desc, role, vid) =>{
        let tempData = [title, desc, role, vid]
        setTempdata(item => [1,...tempData])

        return setModel(true)
    }
    return(
        <>
            <div className="container mt-5">
                <p className="small-title">Select Your </p>
                <p data-aos="fade-right" data-aos-delay="200" className="judul">CHAMPION</p>
                <Row lg={5}>
                {data.cardData.map((item, index)=>{
                    return(
                        <Col>
                            <div data-aos="fade-up" data-aos-delay="150" onClick={()=> getData(item.title , item.desc, item.role ,item.vid)} style={{ width: '12rem' }} key={index}  className="box mb-5">
                                <div className="inner">
                                    <img src={item.image}  className="card-img-top" alt=""/>
                                </div>
                                <Button variant="dark" className='title'>
                                    <Card.Title >{item.title}</Card.Title>
                                </Button>
                            </div>
                        </Col>
                    )
                })}
                </Row>
            </div>
                {
                    model === true ? <Model title={tempData[1]} desc={tempData[2]} role={tempData[3]} vid={tempData[4]} hide={()=> setModel(false)}/>: ''
                }
            
        </>
    )
}

export default Home