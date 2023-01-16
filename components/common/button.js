import btnStyles from "./button.module.css"

export const Button = ({children, ...props}) => {
    return (
        <button className={btnStyles.btn} {...props}>{children}</button>
    )
}