<script lang="ts">
import { children } from "svelte/internal";


    export let switch_name:string;
</script>

<span class="wrapper">
    
    <label class="switch_label">
        <input type="checkbox" class={switch_name}>
        <span class="onf_btn"></span>
    </label>
   
</span>

<style lang="scss">

.wrapper {
  width: 20vw;
  text-align: center;
  //margin: 50px auto;
}

input {
  display: none;
}

.switch_label {
  position: relative;
  cursor: pointer;
  display: inline-block;
  width: 58px;
  height: 28px;
  background: #fff;
  border: 2px solid #ff7752;
  border-radius: 20px;
  transition: 0.2s;
}

.switch_label:hover {
  background: #efefef;
}

.onf_btn {
  position: absolute;
  top: 4px;
  left: 3px;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: #ff7752;
  transition: 0.2s;
}

/* checking style */
input:checked+.switch_label {
  background: orangered;
}

input:checked+.switch_label:hover {
  background: #ff7752;
}

/* move */
input:checked+ .onf_btn {
  left: 34px;
  background: #ff7752;
  box-shadow: 1px 2px 3px #00000020;
}

</style>