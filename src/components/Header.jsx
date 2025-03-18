import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Techno Corporation</h1>
      <nav>
        <ul className="flex gap-4">
          <li><a href="#" className="hover:underline">Trang chủ</a></li>
          <li><a href="#" className="hover:underline">Sản phẩm</a></li>
          <li><a href="#" className="hover:underline">Liên hệ</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
