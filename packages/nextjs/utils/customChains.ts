import { defineChain } from "viem";

// TODO: Add Chain details here.
export const monadTestnet = defineChain({
  id: 10143,
  name: "Monad Testnet",
  nativeCurrency: { name: "Monad", symbol: "MON", decimals: 18 },
  rpcUrls: {
    default: {
      http: [process.env.MONAD_RPC_URL || "https://testnet-rpc.monad.xyz"],
    },
  },
  blockExplorers: {
    default: {
      name: "MonadExplorer",
      url: [process.env.MONAD_EXPLORER_URL || "https://testnet.monadexplorer.com"],
    },
  },
});
