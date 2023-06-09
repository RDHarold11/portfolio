import React, { useEffect, useState } from "react";
import Button from "./Button";

const Work = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const fetchData = async () => {
    const res = await fetch(
      "https://portfolio-api-ezns.onrender.com/projects"
    );
    const dataRes = await res.json();
    setData(dataRes);
  };

  const handleFilter = (cat) => {
    if (cat === "All") {
      fetchData();
      return;
    }
    const newItem = data.filter((item) => item.category === cat);
    setData(newItem);
  };
  /* const filtrarData = () => {
    const allCategories = [
      "All",
      ...new Set(data.map((item) => item.category)),
    ];
    setCategories(allCategories);
  }; */

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section
      name="work"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6 font-bold">You can see all my projects below.</p>
          <Button handleFilter={handleFilter} category="All"></Button>
          <Button handleFilter={handleFilter} category="React"></Button>
          <Button handleFilter={handleFilter} category="Html"></Button>
          <Button handleFilter={handleFilter} category="Api"></Button>
          <Button handleFilter={handleFilter} category="Mern"></Button>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {data.map((item, index) => {
            const { id, img, title, linkDemo, linkCode } = item;
            return (
              <div
                key={index}
                style={{ backgroundImage: `url(${img})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
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
        </div>
      </div>
    </section>
  );
};

export default Work;
