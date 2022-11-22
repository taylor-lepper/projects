
const { expect } = require('chai');
const hre = require("hardhat");
const { ethers } = require("hardhat");
const helpers = require("./helpers");
let SimpleStorage = artifacts.require("SimpleStorage");


contract('SimpleStorage', function(accounts){
    let token;
    let hardHatToken;

    beforeEach(async function() {
        token = await hre.ethers.getContractFactory("SimpleStorage");
        hardHatToken = await token.deploy();

        await hardHatToken.deployed();
    });


    it("should hold 0 at start", async function() {
        let val = await hardHatToken.get();
        assert.equal(val, 0, "0 should be set");
    });

    it("should deposit 1000", async function() {
        await hardHatToken.set(1000);
        let val = await hardHatToken.get();
        assert.equal(val, 1000, "1000 should be set");
    });

    it("can time travel", async function() {
        const dayInSeconds = 24*60*60;
        let timeBefore = 0;
        let timeAfter = 0;

        await web3.eth.getBlock('latest').then(function(block){
            timeBefore = block.timestamp;
        });

        await helpers.timeTravel(web3, dayInSeconds);
        // await timeTravel(web3, dayInSeconds);
        await web3.eth.getBlock('latest').then(function(block){
            timeAfter = block.timestamp;
        });

        assert.isAtLeast(timeAfter - timeBefore, dayInSeconds, `It did not advance with a day ${timeAfter - timeBefore}`);
    });
});
