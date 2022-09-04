<script lang="ts">
    import Load from "/src/assets/load.gif";
    import Search from "/src/assets/search.png";
    import Camera from "/src/assets/camera.png";
    import Throwerror from "./Throwerror.svelte";
    
    export let lost_name:string;
    export let lost_location:string;
    export let lost_type:string;
    export let lost_when:string;
    export let lost_discoverer:string;
    export let lost_explanation:string;
    export let lost_picture:string;
    export let hash:string;
    export let backwhere:string;
    export let disconected:boolean;
    let search:string;

    interface iData{
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

    interface UseriData{
        data:{
            name:string;
            profile:string;
        }[];
    }

    const lost_info = async() => {
        const res = await fetch(`http://localhost:3000/product/products`);
        const json = (await res.json()) as iData;
        return json;
    }

    let promise_lost = lost_info();

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

    const user_info = async() => {
        const res = await fetch(`/public/userinfo.json`);
        const json = (await res.json()) as UseriData;
        return json;
    }

    let promise_user = user_info();
</script>
<main>
    {#await promise_lost}
        <img class="load-img" width="180" height="180" src={Load} alt="sample">
    {:then value} 
        <div class="search">
            <input class="search-bar" bind:value={search} type="text" placeholder="아직 구현되지 않음.">
            <button class="search-button">
                <img width="20" src={Search} alt="sample">
            </button>
        </div>
        <hr>
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

    /*.user-pic{
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
    }*/
    
    .card{
        display: flex;
        /*border{
            top: 1px solid #A1BCFF;
            bottom: 1px solid #A1BCFF;
        }*/
        //border-top: 1px solid #A1BCFF;
        border-bottom: 1px solid #ff7752;
        color: black;
        font-size: 130%;
        padding: 2%;
        //margin-top: 4px;
        //margin-bottom: 4px;
        .card-counts{
            color: gray;
            font-size: 90%;
        }
        div{
            flex-direction: row;
        }

        // &:hover{
        //     background-color: gray;
        // }
    }

    .card-img{
        border: 1px solid #ff7752;
        border-radius: 10%;
        margin-right: 1vw;
    }
    
    .user-profile{
        display: flex; 
        justify-content: center;
        margin: 6px;

        & > img{
            width: 20%;
            border: {
            width: 2px;
            style: solid;
            color: #ff7752;
            radius: 50%;
        }
        }
    }

    input{
            display: block;
            width: 80vw;
            height: 140%;

            // &:hover{
            //     background-color: blue;
            // }
    }

    .search{
        display: flex; 
        justify-content: center;
        align-items: center;
        //margin: 8px;
        padding: 2%;
        height: 4vh;
        & > button{
            height: 150%;
            width: 10vw;
            background-color: #ff7752;
            font-size: 10px;
            border: 0;
        }
    }

    #report_lost{
        position: fixed;
        right: 5%;
        bottom: 15%;
        // width: 10%;
        // height: 10%;
        padding: 2%;
        border: 1px solid #4B4B4B;
        border-radius: 50%;
        background-color: white;
        & > img{
            width: 100%;
            height: 100%;
        }
    }

    .popup-disconected{
        background-color: red;
        display: flex;
        align-items: center;
        padding: 4px;
    }
</style>