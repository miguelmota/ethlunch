pragma solidity ^0.4.0;

contract Lunch {
    mapping(string => uint8) tally;
    mapping(string => bytes32) hashMap;
    mapping(address => bool) hasVoted;
    string[] restaurants;
    address owner;

    // SOLIDITY TIME IN SECONDS, JAVASCRIPT TIME IN MILLISECONDS
    uint endTime;

    event RestaurantAdded(string restaurant);
    event Vote(string restaurant, address voter);
    event Winner(string restaurant);

    modifier isOwner() {
        if (msg.sender != owner) throw;
        _;
    }

    modifier notOver() {
        if (now > endTime) throw;
        _;
    }

    modifier isOver() {
        if (now <= endTime) throw;
        _;
    }

    function Lunch(uint256 _endTime) {
        if (_endTime <= now) throw;
        owner = msg.sender;
        endTime = _endTime;
    }

    function addRestaurant(string restaurant) isOwner notOver {
        if (restaurantExists(restaurant)) throw;
        bytes32 hash = sha3(restaurant);
        hashMap[restaurant] = hash;
        restaurants.push(restaurant);
        RestaurantAdded(restaurant);
    }

    function vote(string restaurant) notOver {
        if (hasVoted[msg.sender]) throw;
        if (!restaurantExists(restaurant)) throw;
        tally[restaurant] += 1;
        hasVoted[msg.sender] = true;
        Vote(restaurant, msg.sender);
    }

    function restaurantExists(string restaurant) returns (bool) {
        bytes32 hash = sha3(restaurant);
        return hashMap[restaurant] == hash;
    }

    function tallyVotes() returns (string) {
        uint8 winnerIndex = 0;

        for (uint8 i = 0; i < restaurants.length; i++) {
            if (tally[restaurants[i]] >= tally[restaurants[winnerIndex]]) {
                winnerIndex = i;
            }
        }

        Winner(restaurants[winnerIndex]);
        return restaurants[winnerIndex];
    }

    function getVotes(string restaurant) returns (uint) {
        return tally[restaurant];
    }

    function destroy() isOwner isOver {
        selfdestruct(msg.sender);
    }

    function() {}
}