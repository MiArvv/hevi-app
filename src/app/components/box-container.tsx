import { View, ViewProps } from "react-native"

type BoxContainerProps = ViewProps & {
    className?: string
}

const BoxContainer = ({ className = "", children }: BoxContainerProps) => {
    return (
        <View className="border-2 border-borderGreen bg-lightgreen w-[80%] h-full rounded-xl">
            {children}
        </View>
    )
}

export default BoxContainer