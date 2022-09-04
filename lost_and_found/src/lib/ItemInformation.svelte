<script lang="ts">
    export let hash: string;
    export let lost_name:string;
    export let lost_location:string;
    export let lost_type:string;
    export let lost_when:string;
    export let lost_discoverer:string;
    export let lost_explanation:string;
    export let lost_picture:string;
    export let backwhere:string;
    import Backbtn from "./BackBtn.svelte";

    let makepopup:boolean = false;

    interface dataframe{
        success:boolean;
    }

    const pop = async() => {
        const res = await fetch(`http://localhost:3000/bulletin/searchbulletin/:나다`);
        const json = await res.json() as dataframe;
        return json;
    }

    let popup = pop();

    const onc = () => {
        makepopup = true;
    }
</script>
{#if makepopup}
    
{:else}

{/if}
<main>
    <div class="fake">
        <Backbtn bind:hash={hash} from = {backwhere}></Backbtn>
    </div>
    <div class="box-background">
            <img class="box-lost-img" src={lost_picture} alt="sample">
    </div>
    <div class="box-lost-name">
        {lost_name}
    </div>
    <div class="box-lost-counts">
        {lost_location} . {lost_when}
    </div>
    <div class="box-lost-discoverer">
        제보자: {lost_discoverer}
    </div>
    <div class="box-lost-explanation">
        설명: {lost_explanation}
    </div>
    <div class="fakebtn">
        <button class="check-owner" on:click={() => onc()}>주인입니다</button>
    </div>
   
</main>
<style lang="scss">
    
    .fake{
        background-color: #ff7752;
    }
    
    .box-background{
        background-color: #ff7752;
        right: 0px;
        left: 0px;
        border: 1px solid #ff7752;
        border-radius: 0px 0px 30px 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        & > .box-lost-img{
            width: 40%;
            border-radius: 10%;
            border: 3px solid black;
        }
    }

    .fake{
        background-color: #ff7752;
    }

    .back{
        width: 50px;
                    height: 50px;
                    background: #D9D9D9;
                    border-radius: 50%;
                    margin: 20px;

                    &:active{
                        background: gray;
                    }
    }

    .box-lost-name{
        font-size: 40px;
        color: black;
        margin: 10px;
    }

    .box-lost-counts{
        color: gray;
        margin: 10px;
    }

    .check-owner{
        background-color: white;
        border: 1px solid orangered;
        color: orangered;
        margin: 10px;
        width: 80vw;
        height: 8vh;
        font-size: 24px;
        &:hover{
            background-color: gray;
            transition: all 0.5s ease;
        }
    }

    .fakebtn{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .box-lost-discoverer{
        font-size: 20px;
        padding: 10px;
    }

    .box-lost-explanation{
        font-size: 20px;
        padding: 10px;
    }
</style>