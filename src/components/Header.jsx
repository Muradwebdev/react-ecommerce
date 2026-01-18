import { useState } from "react";
import NavItems from "./NavItems";

const Header = () => {
  const [headerFixed, setHeaderFixed] = useState(false);

  return (
    <header
      className={`header-section style-4 ${headerFixed ? "header-fixed" : ""}`}
    >
      <NavItems headerFixed={headerFixed} setHeaderFixed={setHeaderFixed}/>
    </header>
  );
};

export default Header;
