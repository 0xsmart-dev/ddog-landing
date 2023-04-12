import React from "react";

type Props = {
  url: string;
};

const NFT: React.FC<Props> = ({ url }) => {
  return (
    <div className="flex flex-col bg-card border-[3px] border-line rounded-lg">
      <img src={url} className="w-[334px] h-[334px] rounded-lg" alt="nft" />
      <div className="p-6">
        <button className="bg-brand rounded-lg py-3 px-[105px] text-back font-button hover:opacity-80 anim cursor-pointer">
          Stake NFT
        </button>
      </div>
    </div>
  );
};

export default NFT;
