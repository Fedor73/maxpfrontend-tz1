import React from "react";
import { connect } from "react-redux";

class Profile extends React.Component {
  render() {
    const { user } = this.props;
    return <Profile user={user} />;
  }
}

const mapStateToProps = state => ({
  user: state.authorization.user
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
