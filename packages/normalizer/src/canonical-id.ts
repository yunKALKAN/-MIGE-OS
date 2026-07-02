export enum Blockchain {
  ETHEREUM = 'ETHEREUM',
  SOLANA = 'SOLANA',
  BNB_CHAIN = 'BNB_CHAIN',
  POLYGON = 'POLYGON',
  ARBITRUM = 'ARBITRUM',
  OPTIMISM = 'OPTIMISM',
  AVALANCHE = 'AVALANCHE',
  BASE = 'BASE',
  UNKNOWN = 'UNKNOWN'
}

export interface CanonicalID {
  readonly blockchain: Blockchain;
  readonly address: string;
  readonly network: string;
}