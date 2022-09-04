<script lang="ts">
  import { onMount } from 'svelte';
  import Tabb from './lib/Tab.svelte';
  import Log from './lib/LoginPage.svelte';
  import Category from './lib/Category.svelte';
  import Settings from './lib/Settings.svelte';
  import Main from './lib/Main.svelte';
  import Lostitempage from "./lib/ItemInformation.svelte";
  import Catelostinfo from './lib/CategoryItemInformation.svelte';
  import Camera from "./lib/Camera.svelte";
  import Report from "./lib/ItemReport.svelte";
  import Record from "./lib/Record.svelte";
  import Bulletin from "./lib/Bulletin.svelte";
  import Search from './lib/Search.svelte';
  import {useAuthStore} from './store/auth'
  import {useTokenStore} from './store/token'
  import StorePage from './lib/StorePage.svelte';
  import BullentinReport from "./lib/BulletinReport.svelte"
  import BulletinReport from './lib/BulletinReport.svelte'; 

  let backwhere:string;
  let lost_name:string;
  let lost_location:string;
  let lost_type:string;
  let lost_when:string;
  let lost_discoverer:string;
  let lost_explanation:string;
  let lost_picture:string;
  let searchstring:string;
  let whichpage:number;
  let jsonname:string;
  let camerawidth:number;
  let cameraheight:number;
  let cateimg:string;
  let catename:string;
  let cameraimg:string;
  let disconected:boolean = false;
  let flag = false;
  let hash:string = '#main'

  $: {
    if(flag) location.hash = hash;
    if(hash === '#category'){
      whichpage = 1;
      whichpage = whichpage;
    }else if(hash === '#bulletin'){
      whichpage = 0;
      whichpage = whichpage;
    }else if(hash === '#main'){
      whichpage = 2;
      whichpage = whichpage;
    }else if(hash === '#settings'){
      whichpage = 3;
      whichpage = whichpage;
    }else if(hash === '#store'){
      whichpage = 4;
      whichpage = whichpage;
    }else if(hash === '#catelostinfo'){
      backwhere = '#catelostinfo';
      backwhere = backwhere;
    }
  }


  // function getUserInfo(token:string){
  //       return fetch(`http://localhost:3000/oauth/check`, {
  //       headers: {
  //           'Authorization': `Bearer ${token}`
  //       }
  //       }).then(res => res.json()).then(res => res)
  //   }

  // async function checkToken(){
  //   if(location.search.length > 1){
  //     const token = location.search.slice(1).split('=')[1]
  //     console.log({token})
  //     const userInfo = await getUserInfo(token)
  //     console.log({userInfo})
  //     // 얻어온 jwt token을 store에 저장!!
  //     useTokenStore.set(token)
  //     useAuthStore.set(userInfo.data)
  //     history.pushState({}, location.origin, 'http://localhost:5050/#main')
  //     // location.replace('http://localhost:5050/#main')
  //   }
  // }

  // checkToken()

  onMount(() => flag = true);
</script>
<main>
<div class="mid">
  {#if hash === '#category'}
    <Category bind:jsonname={jsonname} bind:cateimg={cateimg} bind:catename={catename} bind:hash={hash} />
  {:else if hash === '#lostitem'}
    <Lostitempage bind:backwhere={backwhere} bind:lost_name={lost_name} bind:lost_location={lost_location} bind:lost_type={lost_type} bind:lost_when={lost_when} bind:lost_discoverer={lost_discoverer} bind:lost_explanation={lost_explanation} bind:lost_picture={lost_picture} bind:hash={hash}/>
  {:else if hash === '#bulletin'}
    <Bulletin bind:hash={hash}/>
  {:else if hash === '#settings'}
    <Settings bind:hash={hash}/>
  {:else if hash === '#bulletinreport'}
    <BulletinReport bind:hash={hash}/>
  {:else if hash === '#login'}
    <Log bind:hash={hash}/>
  {:else if hash === '#search'}
    <Search bind:searchstring={searchstring} bind:backwhere={backwhere} bind:lost_name={lost_name} bind:lost_location={lost_location} bind:lost_type={lost_type} bind:lost_when={lost_when} bind:lost_discoverer={lost_discoverer} bind:lost_explanation={lost_explanation} bind:lost_picture={lost_picture} bind:hash={hash}/>
  {:else if hash === '#store'}
    <StorePage bind:disconected={disconected} bind:backwhere={backwhere} bind:lost_name={lost_name} bind:lost_location={lost_location} bind:lost_type={lost_type} bind:lost_when={lost_when} bind:lost_discoverer={lost_discoverer} bind:lost_explanation={lost_explanation} bind:lost_picture={lost_picture} bind:hash={hash}/>
  {:else if hash === '#catelostinfo'}
    <Catelostinfo bind:hash={hash} bind:lost_name={lost_name} bind:lost_location={lost_location} bind:lost_type={lost_type} bind:lost_when={lost_when} bind:lost_discoverer={lost_discoverer} bind:lost_explanation={lost_explanation} bind:lost_picture={lost_picture} bind:jsonname={jsonname} bind:cateimg={cateimg} bind:catename={catename} />
  {:else if hash === '#camera'}
    <Camera bind:disconected={disconected} bind:cameraheight={cameraheight} bind:camerawidth={camerawidth} bind:cameraimg={cameraimg} bind:hash={hash}></Camera>
  {:else if hash === '#report'}
    <Report bind:cameraheight={cameraheight} bind:camerawidth={camerawidth} bind:cameraimg={cameraimg} bind:hash={hash}></Report>
  {:else if hash === '#record'}
    <Record bind:hash={hash} bind:lost_name={lost_name} bind:lost_location={lost_location} bind:lost_type={lost_type} bind:lost_when={lost_when} bind:lost_discoverer={lost_discoverer} bind:lost_explanation={lost_explanation} bind:lost_picture={lost_picture}/>  
  {:else}
    <Main bind:searchstring={searchstring} bind:disconected={disconected} bind:backwhere={backwhere} bind:lost_name={lost_name} bind:lost_location={lost_location} bind:lost_type={lost_type} bind:lost_when={lost_when} bind:lost_discoverer={lost_discoverer} bind:lost_explanation={lost_explanation} bind:lost_picture={lost_picture} bind:hash={hash}/>
  {/if}
</div>


  {#if hash === '#login'}
  {:else if hash === '#camera'}
  {:else}
  <div class="foot">
    <div class="tab"><Tabb bind:hash={hash} bind:whichpage={whichpage}/></div>
  </div>
  {/if}

</main>

<style lang="scss">
  .tab {
    position: fixed;
    padding: 0px;
    background-color: white;
    border: 1px solid gray;
    bottom: 0px;
    // width: 100vw;
    left: 0;
    right: 0;
  }

  .foot{
    height: 30vh;
  }
</style>