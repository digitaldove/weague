import { Component } from "solid-js";
import AppIcon from "./svg/AppIcon";
import CogIcon from "./svg/CogIcon";
import UserIcon from "./svg/UserIcon";

const Menu: Component = () => {
  return (
    <div class="h-12 container mx-auto flex px-12 items-center">
      <AppIcon />
      <div class="flex-1" />
      <CogIcon />
      <div class="mx-2" />
      <UserIcon />
    </div>
  );
};

export default Menu;
