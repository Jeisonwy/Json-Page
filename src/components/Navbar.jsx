import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Inicio", href: "/Json-Page" },
  { name: "Academico", href: "/academico" },
  { name: "Profesional", href: "/profesional" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Contacto", href: "/contacto" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();

  return (
    <Disclosure
      as="nav"
      className="relative z-40 bg-gray-900/60 backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.35)] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-200 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>

          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <img
              alt="Company"
              src="https://i.postimg.cc/SKWYcDXN/lgo.png"
              className="h-8 w-auto opacity-90 transition duration-300 hover:opacity-100"
            />

            {/* Desktop nav */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        "relative rounded-md px-3 py-2 text-sm font-medium transition duration-300 after:pointer-events-none after:absolute after:inset-x-2 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-indigo-400 after:to-cyan-300 after:transition-transform after:duration-300 hover:after:scale-x-100",
                        isActive
                          ? "bg-white/10 text-white shadow-inner after:scale-x-100"
                          : "text-gray-300/80 hover:bg-white/5 hover:text-white",
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right-side icons */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* User menu 2 */}
            <Menu as="div" className="relative ml-3">
              <MenuItems className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-gray-900/95 py-1 shadow-xl ring-1 ring-white/10 outline -outline-offset-1 outline-white/10">
                <MenuItem>
                  <button className="block w-full px-4 py-2 text-left text-sm text-gray-300 transition hover:bg-white/5">
                    Perfil
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="block w-full px-4 py-2 text-left text-sm text-gray-300 transition hover:bg-white/5">
                    Configuración
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="block w-full px-4 py-2 text-left text-sm text-gray-300 transition hover:bg-white/5">
                    Cerrar sesión
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;

            return (
              <DisclosureButton
                key={item.name}
                as={Link}
                to={item.href}
                className={classNames(
                  "block rounded-md px-3 py-2 text-base font-medium transition duration-200",
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-gray-300 hover:bg-white/5 hover:text-white",
                )}
              >
                {item.name}
              </DisclosureButton>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
