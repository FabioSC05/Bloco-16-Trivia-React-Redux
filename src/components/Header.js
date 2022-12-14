import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import star from '../assets/star.png';
import logo from '../assets/login_logo.png';

class Header extends React.Component {
  render() {
    const { info } = this.props;
    const { name, gravatarEmail, score } = info;
    const converted = md5(gravatarEmail).toString();
    return (
      <header>
        <img src={ logo } alt="logo" />
        <div className="header-user">
          <img
            src={ `https://www.gravatar.com/avatar/${converted}` }
            alt={ gravatarEmail }
            data-testid="header-profile-picture"
          />
          <p data-testid="header-player-name">{ name }</p>
        </div>
        <div className="header-score">
          <img src={ star } alt="logo" />
          <span>Pontos: </span>
          <span data-testid="header-score">{score}</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (store) => ({
  info: store.player,
});

Header.propTypes = {
  info: PropTypes.objectOf(PropTypes.any.isRequired).isRequired,
};

export default connect(mapStateToProps)(Header);
