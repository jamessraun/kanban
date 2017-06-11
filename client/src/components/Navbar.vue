<template>

  <div class="ui secondary menu">
    <h2 class="ui header">
      <img class="ui image" src="http://programaenlinea.net/wp-content/uploads/2015/06/KANBAM-LOGO.gif">
      <div class="content">
        Kanban
      </div>
    </h2>
    <div class="right menu">
      <button class="ui green button">New Task</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
    }
  },
  computed:{

  },
  methods:{
    showHome(){
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.secondary.menu{
  padding-top: 1%;
  padding-top: 1%;
  margin-right: 1%;
  margin-left: 1%;
}

</style>
