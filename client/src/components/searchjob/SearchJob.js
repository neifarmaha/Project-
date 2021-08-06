import React from "react";

import "./searchjob.css";

const SearchJob = () => {
  return (
  
      <form className="research">
        <div>
          <input
            className="search1"
            data-type="search"
            type="text"
            value=""
            placeholder="Search job title or keyword"
          />
        </div>

        <div>
          <input
            className="search2"
            type="text"
            data-type="location"
            placeholder="City, state or ZIP"
            value=""
          />
        </div>

        <div>
          {/* <button class="job_search_hide" type="button">
            Close
          </button> */}
          <input className="submit" type="submit" value="Search Jobs" />
        </div>
 </form>
  );
};

export default SearchJob;
