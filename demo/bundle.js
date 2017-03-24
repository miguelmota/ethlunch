(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "contract_name": "Lunch",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "a",
          "type": "string"
        }
      ],
      "name": "firstLetter",
      "outputs": [
        {
          "name": "",
          "type": "bytes1"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "tallyVotes",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_a",
          "type": "string"
        },
        {
          "name": "_b",
          "type": "string"
        }
      ],
      "name": "stringCompare",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "restaurant",
          "type": "string"
        }
      ],
      "name": "addRestaurant",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "restaurant",
          "type": "string"
        }
      ],
      "name": "getVotes",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "restaurant",
          "type": "string"
        }
      ],
      "name": "restaurantExists",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "restaurant",
          "type": "string"
        }
      ],
      "name": "vote",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "type": "constructor"
    }
  ],
  "unlinked_binary": "0x606060405234610000575b5b5b6106cf8061001b6000396000f300606060405236156100675763ffffffff60e060020a60003504166333f269fd811461006c578063378a2178146100f457806360353db9146101035780636d77bd3e146101a7578063805265e5146101fc578063a6c7f8b214610261578063fc36e15b146102c8575b610000565b34610000576100bf600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284375094965061031d95505050505050565b604080517fff000000000000000000000000000000000000000000000000000000000000009092168252519081900360200190f35b346100005761010161035b565b005b3461000057610193600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284375050604080516020601f89358b0180359182018390048302840183019094528083529799988101979196509182019450925082915084018382808284375094965061035e95505050505050565b604080519115158252519081900360200190f35b3461000057610101600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284375094965061039695505050505050565b005b346100005761024f600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437509496506104b695505050505050565b60408051918252519081900360200190f35b3461000057610193600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284375094965061052095505050505050565b604080519115158252519081900360200190f35b3461000057610101600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437509496506105ee95505050505050565b005b6000602060405190810160405280600081525082905080600081518110156100005790602001015160f860020a900460f860020a0291505b50919050565b5b565b604080516020818101835260009182905282519081019092529081905281518351849184911461038d57600092505b5b505092915050565b6000816040518082805190602001908083835b602083106103c85780518252601f1990920191602091820191016103a9565b51815160209384036101000a6000190180199092169116179052604051919093018190038120875190965086955060019450879391925082918401908083835b602083106104275780518252601f199092019160209182019101610408565b51815160209384036101000a600019018019909216911617905292019485525060405193849003019092209290925550506003805460018101808355828183801582901161049a5760008381526020902061049a9181019083015b808211156104965760008155600101610482565b5090565b5b505050916000526020600020900160005b50829055505b5050565b60006000826040518082805190602001908083835b602083106104ea5780518252601f1990920191602091820191016104cb565b51815160209384036101000a6000190180199092169116179052920194855250604051938490030190922054925050505b919050565b60006000826040518082805190602001908083835b602083106105545780518252601f199092019160209182019101610535565b51815160209384036101000a6000190180199092169116179052604051919093018190038120885190965086955060019450889391925082918401908083835b602083106105b35780518252601f199092019160209182019101610594565b51815160209384036101000a600019018019909216911617905292019485525060405193849003019092205492909214935050505b50919050565b73ffffffffffffffffffffffffffffffffffffffff331660009081526002602052604090205460ff161561062157610000565b61062a81610520565b151561063557610000565b60016000826040518082805190602001908083835b602083106106695780518252601f19909201916020918201910161064a565b51815160209384036101000a6000190180199092169116179052920194855250604051938490030190922080549390930190925550505b505600a165627a7a723058207cfe8c31253860ec419f204cdec48ca9d8098238753ccf4ddbd6fb396816be0f0029",
  "networks": {
    "1486672580301": {
      "events": {},
      "links": {},
      "address": "0x00b2aa8da560face20a58fd8de65052be61fa9d1",
      "updated_at": 1490242055346
    },
    "1490236076553": {
      "events": {},
      "links": {},
      "address": "0x0ccb78b7d1fbd21804d7a2b3639e00160ec1305d",
      "updated_at": 1490242119412
    },
    "1490242797981": {
      "events": {},
      "links": {},
      "address": "0xa0f7ffd19d09019fbbf5124ad32ca897ad00f85b",
      "updated_at": 1490242959902
    }
  },
  "schema_version": "0.0.5",
  "updated_at": 1490242959902
}
},{}],2:[function(require,module,exports){
//const Web3 = require('web3');
//const web3 = new Web3();

//web3.setProvider(new web3.providers.HttpProvider('http://testrpc.adchain.com:8545'));

const contractConfig = require('../build/contracts/Lunch.json');
let LunchContract = null;
let lunch = null;

const addRestaurantInput = document.querySelector('#addRestaurantInput');
const addRestaurantButton = document.querySelector('#addRestaurantButton');

const voteInput = document.querySelector('#voteInput');
const submitVoteButton = document.querySelector('#submitVoteButton');

const getVotesInput = document.querySelector('#getVotesInput');
const getVotesButton = document.querySelector('#getVotesButton');

const output = document.querySelector('#output');

// wait for metamask inject
setTimeout(() => {
  LunchContract = web3.eth.contract(contractConfig.abi);
  lunch = LunchContract.at('0xa0f7ffd19d09019fbbf5124ad32ca897ad00f85b')

  web3.eth.defaultAccount = web3.eth.accounts[0];

}, 1500);

function handleResponse(error, result) {
  output.innerHTML = JSON.stringify({
    error,
    result
  }, null, 2);
}

addRestaurantButton.addEventListener('click', event => {
  event.preventDefault();

  lunch.addRestaurant(addRestaurantInput.value, handleResponse)
});

submitVoteButton.addEventListener('click', event => {
  event.preventDefault();

  lunch.vote(voteInput.value, handleResponse);
});

getVotesButton.addEventListener('click', event => {
  event.preventDefault();

  lunch.getVotes.call(getVotesInput.value, handleResponse);
});

},{"../build/contracts/Lunch.json":1}]},{},[2]);
