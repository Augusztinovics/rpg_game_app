<template>
   <div class="container-fluid text-center">    
  <div class="row content">
    <div class="col-sm-2 sidenav">
      <p><a href="#">Mark</a></p>
      <p><a href="#">Huhu</a></p>
      <p><a href="#">Bao</a></p>
    </div>
    <div class="col-sm-8 text-left"> 
      <h1>Chatbox</h1>
      
      <hr>
      <div>
        <ul>
          <li>Hello there</li>
          <li>Chatting here...</li>
        </ul>
      </div>
      
      <div>
          <input class="input-field" type="text" name="message" id="message" />
          <button type="button" class="btn">Send</button>
      </div>
    </div>
    <div class="col-sm-2 sidenav">
      <div class="well">
        <p>ADS</p>
      </div>
      <div class="well">
        <p>ADS</p>
      </div>
    </div>
  </div>
</div>

</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style scoped>
    .row.content {height: 450px}
    
    .sidenav {
      padding-top: 20px;
      background-color: #f1f1f1;
      height: 100%;
    }
    
    @media screen and (max-width: 767px) {
      .sidenav {
        height: auto;
        padding: 15px;
      }
      .row.content {height:auto;} 
    }
</style>