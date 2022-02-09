import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../components";
import { Carousel, Card } from "../components/pages/home";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <section className="relative py-48 overflow-hidden text-white">
        <div className={styles.bg}></div>
        <div className={styles.bg2}></div>
        <div className={styles.bg3}></div>
        <div className="max-w-4xl px-4 mx-auto">
          <Reveal>
            <h1 className="max-w-xl mb-4 text-3xl font-medium leading-tight sm:text-5xl">
            Issue assets and securities on a secure and decentralized
              blockchain
            </h1>
          </Reveal>
          <Reveal timeout={250}>
            <div className="max-w-lg mb-4">
              <h2 className="text-xl leading-tight text-white">
                Ravencoin is a peer-to-peer blockchain, handling the efficient creation and
                transfer of assets from one party to another.
              </h2>
            </div>
          </Reveal>
          <Reveal timeout={500}>
            <div className="flex flex-wrap">
              <Link href="/get-started">
                <a className="py-4 mx-4 my-3 ml-0 font-medium leading-none duration-500 transform rounded border-s px-11 border-raven-yellow bg-raven-yellow hover:text-raven-blue hover:border-gray-100 hover:bg-gray-100 ease">
                  Get Started
                </a>
              </Link>
              <Link href="/wallet">
                <a className="px-4 py-4 mx-4 my-3 ml-0 font-medium leading-none duration-500 transform border-2 rounded hover:text-raven-blue hover:bg-gray-100 ease">
                  Choose Your Wallet
                </a>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <Carousel/>
      <section className="py-24 bg-blue-100/25">
        <div className="flex max-w-5xl px-4 mx-auto mb-8">
          <div className="w-full max-w-3xl mx-auto text-center">
            <Reveal timeout={750}>
              <h2 className="mb-4 text-5xl font-medium text-raven-blue">Welcome to Ravencoin</h2>
              <p className="mb-4 text-xl font-medium leading-tight text-raven-yellow">
                Create and Trade Security tokens worldwide in minutes
              </p>
              <p>
                Ravencoin is a protocol based on a fork of the Bitcoin code
                which adds features specifically focused on allowing tokens to
                be issued on the Ravencoin blockchain. These tokens can have
                whatever properties the issue of the token decides - so they can
                be limited in quantity, named and be issued as securities or as
                collectibles.
              </p>
              <ul className="flex flex-wrap mt-8 text-gray-800">
                <li className="w-1/2 px-4 mb-4 sm:w-1/3 md:w-1/5">
                  <div>
                    <Image
                      src="/pages/home/icon-assets.png"
                      alt="Project Assets"
                      width={75}
                      height={75}
                    />
                  </div>
                  <h3 className="inline-block pb-1 font-medium border-b-2 border-raven-yellow">Physical Assets</h3>
                </li>
                <li className="w-1/2 px-4 mb-4 sm:w-1/3 md:w-1/5">
                  <div>
                    <Image
                      src="/pages/home/icon-shares.png"
                      alt="Project Shares"
                      width={75}
                      height={75}
                    />
                  </div>
                  <h3 className="inline-block pb-1 font-medium border-b-2 border-raven-yellow">Project Shares</h3>
                </li>
                <li className="w-1/2 px-4 mb-4 sm:w-1/3 md:w-1/5">
                  <div>
                    <Image
                      src="/pages/home/icon-credits.png"
                      alt="Credits"
                      width={75}
                      height={75}
                    />
                  </div>
                  <h3 className="inline-block pb-1 font-medium border-b-2 border-raven-yellow">Credit</h3>
                </li>
                <li className="w-1/2 px-4 mb-4 sm:w-1/3 md:w-1/5">
                  <div>
                    <Image
                      src="/pages/home/icon-virtual-goods.png"
                      alt="Virtual Goods"
                      width={75}
                      height={75}
                    />
                  </div>
                  <h3 className="inline-block pb-1 font-medium border-b-2 border-raven-yellow">Virtual Goods</h3>
                </li>
                <li className="w-1/2 px-4 mb-4 sm:w-1/3 md:w-1/5">
                  <div>
                    <Image
                      src="/pages/home/icon-digital-assets.png"
                      alt="Digital Assets"
                      width={75}
                      height={75}
                    />
                  </div>
                  <h3 className="inline-block pb-1 font-medium border-b-2 border-raven-yellow">Digital Assets</h3>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
        {/* <div className="flex flex-wrap items-stretch max-w-5xl px-4 mx-auto">
          <div className="w-full px-2 mb-4 sm:pl-0 sm:w-1/2">
            <Reveal>
              <Card>
                <h3 className="mb-0 text-xl font-medium">Project Shares</h3>
                <h4 className="mb-3 text-lg">
                  Representing a share of a project
                </h4>
                <p className="text-sm">
                  Gold bar
                  <br />
                  Silver coins
                  <br />
                  Physical Euros
                  <br />
                  Land Deeds
                  <br />
                  DC Comics Presents #26
                  <br />
                  Energy credits (Electricity, Wood, Gas, Oil, Wind)
                </p>
              </Card>
            </Reveal>
          </div>
          <div className="w-full px-2 mb-4 sm:pr-0 sm:w-1/2">
            <Reveal>
              <Card>
                <h3 className="mb-0 text-xl font-medium">Virtual Goods</h3>
                <h4 className="mb-3 text-lg">Representing virtual goods</h4>
                <p className="text-sm">
                  Tickets to an event such as a Baltimore Ravens game with the
                  ability to resell without worry of duplicates being made
                  <br />A license to allow an activity
                  <br />
                  An access token to use a service
                  <br />
                  In-game currency and items, transferable to other gamers
                  outside of the game platform
                </p>
              </Card>
            </Reveal>
          </div>
          <div className="w-full px-2 mb-4 sm:pl-0 sm:w-1/2">
            <Reveal>
              <Card>
                <h3 className="mb-0 text-xl font-medium">
                  Physical &amp; Digital Assets
                </h3>
                <h4 className="mb-3 text-lg">
                  Representing real world custodied physical or digital asset
                </h4>
                <p className="text-sm">
                  Representing real world custodied physical or digital asset
                  <br />
                  Securities tokens: stock or shares of a company where the
                  shares are represented by a token rather than a physical stock
                  certificate
                  <br />
                  Securities or partnership interests with the built-in ability
                  to pay Cardidends in RVN
                  <br />
                  Tokens which represent a coop, limited partnership, royalty
                  sharing or profit sharing platform
                  <br />A token which represents a cflexd-funded item with the
                  ability to transfer or resell the item
                </p>
              </Card>
            </Reveal>
          </div>
          <div className="w-full px-2 mb-4 sm:pr-0 sm:w-1/2">
            <Reveal>
              <Card>
                <h3 className="mb-0 text-xl font-medium">Credit</h3>
                <h4 className="mb-3 text-lg">Representing a credit</h4>
                <p className="text-sm">
                  Gift cards
                  <br />
                  Airline miles
                  <br />
                  Reward points
                </p>
              </Card>
            </Reveal>
          </div>
        </div> */}
      </section>
      <section className="py-32 bg-gray-100">
        <div className="max-w-5xl px-4 mx-auto">
          <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold text-center">
            What Makes <span className="text-raven-orange">Ravencoin</span>{" "}
            Different from Bitcoin?
          </h2>
        </div>
      </section>
      {/* <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <div>
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  width={72}
                  height={16}
                />
              </div>
            </span>
          </a>
        </footer>
      </div> */}
    </>
  );
}
