import { Container } from "@/components";
import Image from "next/image";

const DESKTOP_WALLETS = [
  {
    name: "Windows",
    src: "https://ravencoin.org/assets/img/pages/wallet/windows.svg",
    url: "https://github.com/RavenProject/Ravencoin/releases",
    download:
      "https://github.com/RavenProject/Ravencoin/releases/download/v4.3.2.1/raven-4.3.2.1-win64-setup-signed.exe",
  },
  {
    name: "MAC",
    src: "https://ravencoin.org/assets/img/pages/wallet/mac.svg",
    url: "https://github.com/RavenProject/Ravencoin/releases",
    download:
      "https://github.com/RavenProject/Ravencoin/releases/download/v4.3.2.1/raven-4.3.2.1-osx-signed.dmg",
  },
  {
    name: "Linux",
    src: "https://ravencoin.org/assets/img/pages/wallet/linux.svg",
    url: "https://github.com/RavenProject/Ravencoin/releases",
    download:
      "https://github.com/RavenProject/Ravencoin/releases/download/v4.3.2.1/raven-4.3.2.1-x86_64-linux-gnu.zip",
  },
];

export default function Wallets() {
  return (
    <div className="pb-24">
      <section className="py-24 page-banner">
        <Container width="3xl">
          <h1 className="mb-4 text-4xl font-medium text-center font-flow">
            Get a Wallet
          </h1>
          <p className="font-flow">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
            erat id dolor efficitur accumsan et ut enim. Ut tincidunt eu risus
            et mollis. Cras finibus dui id odio gravida, in volutpat urna
            congue. Proin in tortor bibendum, vulputate est sollicitudin,
            pharetra est. Fusce vel facilisis justo. Aliquam quis nulla sodales,
            dictum magna a, egestas turpis. Aenean congue sit amet tortor eget
            hendrerit. Maecenas enim felis, vestibulum sed augue vel, eleifend
            volutpat magna. Aliquam convallis fringilla dignissim. Maecenas
            lectus ligula, luctus eget dignissim ut, tristique vulputate neque.
          </p>
        </Container>
      </section>
      <section className="py-24">
        <Container>
          <h2 className="mt-6 mb-1 text-xl">What is a wallet?</h2>
          <p>
            Digital wallets are tools that monitor your funds, transaction
            history and security options.
          </p>
          <h2 className="mt-6 mb-1 text-xl">
            Do I need a wallet to use Ravencoin?
          </h2>
          <p>
            If you want to buy or transfer funds, mint or distribute assets, or
            participate in Ravencoin blockchain technologies, then you will want
            to get yourself a digital wallet. Since your wallet acts as your
            personal account, never share your private keys with any third-party entity.
          </p>
          <h2 className="mt-6 mb-1 text-xl">How do I get a wallet?</h2>
          <p>
            Choose a wallet provider below based on your preferences to create
            your personal address account with the Ravencoin blockchain.
          </p>
        </Container>
      </section>
      <section>
        <Container>
          <h3 className="pb-4 my-8 text-2xl border-b border-gray-300 text-raven-orange">
            Desktop Wallets
          </h3>
          <div className="flex flex-wrap justify-center md:space-x-8">
            {DESKTOP_WALLETS.map((wallet) => (
              <div
                key={wallet.name}
                className="flex flex-col items-center justify-center px-8 my-4"
              >
                <div className="select-none">
                  <Image
                    src={wallet.src}
                    height={72}
                    width={72}
                    alt={wallet.name}
                  />
                </div>
                <h4 className="mt-4">{wallet.name}</h4>
                <a
                  href={wallet.download}
                  download
                  className="px-3 py-2 mt-4 border border-gray-300 rounded hover:bg-gray-100 active:bg-gray-100 focus:bg-gray-100"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
          <h3 className="pb-4 my-8 text-2xl border-b border-gray-300 text-raven-orange">
            IOS Wallets
          </h3>
          <h3 className="pb-4 my-8 text-2xl border-b border-gray-300 text-raven-orange">
            Android Wallets
          </h3>
          <h3 className="pb-4 my-8 text-2xl border-b border-gray-300 text-raven-orange">
            Web Wallets
          </h3>
          <h3 className="pb-4 my-8 text-2xl border-b border-gray-300 text-raven-orange">
            Paper Wallets
          </h3>
          <h3 className="pb-4 my-8 text-2xl border-b border-gray-300 text-raven-orange">
            Opensource Wallets
          </h3>
        </Container>
      </section>
    </div>
  );
}
