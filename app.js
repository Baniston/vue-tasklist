const App = {
  data() {
    return {
      placeholderString: "Введите название заметки (макс. 75 символов)",
      title: "Список заметок",
      inputValue: "",
      notes: [],
    };
  },
  methods: {
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
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
  // watch следит за изменением переменных
  watch: {
    inputValue(value) {
      if (this.notes.length > 10) {
        alert("Достигнут лимит количества заметок");
        this.removeNote(10);
      }
    },
  },
};

Vue.createApp(App).mount("#app");
