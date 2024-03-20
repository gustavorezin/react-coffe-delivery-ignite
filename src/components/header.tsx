import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import logo from "../assets/images/logo.svg";

export function Header() {
  return (
    <header className="flex justify-between items-center h-28">
      <img src={logo} alt="Logo Coffe Delivery" />
      <div className="flex gap-3">
        <div className="flex items-center gap-1 p-2 rounded-md bg-purple-light">
          <MapPin size={22} weight="fill" className="text-purple" />
          <span className="text-purple-dark text-sm">Orleans, SC</span>
        </div>
        <a className="flex items-center p-2 rounded-md bg-yellow-light">
          <ShoppingCart size={22} weight="fill" className="text-yellow-dark" />
        </a>
      </div>
    </header>
  );
}