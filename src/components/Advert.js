import React from 'react';
import { Col, Row } from 'react-bootstrap';


const Advert = () => {
    return (
        <div className='mt-5'>
            <div className='adv'></div>
            <div className='badge'>
            <Row xs='auto'>
                
                <Col>
                    <a href='https://play.google.com/store/apps/details?id=com.riotgames.league.wildrift&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' ><img alt='Temukan di Google Play' style={{width: '200px'}} src='https://play.google.com/intl/id/badges/static/images/badges/id_badge_web_generic.png'/></a>
                </Col>
                <Col>
                    <a href="https://apps.apple.com/us/app/league-of-legends-wild-rift/id1480616990?itsct=apps_box_badge&amp;itscg=30200" style={{display: 'inline-block', overflow: 'hidden'}}><img  alt="Download on the App Store" style={{borderRadius: '13px', width: '200px', height: '83px'}} src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/id-id?size=250x83&amp;releaseDate=1616889600&h=48b44ce9f626d586fd708c8e992c473b" /></a>
                </Col>
                
            </Row>
            </div>
        </div>
    );
}

export default Advert;
