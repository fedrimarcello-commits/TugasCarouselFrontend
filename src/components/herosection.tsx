"use client"
import Carousel from 'react-bootstrap/Carousel';

interface Slide {
    title: string;
    subtitle: string;
    imageUrl: string;
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            title: "First slide label",
            subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, nisi.",
            imageUrl: "/images/banner_01.jpeg",
        },
        {
            title: "Second slide label",
            subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum!",
            imageUrl: "/images/banner_02.jpeg",
        },
        {
            title: "Third slide label",
            subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            imageUrl: "/images/banner_03.jpeg",
        }
    ]

    return (
        <Carousel fade interval={ 4000 } data-bs-theme="dark">
            { slides.map((slide, index) => (
                <Carousel.Item key={ index }>
                    <div
                        style={{
                            backgroundImage:`url(${ slide.imageUrl})`,
                            backgroundSize:"cover",
                            backgroundPosition:"center",
                            height:"60vh",
                        }}>
                    </div>
                    <Carousel.Caption>
                        <h1 className="display-4 fw-bold">{ slide.title }</h1>
                        <p className="lead">{ slide.subtitle }</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
            )}
        </Carousel>
    )
}

export default HeroSection;