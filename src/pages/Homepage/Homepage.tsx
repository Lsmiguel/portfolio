import banner from "../../assets/banner/banner.jpg";

export const Homepage = () => {
  return (
    <div className="relative">
      <img src={banner} style={{height: "900px"}} alt="" className="w-full" />
      <div className="absolute top-0 left-0 z-10 text-center w-full h-screen flex flex-col justify-center items-center">
        <p>-2024-</p>
        <div>
          <h1 className="text-9xl">Olá!</h1>
          <h1 className="text-7xl">Eu sou o Miguel, bem vindo.</h1>
        </div>
      </div>
    </div>
  );
};

{/* <div className="bg-p21 mt-10" style={{height: "200px"}}>
            <p>tedssdf</p>
        </div> */}