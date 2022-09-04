<script lang="ts">
    import { bind } from "svelte/internal";
    import Switch from "./switch.svelte";
    import Load from "/src/assets/load.gif";
    export let hash:string;

    interface UseriData{
        data:{
            name:string;
            profile:string;
        }[];
    }

    const user_info = async() => {
        const res = await fetch(`/public/userinfo.json`);
        const json = (await res.json()) as UseriData;
        return json;
    }

    let promise_user = user_info();

</script>
<main>
    {#await promise_user}
        <img class="load-img" width="180" height="180" src={Load} alt="sample">
    {:then value} 
    <div class="user">
        <img class="user-img" src={value.data[0].profile} alt="sample">
    </div>
    <div class="user">
        <div class="user-name">{value.data[0].name}</div>
    </div>
    {/await}
    <hr>
        <div class="flex">
    </div>
    <div class="box record line">
        기능
        <button class="set-act-btn" on:click={() => hash = '#record'}>제보 기록</button>
    </div>
    <div class="box set-act line">
        기타
        <button class="set-act-btn" on:click={() => hash = '#login'}>로그아웃</button>
    </div>
</main>
<style lang="scss">
    .user{
        display: flex; 
        justify-content: center;
    }
    .flex{
        flex-direction: row;
        justify-content: center;
    }

    .user-name{
        display: block;
        font-size: 5vh;
        margin-bottom: 5px;
    } 

    .user > img{
        margin: 10px;
        margin-bottom: 0px;
        width: 14vh;
        border-radius: 50%;
        border: 1px solid #ff7752;
    }

    .line{
        border-top: 1px solid #ff7752;
        border-bottom: 1px solid #ff7752;
    }

    .box{
        font-size: 2vh;
        color: gray;
        padding: 21px;
        padding-top: 8px;
    }

    .option{
        color: black;
        font-size: 4vh;
        display: inline-block;
    }

    .user-message-switch{
        display: flex;
        flex-direction: row-reverse;
    }

    .set-act{
        border-top: 0;
    }

    .set-act-btn{
        display: block;
        background-color: rgb(255, 255, 255);
        border: 0px;
        color: black;
        width: 90vw;
        // left: 0px;
        // right: 0px;
        font-size: 4vh;
        text-align: left;
        padding: 0;
    }

    .record{
        border-top: 0;
    }
</style>