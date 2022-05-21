<template>
  <div>
    <a-button type="primary" @click="showModal">Add</a-button>
    <a-modal v-model:visible="visible" title="Task" :footer="false">
      <a-form
        :model="formState"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-item label="Title">
          <a-input v-model:value="formState.title" />
        </a-form-item>
        <a-form-item label="Description">
          <a-textarea v-model:value="formState.desc" />
        </a-form-item>
        <a-button type="primary" @click.prevent="onSubmit">Create</a-button>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  props: {
    id: Number,
  },
  setup(props, context) {
    const visible = ref(false);
    const formState = reactive({
      title: "",
      desc: "",
    });

    const onSubmit = () => {
      context.emit("created", { id: props.id, data: formState });
      visible.value = false;
    };

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = (e) => {
      console.log(e);
      visible.value = false;
    };

    return {
      visible,
      showModal,
      handleOk,
      labelCol: {
        style: {
          width: "150px",
        },
      },
      wrapperCol: {
        span: 14,
      },
      formState,
      onSubmit,
    };
  },
});
</script>