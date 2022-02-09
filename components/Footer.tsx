import Image from 'next/image';
import FooterHeading from "./FooterHeading";
import FooterLink from "./FooterLink";
import FooterSocial from "./FooterSocial";

export function Footer() {
  return (
    <footer className="py-16 text-white bg-raven-blue">
      <div className="flex flex-wrap mx-auto max-w-7xl">
        <div className="w-full px-4 pl-0 sm:w-1/2 md:flex-1">
          <Image
            src="/branding/logo-wide-sm-white.png"
            alt="Logo"
            width={200}
            height={31}
          />
          <ul className="flex flex-wrap mt-4 space-x-4">
            <FooterSocial href="https://twitter.com/ravencoin" icon="twitter"/>
            <FooterSocial href="https://discord.com/invite/jn6uhur" icon="discord"/>
            <FooterSocial href="https://t.me/RavencoinDev " icon="telegram"/>
            <FooterSocial href="https://www.reddit.com/r/Ravencoin/" icon="reddit"/>
            <FooterSocial href="https://medium.com/@ravencoin" icon="medium"/>
          </ul>
        </div>
        <div className="w-full px-4 sm:w-1/2 md:w-1/5">
          <FooterHeading>QuickLinks</FooterHeading>
          <ul>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
          </ul>
        </div>
        <div className="w-full px-4 sm:w-1/2 md:w-1/5">
          <FooterHeading>Developers</FooterHeading>
          <ul>
            <FooterLink href="/explorer">Block Explorer</FooterLink>
            <FooterLink href="/explorer">Asset Explorer 1</FooterLink>
            <FooterLink href="/explorer">Asset Explorer 2</FooterLink>
            
            <FooterLink href="/mining-pools">Mining Pools</FooterLink>
            <FooterLink href="/bug-bounty">Bug Bounty</FooterLink>
            <FooterLink href="/github">Github</FooterLink>
            <FooterLink href="/node-map">Node Map</FooterLink>
            <FooterLink href="/mining-pools">Mining Pools</FooterLink>
          </ul>
        </div>
        <div className="w-full px-4 sm:w-1/2 md:w-1/5">
          <FooterHeading>Individuals</FooterHeading>
          <ul>
            <FooterLink href="/buy-ravencoin">Buy Ravencoin</FooterLink>
            <FooterLink href="/wallets">Wallets</FooterLink>
            <FooterLink href="/ledger">Ledger</FooterLink>
            <FooterLink href="/whitepaper">Whitepaper</FooterLink>
          </ul>
        </div>
        <div className="w-full px-4 sm:w-1/2 md:w-1/5">
          <FooterHeading>Community</FooterHeading>
          <ul>
            <FooterLink href="/community">Community</FooterLink>
            <FooterLink href="/projects">Projects</FooterLink>
            <FooterLink href="/updates">Updates</FooterLink>
            <FooterLink href="/media-kit">Media Kit</FooterLink>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
