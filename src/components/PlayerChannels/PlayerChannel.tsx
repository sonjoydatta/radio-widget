import { Controllers } from './Controllers';
import styles from './PlayerChannels.module.scss';

export type Channel = {
  id: string;
  name: string;
  frequency: string;
  logo: string;
};
export type ChannelHandlerProps = {
  active?: Channel;
  onChannelChange?: (id: string) => void;
} & Omit<React.ComponentProps<typeof Controllers>, 'name' | 'logo'>;
type PlayerChannelProps = Channel & ChannelHandlerProps;

export const PlayerChannel = (props: PlayerChannelProps) => {
  if (!props.id) {
    return null;
  }

  const { id, name, frequency, active, onChannelChange, ...rest } = props;

  return (
    <div className={`${styles.Item}${id === active?.id ? ' active-item' : ''}`}>
      {id === active?.id && <Controllers name={name} {...rest} />}
      <div
        className={styles.Item_Wrapper}
        onClick={() => onChannelChange?.(id)}
      >
        <div className={styles.Item_Name}>{name}</div>
        <div className={styles.Item_Frequency}>{frequency}</div>
      </div>
    </div>
  );
};
