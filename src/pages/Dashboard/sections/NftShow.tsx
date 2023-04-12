import NFT from "components/NFT";
import React from "react";

const nfts = [
  {
    url: "images/nft1.png",
  },
  {
    url: "images/nft2.png",
  },
];

const NftShow = () => {
  return (
    <div className="flex flex-col w-full items-center md:items-start">
      <h4 className="text-header font-button">My NFTs</h4>
      <div className="mt-4 flex gap-6 flex-col md:flex-row items-center md:justify-between justify-center flex-wrap w-full">
        {nfts.map((item: any, index: number) => (
          <NFT url={item.url} key={`nft-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default NftShow;
