pragma solidity ^0.6.6;
pragma experimental ABIEncoderV2;

interface OrFeedInterface {
  function getExchangeRate
  ( string memory fromSymbol, string memory toSymbol, string memory venue, uint256 amount ) external view returns ( uint256 );
  function getTokenDecimalCount ( address tokenAddress ) external view returns ( uint256 );
  function getTokenAddress ( string memory symbol ) external view returns ( address );
  function getSynthBytes32 ( string memory symbol ) external view returns ( bytes32 );
  function getForexAddress ( string memory symbol ) external view returns ( address );
  function arb
  (address fundsReturnToAddress, address liquidityProviderContractAddress, string[] memory tokens,  uint256 amount, string[] memory exchanges) external payable returns (bool);
}
