<script lang="ts">
  import { afterUpdate, onDestroy, onMount } from "svelte/internal";
  import Backbtn from "./BackBtn.svelte";
  import Camera from "/src/assets/camera.png";
  import Load from "/src/assets/load.gif";
  export let hash: string;
  export let cameraimg: string;
  export let camerawidth:number;
  export let cameraheight:number;
  export let disconected:boolean;

  console.log("카메라page왓음");
  let canvas: HTMLCanvasElement;
  let imageCanvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  //let ctx2: CanvasRenderingContext2D;

  let video: HTMLVideoElement  |  null = null;
  onMount(() => {
    ctx = canvas.getContext("2d");
    //ctx2 = imageCanvas.getContext("2d");
    streamWebcam();
  });

  onDestroy(() => {
    if(video === null){
      return;
    }
      const stream = video.srcObject as MediaStream;                //이 page가 파괴(더 이상 사용 X)될때 streaming 중지
      const tracks = stream.getTracks();

      tracks.forEach(function (track) {
        track.stop();
      });

      video.srcObject = null;
  });

  let rafId;

  async function streamWebcam() {
    try {
    disconected = false;
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { width: 99999 },
    })                           //카메라 사용에 대한 허가와 해상도 설정

    video = document.createElement("video");                    //video의 역할은 캡쳐의 역할이다. 
    video.srcObject = stream;                                   //stream의 역할은 
    console.log(stream);
    let { width, height } = stream.getTracks()[0].getSettings();//streaming되고 있는 웹캠의 높이, 너비를 받아옴 가로 세로 비율 받아오기 => innerheight랑 innerwidth로 비율을 맞춰 가장 크게 보이는 이미지 선택
      
    let canvaswidth = width * innerWidth / width;
    let canvasheeight = width * innerWidth / height;
    if(canvasheeight > innerHeight){
      canvas.width = canvaswidth;
      canvas.height = innerHeight;
      
      canvas.style.width = canvaswidth + 'px'
      canvas.style.height = innerHeight + 'px'
    }else{
      canvas.width = innerWidth;
      canvas.height = canvasheeight;

      canvas.style.width = innerWidth + 'px'
      canvas.style.height = canvasheeight + 'px'
    }
    canvas.width = width;
    canvas.height = height;

    video.play();                                               //streaming 시작

    video.addEventListener("loadedmetadata", function (e) {     //canvas에 streaming 화면을 그려주는 곳?
      let $this = this;
      (function loop() {
        ctx.drawImage($this, 0, 0);
        rafId = requestAnimationFrame(loop);                    //계속해서 canvas에 streaming 중인 화면을 그려준다.
      })();
    });
  } catch (error) {
    console.log('카메라 없음');
    disconected = true;
    hash = '#main';
  }
  }

  const capture = () => {                                      //canvas에 화면을 그려줄때 canvas의 이미지 데이터를 받아옴
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    // ctx2.putImageData(imgData, 0, 0);                         //두번째 canvas에 받아온 이미지 데이터를 그려줌
    // imageCanvas.hidden = false;                               //캡쳐한 사진을 보여주는 canvas의 hidden을 끄기
    const imgData2 = canvas.toDataURL();                 //canvas의 그림을 URL 형식으로 바꿔주기
    //const a = document.createElement("a");                    //사진 다운로드 과정
    //a.href = imgData2;                                        //1. a 태그의 href를 imgData2로 해서 사진을 보여주기
    console.log(imgData2);  
    cameraimg = imgData2;       
    hash = "#report";                            
    //a.download = `罹≪쿂.jpg`;                               //2. a 태그에 보여준 사진을 다운로드 하기
    //a.click();                                               //와이?
  };
</script>
  
 <main>
  <div id="fixed">
    <Backbtn bind:hash from="#main" />
  </div>
  {#await streamWebcam}
     <Load />
  {:then value} 
   <div class="flex">
      <canvas bind:this={canvas} id="canvas"/>
      <canvas bind:this={imageCanvas} id="imageCanvas" />
      <button id="captureBtn" on:click={capture}>
     <img src={Camera} alt="sample">
  </button>
  </div>
  {/await}
 </main>

<style lang="scss">

  html{
    top: 0;
    bottom: 0;
  }

  canvas{
    padding: 0;
  }

  main{
    
    // height: 95.3vh;
    // width: 100vw;
    background-color: #ff7752;
    // padding: 0.4%;
  }

  .flex{
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  canvas{
    width: 80%;
    height: 80%;
    padding: 0.4%;
  }

  #captureBtn{
      display: fixed;
      bottom: 10px;
      width: 50px;
      height: 50px;
      border: 1px solid #4B4B4B;
      border-radius: 50%;
      background-color: white;
      & > img{
          width: 80%;
          height: 80%;
      }
  }

  #fixed{
    display: fixed;
    left: 2px;
  }
</style>
