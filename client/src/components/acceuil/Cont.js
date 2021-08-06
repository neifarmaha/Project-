import React from "react";
import "./cont.css";

const Cont = () => {
  return (
    <main>
      <div className="options">
        <div  class="homepage_products_item">
          <i class="magnifying-glass">
            <svg width="60" height="80" viewBox="0 0 64 64" >
              <path
                d="M44.247 42.833L57.71 56.295a1 1 0 01-1.415 1.415L42.833 44.247A21.92 21.92 0 0128 50C15.85 50 6 40.15 6 28S15.85 6 28 6s22 9.85 22 22a21.92 21.92 0 01-5.753 14.833zm-1.832-.97A19.933 19.933 0 0048 28c0-11.046-8.954-20-20-20S8 16.954 8 28s8.954 20 20 20c5.433 0 10.36-2.166 13.965-5.682a2.02 2.02 0 01.45-.454z"
                fill="#040E22"
              >
                 
              </path>
            </svg>
          </i>
          <h3> Find the Right Job</h3>
        </div>

        <div class="homepage_products_item">
          <i  >
            <svg width="60" height="80" viewBox="0 0 64 64">
              <path
                d="M46.972 54.316c.362.897-.421 1.868-1.354 1.654-4.335-.993-7.974-2.66-10.938-4.672-.886.008-1.78.008-2.68.008-14.312 0-26-9.552-26-21.6C6 17.657 17.688 8 32 8s26 9.657 26 21.706c0 7.556-4.643 14.334-12.072 18.27-.117 2.233.185 4.207 1.044 6.34zm-3.055-6.404c-.016-.435.292-1.053.674-1.245C51.789 43.036 56 36.818 56 29.772 56 18.762 45.437 10 32 10S8 18.762 8 29.772c0 11.01 10.563 19.662 24 19.662h2.953c.287 0 .572.286.808.454 2.372 1.686 5.616 3.102 8.989 4.112-.347-1.978-.75-3.902-.833-6.088z"
                fill="#040E22"
              ></path>
            </svg>
          </i>
          <h3> Search Companies</h3>
        </div>

         <div class="homepage_products_item">
          <i class="dollar-sign-in-circle mb-0 mb-lg-xsm">
            <svg width="60" height="80" viewBox="0 0 64 64">
              <path
                d="M32 58C17.64 58 6 46.36 6 32S17.64 6 32 6s26 11.64 26 26-11.64 26-26 26zm0-2c13.255 0 24-10.745 24-24S45.255 8 32 8 8 18.745 8 32s10.745 24 24 24z"
                fill="#040E22"
              ></path>
            </svg>
          </i>
          <h3> Compare Salaries </h3>
        </div> 


        <div class="homepage_products_item">
          <i class="briedcase mb-0 mb-lg-xsm">
            <svg width="60" height="80" viewBox="0 0 64 64">
              <path
                d="M16 16v-4a4 4 0 014-4h24a4 4 0 014 4v4h7a4 4 0 014 4v18a4.002 4.002 0 01-3 3.874V52a4 4 0 01-4 4H12a4 4 0 01-4-4V41.874A4.002 4.002 0 015 38V20a4 4 0 014-4h7zm0 2H9a2 2 0 00-2 2v18a2 2 0 002 2h10l2 6h20.996L44 40h11a2 2 0 002-2V20a2 2 0 00-2-2H16zm-6 24v10a2 2 0 002 2h40a2 2 0 002-2V42h-8.004L44 48H18.996L17 42h-7zm8-26h28v-4a2 2 0 00-2-2H20a2 2 0 00-2 2v4zm7 22h14a1 1 0 010 2H25a1 1 0 010-2z"
                fill="#040E22"
              >
                {" "}
              </path>
            </svg>
          </i>
          <h3> Apply To Jobs</h3>
        </div>

        
      </div>
    </main>
  );
};
export default Cont;
