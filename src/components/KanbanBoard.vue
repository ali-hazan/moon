<template>
  <div style="position: relative">
    <a-row>
      <a-col
        :xs="24"
        :sm="12"
        :md="8"
        v-for="item in kanbanPostProcessed"
        :key="item.id"
      >
        <div class="alchemi-kanban-col-wrapper">
          <div class="alchemi-space-between">
            <h4>
              {{ item.title }} <span>{{ item.total }}</span>
            </h4>
            <job-modal :id="item.id" @created="newJobAdded" />
          </div>

          <draggable
            class="alchemi-kanban-col"
            :list="item.tasks"
            group="board"
            @change="log"
            itemKey="id"
          >
            <template #item="{ element }">
              <div class="alchemi-kanban-card">
                {{ element.title }} {{ element.desc }}
              </div>
            </template>
          </draggable>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import JobModal from "./JobModal.vue";

export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable,
    JobModal,
  },
  data() {
    return {
      board: [
        {
          order: 1,
          id: 1,
          title: "To Do",
          tasks: [
            {
              id: 1,
              title: "Task 1",
              desc: "This is description 1 ",
            },
            {
              id: 2,
              title: "Task 2",
              desc: "This is description 2",
            },
          ],
        },
        {
          order: 2,
          id: 2,
          title: "In Progress",
          tasks: [
            {
              id: 3,
              title: "Task 3",
              desc: "This is description 3",
            },
            {
              id: 4,
              title: "Task 4",
              desc: "This is description 4",
            },
          ],
        },
        {
          order: 3,
          id: 3,
          title: "Completed",
          tasks: [
            {
              id: 5,
              title: "Task 5",
              desc: "This is description 5 ",
            },
            {
              id: 6,
              title: "Task 6",
              desc: "This is description 6",
            },
          ],
        },
      ],
    };
  },
  computed: {
    kanbanPostProcessed() {
      return this.board.map((item) => {
        item.total = item.tasks.length;
        return item;
      });
    },
  },
  methods: {
    log: function (evt) {
      window.console.log(evt);
      console.log(this.board);
    },
    newJobAdded: function (item) {
      const data = item.data;
      const id = item.id;
      this.board.find((item) => item.id === id).tasks.push(data);
    },
  },
};
</script>