<template>
  <div class="flex-container home">
    <div class="flex-item">
      <div class="ui raised segment">

        <div class="ui card" v-for="task in tasks">
          <div class="content">
            <div class="header">{{task.name}}</div>
          </div>
          <div class="content">
            <h4 class="ui sub header">Description</h4>
            <div class="ui small feed">
                <span>{{task.description}}</span>
            </div>
          </div>
          <div class="content">
            <h4 class="ui sub header">Poin</h4>
            <div class="ui small feed">
                <span>{{task.point}}</span>
            </div>
          </div>
          <div class="content">
            <h4 class="ui sub header">Assigned To</h4>
            <div class="ui small feed">
                <span>Perut</span>
            </div>
          </div>
          <div class="extra content">
            <button class="ui green button">Todo</button>
            <button class="ui yellow button">Edit</button>
            <button class="ui red button">Delete</button>
          </div>
        </div>
      </div>
    </div>
    <!-- {{filteredByTodos}} -->
    <!--Todo-->
    <!-- <div class="flex-item">
      <div v-if="filteredByTodos.length!==0" class="ui raised segment">

        <div class="ui card" v-for="task in filteredByTodos">
          <div class="content">
            <div class="header">{{task.name}}</div>
          </div>
          <div class="content">
            <h4 class="ui sub header">Description</h4>
            <div class="ui small feed">
                <span>{{task.description}}</span>
            </div>
          </div>
          <div class="content">
            <h4 class="ui sub header">Poin</h4>
            <div class="ui small feed">
                <span>{{task.point}}</span>
            </div>
          </div>
          <div class="content">
            <h4 class="ui sub header">Assigned To</h4>
            <div class="ui small feed">
                <span>Perut</span>
            </div>
          </div>
          <div class="extra content">
            <button class="ui green button">Todo</button>
            <button class="ui yellow button">Edit</button>
            <button class="ui red button">Delete</button>
          </div>
        </div>

      </div>
    </div> -->

  </div>
</template>

<script>

export default {
  name: 'Home',
  firebase(){
    return{
      tasks: this.$db.ref('tasks')
    }
  },
  methods:{
    // totalQuestions(arr){
    //   return arr.length
    // },
    // totalVotes(arr){
    //   return arr.reduce((total,value)=>{
    //     return a + value.vote
    //   },0)
    // },
    // totalAnswers(arr){
    //   return arr.length
    // },
    // getDetilQuestion(id){
    //   this.$router.push('/detil_question/' + id)
    // }
  },
  created(){

  },
  computed:{
    // filteredByTodos(){
    //   let array=tasksRef;
    //   return this.$firebaseRef.tasks.filter(function task() {
    //     return task.status=='todo'
    //   })
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home{
  margin-top: 2%;

}

.flex-container{
   display: flex;
   flex-wrap: wrap;
}

.flex-item {
  flex-direction: row;
  float: left;
  border-radius: 5px;
  /*width: 25%;*/
  /*margin-left: 1%;
  margin-right: 1%;*/
}
</style>
