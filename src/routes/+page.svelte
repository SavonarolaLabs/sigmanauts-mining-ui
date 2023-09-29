<script lang="ts">
    import { onMount } from "svelte";
    import { getPage } from "./pageregex";
    import type { Page } from "$lib/pageparser";

    let page: Page | undefined;
    onMount(fetchData);
    async function fetchData() {
        let formData = new FormData();
        formData.append(
            "wallet",
            "9eZPTmn8zp5GJ7KZwTo8cEuxNdezWaY3hBbLeWid7EAZedzb9tD"
        );
        const res = await fetch(
            "https://my.ergoport.dev/cgi-bin/mining/mining_all.html",
            {
                method: "POST",
                body: formData,
            }
        );
        const data = await res.text();

        const p = getPage(data);

        console.log(page);
    }
</script>

<!-- Header start -->
<div class="flex flex-col h-full">
    <div class="w-full bg-yellow-300">
        <div>logo here</div>
    </div>
    <!-- Header end -->

    <div class="flex grow">
        <div class="h-full main-img bg-red-400">asf</div>
        <!-- Main start -->
        <div class="h-full">hello</div>
        <!-- Main end -->
    </div>
</div>

<style>
    .main-img {
        background-image: url("bg.png");
        width: 200px;
    }
</style>
