import { poppins } from "@/app/layout"
import Text, { TextProps } from "./Text"

/**
 * @description PText is a component that uses the Poppins font
 * @param {TextProps} props
 * @returns {JSX.Element}
 */
const PText = (props: TextProps): JSX.Element => {
    return (
        <Text {...props} className={
            `${poppins.className} ${props.className}`
        }>{props.children}</Text>
    )
}

export default PText