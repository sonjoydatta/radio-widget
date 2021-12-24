import { useEffect, useRef } from 'react';
import { Channel, ChannelHandlerProps, PlayerChannel } from './PlayerChannel';
import styles from './PlayerChannels.module.scss';

type PlayerChannelsProps = {
  data?: Channel[];
} & ChannelHandlerProps;

export const PlayerChannels = (props: PlayerChannelsProps) => {
  const { data, ...rest } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const container = ref.current;
      const activeItem = container.querySelector(
        '.active-item',
      ) as HTMLDivElement;
      if (activeItem) {
        const scrollTo = activeItem.offsetTop - container.offsetTop - 64;
        container.scrollTop = scrollTo;
      }
    }
  }, [rest?.active]);

  return (
    <div ref={ref} className={styles.Wrapper}>
      {data?.map((channel) => (
        <PlayerChannel key={channel.id} {...channel} {...rest} />
      ))}
    </div>
  );
};

export type { Channel };
