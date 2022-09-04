<script lang="ts">
    import Store_page from "/src/assets/store_page.png"
    import BackBtn from "./BackBtn.svelte";
    import Load from "/src/assets/load.gif";
    import Search from "/src/assets/search.png";
    export let lost_name:string;
    export let lost_location:string;
    export let lost_type:string;
    export let lost_when:string;
    export let lost_discoverer:string;
    export let lost_explanation:string;
    export let lost_picture:string;
    export let hash:string;
    export let backwhere:string;
    export let searchstring:string;

    interface iData{
        success:boolean,
        data:{
            id:string;
            name:string;
            location:string;
            registered_at:string;
            owenr:string;
            finder:string;
            find_time:number;
            photos:string;
            status:string;
            description:string;
        }[];
    }

    const search_info = async() => {
        const innerfetch = 'http://localhost:3000/product/searchproduct/:' + searchstring;
        const res = await fetch(innerfetch);
        const json = (await res.json()) as iData;
        return json;
    }

    const getD = (now) => {
        const d = new Date(now);
        const month = d.getMonth() + 1;
        const date = d.getDate();
        const hour = d.getHours();
        return `${month}월 ${date}일 ${hour}시`;
    };

    const onc = (evt:Event) => {
        const cardDiv = evt.currentTarget as HTMLDivElement;
        const name = cardDiv.dataset.name;
        const location = cardDiv.dataset.location;
        const type = cardDiv.dataset.type;
        const when = cardDiv.dataset.when;
        const discoverer = cardDiv.dataset.discoverer;
        const explanation = cardDiv.dataset.explanation;
        const picture = cardDiv.dataset.picture;
        lost_name = name;
        lost_location = location;
        lost_type = type;
        lost_when = when;
        lost_discoverer = discoverer;
        lost_explanation = explanation;
        lost_picture = picture;
        backwhere = '#main';
        backwhere = backwhere;
        hash = '#lostitem';
        hash = hash;
    }

    let promise_search = search_info();
</script>
<main>
    <h1>{searchstring}의 검색 결과</h1>
    <hr>
    {#await promise_search}
    <img class="load-img" width="180" height="180" src={Load} alt="sample">
    {:then value} 
        {#each value.data as data}
        <div class="card"  data-name={data.name} data-location={data.location} data-when={getD(data.find_time)} data-discoverer={data.finder} data-explanation={data.description} data-picture={data.photos} on:click={onc}>
            <div class="card-photo">
                <img class="card-img" width="120" src={data.photos} alt="sample">
            </div>
            <div class="card-info">
                <div class="card-name">
                    {data.name}
                </div>
                <div class="card-counts">
                    <span>{data.location} </span>
                    .
                    <span> {getD(data.find_time)}</span>
                </div>
            </div>
         </div>
        {/each}
    {/await}
</main>
<style lang="scss">
</style>