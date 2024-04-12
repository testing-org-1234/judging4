const ARBITRUM_CONFIG = {
  defaultAddress: {
    DODOApprove: "0xA867241cDC8d3b0C07C85cC06F25a0cD3b5474d8",
    DODOApproveProxy: "0x311E670c3305a0BD55184c1C6580eBeA1FA611F0",
    wethAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    USDT: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9", // decimals 6
    USDC: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831", // decimals 6
    USDCe: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", // decimals 6 (Bridged USDC)
  }, 
  deployedAddress: {
    DODOApprove: "0xA867241cDC8d3b0C07C85cC06F25a0cD3b5474d8",
    wbtcAddress: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
    wethAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    daiAddress: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    dodoAddress: "0x69Eb4FA4a2fbd498C257C57Ea8b7655a2559A581",
    D3Oracle: "0xea924da08563A07D646fd03067474D9143B0b4a9",
    D3RateManager: "0x3E2D410DA287f6f5eAFc59638c40CC944881c532",
    D3MMLiquidationRouter: "0xdc4d484A75A47170a54616b472946b8D013a2935",
    D3Vault: "0xBAf350b14ed48429A7772F7D05B2CFc6620744D9",
    D3UserQuota: "0x3b43d078Dc0B1c57C862990Ec8d7e22A184EabBE",
    D3PoolQuota: "0x6019C1596679eDE8828Cc65b35951E9638726E19",
    D3MMTemplate: "0x1d5D942A512331817994500e6967D029576aF1ED",
    D3MakerTemplate: "0x216C8B744c0727EfE0DD8A21d122724755A71D54",
    D3TokenTemplate: "0x066969652d41a2e9D8431295Dff66458FB1c894B",
    CloneFactory: "0x1ddD02f6d31C1eF04cFA0a1AA811406B5B2884E7",
    Maintainer: "0x01d3E7271c278Aa3AA56EeBa6a109b2C200679fA",
    FeeRateModel: "0x748c5D133D74a9ecbc715B13dCA7B3B356Ead750",
    D3MMFactory: "0x482432c15a1657020991aa60e856ac440dbE4CD6",
    D3Proxy: "0xbe9ec3C4825D87d77E0F049aA586449cF1d1E31b", // don't forget to add this to DODOApproveProxy
    D3MM: "", 
    dodoPriceFeed: "0xA33a06c119EC08F92735F9ccA37e07Af08C4f281",
  },
  chainlinkPriceFeed: {
    BTCUSD: "0x6ce185860a4963106506C203335A2910413708e9",
    ETHUSD: "0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612",
    DAIUSD: "0xc5C8E77B397E531B8EC06BFb0048328B30E9eCfB",
    DODOUSD: "0xA33a06c119EC08F92735F9ccA37e07Af08C4f281",
    USDTUSD: "0x3f3f5dF88dC9F13eac63DF89EC16ef6e7E25DdE7",
    USDCUSD: "0x50834F3163758fcC1Df9973b6e91f0F0F0434aD3",
  },
};

export { ARBITRUM_CONFIG };
