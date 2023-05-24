import React, { useState, useEffect } from 'react';
import styles from './watch.module.css';

function Watch() {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  }, []);

  return (
    <div className={styles.watch}>{time}</div>
  );
}

export default Watch;
