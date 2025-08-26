import { Link } from "react-router-dom";
import { Service } from "@/data/services";

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="bg-zinc-900 rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition">
      <img
        src={service.imageUrl}
        alt={service.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-6 flex flex-col gap-3">
        <h3 className="text-xl font-bold">{service.title}</h3>
        <p className="text-gray-400 text-sm">{service.description}</p>
        <Link
          to={service.link}
          className="mt-2 inline-block text-sm font-semibold text-purple-400 hover:text-purple-300 transition"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
