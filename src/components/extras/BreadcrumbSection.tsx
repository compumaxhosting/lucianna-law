export default function BreadcrumbSection({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  return (
    <div className="py-10 md:py-16 px-6 text-white border-b border-lightBlue/30">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <p className="text-lg text-gray-300 mt-2">{path}</p>
      </div>
    </div>
  );
}
