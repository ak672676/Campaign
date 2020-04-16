import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xf4298c45DFE68637D322f0068e113bf2Dc142EF5"
);

export default instance;
