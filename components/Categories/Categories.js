import CategoryCard from "@components/Categories/CategoryCard";

export default function Categories({ categories }) {
  return (
    <div className="flex space-x-6 bg-gray-50 px-4 py-2 rounded-lg mt-2 overflow-x-auto">
      <CategoryCard categories={categories} />
    </div>
  );
}
