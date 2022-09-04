<script lang="ts">
export let hash: string;
export let whichpage: number;
import Setw from '/src/assets/set.png';//orange
import Homw from '/src/assets/home.png';//orange
import Catew from '/src/assets/cate.png';//orange
import Setwn from '/src/assets/set_page.png';//black
import Homwn from '/src/assets/home_page.png';//black
import Catewn from '/src/assets/cate_page.png';//black
import Mylostw from '/src/assets/mylost.png';//black
import Mylostwn from '/src/assets/mylost_page.png';//orange
import Storew from '/src/assets/store.png'//orange
import Storewn from '/src/assets/store_page.png'//black
</script>

<main>
    <div class="container">
        {#if whichpage === 1}
        <button class="touch" on:click={() => hash = '#category'}>
            <img src={Catewn} alt="sample">
        </button>
        <button class="touch" on:click={() => hash = '#store'}>
            <img src={Storew} alt="sample">
        </button>
        <button class="touch" on:click={() => hash = '#main'}>
            <img src={Homw} alt="sample">
        </button>
        <button class="touch" on:click={() => hash = '#bulletin'}>
            <img src={Mylostw} alt="sample">
        </button>
        <button class="touch" on:click={() => hash = '#settings'}>
            <img src={Setw} alt="sample">
        </button>
        {:else if whichpage === 2}
        <button class="touch" on:click={() => hash = '#category'}>
            <img src={Catew} alt="sample">
        </button>
        <button class="touch" on:click={() => hash = '#store'}>
            <img src={Storew} alt="sample">
        </button>
        <button class="touch" on:click={() => hash = '#main'}>
            <img src={Homwn} alt="sample">
        </button>
        <button class="touch" on:click={() => hash = '#bulletin'}>
            <img src={Mylostw} alt="sample">
        </button>
        <button class="touch" on:click={() => hash = '#settings'}>
            <img src={Setw} alt="sample">
        </button>
        {:else if whichpage === 3}
        <button class="touch" on:click={() => hash = '#category'}>
            <img src={Catew} alt="sample">
        </button>
        <button class="touch" on:click={() => hash = '#store'}>
            <img src={Storew} alt="sample">
        </button>
        <button class="touch" on:click={() => hash = '#main'}>
            <img src={Homw} alt="sample">
        </button>
        <button class="touch" on:click={() => hash = '#bulletin'}>
            <img src={Mylostw} alt="sample">
        </button>
        <button class="touch" on:click={() => hash = '#settings'}>
            <img src={Setwn} alt="sample">
        </button>
        {:else if whichpage === 0}
        <button class="touch" on:click={() => hash = '#category'}>
            <img src={Catew} alt="sample">
        </button>
        <button class="touch" on:click={() => hash = '#store'}>
            <img src={Storew} alt="sample">
        </button>
        <button class="touch" on:click={() => hash = '#main'}>
            <img src={Homw} alt="sample">
        </button>
        <button class="touch" on:click={() => hash = '#bulletin'}>
            <img src={Mylostwn} alt="sample">
        </button>
        <button class="touch" on:click={() => hash = '#settings'}>
            <img src={Setw} alt="sample">
        </button>
        {:else if whichpage === 4}
        <button class="touch" on:click={() => hash = '#category'}>
            <img src={Catew} alt="sample">
        </button>
        <button class="touch" on:click={() => hash = '#store'}>
            <img src={Storewn} alt="sample">
        </button>
        <button class="touch" on:click={() => hash = '#main'}>
            <img src={Homw} alt="sample">
        </button>
        <button class="touch" on:click={() => hash = '#bulletin'}>
            <img src={Mylostw} alt="sample">
        </button>
        <button class="touch" on:click={() => hash = '#settings'}>
            <img src={Setw} alt="sample">
        </button>
        {:else}
        <button class="touch" on:click={() => hash = '#category'}>
            <img src={Catew} alt="sample">
        </button>
        <button class="touch" on:click={() => hash = '#store'}>
            <img src={Storew} alt="sample">
        </button>
        <button class="touch" on:click={() => hash = '#main'}>
            <img src={Homw} alt="sample">
        </button>
        <button class="touch" on:click={() => hash = '#bulletin'}>
            <img src={Mylostw} alt="sample">
        </button>
        <button class="touch" on:click={() => hash = '#settings'}>
            <img src={Setwn} alt="sample">
        </button>
        {/if}
    </div>
</main>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 12vh;
    button.touch{
        width: 13vh;
        height: 10vh; //64
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background: {
            color: white;
        }
        border: {
            width: 1px;
            style: solid;
            color: white;
            radius: 50%;
        }
        &:active {
            background: {
                color: gray;
            }
        }
    }
}
img{
    width: 8vh;
    height: 8vh;
}
</style>