import React, { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  return (
    <div className="bg-blue-600 p-6 w-3/12">
      <div className="flex flex-col pt-4 pb-64">
        <Link
          href="/"
          style={activeLink === 0 ? { fontWeight: "bold" } : {}}
          onClick={() => {
            setActiveLink(0);
          }}
        >
          <p className="text-white font-medium text-2xl cursor-pointer">
            {" "}
            Author
          </p>
        </Link>

        <Link
          href={"./FavoriteAuthor"}
          style={activeLink === 1 ? { fontWeight: "bold", color: "green" } : {}}
          onClick={() => {
            setActiveLink(1);
          }}
        >
          <p className="text-white font-medium text-2xl mt-6 cursor-pointer">
            {" "}
            Favourite Author
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
