<template>
  <div class="common">
    <div class="mask-floot" @click="handleEdit">
      <div class="bg-mask">
        <button>编辑</button>
      </div>
    </div>
    <slot :block="block"></slot>
    <div v-if="block.block_type === 'IMAGE'" class="content">
      <img v-if="block.block_value" :src="block.block_value" />
      <div class="no-img" v-else></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "common",
  props: {
    block: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    handleEdit() {
      this.$emit("handleEdit");
    },
  },
};
</script>

<style lang="scss" scoped>
.common {
  position: relative;
  width: 100%;
  height: 100%;
  .mask-floot {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    cursor: pointer;
    border: 1px dashed #ccc;
    &:hover {
      .bg-mask {
        display: block;
      }
    }
    .bg-mask {
      height: 100%;
      display: none;
      background: rgba(0, 0, 0, 0.5);
    }
  }
  .content {
    img {
    }
    .no-img {
      background-color: pink;
    }
  }
}
</style>
