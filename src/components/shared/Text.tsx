
export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
   
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
        <span {...props} className={
            `${props.className} dark:text-white`
        }>{props.children}</span>
    )
}

export default Text