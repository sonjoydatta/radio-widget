import BackArrow from '../assets/images/back-arrow.png';
import SwitchIcon from '../assets/images/switch.png';
import { Button } from './Button';
import styles from './Player.module.scss';

type PlayerHeaderProps = {
  onBack?: () => void;
  onSwitch?: () => void;
  disabledSwitch?: boolean;
};

export const PlayerHeader = ({
  onBack,
  onSwitch,
  disabledSwitch,
}: PlayerHeaderProps) => (
  <div className={styles.Header}>
    <Button onClick={onBack}>
      <img src={BackArrow} alt="" />
    </Button>
    <div className={styles.Header_Title}>Stations</div>
    <Button onClick={onSwitch} disabled={disabledSwitch}>
      <img src={SwitchIcon} alt="" />
    </Button>
  </div>
);
