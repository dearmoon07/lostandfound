<script lang="ts">
    import { time } from "console";
    import type { format } from "path";
    import { dataset_dev, each } from "svelte/internal";
    import Load from "/src/assets/load.gif";
    import Search from "/src/assets/search.png";
    import Camera from "/src/assets/camera.png";
    import Catatool from "/src/assets/cate_tool.png";
    import Disconec from "/src/assets/disconected.png";
    import Category from "./Category.svelte";
    export let hash:string;
    let search:string;

    interface iData{
        data:{
            id: string,   
            title:string,
            name:string,
            location:string,
            description:string,
            category:string,
            time:number
        }[];
    }

    const lost_info = async() => {
        const res = await fetch(`http://localhost:3000/bulletin/bulletins`);
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
    
</script>
<button id="report_lost" on:click={() => hash = '#bulletinreport'}>
    <img src={Catatool} alt="sample">
</button>
<main>
    {#await promise_lost}
        <img class="load-img" width="180" height="180" src={Load} alt="sample">
    {:then value} 
        {#each value.data as data}
            <div class="card">
                <div id="title">
                    {data.title}
                </div>
                <div id="id_and_location">
                    {data.name}
                    .
                    {data.location}
                </div>
                <div id="description">
                    {data.description}
                </div>
                <div id="category_and_date">
                    <span id="category_shape">
                        {data.category}
                    </span> 
                    ▪
                    {getD(data.time)}
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

        // &:hover{
        //     background-color: gray;
        // }
    }

    #id_and_location{
        font-size: 70%;
        color: gray;
    }

    #category_shape{
        border: 1px solid #4B4B4B;
        border-radius: 30%;
        width: 10%;
        display: inline-flex;
        justify-content: center;
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