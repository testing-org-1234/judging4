const SEPOLIA_CONFIG = {
  defaultAddress: {
    DODOApprove: "0x66c45FF040e86DC613F239123A5E21FFdC3A3fEC",
    DODOApproveProxy: "0xE2004eE21f88a7D8e1A5EDc3c9617a0460CC7b99",
    DODO: "",
    WETH:"0x7B07164ecFaF0F0D85DFC062Bc205a4674c75Aa0",
  },
  deployedAddress: {
    D3Oracle: "0xbcd2FDC3B884Cf0dfD932f55Ec2Fe1fB7e8c62Da",
    D3RateManager: "0xB5c7BA1EAde74800cD6cf5F56b1c4562De373780",
    D3MMLiquidationRouter: "0x45b3Be51c0C6d8C621C883F36A63340D365565f5",
    D3Vault: "0x63D34E9bA393a21f2aD9F3e24Ba4607D21BB365D",
    D3UserQuota: "0xb57C5EECa0f3f8DBfa3202352080265FC325e8f4",
    D3PoolQuota: "0x628E5081bA93b1c4F58E54e7175088B1ACe58852",
    D3MMTemplate: "0x7dEdA1C0996e9A2Dd80C8Ff9b6C5406BBa1BDb9d",
    D3MakerTemplate: "0xee7210fc88E1FFdB6aFb305E8F68b4f1d20FEdAd",
    D3TokenTemplate: "0xc3cF2F9faAeE87b67E4ceAb3F67B6074Ae939cF3",
    CloneFactory: "0x8414560d69650bC0c915d5d4385e1714a23cbe81",
    Maintainer: "0xb37136B338C6cC0E459A35fe9Aa036f6b5A147c0",
    D3FeeRateModel: "0x44023441f2Bad375b6b5C6354B03c3E9AD01E269",
    D3MMFactory: "0xC6a85A0e8cAe3eADB1307056209E851643F32Fce",
    D3Proxy: "0xF0a6A2cEb71Ed90b4E61f15BB36751d9a21eBfB6", // don't forget to add this to DODOApproveProxy
    D3MM: "",
  },
  chainlinkPriceFeed: {
    BTC_USD: "0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43",
    DAI_USD: "0x14866185B1962B63C3Ea9E03Bc1da838bab34C19",
    ETH_USD: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
    USDC_USD: "0xA2F78ab2355fe2f984D808B5CeE7FD0A93D5270E",
  },
};

export { SEPOLIA_CONFIG };
