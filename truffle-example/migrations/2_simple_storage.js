const { Module } = require("module");

var SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function(deployer){ 
    deployer.deploy(SimpleStorage);
};
