import styles from './react-kit.module.scss';

/* eslint-disable-next-line */
export interface ReactKitProps {}

export function ReactKit(props: ReactKitProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactKit!</h1>
    </div>
  );
}

export default ReactKit;
