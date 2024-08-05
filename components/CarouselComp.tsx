// import Carousel from 'react-bootstrap/Carousel';
// import { Image } from 'react-bootstrap';
import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/image.png'

export interface CarouselImage {
  src: string;
  alt?: string;
  caption?: string;
  description?: string;
}

export interface ImageCarouselProps {
  images: CarouselImage[];
}

export const CarouselComp: React.FC<ImageCarouselProps> = ({ images }) => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <div style={{ height: '80vh' }}> {/* Adjust this height as needed */}
            <Image
              src={image.src}
              alt={image.alt || `Slide ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'blur(2px)', // Add blur effect
                transform: 'scale(1)'
              }}
            />
          </div>
          {(image.caption || image.description) && (
            <Carousel.Caption
              style={{
                left: '10%',
                right: '10%',
                bottom: '20px',
                textAlign: 'left',
                background: 'rgba(0,0,0,0.5)',
                padding: '20px',
                borderRadius: '5px'
              }}
            >
              {image.caption && <h3 style={{ marginBottom: '10px' }}>{image.caption}</h3>}
              {image.description && <p style={{ fontSize: '0.9rem' }}>{image.description}</p>}
            </Carousel.Caption>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

// export const CarouselComp : React.FC = () =>{

//     return(
//     <Carousel>
//         <Carousel.Item interval={500}>
//             <Image src ="C:/Users/HP/Desktop/nextjs-blog/blogr-nextjs-prisma/assets/image.png" fluid />
//             <Carousel.Caption>
//             <h3>Seifert ERESCO MF4 Portable Industrial X-ray Generators</h3>
//             <p>Rely on the highest radiation stability and performance with ultra-low ripple ±1% even with low-density materials (e. g. aluminium, composites and plastics).</p>
//             </Carousel.Caption>
//         </Carousel.Item>
//         {/* <Carousel.Item interval={500}>
//             <ExampleCarouselImage text="Second slide" />
//             <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//             <ExampleCarouselImage text="Third slide" />
//             <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//             </Carousel.Caption>
//         </Carousel.Item> */}
//     </Carousel>
//     )
// }