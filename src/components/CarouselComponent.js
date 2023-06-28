import { Carousel } from "react-responsive-carousel";

export default function CarouselComponent({
  width,
  showArrows,
  autoPlay,
  infiniteLoop,
  showIndicators,
  verticalSwipe,
  className,
  renderArrowNext,
  renderArrowPrev,
  swipeable,
  children,
}) {
  return (
    <div className="">
      <Carousel
        width={width}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
        verticalSwipe={verticalSwipe}
        showArrows={showArrows}
        showThumbs={false}
        showStatus={false}
        autoPlay={autoPlay}
        infiniteLoop={infiniteLoop}
        showIndicators={showIndicators}
        className={className}
        renderArrowNext={renderArrowNext}
        renderArrowPrev={renderArrowPrev}
        swipeable={swipeable}
      >
        {children}
      </Carousel>
    </div>
  );
}
