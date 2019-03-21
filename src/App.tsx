import React, {Component} from 'react';
import './App.css';
import { DiaryTheme } from './component/Diary';
import Diary from './component/Diary';

class App extends Component {
  render() {
    return (
     <Diary diaryTheme = {DiaryTheme.TRAVEL} diaryContent="Hello">
     </Diary>
    );
  }
}

export default App;
