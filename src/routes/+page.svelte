<script lang="ts">
    import { onMount } from "svelte";
    import { getPage } from "./pageregex";

    onMount(fetchData)
    async function fetchData(){
        let formData = new FormData();
        formData.append('wallet', '9eZPTmn8zp5GJ7KZwTo8cEuxNdezWaY3hBbLeWid7EAZedzb9tD');
        const res = await fetch("https://my.ergoport.dev/cgi-bin/mining/mining_all.html", {
            method:'POST',
            body: formData
        })
        const data = await res.text();

        const page = getPage(data);

        console.log(page)
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
