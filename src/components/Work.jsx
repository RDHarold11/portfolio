import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
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
    <section
      name="work"
      className="w-full py-[40px]  mx-auto text-gray-300 fondo"
    >
      <div className="max-w-[950px] mx-auto p-4 flex flex-col items-center justify-center w-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6 font-bold ">You can see all my projects below.</p>
          {categories.map((item, index) => (
            <Button key={index} category={item} setCategory={setCategory} />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 ">
          <Fade direction="right">
            {filteredData?.map((item) => {
              const {
                _id,
                img,
                title,
                linkDemo,
                linkCode,
                category,
                color,
                description,
              } = item;
              return (
                <article
                  key={_id}
                  className="rounded h-full top"
                  style={{ backgroundColor: `#${color}` }}
                >
                  <main className="px-5">
                    <div className="pb-[43px] pt-2">
                      <h4 className="font-bold mt-2 ">{category}</h4>
                      <h2 className="capitalize font-bold text-3xl my-1">
                        {title}
                      </h2>
                      <div>
                        <p>{description}</p>
                      </div>
                    </div>
                    <div className="">
                      <img src={img} alt="" className="w-full h-full m-0" />
                    </div>
                  </main>
                  <div className="details flex items-center justify-center">
                    <button className="text-white mr-2 rounded bg-[#B799FF] px-5 py-3">
                      <a href={linkDemo}>Demo</a>
                    </button>
                    <button className="text-gray-950 rounded bg-[#fff] px-5 py-3">
                      <a href={linkCode}>Code</a>
                    </button>
                  </div>
                </article>
              );
            })}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Work;
