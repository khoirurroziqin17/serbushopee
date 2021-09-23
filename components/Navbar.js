import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { UilSlidersVAlt, UilSearch, UilTimes } from "@iconscout/react-unicons";
import Container from "@components/Container";
import RadioButton from "@components/RadioButton";

export default function Navbar({ categories, locations }) {
  const router = useRouter();

  const [search, setSearch] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [filter, setFilter] = useState(false);

  function doSearch(e) {
    e.preventDefault();

    router.push({
      pathname: "/search",
      query: {
        title: keyword,
      },
    });
  }

  return (
    <>
      <nav className="py-6">
        <Container>
          <div className="relative flex justify-between items-center gap-x-2">
            <div className="sm:w-4/12 lg:w-3/12">
              <Link href="/">
                <a className="flex items-center space-x-2">
                  <div className="bg-yellow-500 px-3 py-2 rounded-2xl text-white font-bold">
                    S2
                  </div>
                  <h1 className="md:text-2xl text-xl text-yellow-500 font-semibold">
                    SerbuShopee
                  </h1>
                </a>
              </Link>
            </div>
            <div className="sm:w-6/12 lg:w-7/12">
              <div
                className={`absolute sm:static left-0 right-0 transition-all ${
                  search ? "top-12" : "-top-28"
                }`}
              >
                <form onSubmit={doSearch}>
                  <input
                    onChange={(e) => setKeyword(e.target.value)}
                    className="w-full bg-gray-100 px-6 py-3 rounded-full outline-none"
                    placeholder="Cari..."
                  />
                </form>
              </div>
            </div>
            <div className="sm:w-2/12 flex justify-end gap-x-2 md:gap-x-0">
              <div
                className="max-w-max flex items-center bg-gray-100 px-3 py-2 rounded-lg cursor-pointer transition-all hover:bg-yellow-500 sm:hidden"
                onClick={() => {
                  setSearch(!search);
                }}
              >
                {search ? <UilTimes /> : <UilSearch />}
              </div>
              <div
                className="max-w-max flex items-center bg-gray-100 px-3 py-2 rounded-lg cursor-pointer transition-all hover:bg-yellow-500"
                onClick={() => {
                  setFilter(true);
                }}
              >
                <UilSlidersVAlt />{" "}
                <span className="ml-2 hidden md:block">Filter</span>
              </div>
            </div>
          </div>
        </Container>
      </nav>

      <div
        className={`fixed inset-0 justify-center items-center z-40 ${
          filter ? "flex" : "hidden"
        }`}
        onClick={() => {
          setFilter(!filter);
        }}
      >
        <div className="fixed inset-y-20 lg:max-w-3xl md:mx-40 max-w-lg overflow-y-auto mx-10 bg-white px-6 py-4 rounded-2xl shadow">
          <form action="/search">
            <h3 className="text-xl font-semibold">Filter</h3>
            <div className="mt-4">
              <h4 className="font-medium">Provinsi</h4>
              <div className="flex flex-wrap gap-2 mt-4">
                {locations.map((location) => (
                  <div key={location.id}>
                    <RadioButton
                      id={location.id}
                      name="location"
                      value={location.slug}
                      caption={location.name}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-medium">Kategori</h4>
              <div className="flex gap-2 flex-wrap mt-4">
                {categories.map((category) => (
                  <div key={category.id}>
                    <RadioButton
                      id={category.id}
                      name="category"
                      value={category.slug}
                      caption={category.name}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full py-2 rounded-md bg-yellow-500 text-white font-medium mt-10">
              Cari
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
