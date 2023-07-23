import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Tilt } from "react-tilt";
import { defaultOptions } from "../options";

import Button from "./Button";
import Loading from "./Loading";

const Work = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const categories = ["All", ...new Set(data.map((item) => item.category))];

  const fetchData = async () => {
    const res = await fetch("https://portfolio-api-ezns.onrender.com/projects");
    const dataRes = await res.json();
    setData(dataRes);
    setLoading(false);
  };

  const filteredData =
    category !== "All"
      ? data.filter((item) => {
          return item.category.toLowerCase().includes(category.toLowerCase());
        })
      : data;

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section name="work" className="w-full py-[40px]  mx-auto text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6 font-bold">You can see all my projects below.</p>
          {categories.map((item, index) => (
            <Button key={index} category={item} setCategory={setCategory} />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          <Fade direction="right">
            {filteredData?.map((item) => {
              const { _id, img, title, linkDemo, linkCode } = item;
              return (
                <div
                  key={_id}
                  style={{ backgroundImage: `url(${img})` }}
                  className="shadow-lg shadow-[#040c16] group container  rounded-md flex justify-center items-center mx-auto content-div"
                >
                  <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl flex items-center justify-center font-bold text-white tracking-wider text-center">
                      {title}
                    </span>
                    <div className="pt-8 text-center">
                      <a href={linkDemo}>
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                          {linkDemo ? "Demo" : ""}
                        </button>
                      </a>
                      <a href={linkCode}>
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                          Code
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Work;
