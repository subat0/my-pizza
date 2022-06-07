import pictureSlider from '../../../'
const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/4f760d108a3f47fea43520d234157ac2_292x292.jpeg" alt=""/>
        </div>
        <div>
          <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/4f760d108a3f47fea43520d234157ac2_292x292.jpeg" alt=""/>
        </div>
        <div>
          <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/4f760d108a3f47fea43520d234157ac2_292x292.jpeg" alt=""/>
        </div>
        <div>
          <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/4f760d108a3f47fea43520d234157ac2_292x292.jpeg" alt=""/>
        </div>
        <div>
          <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/4f760d108a3f47fea43520d234157ac2_292x292.jpeg" alt=""/>
        </div>
        <div>
          <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/4f760d108a3f47fea43520d234157ac2_292x292.jpeg" alt=""/>
        </div>
      </Slider>
    </div>
  );
};

export default Slider;
