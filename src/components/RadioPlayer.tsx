import { FC, useState } from 'react';
import { channelsData } from '../constants';
import styles from './Player.module.scss';
import { Channel, PlayerChannels } from './PlayerChannels';
import { PlayerDisplay } from './PlayerDisplay';
import { PlayerHeader } from './PlayerHeader';

type Props = {
  channels?: Channel[];
};

const RadioPlayer: FC<Props> = ({ channels = channelsData }) => {
  const [nowPlaying, setNowPlaying] = useState<Channel>();
  const [volume, setVolume] = useState(0.5);

  const handleBack = () => {
    console.log('Back');
  };

  const handleSwitch = () => {
    setNowPlaying(undefined);
  };

  const handleChannelChange = (id: string) => {
    const channel = channels?.find((channel) => channel.id === id);
    if (channel) {
      setNowPlaying(channel);
    }
  };

  const handleVolumeDown = () => {
    setVolume(volume - 0.1);
    console.log('Volume down', volume);
  };

  const handleVolumeUp = () => {
    setVolume(volume + 0.1);
    console.log('Volume up', volume);
  };

  return (
    <div className={styles.Wrapper}>
      <PlayerHeader
        onBack={handleBack}
        onSwitch={handleSwitch}
        disabledSwitch={!nowPlaying}
      />
      <PlayerChannels
        data={channels}
        active={nowPlaying}
        onChannelChange={handleChannelChange}
        onVolumeDown={handleVolumeDown}
        onVolumeUp={handleVolumeUp}
      />
      <PlayerDisplay name={nowPlaying?.name} />
    </div>
  );
};

export default RadioPlayer;
