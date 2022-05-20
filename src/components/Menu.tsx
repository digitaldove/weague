import { Component } from "solid-js";
import AppIcon from "src/components/svg/AppIcon";
import CogIcon from "src/components/svg/CogIcon";
import UserIcon from "src/components/svg/UserIcon";

const Menu: Component = () => {
  return (
    <div class="h-12 container mx-auto flex px-12 items-center">
      {/* Left handside */}
      <div class="cursor-pointer" onClick={() => {}}>
        <AppIcon />
      </div>

      {/* Center */}
      <div class="flex-1" />

      {/* Right handside */}
      <div class="cursor-pointer">
        <CogIcon />
      </div>
      <div class="mx-2" />
      <div class="cursor-pointer">
        <UserIcon />
      </div>
    </div>
  );
};

export default Menu;
