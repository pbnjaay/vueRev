const ListItem = {
  data() {
    return {
      show: false,
    };
  },
  props: {
    task: {
      required: true,
    },
  },
  template: /*html*/ `<li class="list__item">
                            <div class="item" v-if="!show">
                                <span>{{task.name}}</span>
                                <div class="option">
                                    <button v-if="task._links.complete" @click="complete()">
                                        <ion-icon class="check" name="checkmark-outline"></ion-icon>
                                    </button>
                                    <button v-if="task._links.activate"  @click="activate()">
                                        <ion-icon class="done" name="checkmark-done-outline"></ion-icon>
                                    </button>
                                    <button @click="edit">
                                        <ion-icon class="edit" name="create-outline"></ion-icon>
                                    </button>
                                    <button @click="remove">
                                        <ion-icon class="del" name="trash-outline"></ion-icon>
                                    </button>
                                </div>
                            </div>
                            <form v-else @submit.prevent="update()" class="form">
                                <input v-model="task.name" type="text" autofocus />
                                <div>
                                    <button type="submit">Update</button>
                                    <button @click="edit">Cancel</button>
                                </div>
                            </form>
                        </li>`,
  methods: {
    edit() {
      this.show = !this.show;
    },
    remove() {
      this.$emit("remove");
    },

    update() {
      this.$emit("update");
      this.edit();
    },

    complete() {
      this.$emit("complete");
    },

    activate() {
      this.$emit("activate");
    },
  },
};
