import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container} data-tid="container">
      <h2>OVERLAY</h2>
      <Link to={routes.COUNTER}>to Counter</Link>
      <br />
      <Link to={routes.COUNTER}>to Analytics</Link>
      <br />
      <Link to={routes.SCREENCAPTURE}>to Snap</Link>
      {/* <div> SNAP</div> */}
      <div className={styles.draggable}>Drag</div>
    </div>
  );
}
