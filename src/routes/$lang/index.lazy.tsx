import { ImageIcon } from "@radix-ui/react-icons";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createLazyFileRoute("/$lang/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation("home");

  return (
    <main>
      <section className="py-48">
        <div className="px-4 text-center flex flex-col gap-8">
          <h1 className="text-5xl font-medium max-w-6xl mx-auto">
            {t("hero_title")}
          </h1>
          <p className="text-2xl leading-tight max-w-5xl mx-auto">
            {t("hero_subtitle")}
          </p>
          <div className="flex gap-4 items-center justify-center">
            <button type="button">{t("hero_button_one")}</button>
            <button type="button">{t("hero_button_two")}</button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-medium mb-4 text-center">
              {t("section_one_title")}
            </h2>
            <p className="text-center max-w-lg mx-auto">
              Ravencoin is a community-driven, open-source blockchain with no
              single point of control, ensuring resilience and trust.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 py-8">
            <div className="flex flex-col items-center text-center gap-4">
              <ImageIcon width="60" height="60" />
              <h3 className="text-xl">Decentralization</h3>
              <p>
                Ravencoin is a community-driven, open-source blockchain with no
                single point of control, ensuring resilience and trust.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <ImageIcon width="60" height="60" />
              <h3 className="text-xl">Security</h3>
              <p>
                Using proof-of-work consensus and strong cryptographic
                protocols, Ravencoin secures transactions and prevents
                tampering.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <ImageIcon width="60" height="60" />
              <h3 className="text-xl">Fast Transactions</h3>
              <p>
                Optimized for fast, near-instant transactions, Ravencoin
                supports real-time asset transfers and practical applications.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <ImageIcon width="60" height="60" />
              <h3 className="text-xl">Transparency</h3>
              <p>
                All transactions are publicly verifiable on a decentralized
                ledger, ensuring full transparency and trustless interactions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <ImageIcon width="60" height="60" />
              <h3 className="text-xl">Accessibility</h3>
              <p>
                Ravencoin is designed for everyone, offering simple and
                efficient tools for creating and transferring digital assets.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <ImageIcon width="60" height="60" />
              <h3 className="text-xl">Flexibility</h3>
              <p>
                Ravencoin supports a wide range of use cases, from token
                creation to supply chain tracking and NFT minting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-medium mb-4">How Ravencoin Works</h2>
          <p>
            Ravencoin's design focuses on token creation, asset transfer, and
            the verification of ownership.
          </p>
          <h3>Tokenization of Assets</h3>
          <p>
            Ravencoin allows users to create and transfer unique digital assets,
            from traditional securities like real estate to digital art,
            commodities, and collectibles. Users can mint tokens that represent
            real-world assets, enabling a seamless digital ownership experience.
          </p>
          <h3>Transfer of Assets</h3>
          <p>
            Assets can be transferred easily between users, with the transaction
            recorded on the blockchain, ensuring transparency and security.
            Transactions are irreversible, ensuring ownership is protected.
          </p>
          <h3>Verifiable Ownership</h3>
          <p>
            Ravencoin provides a secure and decentralized mechanism for proving
            ownership of digital assets, from simple tokens to complex ownership
            structures.
          </p>
          <h3>Divisible and Customizable Tokens</h3>
          <p>
            Ravencoin supports the creation of both divisible and non-divisible
            tokens, making it flexible for a wide range of use cases.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 py-16">
          <div>
            <h2 className="text-4xl font-medium md:mt-8 mb-4">
              Real-World Use Cases
            </h2>
            <p className="md:max-w-md">
              Ravencoin is being used in a variety of industries to transform
              how assets are created, transferred, and tracked.
            </p>
          </div>
          <div>
            <h3>Tokenized Real Estate</h3>
            <p>
              Ravencoin allows for the creation of tokens representing ownership
              in real estate, enabling fractional ownership and simplifying real
              estate transactions. This makes it easier to buy, sell, and
              transfer real estate without complex legal structures.
            </p>
            <h3>Non-Fungible Tokens (NFTs)</h3>
            <p>
              Ravencoin supports the creation and transfer of NFTs. From digital
              art to rare collectibles, Ravencoin is a decentralized platform
              for NFT creators and collectors.
            </p>
            <h3> Supply Chain and Asset Tracking</h3>
            <p>
              Track and verify the provenance of goods in the supply chain.
              Ravencoin's blockchain provides transparency and authenticity,
              allowing businesses to ensure product integrity from start to
              finish.
            </p>
            <h3>Crowdfunding and Fundraising</h3>
            <p>
              Projects can raise funds through the tokenization of assets or
              through Ravencoin-based tokens. Crowdfunding becomes transparent
              and secure, with verifiable ownership of assets by contributors.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-medium mb-4">Technology at a Glance</h2>
          <p>
            Ravencoin leverages advanced blockchain technology to provide a
            secure, decentralized, and scalable solution for digital assets.
          </p>
          <h3>Consensus Mechanism</h3>
          <p>
            Ravencoin uses the Proof-of-Work (PoW) consensus algorithm, which
            ensures a robust, secure, and decentralized network where miners
            compete to add blocks and secure transactions.
          </p>
          <h3>Scalability</h3>
          <p>
            The network is designed to scale as demand grows. Ravencoin’s block
            size and transaction speeds are optimized to handle an increasing
            number of users and assets.
          </p>
          <h3>Open-Source</h3>
          <p>
            As an open-source project, Ravencoin invites collaboration and
            contributions from developers around the world. This fosters
            innovation and ensures the blockchain remains relevant and
            up-to-date with the needs of its users.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-medium mb-4">
          Join the Ravencoin Community
        </h2>
        <p>
          Ravencoin is not just a blockchain, it’s a movement built by a global
          community of developers, creators, and supporters. Whether you are a
          user looking to transfer assets, a developer building innovative
          solutions, or an investor wanting to support the future of
          decentralized assets, Ravencoin is the place for you.
        </p>
        <h3>Why Join?</h3>
        <h4>Community Governance</h4>
        <p>
          Ravencoin is governed by its community, and decisions are made
          collectively to ensure fairness and innovation.
        </p>
        <h4>Global Network</h4>
        <p>
          Connect with like-minded individuals, participate in discussions, and
          stay updated on the latest developments.
        </p>
        <h4>Get Involved</h4>
        <p>
          Contribute to the Ravencoin ecosystem by joining discussions on social
          platforms, creating tutorials, or even contributing code.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-medium mb-4">
          Start Creating on Ravencoin Today!
        </h2>
        <button type="button">Join the Ravencoin Network</button>
        <button type="button">Create Your First Asset</button>
      </section>
    </main>
  );
}
