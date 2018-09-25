<template>
 <div class="test">
   <div class="box">
    <h2>August 4</h2>
       <p>NYSL Fundraiser</p>
    <h2>August 16</h2>
       <p>Season Kick-off: Meet the Teams</p>
    <h2>September 1</h2>
      <p>First Game of the Season</p>
   </div>
  </div> 

</template>

<script>
export default {
  name: 'Home'
}
</script>


<style scoped>
    h2, p{
        color: white;
        font-size: 20px;
    }

    .box {
        max-width: 900px;
        min-width: 500px;
        text-align: left;
        padding: 15px;
        margin-left: 0;
        margin-right: auto;
        position: fixed;
        top: 32%;
        line-height: 150%;
        z-index: 1;
        background: rgba(22, 44, 105, 0.5);
    }
</style>
