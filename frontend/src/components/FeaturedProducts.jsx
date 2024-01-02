import React,{ useRef } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Image } from 'react-bootstrap'
import styled from 'styled-components'
import { GoChevronRight ,GoChevronLeft} from "react-icons/go";
import { GoArrowRight,GoArrowLeft } from "react-icons/go";

import { useGetProductsQuery } from '../slices/productsApiSlice';



const Section =  styled.section`
  position: relative;

  .container {
    display: flex;
    gap: 1rem ;
    overflow-x: auto;
    white-space: nowrap;
    padding: 1rem 0;
    
  }

  .container::-webkit-scrollbar {
    display: none;
  }
  .right-btn{
    font-size: 2rem;
    height: 20%;
    position: absolute ;
    top: 50%;
    right: 0;
    background: transparent;
    border: none;
  }
  .left-btn{
    font-size: 2rem;
    height: 20%;
    position: absolute ;
    top: 50%;
    left: 0;
    background: transparent;
    border: none
  }

  
  
`

const FeaturedProducts = () => {
    const containerRef = useRef(null);

    const {keyword}=useParams();

    const {data:products,isLoading,error} = useGetProductsQuery({keyword});

    const featuredProducts=products.slice(8)


    const handleScrollLeft = () => {
        if (containerRef.current) {
          containerRef.current.scrollBy({
            left: -200,
            behavior: 'smooth',
          });
        }
      };
  
    const handleScrollRight = () => {
        if(containerRef.current){
            containerRef.current.scrollBy({
                left: 200,
                behavior: 'smooth',
              });
        }
      
    };


  return (
    <>
    <Section>
        <h1>Featured Products</h1>
        
        <div className='container' ref={containerRef} >

        {/* {featuredProducts.map((product) => (
            <Link  to={`/product/${product._id}`} style={{ flex: '0 0 auto', width: '30%', marginRight: '20px', overflow: 'hidden' }}>
              <Image
                src={product.image}
                alt={product.name}
                className="carousel-item"
                style={{ width: '100%', height: 'auto' }}
              />
            </Link>
          ))} */}

            {/* {featuredProducts.map((product)=>(
              <Link to={`/product/${product._id}`}>
              <Image src={product.image} alt={product.name} class="carousel-item" style={{width:'50%'}} />
              </Link>  
            ))} */}

            {featuredProducts.map((product)=>(
              <Link to={`/product/${product._id}`} style={{ flex: '0 0 auto', width: '25%',  overflow: 'hidden' }}>
                <figure>
                <Image src={product.image} alt={product.name} style={{ width: '100%', height: 'auto',border:'1px solid' }} />
                <figcaption style={{textAlign:'center'}}>{product.name}</figcaption>
                </figure>
              </Link>
            ))}
            
            {/* <Link to={`/product/${featuredProducts[0]._id}`} style={{ flex: '0 0 auto', width: '30%', marginRight: '20px', overflow: 'hidden' }}  >
            <Image src={featuredProducts[0].image} alt="Slide 1" style={{ width: '100%', height: 'auto' }}   />
            </Link>
            <Link to={`/product/${featuredProducts[0]._id}`} style={{ flex: '0 0 auto', width: '30%', marginRight: '20px', overflow: 'hidden' }}  >
            <Image src={featuredProducts[0].image} alt="Slide 1" style={{ width: '100%', height: 'auto' }}   />
            </Link>
            <Link to={`/product/${featuredProducts[0]._id}`} style={{ flex: '0 0 auto', width: '30%', marginRight: '20px', overflow: 'hidden' }}  >
            <Image src={featuredProducts[0].image} alt="Slide 1" style={{ width: '100%', height: 'auto' }}   />
            </Link>
            <Link to={`/product/${featuredProducts[0]._id}`} style={{ flex: '0 0 auto', width: '30%', marginRight: '20px', overflow: 'hidden' }}  >
            <Image src={featuredProducts[0].image} alt="Slide 1" style={{ width: '100%', height: 'auto' }}   />
            </Link>
            <Link to={`/product/${featuredProducts[0]._id}`} style={{ flex: '0 0 auto', width: '30%', marginRight: '20px', overflow: 'hidden' }}  >
            <Image src={featuredProducts[0].image} alt="Slide 1" style={{ width: '100%', height: 'auto' }}   />
            </Link>
            <Link to={`/product/${featuredProducts[0]._id}`} style={{ flex: '0 0 auto', width: '30%', marginRight: '20px', overflow: 'hidden' }}  >
            <Image src={featuredProducts[0].image} alt="Slide 1" style={{ width: '100%', height: 'auto' }}   />
            </Link>
            <Link to={`/product/${featuredProducts[0]._id}`} style={{ flex: '0 0 auto', width: '30%', marginRight: '20px', overflow: 'hidden' }}  >
            <Image src={featuredProducts[0].image} alt="Slide 1" style={{ width: '100%', height: 'auto' }}   />
            </Link> */}
            
            

            {/* <Image src="featured/unorev.jpg" alt="Slide 1" class="carousel-item" style={{width:'20%'}} />
            
            
            <Image src="featured/potion.jpg" alt="Slide 1" class="carousel-item" style={{width:'20%'}} />
            

            
            <Image src="featured/airbags.jpg" alt="Slide 1" class="carousel-item" style={{width:'20%'}} />
            
            
            <Image src="featured/anywhere.jpg" alt="Slide 1" class="carousel-item" style={{width:'20%'}} />
            

            <Image src="featured/frndart.jpg" alt="Slide 1" class="carousel-item" style={{width:'20%'}} />

            <Image src="featured/coldwheels.jpg" alt="Slide 1" class="carousel-item" style={{width:'25%'}} />

            <Image src="featured/stick.jpg" alt="Slide 1" class="carousel-item" style={{width:'20%'}} /> */}
            
            
            
        </div>    
        <button onClick={handleScrollLeft} className='left-btn'><GoArrowLeft style={{color:'white',margin:'0',padding:'0'}} /></button>
        <button onClick={handleScrollRight} className='right-btn'><GoArrowRight style={{color:'white',margin:'0',padding:'0'}} /></button>    
    </Section>    
    </>
  )
}

export default FeaturedProducts