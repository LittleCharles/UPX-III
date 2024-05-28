import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { brands } from "@/mock/Brands";

export default function NavMenu() {
  return (
    <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Masculino</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 grid-cols-2">
            <ListItem href="/masculino/camisetas" title="Camisetas">
              Uma variedade de camisetas para homens.
            </ListItem>
            <ListItem href="/masculino/calcas" title="Calças">
              Opções de calças masculinas, incluindo jeans, chinos, etc.
            </ListItem>
            <ListItem href="/masculino/jaquetas-casacos" title="Jaquetas e Casacos">
              Jaquetas, casacos e blazers para diferentes ocasiões.
            </ListItem>
            <ListItem href="/masculino/calcados" title="Calçados">
              Uma seleção de calçados masculinos.
            </ListItem>
            <ListItem href="/masculino/acessorios" title="Acessórios">
              Itens como bonés, óculos de sol, etc.
            </ListItem>
            <ListItem href="/masculino/roupas-esportivas" title="Roupas Esportivas">
              Roupas específicas para atividades esportivas.
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Feminino</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 grid-cols-2">
            <ListItem href="/feminino/blusas-tops" title="Blusas e Tops">
              Uma variedade de blusas e tops femininos.
            </ListItem>
            <ListItem href="/feminino/saias-vestidos" title="Saias e Vestidos">
              Diversos estilos de saias e vestidos.
            </ListItem>
            <ListItem href="/feminino/casacos-cardigas" title="Casacos e Cardigãs">
              Opções de casacos e cardigãs para mulheres.
            </ListItem>
            <ListItem href="/feminino/calcados" title="Calçados">
              Uma seleção de calçados femininos.
            </ListItem>
            <ListItem href="/feminino/bolsas-acessorios" title="Bolsas e Acessórios">
              Bolsas de diversos estilos e acessórios.
            </ListItem>
            <ListItem href="/feminino/roupas-fitness" title="Roupas Fitness">
              Roupas adequadas para atividades físicas.
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>Marcas</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 grid-cols-2">
              {brands.map((brand) => (
                <ListItem
                  key={brand.id}
                  title={brand.name}                 
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

