<template>
 <div class="test">
 <h1>2018 World Cup Highlights</h1>
 </div> 

</template>

<script>
export default {
  name: 'Home'
}
</script>


<style scoped>
    h1, p{
        color: white;
        font-size: 20px;
    }

.video-responsive{
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
    height:0;
}
.video-responsive iframe{
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
}
</style>
