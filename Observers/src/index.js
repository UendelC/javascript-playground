import State from "./lib/state";
import List from "./components/list";


const AppState = new State();
const nameList = new List();

AppState.addObserver(nameList);

nameList.render(AppState.get(), "user-list-container");