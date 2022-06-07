import SliderImg from '../../assets/img/jguchi.jpeg'
import Slider from "react-slick";

const SliderSlick = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500
  };
  return (
    <div>
      <Slider {...settings} className='slider__wrapper'>
        <div className='slider__img'>
          <img src={SliderImg} alt=""/>
        </div>
        <div className='slider__img'>
          <img src={SliderImg} alt=""/>
        </div>
        <div className='slider__img'>
          <img src={SliderImg} alt=""/>
        </div>
        <div className='slider__img'>
          <img src='https://dodopizza-a.akamaihd.net/static/Img/Products/7f300e9640544285ad377cd6ffcacc5e_292x292.jpeg' alt=""/>
        </div>
        <div className='slider__img'>
          <img src={SliderImg} alt=""/>
        </div>
        <div className='slider__img'>
          <img src={SliderImg} alt=""/>
        </div>
      </Slider>
    </div>
  );
};

export default SliderSlick;
