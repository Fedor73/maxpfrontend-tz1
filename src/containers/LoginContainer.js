import { connect } from "react-redux";
import { logIn } from "../action/autorizationAction";
import Login from "../components/Login";

const mapStateToProps = state => ({
  errorMsg: state.authorization.errorMsg
});

const mapDispatchToProps = dispatch => ({
  logIn: (params, cb) => dispatch(logIn(params, cb))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
