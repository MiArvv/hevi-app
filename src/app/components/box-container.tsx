import { View, ViewProps } from "react-native"

type BoxContainerProps = ViewProps & {
    className?: string
}

const BoxContainer = ({ className = "", children, ...props }: BoxContainerProps) => {
    return (
        <View className={`border-2 border-borderGreen bg-lightgreen rounded-xl ${className}`}
        {...props}>
            {children}
        </View>
    )
}

export default BoxContainer