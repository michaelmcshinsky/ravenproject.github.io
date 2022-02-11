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
            Get Your Wallet
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
          <p className="mb-20 font-flow">
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
          <h2 className="pb-4 my-8 text-2xl border-b border-gray-300">
            Desktop Wallets
          </h2>
          <div className="flex justify-center space-x-8">
            {DESKTOP_WALLETS.map((wallet) => (
              <div
                key={wallet.name}
                className="flex flex-col items-center justify-center px-8"
              >
                <div className="select-none">
                  <Image
                    src={wallet.src}
                    height={72}
                    width={72}
                    alt={wallet.name}
                  />
                </div>
                <h3 className="mt-4">{wallet.name}</h3>
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
          <h2 className="pb-4 my-8 text-2xl border-b border-gray-300">
            IOS Wallets
          </h2>
          <h2 className="pb-4 my-8 text-2xl border-b border-gray-300">
            Android Wallets
          </h2>
          <h2 className="pb-4 my-8 text-2xl border-b border-gray-300">
            Web Wallets
          </h2>
          <h2 className="pb-4 my-8 text-2xl border-b border-gray-300">
            Paper Wallets
          </h2>
          <h2 className="pb-4 my-8 text-2xl border-b border-gray-300">
            Opensource Wallets
          </h2>
        </Container>
      </section>
    </div>
  );
}
