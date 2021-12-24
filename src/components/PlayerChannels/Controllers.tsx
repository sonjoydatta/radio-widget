import MinusIcon from '../../assets/images/minus.png';
import PlusIcon from '../../assets/images/plus.png';
import { Button } from '../Button';
import styles from './PlayerChannels.module.scss';

type ControllersProps = {
  name: string;
  logo: string;
  onVolumeDown?: () => void;
  onVolumeUp?: () => void;
};

export const Controllers = (props: ControllersProps) => {
  const { name, logo, onVolumeDown, onVolumeUp } = props;

  return (
    <div className={styles.Item_Controllers}>
      <Button onClick={onVolumeDown}>
        <img src={MinusIcon} alt="" />
      </Button>
      <img className={styles.Item_Controllers__Brand} src={logo} alt={name} />
      <Button onClick={onVolumeUp}>
        <img src={PlusIcon} alt="" />
      </Button>
    </div>
  );
};
