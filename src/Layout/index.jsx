// import React from "react";
// import Header from "../shared/Header";
// import Footer from "../shared/Footer";

// const Layout = ({ children }) => {
//   return (
//     <>
//       <Header />

//       <main>{children}</main>

//       <Footer />
//     </>
//   );
// };

// export default Layout;
// import React from "react";
// import { Outlet } from "react-router-dom";
// import Footer from "../shared/Footer";
// import Header from "../shared/Header";

// const Layout = () => {
//   return (
//     <div className="min-h-screen bg-[#070b1a]">
//       <Header />

//       <main>
//         <Outlet />
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Layout;

import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../shared/Header";
import Footer from "../shared/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#070b1a]">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
