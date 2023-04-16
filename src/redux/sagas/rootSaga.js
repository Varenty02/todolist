import { all } from "redux-saga/effects";
import * as ToDoListSaga from './ToDoListSaga'

export function* rootSaga() {

  yield all([
    ToDoListSaga.theoDoiActionGetTaskApi(),
    ToDoListSaga.theoDoiActionAddTaskApi(),
    ToDoListSaga.theoDoiActionDeleteTask(),
    ToDoListSaga.theoDoiDoneTask(),
    ToDoListSaga.theoDoiRejectTask(),
    
    
  ])


}