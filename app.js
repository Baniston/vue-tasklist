const App = {
  data() {
    return {
      placeholderString: "Введите задачу (макс. 75 символов)",
      title: "Список задач",
      inputValue: "",
      notes: [],
    };
  },
  methods: {
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push({
          id: Date.now(),
          text: this.inputValue,
          checked: false,
        });
        this.inputValue = "";
      }
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
    removeNote(idx) {
      this.notes.splice(idx, 1);
    },
  },
  computed: {
    notesLeftComputed() {
      return 10 - this.notes.length;
    },
  },
  watch: {
    inputValue() {
      if (this.notes.length > 10) {
        alert("Достигнут лимит количества задач");
        this.removeNote(10);
      }
    },
  },
};

Vue.createApp(App).mount("#app");
