import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const navLinks = [
  { caption: "Products", to: "products" },
  { caption: "Resources", to: "resources" },
  { caption: "Company", to: "company" },
  { caption: "Pricing", to: "pricing" },
];

export const Navigation = () => {
  const renderedNavList = navLinks.map((item, index) => (
    <Button key={`${item.to}_${index}`} sx={{ color: "#fff" }}>
      <NavLink to={item.to}>{item.caption}</NavLink>
    </Button>
  ));

  return <nav>{renderedNavList}</nav>;
};
