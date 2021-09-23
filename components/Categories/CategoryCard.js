import Link from "next/link";

export default function CategoryCard({ categories }) {
  return (
    <>
      {categories.map((category) => (
        <Link key={category.id} href={"/c/" + category.slug}>
          <a className="flex-none w-24 grid grid-rows-4 text-center px-2 py-1 rounded-md">
            <div className="flex items-center row-span-3 py-1">
              <img
                src={category.thumbnail.formats.thumbnail.url}
                alt={category.thumbnail.name}
                className=""
              />
            </div>
            <div className="text-sm row-span-1 leading-tight">
              {category.name}
            </div>
          </a>
        </Link>
      ))}
    </>
  );
}
