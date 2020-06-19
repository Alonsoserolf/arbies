pragma solidity ^0.6.6;

interface IBancorNetwork {
    function getReturnByPath(address[] memory _path, uint256 _amount) external view returns (uint256, uint256);
    function convert2(address[] memory _path, uint256 _amount,
        uint256 _minReturn,
        address _affiliateAccount,
        uint256 _affiliateFee
    ) external payable returns (uint256);

    function claimAndConvert2(
        address[] memory _path,
        uint256 _amount,
        uint256 _minReturn,
        address _affiliateAccount,
        uint256 _affiliateFee
    ) external returns (uint256);
}
