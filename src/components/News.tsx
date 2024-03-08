import Divider from "../components/Divider";
import SwiperNews from "./SwiperNews";
const News = () => {
  return (
    <div className="bg-[#114b5f] h-[78vh]">
      <Divider borderText="News" />
      <div className="flex justify-center bg-gradient-to-t from-gray-200 to-[#114b5f] h-[50vh] mt-[3rem]">
  
        <SwiperNews />

      
      </div>
    </div>
  );
};

export default News;
