import FeaturedCaption from "@components/Cards/FeaturedCaption";

export default function FeaturedCard({ featured }) {
  return (
    <header
      className="md:flex md:justify-between md:space-x-8 shadow-md md:shadow-none rounded-lg"
      key={featured.id}
    >
      <a href={featured.link} className="md:w-7/12">
        <img
          src={featured.thumbnail.url}
          className={`rounded-t-lg md:rounded-xl ${
            featured.thumbnail.mime == "image/png" && "bg-yellow-300 p-10"
          }`}
          alt={featured.thumbnail.name}
        />
      </a>
      <FeaturedCaption {...featured} />
    </header>
  );
}
