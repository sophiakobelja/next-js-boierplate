import React from 'react';
import { useAppDispatch, useAppSelector } from '@store';
import { setCount } from '@store/slices';
import styles from './Counter.module.css';

export const Counter: React.FC = () => {
  const { count } = useAppSelector((state) => state.sampleSlice);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.counter}>
      <h2>Counter</h2>
      <span className={styles.h2} data-testid="count">
        {count}
      </span>
      <div className={styles.buttonRow}>
        <button
          onClick={() => dispatch(setCount(count - 1))}
          data-testid="decrement"
        >
          Subtract
        </button>
        <button
          onClick={() => dispatch(setCount(count + 1))}
          data-testid="increment"
        >
          Add
        </button>
      </div>
    </div>
  );
};
