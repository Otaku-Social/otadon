import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';

import { Avatar } from '../../../components/avatar';

import ActionBar from './action_bar';

export default class NavigationBar extends ImmutablePureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map.isRequired,
    onLogout: PropTypes.func.isRequired,
    onClose: PropTypes.func,
  };

  render () {
    const displayNameHtml = { __html: this.props.account.get('display_name_html') };
    const username = this.props.account.get('acct')

    return (
      <div className='navigation-bar'>
        <Link to={`/@${username}`}>
          <span style={{ display: 'none' }}>{username}</span>
          <Avatar account={this.props.account} size={46} />
        </Link>

        <div className='navigation-bar__profile'>
          <strong dangerouslySetInnerHTML={displayNameHtml} />
          <Link to={`/@${username}`}>
            <span className='navigation-bar__profile-account'>@{username}</span>
          </Link>
        </div>

        <div className='navigation-bar__actions'>
          <ActionBar account={this.props.account} onLogout={this.props.onLogout} />
        </div>
      </div>
    );
  }

}
