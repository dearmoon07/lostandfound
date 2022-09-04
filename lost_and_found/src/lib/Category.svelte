<script lang="ts">
    import Cloth from "/src/assets/cate_cloth.png";
    import Elec from "/src/assets/cate_eletric.png";
    import Tool from "/src/assets/cate_tool.png";
    import Sports from "/src/assets/cate_sports.png";
    import Book from "/src/assets/cate_book.png";
    import Others from "/src/assets/cate_others.png";
    import Catebutton from "./CateBtn.svelte";
    export let hash:string;
    export let jsonname:string;
    export let cateimg:string;
    export let catename:string;
</script>
<main>
    <h1 class="title">카테고리</h1>
    <hr>
    <div class="cate">
        <div class="cate-1">
            <Catebutton forjson="cloth"  bind:jsonname={jsonname} bind:cateimg={cateimg} bind:catename={catename} bind:hash={hash} wsrc={Cloth} cate_name="의류"></Catebutton>
            <Catebutton forjson="electric" bind:jsonname={jsonname} bind:cateimg={cateimg} bind:catename={catename} bind:hash={hash} wsrc={Elec} cate_name="전자기기"></Catebutton>
            <Catebutton forjson="tool" bind:jsonname={jsonname} bind:cateimg={cateimg} bind:catename={catename} bind:hash={hash} wsrc={Tool} cate_name="필기구"></Catebutton>
        </div>
        <div class="cate-2">
            <Catebutton forjson="sports" bind:jsonname={jsonname} bind:cateimg={cateimg} bind:catename={catename} bind:hash={hash} wsrc={Sports} cate_name="스포츠"></Catebutton>
            <Catebutton forjson="book" bind:jsonname={jsonname} bind:cateimg={cateimg} bind:catename={catename} bind:hash={hash} wsrc={Book} cate_name="도서"></Catebutton>
            <Catebutton forjson="others" bind:jsonname={jsonname} bind:cateimg={cateimg} bind:catename={catename} bind:hash={hash} wsrc={Others} cate_name="잡동사니"></Catebutton>
        </div>
        
    </div>
</main>
<style lang="scss">
    .cate-1{
        display: flex;
        justify-content: space-evenly;
    }
    .cate-2{
        display: flex;
        justify-content: space-evenly;
    }
    .title{
        margin: 10px;
        margin-left: 30px;
    }
</style>