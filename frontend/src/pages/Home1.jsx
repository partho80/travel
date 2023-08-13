import React from 'react'  
import '../styles/home.css'

import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle';

import SearchBar from "../shared/SearchBar";
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImageGallery from '../components/Image-gallery/MasonryImageGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';
import Getstart from '../components/Getstart/Geststart';

const Home = () => {
    return <>
    

    {/* ====== hero section start ====== */}
    <section>
    <Getstart/>
    </section>

    {/* ------featured tour section start----- */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
            <Subtitle subtitle={"Explore"}/>
            <h2 className="featured__tour-title">Our featured tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
    {/* ------featured tour section end----- */}

    {/*-------experience section start------ */}
    <section>
      <Container>
        <Row>
          <Col lg = '6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'}/>

              <h2>With our all experience <br/> we will serve you</h2>
              <p>Loren ipsum dolor sit amet, consectetur adipisicing elit
                <br/>
                Quas aliquam, hic tempora inventore suscipit unde.
              </p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5 ">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful Trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Year experience</h6>
              </div>
            </div>
          </Col>
          <Col lg = '6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/*-------experience section end------ */}

    {/*-------gallery section start------*/}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle = {'Gallery'}/>
            <h2 className= "gallery__title">Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonryImageGallery/>
          </Col>
        </Row>
      </Container>
    </section>
    {/*-------gallery section end------*/}

    {/*-------testimonial section start-----*/}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle = {'Fans Love'}/>
            <h2 className="testimonial__title">What our fans say about us</h2>
          </Col>
          <Col lg='12'>
            <Testimonials />
          </Col>
        </Row>
      </Container>
    </section>
    {/*-------testimonial section end-----*/}
    <Newsletter/>
    </>
};

export default Home;