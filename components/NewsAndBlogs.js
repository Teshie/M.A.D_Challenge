import React from "react";

const NewsAndBlogs = ({ data }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10 space-y-4">
        <div className="flex flex-col justify-center items-center">
          <span className="text-xl font-bold">STAY INFORMED</span>
          <span className="text-5xl text-red-900 font-extrabold">
            News & Blogs
          </span>
        </div>
        <div className="grid grid-cols-3 gap-4 p-4">
          {data.articles.map((items) => {
            return (
              <div className="flex flex-col">
                <div>
                  <img src={items?.urlToImage} />
                </div>
                <div>
                  {" "}
                  <span className="font-semibold">
                    {items?.title} -{" "}
                    <span className="text-bold text-red-900">
                      {items?.source?.name}
                    </span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsAndBlogs;
