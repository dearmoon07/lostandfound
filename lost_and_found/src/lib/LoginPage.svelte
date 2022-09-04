<script lang="ts">
    import googleImg from '../../src/assets/btn_google_signin_light_normal_web.png';
    export let hash: string;
</script>

<main>
    <div class="flexbm">
        <div id="title">Lost and Found</div>
        <div id="smalltitle">분실물 찾기</div>
        <br>
        <a href="http://localhost:3000/oauth/login">
            <img src={googleImg} alt="wow">
        </a>
    </div>
</main>

<style lang="scss">

    .flexbm{
        display: flex;
        height: 550px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #title{
        font-size: 38px;
        left: 40%;
        color: #ff7752;
    }

    #google{
        display: flex;
        background-color: white;
        border: 1px solid #EBEAEC;
        border-radius: 38px;
        width: 311px;
        height: 63px;
        justify-content: center;
        align-items: center;
    }

    #smalltitle{
        font-size: 20px;
        left: 50%;
        color: rgba(0, 0, 0, 0.45);
    }

    #flex{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    span{
        font-size: 20px;
    }
</style>