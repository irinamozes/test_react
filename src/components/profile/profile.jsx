import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({ user }) => {
  return (
    <React.Fragment>
      <h2>Профиль</h2>
      <p>Вас зовут: {user.name}</p>
    </React.Fragment>
  )
}


/*REVIEW. Надо исправить. Неправильно написано свойство proptypes (t нужно с большой буквы) и проверка типа не происходит. */
Profile.proptypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}


export default Profile


