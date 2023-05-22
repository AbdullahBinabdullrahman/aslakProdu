import { BsFilePerson, BsFilePersonFill } from "react-icons/bs";

const PickView = ({ setState }) => {
  return (
    <>
      <div
        onClick={() => setState("auth")}
        className="flex flex-col justify-center p-2 rounded-md cursor-pointer h-96 w-96 group"
      >
        <BsFilePersonFill className="w-full h-full text-gray-300 transition-all group-hover:-translate-y-4 " />

        <span className="mt-2 text-3xl text-center text-gray-300 transition-all group-hover:text-gray-300 ">
          استلام النحاس
        </span>
      </div>

      <div
        onClick={() => setState("options")}
        className="flex flex-col justify-center p-2 rounded-md cursor-pointer h-96 w-96 group"
      >
        <BsFilePerson className="w-full h-full text-gray-300 transition-all group-hover:-translate-y-4 " />

        <span className="mt-2 text-3xl text-center text-gray-300 transition-all group-hover:text-gray-300 ">
          اسلاك معدنيه
        </span>
      </div>
    </>
  );
};

export default PickView;
