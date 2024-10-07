const ObjectCard = () => {
  return (
    <div className="w-full bg-white rounded-xl flex flex-col shadow-md">
      <img
        src="https://cdn.brickwise.at/8b6082de-6d59-41af-98f3-176671168ef1.jpg"
        alt=""
        className="w-full h-[11rem] object-cover rounded-t-xl"
      />
      <div className="w-full h-full p-3 flex flex-col gap-y-3">
        <span className="text-zinc-600 font-semibold">
          Randhartingergasse 9, Wien
        </span>
        <div className="bg-[#F1F5F6] w-full h-[4rem] rounded-xl flex flex-col items-center justify-center">
          <span className="text-[#1F847F] font-bold">6,81 % p.a.</span>
          <span className="text-zinc-500 font-semibold text-sm">
            Renditepotenzial 10J
          </span>
        </div>
      </div>
    </div>
  );
};

export default ObjectCard;
