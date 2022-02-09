import React from "react";
import Image from "next/image";

export function Carousel() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center w-full border-b border-gray-300">
      <div className="w-1/3 px-4 pt-8 pb-6 text-center sm:w-1/4 md:w-auto">
        <Image
          src="/pages/home/exchanges/small/ataix.png"
          width={96}
          height={32}
          alt="ataix"
        />
      </div>
      <div className="w-1/3 px-4 pt-8 pb-6 text-center sm:w-1/4 md:w-auto">
        <Image
          src="/pages/home/exchanges/small/graviex.png"
          width={96}
          height={32}
          alt="graviex"
        />
      </div>
      <div className="w-1/3 px-4 pt-8 pb-6 -mb-1 text-center sm:w-1/4 md:w-auto">
        <Image
          src="/pages/home/exchanges/small/bittrex.png"
          width={96}
          height={32}
          alt="bittrex"
        />
      </div>
      <div className="w-1/3 px-4 pt-8 pb-6 text-center sm:w-1/4 md:w-auto">
        <Image
          src="/pages/home/exchanges/small/binance.png"
          width={96}
          height={32}
          alt="binance"
        />
      </div>
      <div className="w-1/3 px-4 pt-8 pb-6 text-center sm:w-1/4 md:w-auto">
        <Image
          src="/pages/home/exchanges/small/coinspot.png"
          width={96}
          height={32}
          alt="bitvavo"
        />
      </div>
      <div className="w-1/3 px-4 pt-8 pb-6 text-center sm:w-1/4 md:w-auto">
        <Image
          src="/pages/home/exchanges/small/bitvavo.png"
          width={96}
          height={32}
          alt="bitvavo"
        />
      </div>
      <div className="w-1/3 px-4 pt-8 pb-6 text-center sm:w-1/4 md:w-auto">
        <Image
          src="/pages/home/exchanges/small/paribu.png"
          width={96}
          height={32}
          alt="paribu"
        />
      </div>
      <div className="w-1/3 px-4 pt-8 pb-6 text-center sm:w-1/4 md:w-auto">
        <Image
          src="/pages/home/exchanges/small/tzero.png"
          width={96}
          height={32}
          alt="tzero"
        />
      </div>
    </div>
  );
}
