// import React, { useState } from "react";
// import "./companyform.css";

// const CompanyForm = () => {
//   const [website, setWebsite] = useState("");
//   const [companyName, setCompanyName] = useState("");
//   const [phoneNumber,setPhoneNumber] = useState("");
//   const [location,setLocation] = useState("");
//   return (
//     <div className="form-inputs">
//       <h1> Tell Us About Your Company </h1>
//       <form name="companyForm" method="POST">
//         <div>
          
//           <input
//             type="text"
//             name="org_name"
//             className="orgname"
//             onChange={(e) => setCompanyName(e.target.value)}
//             value={companyName}
//             placeholder="  Company Name"
//             required
//           />
//         </div>

        {/* <div>
           
          <select name="requested_plan" className="requestedplan">
            <option
              value=""
              selected="selected"
              placeholder="  - How many jobs do you need to fill? -"
            >
               - How many jobs do you need to fill? -
            </option>
            <option value="starter#1" id="requested_plan_user_create_form.1">
              1 job
            </option>
            <option value="starter" id="requested_plan_user_create_form.2">
              2 to 3 jobs
            </option>
            <option value="team" id="requested_plan_user_create_form.3">
              4 to 10 jobs
            </option>
            <option value="company" id="requested_plan_user_create_form.4">
              11 to 20 jobs
            </option>
            <option value="big_50" id="requested_plan_user_create_form.5">
              21 to 50 jobs
            </option>
            <option value="big_100" id="requested_plan_user_create_form.6">
              50 to 100 jobs
            </option>
            <option value="big_250" id="requested_plan_user_create_form.7">
              100 to 250 jobs
            </option>
            <option value="big_250_plus" id="requested_plan_user_create_form.8">
              250+ jobs
            </option>
          </select>
        </div> */}
//         <div>
//           <input
//             type="text"
//             className="phonenumber"
//             name="phonenumber"
//             placeholder="Phone Number"
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             value={phoneNumber}
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             className="location"
//             name="location"
//             placeholder="Location"
//             onChange={(e) => setLocation(e.target.value)}
//             value={location}
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             className="website"
//             name="website"
//             placeholder="Company Website (optional)"
//             onChange={(e) => setWebsite(e.target.value)}
//             value={website}
//             required
//           />
//         </div>
//         <div>
//         <button class="multi_back" type="button">
//             Previous Step
//           </button>
//           <button class="multi_submit" type="button">
//             Continue
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default CompanyForm;
