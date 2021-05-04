<template>
  <div class="draggable">
    <div class="left">
      <draggable  v-model="templateArray" :options="tplOptions" class="comTitle"> 
          <div v-for="(item,index) in templateArray" :key="index" class="comTitle-item">
              <div class="img-tpl"></div>
              <div>{{templates[index].title}}</div>
          </div>
      </draggable>
    </div>
    <div class="right">
         <draggable v-model="floorList" :options="floorOptions" class="floor-list">
             
            <div v-for="(item, index) in floorList" :class="'item-' + index" class="floor-item" :key="index">
              <component
                :is="templates[item.tpl_id]"
                :data="JSON.parse(JSON.stringify(item))"
                @handleEdit="handleEdit($event,index)"
              ></component>
              <div class="panel-handle">
                <button class="icon-handle handle-move">move</button>
                <button class="icon-handle handle-delete" @click="floorList.splice(index, 1)">delete</button>
              </div>
            </div>
          </draggable>
    </div>
    <div class="text" v-if="isText">
      <input type="text" placeholder="请输入" v-model="textObje.text">
      <button @click="determine(textObje)">确定</button>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import templates,{templateArray} from '../components'
export default {
  name: "draggables",
  components: {
    draggable,
  },
  data() {
    return {
      templateArray,
      templates,
      tplOptions: {
        group: { name: "tplGroup", pull: "clone", put: false },
        sort: false,
      },
      floorList:[],
     floorOptions: {
          animation: 150,
          group: { name: 'tplGroup', put: true },
          sort: true,
          handle: '.handle-move'
        },
        isText:false,
        textObje:{}

    };
  },
  methods: {
    handleEdit({blockList,tpl_id},index) {

      this.editOptions = {
        blockList,
        tpl_id,
        index
      }
      if(blockList[tpl_id].block_type === 'TEXT'){
        
        this.isText = true
      }
    },
    determine(value){
      const {blockList,
        tpl_id,
        index} = this.editOptions
         blockList[tpl_id].block_value = value.text
         this.$set(this.floorList,index,{blockList,tpl_id})
    }
  },
};
</script>

<style lang="scss" scoped>
.draggable {
  display: flex;
  margin: 30px auto;
  width: 1200px;
  height: 600px;
  justify-content: space-around;
  .left{
    width: 400px;
    border: 1px solid #000;
    .comTitle{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
       .img-tpl {
    width: 50px;
    height: 50px;
   background-color: aqua;
  }
      .comTitle-item{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 120px;
        width: 120px;
      }
    }
    
    }
    .right{
      width: 500px;
        border: 1px solid #000;
        overflow: auto;
        overflow-x: hidden;
      .floor-list{
        width: 400px;
        .comTitle-item{
          height: 120px;
          text-align: center;
          line-height: 120px;
          background-color: beige;
        }
        .floor-item{
          position: relative;
          &:hover{
            .panel-handle{
               opacity: 1;
            }
          }
          .panel-handle{
           opacity: 0;
            position: absolute;
            top: 5px;
            right: -66px;
            display: flex;
            flex-direction: column;
            button{
              margin: 0 2px;
            }

          }
        }
      }
    }
}
</style>