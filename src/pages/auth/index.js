import { Outlet } from "react-router-dom"; // bu yapı react router dom ile bilrikte genel yapıdır.
import React from "react";

export default function AuthLayout() {
  return (
    <div className="h-full w-full flex flex-wrap overflow-auto items-center gap-x-8 justify-center">
      <Outlet />
    </div>
  );
}
