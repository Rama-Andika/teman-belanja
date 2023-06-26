import CarouselComponent from "./CarouselComponent";


const CategoryComponent = () => {
  const unsplashimg = {
    src: "https://source.unsplash.com/1600x900/?random",
    alt: "random unsplash image",
  };
  const array = [1, 2, 3];

  console.log(array);
  return (
    <>
      <div className="mt-5 border bg-white rounded-sm p-5 font-roboto text-[14px] ">
        <div className="mb-3">
          <p className="max-[252px]:text-[10px] max-[501px]:text-lg min-[760px]:text-lg">
            KATEGORI
          </p>
        </div>
        <CarouselComponent
          showArrows={true}
          autoPlay={false}
          infiniteLoop={false}
          showIndicators={false}
        
        >
          {array.map((i) => (
            <div key={i}>
              <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 max-[375px]:grid-cols-1 min-[1280px]:grid-cols-6 min-[1450px]:grid-cols-10 gap-2 ">
                <div
                  key={i}
                  className="transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border"
                >
                  <img
                    alt=""
                    src={unsplashimg.src}
                    className="h-[150px] object-cover object-center"
                  />
                  <div>Eletronik</div>
                </div>
                <div
                  key={i}
                  className="transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border"
                >
                  <img
                    alt=""
                    src={unsplashimg.src}
                    className="h-[150px] object-cover object-center"
                  />
                  <div>Komputer & aksesoris</div>
                </div>
                <div
                  key={i}
                  className="transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border"
                >
                  <img
                    alt=""
                    src={unsplashimg.src}
                    className="h-[150px] w-[100px] object-cover object-center"
                  />
                  <div>Handphone & aksesoris</div>
                </div>
                <div
                  key={i}
                  className="transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border"
                >
                  <img
                    alt=""
                    src={unsplashimg.src}
                    className="h-[150px] w-[100px] object-cover object-center"
                  />
                  <div>Pakaian Pria</div>
                </div>
                <div
                  key={i}
                  className="transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border"
                >
                  <img
                    alt=""
                    src={unsplashimg.src}
                    className="h-[150px] w-[100px] object-cover object-center"
                  />
                  <div>Sepatu Pria</div>
                </div>
                <div
                  key={i}
                  className="transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border"
                >
                  <img
                    alt=""
                    src={unsplashimg.src}
                    className="h-[150px] w-[100px] object-cover object-center"
                  />
                  <div>Tas Pria</div>
                </div>
                <div
                  key={i}
                  className="transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border"
                >
                  <img
                    alt=""
                    src={unsplashimg.src}
                    className="h-[150px] w-[100px] object-cover object-center"
                  />
                  <div>Aksesoris & fashion</div>
                </div>
                <div
                  key={i}
                  className="transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border"
                >
                  <img
                    alt=""
                    src={unsplashimg.src}
                    className="h-[150px] w-[100px] object-cover object-center"
                  />
                  <div>Jam tangan</div>
                </div>
                <div
                  key={i}
                  className="transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border"
                >
                  <img
                    alt=""
                    src={unsplashimg.src}
                    className="h-[150px] w-[100px] object-cover object-center"
                  />
                  <div>Kesehatan</div>
                </div>
                <div
                  key={i}
                  className="transition-all hover:scale-x-[1.05] hover:scale-y-[1.05] hover:shadow-lg border"
                >
                  <img
                    alt=""
                    src={unsplashimg.src}
                    className="h-[150px] w-[100px] object-cover object-center"
                  />
                  <div>Hobi & koleksi</div>
                </div>
              </div>
            </div>
          ))}
        </CarouselComponent>
      </div>
    </>
  );
};

export default CategoryComponent;
