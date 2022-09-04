<script lang="ts">
    export let inner:string;
    import Disconec from "/src/assets/disconected.png";
</script>
<div class="warning">
    <img src={Disconec} alt="sample">
    {inner}
</div>
<style lang="scss" scoped>
    .warning{
        background-color: red;
        display: flex;
        align-items: center;
        padding: 4px;
    }
</style>