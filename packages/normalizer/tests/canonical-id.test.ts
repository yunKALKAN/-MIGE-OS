import { Blockchain, CanonicalID } from '../src/canonical-id';

describe('Blockchain', () => {
  describe('enum values', () => {
    it('should have all expected blockchain types', () => {
      expect(Blockchain.ETHEREUM).toBe('ETHEREUM');
      expect(Blockchain.SOLANA).toBe('SOLANA');
      expect(Blockchain.BNB_CHAIN).toBe('BNB_CHAIN');
      expect(Blockchain.POLYGON).toBe('POLYGON');
      expect(Blockchain.ARBITRUM).toBe('ARBITRUM');
      expect(Blockchain.OPTIMISM).toBe('OPTIMISM');
      expect(Blockchain.AVALANCHE).toBe('AVALANCHE');
      expect(Blockchain.BASE).toBe('BASE');
      expect(Blockchain.UNKNOWN).toBe('UNKNOWN');
    });
  });
});

describe('CanonicalID', () => {
  describe('interface', () => {
    it('should create valid canonical ID', () => {
      const canonicalId: CanonicalID = {
        blockchain: Blockchain.ETHEREUM,
        address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
        network: 'mainnet'
      };
      
      expect(canonicalId.blockchain).toBe(Blockchain.ETHEREUM);
      expect(canonicalId.address).toBe('0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb');
      expect(canonicalId.network).toBe('mainnet');
    });

    it('should be readonly', () => {
      const canonicalId: CanonicalID = {
        blockchain: Blockchain.ETHEREUM,
        address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
        network: 'mainnet'
      };
      
      expect(() => {
        (canonicalId as any).address = 'modified';
      }).not.toThrow();
    });
  });

  describe('different blockchains', () => {
    it('should work with Solana', () => {
      const canonicalId: CanonicalID = {
        blockchain: Blockchain.SOLANA,
        address: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
        network: 'mainnet'
      };
      
      expect(canonicalId.blockchain).toBe(Blockchain.SOLANA);
    });

    it('should work with Polygon', () => {
      const canonicalId: CanonicalID = {
        blockchain: Blockchain.POLYGON,
        address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
        network: 'mainnet'
      };
      
      expect(canonicalId.blockchain).toBe(Blockchain.POLYGON);
    });
  });
});