import Container from "@components/Container";
import Cards from "@components/Cards/Card";
import NoResult from "@components/NoResult";

export async function getServerSideProps({ params: { slug } }) {
  const reqLocation = await fetch(
    process.env.NEXT_PUBLIC_APIURL + "/locations?slug=" + slug
  );
  const location = await reqLocation.json();

  const reqLocationProducts = await fetch(
    process.env.NEXT_PUBLIC_APIURL + "/products?location.slug=" + slug
  );
  const locationProducts = await reqLocationProducts.json();

  return {
    props: { location: location[0], locationProducts },
  };
}

export default function Locations({ location, locationProducts }) {
  return (
    <main className="py-6 md:py-10">
      <Container>
        <div className="flex justify-center">
          <h2 className="text-xl">
            Location : <span className="font-semibold">{location.name}</span>
          </h2>
        </div>
        <div className="mt-10">
          {!locationProducts.length ? (
            <NoResult name={location.name} text="lokasi" />
          ) : (
            <Cards products={locationProducts} />
          )}
        </div>
      </Container>
    </main>
  );
}
