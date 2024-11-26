import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentMainTask: {
    task: "",
    habit: "",
  },
  goals: {
    today: "",
    thisWeek: "",
    thisMonth: "",
    shortTermGoal: "",
  },
  tasksOnMind: [
    {
      id: "",
      name: "",
      timeItTakes: "",
      urgent: false,
      expiredDate: "",
      yourValueForTheTask: "",
    },
  ],
  mainTaskParts: [
    {
      id: "",
      name: "",
      order: "",
      startTime: "",
      deadline: "",
    },
  ],
  weekendTasks: [
    {
      id: "",
      name: "",
      order: "",
      startTime: "",
      endTime: "",
    },
  ],
  feelingsDiary: [
    {
      id: "",
      feelingTitle: "",
      secret: true,
      feelingDetails: "",
      attachments: [""],
    },
  ],
  todolist: [
    {
      id: "",
      name: "",
      detail: "",
      attachments: [""],
      order: "",
      startTime: "",
      endTime: "",
    },
  ],
  motivations: [{ type: "", images: [""] }],
  books: [
    {
      type: "",
      src: "",
      images: [""],
      description: "",
      favourite: false,
    },
  ],
  theme: {
    colors: {
      primary: "",
      secondary: "",
      textDark: "",
      textWhite: "",
      bgBlack: "",
      bgWhite: "",
    },
    font: { fontFamily: "", fontSize: "" },
    spacing: "",
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentMainTask(state, action) {
      state.currentMainTask = action.payload;
    },
    setGoals(state, action) {
      state.goals = action.payload;
    },
    setTasksOnMind(state, action) {
      state.tasksOnMind = action.payload;
    },
    addTaskOnMind(state, action) {
      state.tasksOnMind.push(action.payload);
    },
    updateTaskOnMind(state, action) {
      const { id, task } = action.payload;
      const index = state.tasksOnMind.findIndex((task) => task.id === id);
      if (index !== -1) {
        state.tasksOnMind[index] = { ...state.tasksOnMind[index], ...task };
      }
    },
    removeTaskOnMind(state, action) {
      state.tasksOnMind = state.tasksOnMind.filter(
        (task) => task.id !== action.payload
      );
    },
    setMainTaskParts(state, action) {
      state.mainTaskParts = action.payload;
    },
    addMainTaskPart(state, action) {
      state.mainTaskParts.push(action.payload);
    },
    updateMainTaskPart(state, action) {
      const { id, part } = action.payload;
      const index = state.mainTaskParts.findIndex((part) => part.id === id);
      if (index !== -1) {
        state.mainTaskParts[index] = { ...state.mainTaskParts[index], ...part };
      }
    },
    removeMainTaskPart(state, action) {
      state.mainTaskParts = state.mainTaskParts.filter(
        (part) => part.id !== action.payload
      );
    },
    setWeekendTasks(state, action) {
      state.weekendTasks = action.payload;
    },
    addWeekendTask(state, action) {
      state.weekendTasks.push(action.payload);
    },
    updateWeekendTask(state, action) {
      const { id, task } = action.payload;
      const index = state.weekendTasks.findIndex((task) => task.id === id);
      if (index !== -1) {
        state.weekendTasks[index] = { ...state.weekendTasks[index], ...task };
      }
    },
    removeWeekendTask(state, action) {
      state.weekendTasks = state.weekendTasks.filter(
        (task) => task.id !== action.payload
      );
    },
    setFeelingsDiary(state, action) {
      state.feelingsDiary = action.payload;
    },
    addFeelingToDiary(state, action) {
      state.feelingsDiary.push(action.payload);
    },
    updateFeelingInDiary(state, action) {
      const { id, feeling } = action.payload;
      const index = state.feelingsDiary.findIndex(
        (feeling) => feeling.id === id
      );
      if (index !== -1) {
        state.feelingsDiary[index] = {
          ...state.feelingsDiary[index],
          ...feeling,
        };
      }
    },
    removeFeelingFromDiary(state, action) {
      state.feelingsDiary = state.feelingsDiary.filter(
        (feeling) => feeling.id !== action.payload
      );
    },
    setTodolist(state, action) {
      state.todolist = action.payload;
    },
    addTodoToList(state, action) {
      state.todolist.push(action.payload);
    },
    updateTodoInList(state, action) {
      const { id, todo } = action.payload;
      const index = state.todolist.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.todolist[index] = { ...state.todolist[index], ...todo };
      }
    },
    removeTodoFromList(state, action) {
      state.todolist = state.todolist.filter(
        (todo) => todo.id !== action.payload
      );
    },
    setMotivations(state, action) {
      state.motivations = action.payload;
    },
    addMotivation(state, action) {
      state.motivations.push(action.payload);
    },
    removeMotivation(state, action) {
      state.motivations = state.motivations.filter(
        (motivation) => motivation.type !== action.payload
      );
    },
    setBooks(state, action) {
      state.books = action.payload;
    },
    addBook(state, action) {
      state.books.push(action.payload);
    },
    updateBook(state, action) {
      const { src, book } = action.payload;
      const index = state.books.findIndex((book) => book.src === src);
      if (index !== -1) {
        state.books[index] = { ...state.books[index], ...book };
      }
    },
    removeBook(state, action) {
      state.books = state.books.filter((book) => book.src !== action.payload);
    },
    setTheme(state, action) {
      state.theme = action.payload;
    },
    updateTheme(state, action) {
      state.theme = { ...state.theme, ...action.payload };
    },
  },
});

export const {
  setCurrentMainTask,
  setGoals,
  setTasksOnMind,
  addTaskOnMind,
  updateTaskOnMind,
  removeTaskOnMind,
  setMainTaskParts,
  addMainTaskPart,
  updateMainTaskPart,
  removeMainTaskPart,
  setWeekendTasks,
  addWeekendTask,
  updateWeekendTask,
  removeWeekendTask,
  setFeelingsDiary,
  addFeelingToDiary,
  updateFeelingInDiary,
  removeFeelingFromDiary,
  setTodolist,
  addTodoToList,
  updateTodoInList,
  removeTodoFromList,
  setMotivations,
  addMotivation,
  removeMotivation,
  setBooks,
  addBook,
  updateBook,
  removeBook,
  setTheme,
  updateTheme,
} = slice.actions;

export const selectCurrentMainTask = (state) => state.app.currentMainTask;
export const selectGoals = (state) => state.app.goals;
export const selectTasksOnMind = (state) => state.app.tasksOnMind;
export const selectMainTaskParts = (state) => state.app.mainTaskParts;
export const selectWeekendTasks = (state) => state.app.weekendTasks;
export const selectFeelingsDiary = (state) => state.app.feelingsDiary;
export const selectTodolist = (state) => state.app.todolist;
export const selectMotivations = (state) => state.app.motivations;
export const selectBooks = (state) => state.app.books;
export const selectTheme = (state) => state.app.theme;

export default slice.reducer;
