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
    <nav className="relative z-50 text-gray-500 bg-white border-b border-gray-300 dark:bg-gray-900 dark:text-gray-300">
      <div className="relative flex items-center justify-between h-16 px-4 mx-auto max-w-7xl">
        <NavbarToggle onClick={_toggle} />
        <div className="flex items-center justify-center flex-1 md:justify-between">
          <NavbarBrand className="flex items-center px-6">
            <Image
              src="/branding/logo.svg"
              alt="Ravencoin Logo"
              height={48}
              width={48}
            />
            <div className="-mt-1 text-3xl font-bold text-raven-blue">
              Ravencoin
            </div>
          </NavbarBrand>
          <div className="hidden ml-auto md:block">
            <div className="flex space-x-1">
              <NavbarLink href="/">Home</NavbarLink>
              <Dropdown title="Usage">
                <NavbarLink href="/usage/wallets">Get Your Wallet</NavbarLink>
                <NavbarLink href="/usage/mint-assets">Mint Assets</NavbarLink>
                <NavbarLink href="/usage/get-rvn">Get Ravencoin</NavbarLink>
                <NavbarLink href="/usage/run-a-node">Run a Node</NavbarLink>
              </Dropdown>
              <Dropdown title="Learn">
                <NavbarLink href="/learn/what-is-ravencoin">
                  What is Ravencoin?
                </NavbarLink>
                <NavbarLink href="/learn/what-is-rvn">What is RVN?</NavbarLink>
                <NavbarLink href="/learn/what-is-rvn">
                  Ravecoin Assets
                </NavbarLink>
                <NavbarLink href="/learn/whitepaper">
                  Ravencoin Whitepaper
                </NavbarLink>
                <NavbarLink href="/learn/guides-and-resources">
                  Guides &amp; Resources
                </NavbarLink>
              </Dropdown>
              <Dropdown title="Developers">
                <NavbarLink href="/developers">
                  Developer Portal
                </NavbarLink>
                <NavbarLink href="/developers/documentation">
                  Documentation
                </NavbarLink>
                <NavbarLink href="/developers/tutorials">Tutorials</NavbarLink>
                <NavbarLink href="/developers/pools">Mining Pools</NavbarLink>
                <NavbarLink href="/developers/explorers">Explorers</NavbarLink>
              </Dropdown>
              <Dropdown title="Community">
                <NavbarLink href="/community/hub">Community Hub</NavbarLink>
                <NavbarLink href="/community/online">
                  Online Communities
                </NavbarLink>
                <NavbarLink href="/community/get-involved">
                  Get Involved
                </NavbarLink>
                <NavbarLink href="/community/support">Get Support</NavbarLink>
                <NavbarLink href="/community/branding">Branding</NavbarLink>
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
