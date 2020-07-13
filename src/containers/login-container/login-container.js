/*REVIEW. Отлично, что для трёх компонент-представлений созданы три компонента-контейнера. Это даёт возможность связывать компоненты-представления
только с нужными им пропсами (посредством получения этих пропсов контейнерами), что обеспечивает перерисовку только того компонента, пропсы которого изменились,
а не всех компонент сразу. */
import { connect } from 'react-redux'
import { logIn } from '../../actions/SessionActions'
import Login from '../../components/login/login.jsx'

const mapStateToProps = state => ({
  errorMessage: state.session.errorMessage,
})

const mapDispatchToProps = dispatch => ({
  logIn: (params, cb) => dispatch(logIn(params, cb)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
