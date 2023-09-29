import type { Block, MinerStats, Page, PoolStats, PoolWorker } from "$lib/pageparser";

const minerStats = /<li>\n<b>Stats for Miner: (?<Address>.*)<\/b><br><br>\nPending Shares: (?<PendingShares>.*)<br>\nPending Balance: (?<PendingBalance>.*)\(this will typically be zero as payments are made a few moments after the block clears\)<br>\nTotal Paid: (?<TotalPaid>.*)<br>\nToday Paid: (?<TodayPaid>.*)<br>\nLast Payment: (?<LastPayment>.*)<br>\nLast Payment Link: <a href="https:\/\/explorer.ergoplatform.com\/en\/transactions\/(?<LastPaymentLink>.*)" target="_blank">Click here<\/a>/gm
const poolStats = /<b>Overall Pool Stats:<\/b><br><br>\nPool Hashrate: (?<PoolHashrate>.*)<br>\nConnected Miners: (?<ConnectedMiners>.*)<br>\nNetwork Hashrate: (?<NetworkHashrate>.*)<br>\nNetwork Difficulty: (?<NetworkDifficulty>.*)<br>\nStats Updated: (?<StatsUpdated>.*)/gm
const latestBlock =/<b>Latest Block Information:<\/b><br><br>\nPool ID: (?<PoolID>.*)<br>\nBlock Height: (?<BlockHeight>.*)<br>\nNetwork Difficulty: (?<NetworkDifficulty>.*)<br>\nStatus: (?<Status>.*)<br>\nConfirmation Progress: (?<ConfirmationProgress>.*)<br>\nEffort: (?<Effort>.*)<br>\nTransaction Confirmation Data: (?<TransactionConfirmationData>.*)<br>\nReward: (?<Reward>.*)<br>\nInfo Link:  <a href="https:\/\/explorer.ergoplatform.com\/en\/blocks\/(?<InfoLink>.*)" target="_blank">Click here<\/a><br>\nHash: (?<Hash>.*)<br>\nMiner: (?<Miner>.*)<br>\nSource: (?<Source>.*)<br>\nCreated: (?<Created>.*)<br>\n<\/li>/gm
const workers = /<li>\n<b>Worker #(?<Number>.*)<\/b><br><br>\nName: (?<Name>.*)<br>\nHashrate: (?<Hashrate>.*)<br>\nShares per Second: (?<SharesPerSecond>.*)<br>\n<\/li>/gm

export function getPage(input:string): Page{
    return {
        minerStats: getMinerStats(input),
        poolStats: getPoolStats(input),
        workers: getWorkers(input),
        latestBlocks: getLatestBlocks(input)
    }
}

function getMinerStats(input: string): MinerStats| null{
    const match = minerStats.exec(input)
    if(match){
        return (match.groups as MinerStats)
    }
    return null
}

function getPoolStats(input:string): PoolStats | null{
    const match = poolStats.exec(input)
    if(match){
        return (match.groups as PoolStats)
    }
    return null;
}

function getLatestBlocks(input:string): Array<Block>{
    let match;
    let blocks = []
    while ((match = latestBlock.exec(input)) !== null) {
        blocks.push(match.groups)
    }
    return (blocks as Array<Block>);
}

function getWorkers(input:string): Array<PoolWorker>{
    let match;
    let w = []
    while ((match = workers.exec(input)) !== null) {
        w.push(match.groups)
    }
    return (w as Array<PoolWorker>);
}