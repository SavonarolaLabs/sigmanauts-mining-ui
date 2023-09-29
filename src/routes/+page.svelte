<script lang="ts">
    import { onMount } from "svelte";
    import { getPage } from "../lib/pageregex";
    import type { Page } from "$lib/pageparser";
    import { shortenAddress } from "$lib/utils";
    import { timeSince } from "$lib/time";
    import { base } from '$app/paths';


    let address = "9eZPTmn8zp5GJ7KZwTo8cEuxNdezWaY3hBbLeWid7EAZedzb9tD";

    let page: Page = {
        minerStats: {
            Address: "9eZPTmn8zp5GJ7KZwTo8cEuxNdezWaY3hBbLeWid7EAZedzb9tD",
            PendingShares: "257.759997458062",
            PendingBalance: "0 ",
            TotalPaid: "2.9606 ERG",
            TodayPaid: "0",
            LastPayment: "2023-09-28T23:49:55.404233Z",
            LastPaymentLink:
                "a9308015385803c3d9115ce770055f3c4eb262856b7fa4ab3cdbeb1d085c6fa1",
        },
        poolStats: {
            PoolHashrate: "6.7247944 g/h",
            ConnectedMiners: "7",
            NetworkHashrate: "19.1144200670115 t/h",
            NetworkDifficulty: "2293730408041379",
            StatsUpdated: "2023-09-29T16:00:00Z",
        },
        workers: [
            {
                Number: "1",
                Name: "qx3080",
                Hashrate: "160.99869 MH/s",
                SharesPerSecond: "0.035",
            },
            {
                Number: "2",
                Name: "qx3090",
                Hashrate: "337.330589 MH/s",
                SharesPerSecond: "0.073",
            },
        ],
        latestBlocks: [
            {
                PoolID: "ErgoSigmanauts",
                BlockHeight: "1100468",
                NetworkDifficulty: "513409.339078689",
                Status: "confirmed",
                ConfirmationProgress: "1",
                Effort: "1.52859983632597",
                TransactionConfirmationData: "2b87c059130342c6",
                Reward: "36.0033",
                InfoLink:
                    "9a8ef707ab2511c80f369c65f5bcdd2a4579c3ba8f58a4b39c9fedb4bf62a1c8",
                Hash: "9a8ef707ab2511c80f369c65f5bcdd2a4579c3ba8f58a4b39c9fedb4bf62a1c8",
                Miner: "9hashqSPuP8Y9wfvkeW8Th4o4GUEDPDnJuZH1p9XupTCyXaJocM",
                Source: "ErgoSigmanauts",
                Created: "2023-09-27T23:34:37.068514Z",
            },
            {
                PoolID: "ErgoSigmanauts",
                BlockHeight: "1097673",
                NetworkDifficulty: "584774.232242884",
                Status: "confirmed",
                ConfirmationProgress: "1",
                Effort: "3.57595857342234",
                TransactionConfirmationData: "24c68528b4ee4956",
                Reward: "36.0042",
                InfoLink:
                    "8b1aaecd19515c51877222af326f5c0cc7f17c059896ad00cc57bf4cfeec1c05",
                Hash: "8b1aaecd19515c51877222af326f5c0cc7f17c059896ad00cc57bf4cfeec1c05",
                Miner: "9fYvQMsMN3NNaw33cAFnRdyHy1DpxtxfADvGqUV3ocLptw4HpcP",
                Source: "ErgoSigmanauts",
                Created: "2023-09-24T01:01:20.952316Z",
            },
            {
                PoolID: "ErgoSigmanauts",
                BlockHeight: "1094505",
                NetworkDifficulty: "529469.026306957",
                Status: "confirmed",
                ConfirmationProgress: "1",
                Effort: "0.295473575160825",
                TransactionConfirmationData: "4002d585b13ee149",
                Reward: "36.00275",
                InfoLink:
                    "8d1f05f0881104200c79c28cdba2226ed3b46f850bab4ae7352c1f22fe38227f",
                Hash: "8d1f05f0881104200c79c28cdba2226ed3b46f850bab4ae7352c1f22fe38227f",
                Miner: "9eZPTmn8zp5GJ7KZwTo8cEuxNdezWaY3hBbLeWid7EAZedzb9tD",
                Source: "ErgoSigmanauts",
                Created: "2023-09-19T14:57:26.034039Z",
            },
            {
                PoolID: "ErgoSigmanauts",
                BlockHeight: "1094037",
                NetworkDifficulty: "551849.696699577",
                Status: "confirmed",
                ConfirmationProgress: "1",
                Effort: "0.195021239206627",
                TransactionConfirmationData: "22efbeebd035a934",
                Reward: "36.0066",
                InfoLink:
                    "5ee133f0971d5e5dea7b7a0fd0fb2de9bc351be6aa749c505a44a37224122cf0",
                Hash: "5ee133f0971d5e5dea7b7a0fd0fb2de9bc351be6aa749c505a44a37224122cf0",
                Miner: "9iQS22vfWdF2N84Lvv9jgAMFGLyL7t17SWbHGEfaddaG7ZbL3fJ",
                Source: "ErgoSigmanauts",
                Created: "2023-09-18T23:10:27.032377Z",
            },
        ],
    };
    //onMount(fetchData);
    async function fetchData() {
        loadFromAddress(address);
    }
    async function loadFromAddress(address: string) {
        let formData = new FormData();
        formData.append("wallet", address);
        const res = await fetch(
            "https://my.ergoport.dev/cgi-bin/mining/mining_all.html",
            {
                method: "POST",
                body: formData,
            }
        );
        const data = await res.text();

        const newPage = getPage(data);

        if(newPage?.minerStats?.Address){
            page = newPage;
        }else{
            const res = await fetch(
                "https://my.ergoport.dev/cgi-bin/mining/mining_all.html",
                {
                    method: "POST",
                    body: formData,
                }
            );
            const data = await res.text();
            const newPage = getPage(data);
            page = newPage;
        }
    }
</script>

<div class="flex flex-col h-full">
    <!-- Header start -->
    <div
        class="flex gap-4 w-full p-4"
        style="border-bottom: 1px solid rgba(255,255,255,0.2);"
    >
        <div class="flex flex-col items-center">
            <a href="{base}/">
                <div
                    class="font-bold text-green-400 text-3xl"
                    style="margin-left:35px"
                >
                    SMG
                </div>
            </a>
            <!-- <div class="text-xs text-slate-500">Sigmanauts Mining Group</div> -->
        </div>
        <div class="flex gap-6 grow justify-center">
            <div class="optional-md">
                <div class="text-slate-400 text-sm">Hashrate:</div>
                <div>
                    {page?.poolStats?.NetworkHashrate}
                </div>
            </div>

            <div class="optional-md">
                <div class="text-slate-400 text-sm">Difficulty:</div>
                <div>
                    {page?.poolStats?.NetworkDifficulty}
                </div>
            </div>
        </div>
        <div class="flex items-center justify-center">
            <div class="font-bold text-white">
                {shortenAddress(page?.minerStats?.Address)}
            </div>
        </div>
    </div>
    <!-- Header end -->

    <div class="flex grow">
        <div class="h-full main-img bg-red-400" style='background-image: url("{base}mines.png");'/>
        <!-- Main start -->
        <div class="flex flex-col w-full p-10 custom-bg">
            <div class="uppercase mb-8 font-bold text-5xl">Sigmanauts Pool</div>
            <!-- all widgets start -->
            <div class="w-full flex gap-4 flex-wrap" style="height:min-content">
                <!-- widget start -->
                <div class="widget p-3 grow">
                    <div class="uppercase text-slate-400">
                        Latest Blocks Found
                    </div>
                    <div class="font-bold mt-2">
                        {page?.latestBlocks?.length ?? 0}
                    </div>
                </div>
                <!-- widget end -->
                <!-- widget start -->
                <div class="widget p-3 grow">
                    <div class="uppercase text-slate-400">Total Paid</div>
                    <div class="font-bold mt-2">
                        {page?.minerStats?.TotalPaid ?? 0}
                    </div>
                </div>
                <!-- widget end -->
                <!-- widget start -->
                <div class="widget p-3 grow">
                    <div class="uppercase text-slate-400">Pending Shares</div>
                    <div class="font-bold mt-2">
                        {page?.minerStats?.PendingShares ?? 0}
                    </div>
                </div>
                <!-- widget end -->
                <!-- widget start -->
                <div class="widget p-3 grow">
                    <div class="uppercase text-slate-400">Hashrate Share</div>
                    <div class="font-bold mt-2">
                        {(
                            page?.workers
                                ?.map((w) => +w.SharesPerSecond)
                                .reduce((a, b) => a + 100 * b, 0) ?? 0
                        ).toFixed(1)} %
                    </div>
                </div>
                <!-- widget end -->
            </div>
            <!-- all widgets end -->
            {#if page?.latestBlocks?.length > 0}
                <table class="mining mt-10">
                    <tr class="text-slate-400">
                        <!-- 
                "BlockHeight": "1100468",
                "NetworkDifficulty": "513409.339078689",
                "Status": "confirmed",
                "Effort": "1.52859983632597",
                "Reward": "36.0033",
                "Hash": "9a8ef707ab2511c80f369c65f5bcdd2a4579c3ba8f58a4b39c9fedb4bf62a1c8",
                "Miner": "9hashqSPuP8Y9wfvkeW8Th4o4GUEDPDnJuZH1p9XupTCyXaJocM",
                "Created": "2023-09-27T23:34:37.068514Z" 
            -->
                        <th>Found</th>
                        <th class="optional-md">Reward</th>
                        <th class="optional-md">Height</th>
                        <th class="optional-md">Difficulty</th>
                        <th>Block&nbsp;Hash</th>
                        <th>Miner</th>
                        <th>Effort</th>
                        <th class="optional-md">Status</th>
                    </tr>
                    {#each page?.latestBlocks as block}
                        <tr>
                            <td>{timeSince(Date.parse(block.Created))} ago</td>
                            <td class="optional-md">{(+block.Reward).toFixed(2)}</td>
                            <td class="optional-md">{block.BlockHeight}</td>
                            <td class="optional-md">{(+block.NetworkDifficulty).toFixed(0)}</td>
                            <td class="text-green-300"
                                ><a
                                    href={`https://explorer.ergoplatform.com/en/blocks/${block.Hash}`}
                                    >{shortenAddress(block.Hash)}</a
                                ></td
                            >
                            <td class="text-green-300">
                                <button
                                    on:click={() => {
                                        address = block.Miner;
                                        fetchData();
                                    }}
                                >
                                    {shortenAddress(block.Miner)}
                                </button>
                            </td>
                            <td>{(+block.Effort).toFixed(2) * 100}%</td>
                            <td class="optional-md">{block.Status}</td>
                        </tr>
                    {/each}
                </table>
            {/if}
        </div>
        <!-- Main end -->
    </div>
</div>

<style>
    @media screen and (max-width:768px){
        .optional-md{
            display:none;
        }
    }
    @media screen and (max-width: 1023px){
        .main-img {
            display:none;
        }
    }
    .main-img {
        width: 200px;
    }
    .custom-bg {
        background: linear-gradient(
            60deg,
            rgba(17, 17, 17, 1) 5%,
            rgba(17, 17, 17, 1) 40%,
            rgba(2, 35, 56, 1) 100%
        );
    }

    .widget {
        border: 2px solid rgba(128, 255, 128, 0.2);
        background-color: rgba(255, 255, 255, 0.05);
    }
    .mining {
        text-align: left;
    }
    tr:nth-child(even) {
        background-color: rgba(255, 255, 255, 0.1);
    }
    td,
    th {
        padding: 0.5em;
    }
    th {
        font-weight: normal;
    }
</style>
