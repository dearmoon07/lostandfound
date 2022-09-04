<script lang="ts">
    import Backbtn from "./BackBtn.svelte";
    import Cloth from "/src/assets/cate_cloth.png";
    import Elec from "/src/assets/cate_eletric.png";
    import Tool from "/src/assets/cate_tool.png";
    import Sports from "/src/assets/cate_sports.png";
    import Book from "/src/assets/cate_book.png";
    import Others from "/src/assets/cate_others.png";
    import Throwerror from "./Throwerror.svelte";
    // import {bulletinData} from "../store/auth";
    import { log } from "console";
    export let hash:string;

    let cate:string;
    let title:string;
    let location:string;
    let explanation:string;
    let perfect:boolean = false;

    const changecate = (a:string) => {
        cate = a;
        console.log(cate);
    }

    const changetitle = (evt:Event) => {
        const titlediv = evt.currentTarget as HTMLInputElement;
        title = titlediv.value;
        console.log(title);
    }

    const changelocation = (evt:Event) => {
        const locationdiv = evt.currentTarget as HTMLInputElement;
        location = locationdiv.value;
        console.log(location);
    }

    const changeexplantion = (evt:Event) => {
        const explandiv = evt.currentTarget as HTMLInputElement;
        explanation = explandiv.value;
        console.log(explanation);
    }

    const scan = () => {
        if(cate === undefined || title === undefined || location === undefined || explanation === undefined){
            perfect = true;
        }else{
            perfect = false;
            console.log(cate);
            hash = "#bulletin";
            hash = hash;

            const obj = {
                title: title,
                name: "나다",
                location: location,
                description: explanation,
                category: cate,
                time: Date.now()
            }

            fetch('http://localhost:3000/bulletin/bulletin/save', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ${token}'
            },
            body: JSON.stringify(obj),
            method: 'POST'
            })
            console.log("성공!");
        }
    }
</script>
{#if perfect}
    <Throwerror inner="모든 내용에 답해주세요."/>
{/if}
<div class="main">
    <div class="fake">
        <Backbtn bind:hash={hash} from="#bulletin"></Backbtn>
    </div>
        <div class="text">
            <h3>제목</h3>
            <input type="text" on:change={changetitle}>
            <h3>위치</h3>
            <input type="text" on:change={changelocation}>
            <h3>설명</h3>
            <input type="text" on:change={changeexplantion}>
        </div>

<div class="input">
    <h3>카테고리</h3>
    <div class="flex">
        <div>
        <input type="radio" name="type" id="cloth" on:click={() => changecate("cloth")}>
        <label for="cloth">
            의류
        </label>
    </div>
    <div>
        <input type="radio" name="type" id="electric" on:click={() => changecate("electric")}>
        <label for="electric">
            전자기기
        </label>
    </div>
    <div>
        <input type="radio" name="type" id="tool" on:click={() => changecate("tool")}>
        <label for="tool">
            필기구
        </label>
    </div>
    </div>
    <div class="flex">   
        <div>
        <input type="radio" name="type" id="sports" on:click={() => changecate("sports")}>
        <label for="sports">스포츠</label>
        </div>
        <div>
            <input type="radio" name="type" id="book" on:click={() => changecate("book")}>
            <label for="book">도서</label>
        </div>
        <div>
            <input type="radio" name="type" id="others" on:click={() => changecate("others")}>
            <label for="others">잡동사니</label>
        </div>
    </div>
</div>
<div class="fakebtn">
    <button class="check-owner" on:click={() => scan()}>제보하기</button>
</div>
</div>
<style lang="scss">
    .flex{
        display: flex;
        justify-content: space-evenly;
    }

    input{
        display: inline-block;
        height: 10px;
    }

    .text{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding-left: 30px;
        padding-right: 30px;
        & > input{
            height: 7vh;
        }
    }

    .fake{
        background-color: #ff7752;
    }

    .img-background{
        background-color: #ff7752;
        right: 0px;
        left: 0px;
        border: 1px solid #ff7752;
        border-radius: 0px 0px 30px 30px;
        display: flex;
        justify-content: center;
        padding: 10px;
    }

    h3{
        font-size: 200%;
    }

    label{
        font-size: 150%;
    }

    .input{
        padding-left: 30px;
        padding-right: 30px;
        margin-bottom: 30px;
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

    img{
        width: 70%;
        height: 40%;
    }

    #warning{
        background-color: red;
        display: flex;
        align-items: center;
        padding: 4px;
    }
</style>