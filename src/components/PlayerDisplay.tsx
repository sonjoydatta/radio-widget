import styles from './Player.module.scss';

type PlayerDisplayProps = {
  name?: string;
};

export const PlayerDisplay = ({ name }: PlayerDisplayProps) => (
  <div className={styles.Display}>
    {name && (
      <>
        <p className={styles.Display_Title}>Currently playing</p>
        <h4 className={styles.Display_Name}>{name}</h4>
      </>
    )}
  </div>
);
