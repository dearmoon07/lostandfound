<script lang="ts">
import exp from "constants";

    import Backbtn from "/src/assets/ArrowLeft.png";
    export let hash: string;
    export let from:string;
</script>
    <button class="back" on:click={() => hash = from}>
        <img src={Backbtn} alt="sample">
    </button>
<style lang="scss">
    
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
</style>