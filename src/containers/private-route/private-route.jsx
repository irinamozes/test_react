import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
/*REVIEW. Отлично, что использован паттерн render props. Контейнер приватного роутинга PrivateRoute в зависимости от пропса isAuth может показать любую страницу
Component, которая передана ему как параметр, или перенаправить на страницу логина, если авторизация прошла неуспешно.*/
const PrivateRoute = ({ component: Component, ...rest }) => {

  return (

    <Route
      {...rest}

      render={props =>
        rest.isAuth ? (

          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

const mapStateToProps = state => {
  return {
    isAuth: state.session.user,
  }
}

export default connect(mapStateToProps)(PrivateRoute)
