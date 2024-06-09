export default function Card({ title, description }) {
  return (
    <div className="border rounded-md border-gray-600 p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
