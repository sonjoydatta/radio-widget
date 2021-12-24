import styles from './Button.module.scss';

export type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const { children, className, ...rest } = props;

  return (
    <button
      className={`${styles.Btn}${className ? ` ${className}` : ''}`}
      {...rest}
    >
      {children}
    </button>
  );
};
