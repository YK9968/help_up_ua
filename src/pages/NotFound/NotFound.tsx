import img404 from "../../assets/img/404.png";

const NotFound = () => {
  return (
    <div className="relative w-full h-full">
      <img
        className="absolute -bottom-[650px] left-1/2 transform -translate-x-1/2  w-[700px] h-[700px]"
        src={img404}
        alt="image 404"
      />
    </div>
  );
};

export default NotFound;
