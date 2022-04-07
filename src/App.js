import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Counter from './components/Counter/CounterClass';
import { CounterFunc } from './components/Counter/CounterFunc';
import Home from './components/Home';
import { Navigation } from './components/Navigation/Navigation';
import { Quiz } from './components/Quiz/Quiz';
import { Register } from './components/Registration/Register';
import { SearchFunc } from './components/Search/SearchFunc';
import { TemperatureFunc } from './components/Temp/TemperatureFunc';
import './App.css';
import { Todo } from './components/TODO/Todo';
import { Contacts } from './components/Contact/Contacts';
import { Quote } from './components/Quotes/quote';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="count" element={<Counter />}>
            <Route path="countFunc" element={<CounterFunc />} />
          </Route>
          <Route path="tempFunc" element={<TemperatureFunc />} />
          <Route path="searchFunc" element={<SearchFunc />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="todo" element={<Todo />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="quote" element={<Quote />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
