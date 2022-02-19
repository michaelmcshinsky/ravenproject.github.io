import Image from "next/image";
import { PageHeader } from "@/components/layout";
import { Container } from "@/components";

export default function Developers() {
  return (
    <>
      <PageHeader title="Developer Portal"/>
      <section>
        <Container className="flex flex-wrap">
          <div className="w-1/3 w-full">
            <div tabIndex={0} className="p-4 mx-4 mb-8 text-center border border-gray-200 rounded-md shadow cursor-pointer hover:shadow-lg active:shadow-lg focus:shadow-lg">
              <svg width="150" height="150" className="mx-auto mb-4">
                <circle cx="75" cy="75" r="75" fill="#ccc" />
              </svg>
              <h2 className="text-xl font-medium">Get Started</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                mollis blandit eros, ac suscipit dolor rhoncus sit amet.
              </p>
            </div>
          </div>
          <div className="w-1/3 w-full">
            <div tabIndex={0} className="p-4 mx-4 mb-8 text-center border border-gray-200 rounded-md shadow cursor-pointer hover:shadow-lg active:shadow-lg focus:shadow-lg">
              <svg width="150" height="150" className="mx-auto mb-4">
                <circle cx="75" cy="75" r="75" fill="#ccc" />
              </svg>
              <h2 className="text-xl font-medium">Manage a Wallet</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                mollis blandit eros, ac suscipit dolor rhoncus sit amet.
              </p>
            </div>
          </div>
          <div className="w-1/3 w-full">
            <div tabIndex={0} className="p-4 mx-4 mb-8 text-center border border-gray-200 rounded-md shadow cursor-pointer hover:shadow-lg active:shadow-lg focus:shadow-lg">
              <svg width="150" height="150" className="mx-auto mb-4">
                <circle cx="75" cy="75" r="75" fill="#ccc" />
              </svg>
              <h2 className="text-xl font-medium">Create Assets</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                mollis blandit eros, ac suscipit dolor rhoncus sit amet.
              </p>
            </div>
          </div>
          <div className="w-1/3 w-full">
            <div tabIndex={0} className="p-4 mx-4 mb-8 text-center border border-gray-200 rounded-md shadow cursor-pointer hover:shadow-lg active:shadow-lg focus:shadow-lg">
              <svg width="150" height="150" className="mx-auto mb-4">
                <circle cx="75" cy="75" r="75" fill="#ccc" />
              </svg>
              <h2 className="text-xl font-medium">Run a Node</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                mollis blandit eros, ac suscipit dolor rhoncus sit amet.
              </p>
            </div>
          </div>
          <div className="w-1/3 w-full">
            <div tabIndex={0} className="p-4 mx-4 mb-8 text-center border border-gray-200 rounded-md shadow cursor-pointer hover:shadow-lg active:shadow-lg focus:shadow-lg">
              <svg width="150" height="150" className="mx-auto mb-4">
                <circle cx="75" cy="75" r="75" fill="#ccc" />
              </svg>
              <h2 className="text-xl font-medium">Mining Tools</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                mollis blandit eros, ac suscipit dolor rhoncus sit amet.
              </p>
            </div>
          </div>
          <div className="w-1/3 w-full">
            <div tabIndex={0} className="p-4 mx-4 mb-8 text-center border border-gray-200 rounded-md shadow cursor-pointer hover:shadow-lg active:shadow-lg focus:shadow-lg">
              <svg width="150" height="150" className="mx-auto mb-4">
                <circle cx="75" cy="75" r="75" fill="#ccc" />
              </svg>
              <h2 className="text-xl font-medium">Blockchain Explorers</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                mollis blandit eros, ac suscipit dolor rhoncus sit amet.
              </p>
            </div>
          </div>
          <div className="w-1/3 w-full">
            <div tabIndex={0} className="p-4 mx-4 mb-8 text-center border border-gray-200 rounded-md shadow cursor-pointer hover:shadow-lg active:shadow-lg focus:shadow-lg">
              <svg width="150" height="150" className="mx-auto mb-4">
                <circle cx="75" cy="75" r="75" fill="#ccc" />
              </svg>
              <h2 className="text-xl font-medium">How Ravencoin Works</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                mollis blandit eros, ac suscipit dolor rhoncus sit amet.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
