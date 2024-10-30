import axios from "axios";
import React, { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroller";

const PeopleList = () => {
  const initialUrl = "https://swapi.dev/api/people/";

  const fetchUrl = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };

  const { data, fetchNextPage, hasNextPage, isError, isFetching, isLoading } =
    useInfiniteQuery({
      queryKey: ["sw-people"],
      queryFn: ({ pageParam = initialUrl }) => fetchUrl(pageParam),
      getNextPageParam: (lastPage) => {
        return lastPage.next || undefined;
      },
    });

  const handleMore = () => {
    if (!isFetching && hasNextPage) {
      fetchNextPage();
    }

    // console.log(data);
  };

  useEffect(() => {
    data && console.log(data);
  }, [data]);

  return (
    <div className="p-10">
      <div className=" text-center ">
        <h1 className="font-extrabold text-2xl">Courses list</h1>
        <p className="w-fit shadow-2xl mx-auto bg-gray-200">get data with useInfiniteQuery</p>
      </div>
      <InfiniteScroll
        hasMore={hasNextPage}
        loadMore={handleMore}
        className="flex flex-wrap gap-5 justify-around mt-4"
      >
        {data &&
          data.pages.map((item1) => {
            return item1.results.map((item2) => {
              return (
                <div className="border  w-[20%]  rounded-xl p-8 shadow-2xl  dark:border-slate-400 ">
                  <div className="  rounded-xl shadow-inner bg-[#F0F0F0]">
                    <img className="mx-auto" src="" alt="" />
                  </div>
                  <div className=" text-center flex flex-col gap-3">
                    <h2 className="font-bold mt-4 xl:mt-4 truncate cursor-pointer  h-6"></h2>
                    <h2 className=" h-6">name : {item2.name} </h2>
                    <h2 className=" h-6">height : {item2.height} </h2>
                    <h2 className=" h-6">gender : {item2.gender} </h2>
                    <div className="flex justify-around"></div>
                  </div>
                </div>
              );
            });
          })}
      </InfiniteScroll>
    </div>
  );
};

export default PeopleList;
