import { useState, useRef } from "react";
import Image from "next/image";
import NavbarBrand from "./NavbarBrand";
import NavbarLink from "./NavbarLink";
import NavbarToggle from "./NavbarToggle";
import Dropdown from "./Dropdown";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const clickRef = useRef();

  function _toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="relative z-50 text-gray-500 bg-white dark:bg-gray-900 dark:text-gray-300">
      <div className="relative flex items-center justify-between h-16 px-4 mx-auto max-w-7xl">
        <NavbarToggle onClick={_toggle} />
        <div className="flex items-center justify-center flex-1 md:justify-between">
          <NavbarBrand className="px-6">
            <Image
              src="/branding/logo.svg"
              alt="Ravencoin Logo"
              height={32}
              width={32}
            />
          </NavbarBrand>
          <div className="hidden ml-auto md:block">
            <div className="flex space-x-1">
              <NavbarLink href="/">Home</NavbarLink>
              <NavbarLink href="/about">About</NavbarLink>
              <Dropdown title="Developers">
                <NavbarLink href="/developers/whitepaper">
                  Whitepaper
                </NavbarLink>
                <NavbarLink href="/developers/pools">Mining Pools</NavbarLink>
                <NavbarLink href="/developers/block-explorer">
                  Block Explorer
                </NavbarLink>
                <NavbarLink href="/developers/asset-explorer-1">
                  Asset Explorer 1
                </NavbarLink>
                <NavbarLink href="/developers/asset-explorer-2">
                  Asset Explorer 2
                </NavbarLink>
              </Dropdown>
              <Dropdown title="Individuals">
                <NavbarLink href="/buy-ravencoin">Buy Ravencoin</NavbarLink>
                <NavbarLink href="/wallets">Wallet</NavbarLink>
                <NavbarLink href="/ledger">Ledger</NavbarLink>
              </Dropdown>
              <Dropdown title="Community">
                <NavbarLink href="/community">Community</NavbarLink>
                <NavbarLink href="/projects">Projects</NavbarLink>
                <NavbarLink href="/updates">Updates</NavbarLink>
                <NavbarLink href="/media-kit">Media Kit</NavbarLink>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
      {!!isOpen && (
        <div
          className="absolute w-full bg-white shadow md:hidden"
          id="mobile-menu"
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            <NavbarLink href="/" block>
              Home
            </NavbarLink>
            <NavbarLink href="/buy-ravencoin" block>
              Buy Ravencoin
            </NavbarLink>
            <NavbarLink href="/wallets" block>
              Wallets
            </NavbarLink>
            <NavbarLink href="/whitepaper" block>
              Whitepaper
            </NavbarLink>
            <NavbarLink href="/community" block>
              Community
            </NavbarLink>
            <NavbarLink href="/pools" block>
              Pools
            </NavbarLink>
            <NavbarLink href="/updates" block>
              Updates
            </NavbarLink>
            <NavbarLink href="/about" block>
              About
            </NavbarLink>
            <NavbarLink href="/projects" block>
              Projects
            </NavbarLink>
            <NavbarLink href="/ledger" block>
              Ledger
            </NavbarLink>
          </div>
        </div>
      )}
    </nav>
  );
}
