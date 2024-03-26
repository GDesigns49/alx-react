import React from 'react';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types'

const consoleDisplay =()=> {console.log('Close button has been clicked')}

function Notifications({ displayDrawer}) {
  return (
    <div className='menuItem' >
      <p>Your notifications</p>
      {displayDrawer ? 
      <div className='Notifications'>
          <p>Here is the list of notifications</p>
          <button
          style={{ position: 'absolute', top: '7px', right: '7px', border: 'none', background: 'none', padding: '0' }}
          aria-label='Close'
          onClick={consoleDisplay}
          >
            <img style={{ display: 'inline', marginTop: '5px', marginRight: '5px', padding: '0' }} src={closeIcon} alt='Close' width="15px"/>
          </button>

          <ul>
          <NotificationItem type="default" value="New course available">
          </NotificationItem>
          <NotificationItem type="urgent" value="New resume available">
          </NotificationItem>
          <NotificationItem
            type="urgent"
            html={getLatestNotification()}
          >
          </NotificationItem>
        </ul>
      </div>
      : ''}
    </div>
  );
}

Notifications.defaultProps = {
  displayDrawer: false,
};
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};
export default Notifications