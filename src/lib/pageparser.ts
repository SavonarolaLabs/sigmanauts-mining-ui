export type Page = {
    minerStats: MinerStats|null
    poolStats: PoolStats|null
    workers: Array<PoolWorker>
    latestBlocks: Array<Block>
}

export type MinerStats = {
    Address?: string
    PendingShares?: string
    PendingBalance?: string
    TotalPaid?: string
    TodayPaid?: string
    LastPayment?: string
}

export type PoolWorker = {
    Number?: string
    Name?: string
    Hashrate?: string
    SharesPerSecond?: string
}

export type Block = {
    PoolID?: string
    BlockHeight?: string
    NetworkDifficulty?: string
    Status?: string
    ConfirmationProgress?: string
    Effort?: string
    TransactionConfirmationData?: string
    Reward?: string
    InfoLink?: string
    Hash?: string
    Miner?: string
    Source?: string
    Created?: string
}

export type PoolStats = {
    PoolHashrate?: string
    ConnectedMiners?: string
    NetworkHashrate?: string
    NetworkDifficulty?: string
    StatsUpdated?: string
}