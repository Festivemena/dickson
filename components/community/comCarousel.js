import React from "react";
import Carousel from "react-multi-carousel";
import classNames from "classnames";
import Image from 'next/image';
import BG from '../../assets/1.png'
import BA from '../../assets/2.png'
import BY from '../../assets/3.png'
import BM from '../../assets/4.png'
import BQ from '../../assets/5.png'
import BW from '../../assets/6.png'
import BE from '../../assets/Rectangle885.png'
import "react-multi-carousel/lib/styles.css";
import Commun from "./Commun";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3,
    slidesToSlide: 2,
    partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 200
    },
    items: 3,
    slidesToSlide: 2,
    partialVisibilityGutter: 30
  }
};



class Comcarousel extends React.PureComponent {
  render() {
    const { deviceType } = this.props;

    const CustomDot = ({
      index,
      onClick,
      active
    }) => {
      return (
        <button
          onClick={e => {
            onClick();
            e.preventDefault();
          }}
          className={classNames("custom-dot", {
            "custom-dot--active": active
          })}
        >
         
        </button>
      );
    };
    return (
      <Carousel
      swipeable={true}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  keyBoardControl={true}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="react-multi-carousel-dot-list"
  itemClass="carousel-item-padding-40-px"
      >
        <div className="">
       <Commun />
        </div>
        <div className="">
       <Commun />
        </div>
        <div className="">
        <Commun />
         </div>
         <div className="">
         <Commun />
          </div>
          <div className="">
          <Commun />
           </div>
           <div className="">
           <Commun />
            </div>
      </Carousel>
    );
  }
}

export default Comcarousel;

