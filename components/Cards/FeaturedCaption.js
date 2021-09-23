import Link from "next/link";

export default function FeaturedCaption({ category, link, title, location }) {
  return (
    <div className="md:w-5/12 px-2 py-4 md:py-0 md:px-0 md:mt-0">
      <Link href={`/c/${category.slug}`}>
        <a>
          <p className="font-medium">{category.name}</p>
        </a>
      </Link>
      <a href={link}>
        <h2 className="lg:text-2xl text-xl font-bold mt-4">{title}</h2>
      </a>
      <Link href={`/l/${location.slug}`}>
        <a>
          <p className="font-medium mt-8">{location.name}</p>
        </a>
      </Link>
    </div>
  );
}
