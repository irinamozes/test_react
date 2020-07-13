import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
//import PropTypes from 'prop-types' //
import Profile from '../../components/profile/profile.jsx'

/*REVIEW. Можно лучше. Наверное ни к чему, что ProfileContainer наследуется от PureComponent. Это может привести к тому, что при изменении пропса user.name,
компонент <Profile user={user} />, не будет перерисовываться, так как при наследовании от PureComponent, в методе жизненного цикла
компонента shouldComponentUpdate рассматривается только поверхностное сравнение текущего и следующего объектов props. Вследствии чего текущий
и следующий объекты user будут считаться одинаковыми, так как на них будет ссылаться одна и таже ссылка. А, если не должен будет перерисовываться
компонент ProfileContainer, то не будет перерисовываться и компонент Profile. */
class ProfileContainer extends PureComponent {
  render() {
    const { user } = this.props
    return <Profile user={user} />
  }
}

const mapStateToProps = state => ({
  user: state.session.user,
})

/*REVIEW. Можно лучше. Если в данной версии проекта для профиля не определены действия, то mapDispatchToProps можно не задавать. */
const mapDispatchToProps = dispatch => ({})


/*REVIEW. Надо исправить. Не происходит проверка структуры объекта user и типа user.name
Можно сделать проверку, как показано ниже, импортировав PropTypes

ProfileContainer.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}
 */
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
