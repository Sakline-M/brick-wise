import MapComponent from "../../components/Map/Map";

const Investments = () => {
  return (
    <div className="pt-20 px-5">
      <span className="text-5xl font-semibold">Investments</span>
      <div className="w-full flex">
        <div className="w-[70%]">
            <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default Investments;
