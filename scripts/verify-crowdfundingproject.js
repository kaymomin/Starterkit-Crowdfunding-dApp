const { run, ethers } = require("hardhat");
 
async function main() {
  //replace contractAddress with the one we saved above querying the 0th publishedProj
  const contractAddress = "0x8Db7e5A8cf83E79cE5014Db5283aba74B69A93B3"; //line5
  const args = [
    "Protesi al cazzo", ethers.utils.parseUnits("0.1", 18), "Aiutami ad allungare il cazzo!!",
"0x2baE66Ba8BAbec91C5a3B783140E698803e8AD59", 
 
  ];
 
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
      contract: "contracts/crowdfunding.sol:CrowdfundingProject",
    });
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log(error);
    }
  }
}
 
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });