import React from 'react';
import styles from './Point.module.css';

type PointProps = React.HTMLAttributes<HTMLDivElement> & {
  value: number;
};

function Point({value, className, onClick}: PointProps) {
  return (
    <div className={`${styles.Point} ${className}`}
         onClick={onClick}>
      {value}
    </div>
  );
}

export default Point;