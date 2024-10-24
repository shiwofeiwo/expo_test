import { useLocalSearchParams } from "expo-router";
import Detail from './detail'

export default function(props: any) {
    const params = useLocalSearchParams();
    return <Detail {...props} params={params} />;
}
