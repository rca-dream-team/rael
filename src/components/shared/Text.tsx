export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  noDark?: boolean;
}
/**
 * @name Text
 * @desc a simple text component
 * @param {TextProps} props
 * @returns
 * @example const example = () => <Text>Example</Text>
 */
const Text = (props: TextProps) => {
  return (
    <span
      {...props}
      className={`${props.className} ${props.noDark ? "" : "dark:text-white"}`}
    >
      {props.children}
    </span>
  );
};

export default Text;
