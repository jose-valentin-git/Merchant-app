import { getPaginatationRange } from "../utils/PaginationRange";
const Pagination = (props: any) => {
  let array = getPaginatationRange(
    props.totalPage,
    props.page,
    props.limit,
    props.sibling
  );
  return (
    <nav
      aria-label="..."
      className=" mt-3 d-flex align-items-center justify-content-center"
    >
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => props.onPageChange("previous")}
          >
            Previous
          </button>
        </li>
        {/* for going to first page << */}
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => props.onPageChange("&laquo;")}
          >
            &laquo;
          </button>
        </li>
        {array.map((value) => {
          // highlight the page number in paginatation , to know on which page we are
          if (value === props.page) {
            return (
              <li key={value} className="page-item active">
                <span
                  className="page-link"
                  onClick={() => props.onPageChange(value)}
                >
                  {value}
                </span>
              </li>
            );
          }
          // pages will not get highlighted
          else {
            return (
              <li key={value} className="page-item">
                <span
                  className="page-link"
                  onClick={() => props.onPageChange(value)}
                >
                  {value}
                </span>
              </li>
            );
          }
        })}
        {/* for going to last page >> */}
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => props.onPageChange("&raquo;")}
          >
            &raquo;
          </button>
        </li>

        <li className="page-item">
          <button
            className="page-link"
            onClick={() => props.onPageChange("next")}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
