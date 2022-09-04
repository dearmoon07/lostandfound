<script lang="ts">
    import Load from "/src/assets/load.gif";
    export let lost_name:string;
    export let lost_location:string;
    export let lost_type:string;
    export let lost_when:string;
    export let lost_discoverer:string;
    export let lost_explanation:string;
    export let lost_picture:string;
    export let hash:string;
    import Backbtn from "./BackBtn.svelte";
import { dataset_dev } from "svelte/internal";

    interface iData{
        data:{
            id:number;
            name:string;
            location:string;
            type:string;
            when:number;
            discoverer:string;
            status:boolean;
            explanation:string;
            picture:string;
        }[];
    }

    const lost_info = async() => {
        const res = await fetch(`/public/info.json`);
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
        const cardDiv = evt.currentTarget as HTMLDivElement
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
        hash = '#lostitem';
        hash = hash;
    }
</script>
<main>
    {#await promise_lost}
    <div class="load">
        <img class="load-img" width="180" height="180" src={Load} alt="sample">
    </div>
    {:then value} 
    <div class="header">
            <Backbtn bind:hash={hash} from="#settings"></Backbtn>
            <h1>제보 기록&nbsp;</h1>	
    </div>
    <hr>
    <div class="count-lost">
        <div>
            {value.data.length}개를 제보함
        </div>
    </div>
    <hr>
    {#each value.data as data}
    <div class="card"  data-name={data.name} data-location={data.location}  data-type={data.type} data-when={getD(data.when)} data-discoverer={data.discoverer} data-explanation={data.explanation} data-picture={data.picture} on:click={onc}>
        <div class="card-photo">
            <img class="card-img" width="120" src={data.picture} alt="sample">
        </div>
        <div class="card-info">
            <div class="card-name">
                {data.name}
            </div>
            <div class="card-counts">
                <span>{data.location} </span>
                .
                <span> {getD(data.when)}</span>
            </div>
        </div>
     </div>
{/each}
    {/await}
</main>
<style lang="scss">
.card{
        display: flex;
        /*border{
            top: 1px solid #A1BCFF;
            bottom: 1px solid #A1BCFF;
        }*/
        //border-top: 1px solid #A1BCFF;
        border-bottom: 1px solid #ff7752;
        color: black;
        font-size: 20px;
        padding: 10px;
        //margin-top: 4px;
        //margin-bottom: 4px;
        
        .card-counts{
            color: gray;
            font-size: 14px;
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
        margin: 5px;
    }

    .header{
        display: flex;
        flex-direction: row;
        align-items: center;
        //justify-content: center;
        & > h1{
            display: inline-block;
        }

        & > img{
            display: inline-block;
            width: 40px;
            height: 40px;
        }
    }

    .count-lost{
        display: flex;
        justify-content: center;
        & > div{
            font-size: 40px;
        }
    }
</style>