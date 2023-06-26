import { Carousel } from "react-responsive-carousel";


export default function CarouselComponent({showArrows, autoPlay, infiniteLoop, showIndicators, verticalSwipe, children}) {
  return (
    <div className="">
      <Carousel preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={50} verticalSwipe={verticalSwipe} showArrows={showArrows} showThumbs={false} showStatus={false} autoPlay={autoPlay} infiniteLoop={infiniteLoop} showIndicators={showIndicators} >
        {children}
      </Carousel>
    </div>
  );
}
