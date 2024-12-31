import { FC } from "react";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
interface IPaginationProps {
  prevPage: () => void;
  nextPage: () => void;
  page: number;
  total: number;
}
const Pagination: FC<IPaginationProps> = ({
  page,
  prevPage,
  nextPage,
  total,
}) => {
  const limitPage = 5;

  return (
    <div className="flex items-center justify-center gap-3">
      <button disabled={total >= page * limitPage} onClick={prevPage}>
        <FaAngleLeft
          className={`w-7 h-7 ${
            total <= page * limitPage
              ? "text-borderColor  hover:text-buttonHoverColor transition-all duration-150 ease-in-out"
              : "text-gray-400"
          }`}
        />
      </button>

      <p className="text-3xl">{page}</p>

      <button disabled={total <= page * limitPage} onClick={nextPage}>
        <FaAngleRight
          className={`w-7 h-7 ${
            total >= page * limitPage
              ? "text-borderColor  hover:text-buttonHoverColor transition-all duration-150 ease-in-out"
              : "text-gray-400"
          }`}
        />
      </button>
    </div>
  );
};

export default Pagination;
