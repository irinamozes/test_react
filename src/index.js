import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import App from './components/app/app.jsx'
import registerServiceWorker from './registerServiceWorker'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(reducer, applyMiddleware(...middleware))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()


/*REVIEW. Резюме.

Что мне кажется отличным.

1. Отлично, что для трёх компонент-представлений созданы три компонента-контейнера.
(более подробный комментарий в модуле login-container.js).

2. Отлично, что использован паттерн render props.
(более подробный комментарий в модуле private-route.jsx).

Что мне кажется можно лучше.

1. Мне кажется ни к чему наследование ProfileContainer  от PureComponent,
Хотя, возможно, и трудно придумать ситуацию, когда это может помешать.
(подробный комментарий в модуле profile-container.jsx).

2. Если в данной версии проекта для профиля не определены действия, то mapDispatchToProps можно не задавать.
(комментарий в модуле profile-container.jsx).


Что надо исправить.

1. Неправильно написано свойство proptypes (t нужно с большой буквы) и проверка типа не происходит.
(комментарий в модуле profile.jsx).

2. Не происходит проверка структуры объекта user и типа user.name в модуле profile-container.jsx.

Что можно упростить.

В реальных проектах, конечно, редко бывает, что не надо обращаться к серверу с асинхронным запросом,
но в данной версии проекта асинхронных операций нет, поэтому функция, возвращающая action, могла бы возвращать объект, а не функцию
и усилитель redux-thunk можно было бы не использовать.

*/