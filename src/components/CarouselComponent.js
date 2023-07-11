import { Carousel } from "react-responsive-carousel";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

export default function CarouselComponent({
  width,
  showArrows,
  autoPlay,
  infiniteLoop,
  showIndicators,
  verticalSwipe,
  className,
  swipeable,
  children,
}) {
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    cursor: "pointer",
  };
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
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles }}
              className="left-0 flex justify-center items-center rounded-full shadow-xl bg-white w-[30px] h-[30px] group-hover:w-[50px] group-hover:h-[50px]"
            >
              <RiArrowLeftSLine className=" text-slate-500 group-hover:text-[50px]" />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles }}
              className="right-0 flex justify-center items-center rounded-full shadow-xl bg-white w-[30px] h-[30px] group-hover:w-[50px] group-hover:h-[50px]"
            >
              <RiArrowRightSLine className="text-center text-slate-500 group-hover:text-[50px]" />
            </button>
          )
        }
        swipeable={swipeable}
      >
        {children}
      </Carousel>
    </div>
  );
}
