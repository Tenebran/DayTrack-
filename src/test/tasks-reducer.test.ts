import { v1 } from "uuid";
import {
  tasksReducer,
  TasksStateType,
  taskThunks,
} from "../features/tasks/tasks-reducer";
import { todolistsThunk } from "../features/todolists/todolists-reducer";

let todolistId1: string;
let todolistId2: string;
let startState: TasksStateType;

beforeEach(() => {
  todolistId1 = v1();
  todolistId2 = v1();

  startState = {
    [todolistId1]: [
      { id: "1", status: 0, title: "HTML&CSS", todoListId: todolistId1 },
      { id: "2", status: 0, title: "JS", todoListId: todolistId1 },
      { id: "3", status: 0, title: "React", todoListId: todolistId1 },
      { id: "4", status: 0, title: "Redux", todoListId: todolistId1 },
    ],

    [todolistId2]: [
      { id: "1", status: 0, title: "Milk", todoListId: todolistId2 },
      { id: "2", status: 0, title: "Bread", todoListId: todolistId2 },
      { id: "3", status: 0, title: "Meat", todoListId: todolistId2 },
    ],
  };
});

// test('correct task should be removed', () => {
//   const endState = tasksReducer(
//     startState,
//     tasksActions.removeTask({ id: '2', todolistId: todolistId2 })
//   );

//   expect(endState[todolistId1].length).toBe(4);
//   expect(endState[todolistId2].length).toBe(2);
//   expect(endState[todolistId2][1].title).toBe('Meat');
// });

test("correct task should be change title", () => {
  const action = taskThunks.updateTask.fulfilled(
    {
      model: {
        title: "Book",
        todoListId: todolistId2,
        id: "2",
      },
    },
    "requestId",
    {
      title: "Book",
      todoListId: todolistId2,
      id: "2",
    },
  );
  const endState = tasksReducer(startState, action);

  expect(endState[todolistId2].find((t) => t.id === "2")?.title).toBe("Book");
  expect(endState[todolistId2].find((t) => t.id === "1")?.title).toBe("Milk");
});

test("correct task should be change status", () => {
  const action = taskThunks.updateTask.fulfilled(
    { model: { title: "Bread", todoListId: todolistId2, id: "2", status: 2 } },
    "requestId",
    { todoListId: todolistId2, id: "2", status: 2 },
  );
  const endState = tasksReducer(startState, action);

  expect(endState[todolistId2].find((t) => t.id === "2")?.status).toBe(2);
  expect(endState[todolistId2].find((t) => t.id === "1")?.status).toBe(0);
});

test("correct task should be added", () => {
  const newtaskID = v1();
  const action = taskThunks.addTask.fulfilled(
    {
      task: {
        todoListId: todolistId2,
        title: "New Task",
        id: newtaskID,
      },
    },
    "requestId",
    {
      todolistID: todolistId2,
      title: "New Task",
    },
  );
  const endState = tasksReducer(startState, action);

  expect(endState[todolistId2][0].title).toBe("New Task");
  expect(endState[todolistId2][1].title).toBe("Milk");
});

test("correct task should be added to correct array", () => {
  const task = {
    todoListId: todolistId2,
    title: "juce",
    status: 0,
    description: "",
    order: 0,
    priority: 0,
    id: "id exists",
  };
  const action = taskThunks.addTask.fulfilled(
    {
      task,
    },
    "requestId",
    { title: task.title, todolistID: task.todoListId },
  );

  const endState = tasksReducer(startState, action);

  expect(endState[todolistId1].length).toBe(4);
  expect(endState[todolistId2].length).toBe(4);
  expect(endState[todolistId2][0].id).toBeDefined();
  expect(endState[todolistId2][0].title).toBe("juce");
  expect(endState[todolistId2][0].status).toBe(0);
});

test("tasks should be added for todolist", () => {
  const action = taskThunks.getTasks.fulfilled(
    {
      tasks: startState[todolistId1],
      todolistID: todolistId1,
    },
    "requestId",
    todolistId1,
  );

  const endState = tasksReducer(
    {
      [todolistId2]: [],
      [todolistId1]: [],
    },
    action,
  );

  expect(endState[todolistId1].length).toBe(4);
  expect(endState[todolistId2].length).toBe(0);
});

test("new array should be added when new todolist is added", () => {
  const action = todolistsThunk.addTodolist.fulfilled(
    {
      todolist: {
        title: "new todolist",
        id: v1(),
      },
    },
    "requestId",
    { title: "new todolist" },
  );
  const endState = tasksReducer(startState, action);

  const keys = Object.keys(endState);
  const newKey = keys.find((k) => k !== todolistId1 && k !== todolistId2);
  if (!newKey) {
    throw Error("new key should be added");
  }

  expect(keys.length).toBe(3);
  expect(endState[newKey]).toEqual([]);
});

test("property with todolistId should be deleted", () => {
  const action = todolistsThunk.deleteTodolist.fulfilled(
    {
      id: todolistId2,
    },
    "requestId",
    { todolistId: todolistId2 },
  );
  const endState = tasksReducer(startState, action);

  const keys = Object.keys(endState);
  expect(keys.length).toBe(1);
  expect(endState[todolistId2]).not.toBeDefined();
});
