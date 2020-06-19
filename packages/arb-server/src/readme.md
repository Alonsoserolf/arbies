# Gas Price API:
Returns the fast, standard and safe low prices, along with the current block
https://ethgasstation.info/api/ethgasAPI.json
fast: Recommended fast(expected to be mined in < 2 minutes) gas price in x10 Gwei(divite by 10 to convert it to gwei)
fastest: Recommended fastest(expected to be mined in < 30 seconds) gas price in x10 Gwei(divite by 10 to convert it to gwei)
safeLow: Recommended safe(expected to be mined in < 30 minutes) gas price in x10 Gwei(divite by 10 to convert it to gwei)
average: Recommended average(expected to be mined in < 5 minutes) gas price in x10 Gwei(divite by 10 to convert it to gwei)
block_time: Average time(in seconds) to mine one single block
blockNum: Latest block number
speed: Smallest value of (gasUsed / gaslimit) from last 10 blocks
safeLowWait: Waiting time(in minutes) for safeLow gas price
avgWait: Waiting time(in minutes) for average gas price
fastWait: Waiting time(in minutes) for fast gas price
fastestWait: Waiting time(in minutes) for fastest gas price
