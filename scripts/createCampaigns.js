const { ethers } = require("hardhat");
async function main() {
const contract = await ethers.getContractAt("CrowdFactory",
"0xd8939C4f8347668C897E7dCd2c40c3b1A5B80EdC") 
await contract.createProject(
"Protesi al cazzo", 
ethers.utils.parseUnits("0.1", 18), 
"Aiutami ad allungare il cazzo!!", 
"0x2baE66Ba8BAbec91C5a3B783140E698803e8AD59")
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });