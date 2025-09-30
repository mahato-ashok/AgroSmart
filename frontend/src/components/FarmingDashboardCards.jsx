import { Droplet, Sun, BarChart, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FarmingDashboardCards() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Irrigation System",
      description: "Monitor water levels, soil moisture, and control irrigation schedules",
      button: "View Analytics",
      icon: <Droplet className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Solar Monitoring",
      description: "Track solar panel performance and energy generation",
      button: "View Performance",
      icon: <Sun className="w-10 h-10 text-yellow-500" />,
    },
    {
      title: "Reports & Analytics",
      description: "Comprehensive reports and data analysis for your farm",
      button: "View Reports",
      icon: <BarChart className="w-10 h-10 text-blue-600" />,
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
        >
          <div className="mb-4">{card.icon}</div>
          <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
          <p className="text-gray-600 mb-4">{card.description}</p>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-green-600 text-white rounded-xl hover:scale-105 duration-200"
          >
            {card.button}
          </button>
        </div>
      ))}

      {/* Add New Device Card */}
      <div
        onClick={() => navigate("/dashboard")}
        className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition cursor-pointer"
      >
        <Plus className="w-12 h-12 text-gray-500 mb-2" />
        <h2 className="text-lg font-medium text-gray-600">Add New Device</h2>
      </div>
    </div>
  );
}

