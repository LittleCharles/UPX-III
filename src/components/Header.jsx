import { Search as SearchIcon } from "lucide-react";
import NavMenu from "./Header/navMenu";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Menu from "./Home/menu";
import { Search } from "../pages/Search";

export default function Header() {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/Search');
  };

  return (
    <div className="shadow-lg p-8">
      <div className="flex max-w-[1400px] justify-between items-center m-auto gap-32">
        <div className="flex items-center gap-20">
          <div className="logo-container">
          </div>
          <div className="flex">
            <Input className="w-[350px]" type="text" placeholder="Pesquisar..." />
            <button className="ml-[-30px]" type="submit" onClick={handleSearch}><SearchIcon className="size-5"/></button>
          </div>
          <NavMenu />
        </div>
        <div className="flex justify-between">
          <Menu/>
        </div>
      </div>
    </div>
  );
}
