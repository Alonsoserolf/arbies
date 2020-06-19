pragma solidity ^0.6.6;

interface IBancorNetworkPathFinder {
    function generatePath(address _sourceToken, address _targetToken) external view returns (address[] memory);
}
