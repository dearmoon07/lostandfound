<script lang="ts">
    export let jsonname:string;
    export let cateimg:string;
    export let catename:string;
    export let wsrc:string;
    export let cate_name:string;
    export let forjson:string;
    export let hash:string;
    import Catelostinfo from "./CategoryItemInformation.svelte";

    const giveinfo = () => {
        hash = "#catelostinfo";
        jsonname = forjson;
        console.log(forjson);
        console.log(jsonname);
        cateimg = wsrc;
        catename = cate_name;
        jsonname = jsonname;
        cateimg = cateimg;
        catename = catename;
    }
</script>
<div class="cate-btn">
    <button on:click={() => giveinfo()}>
        <img class="cate-btn-img" src={wsrc} alt="sample">
    </button>
    <div class="cate-name">{cate_name}</div>
</div>
<style lang="scss">
    .cate-btn{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 5px;
    }
    .cate-name{
        font-size: 25px;
    }
    button{
        width: 95px;
        height: 95px;
        border-radius: 50%;
        background-color: white;
        border: 1px solid #ff7752;
        margin: 10px;
    }
    .cate-btn-img{
        width: 50px;
        height: 50px;
    }
</style>