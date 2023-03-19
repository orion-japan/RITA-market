/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Matic } from "@thirdweb-dev/chains";
export const NETWORK = Matic;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0x4dD1411B8A5A41Bf2D1fFbBFa6e1143d24258994";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0x3d34EA055B5FcCb34B973c77F7866C76cBA66C54";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://mumbai.polygonscan.com";
