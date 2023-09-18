import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: "gym101",
      name: "FitZone",
      features: [
        "Cardio equipment",
        "Weightlifting area",
        "Yoga classes",
        "Locker rooms",
        "Yoga classes",
        "Locker rooms",
        "Nutrition counseling",
      ],
      price: "$60",
    },
    {
      id: "gym202",
      name: "PowerGym",
      features: [
        "Strength training",
        "Spinning classes",
        "Sauna",
        "Childcare services",
        "Free Wi-Fi",
      ],
      price: "$55",
    },
    {
      id: "gym303",
      name: "ActiveLife Fitness",
      features: [
        "Indoor track",
        "Pilates studio",
        "Group fitness classes",
        "Swimming pool",
        "Personal training",
        "Swimming pool",
        "Personal training",
      ],
      price: "$70",
    },
    {
      id: "gym404",
      name: "HealthHub",
      features: [
        "Treadmills",
        "Cycling studio",
        "Jacuzzi",
        "Massage therapy",
        "Smoothie bar",
      ],
      price: "$75",
    },
    {
      id: "gym505",
      name: "FitLife Express",
      features: [
        "24/7 access",
        "Functional training",
        "Zumba classes",
        "Steam room",
        "Dietitian consultation",
      ],
      price: "$50",
    },
  ];

  return (
    <div>
      <h2 className="text-5xl">Best Prices in the town</h2>
      <div className="grid md:grid-cols-3 gap-6 my-4">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
