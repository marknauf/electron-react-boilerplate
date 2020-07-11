import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './ScreenCapture.css';
import routes from '../../constants/routes.json';
// import {
//   increment,
//   decrement,
//   incrementIfOdd,
//   incrementAsync,
// } from './screenCapture';

export default function ScreenCapture(): JSX.Element {
  return (
    <div>
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      <div>SCREEN GRAB</div>
    </div>
  );
}
