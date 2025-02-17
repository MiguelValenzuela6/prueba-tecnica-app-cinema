import type React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../store/slices/paginationSlice";
import type { RootState } from "../store/store";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination: React.FC = () => {
  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector(
    (state: RootState) => state.pagination
  );

  const handlePageChange = (newPage: number) => {
    dispatch(setCurrentPage(newPage));
  };

  return (

    <div className="mt-8 flex justify-center items-center space-x-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <span className="text-sm">
        Página {currentPage} de {totalPages}
      </span>
      <Button
        variant="outline"
        size="icon"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Pagination;
