const _Web3 = require('web3');

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
  if (!web3) {
    web3 = new _Web3();
    web3.setProvider(new web3.providers.HttpProvider('http://testrpc.adchain.com:8545'));
  }

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
