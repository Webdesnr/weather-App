import { useRef } from "react";

function Search({ onSearch }) {
  const searchRef = useRef(null);

  return (
    <div className="d-flex w-75 mx-auto mb-5">
      <input
        ref={searchRef}
        type="text"
        placeholder="Enter a city"
        className="form-control"
      />
      <button
        className="btn btn-primary ms-2"
        onClick={() => onSearch(searchRef.current.value)}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
