import Link from "next/link";

export default function CardCaption({ category, link, title, location }) {
  return (
    <div className="px-2 py-3">
      <Link href={"/c/" + category.slug}>
        <a>
          <p className="text-sm">{category.name}</p>
        </a>
      </Link>
      <a href={link}>
        <h4 className="md:text-lg font-semibold mt-2">{title}</h4>
      </a>
      <Link href={"/l/" + location.slug}>
        <a>
          <p className="mt-4">{location.name}</p>
        </a>
      </Link>
    </div>
  );
}
