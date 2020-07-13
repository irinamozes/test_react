import React from 'react'

/*REVIEW. Надо исправить. Если параметр data не используется, его не надо и задавать. */
const NotFound = ({ data }) => {
  return (
    <React.Fragment>
      <h1>404</h1>
      <h2>Страница не найдена</h2>
    </React.Fragment>
  )
}

export default NotFound
