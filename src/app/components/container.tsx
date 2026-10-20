import { ViewProps } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

type containerProps = ViewProps & {
    className?: string
}
const Container = ({ className = "", children }: containerProps) => (
    <SafeAreaView className="flex-1 bg-screenBackGround">
        {children}
    </SafeAreaView>
)

export default Container
