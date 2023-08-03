import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components"
import { COLORS, icons, images, SIZES } from "../constants"
import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router"


export default function Home() {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <SafeAreaView>
            <Stack.Screen options={{
                headerStyle: { backgroundColor: COLORS.white },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension='50%' />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
                ),
                headerTitle: '',
            }} />

            <ScrollView>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                    }}
                >
                    <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if (searchTerm) {
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />

                    <Popularjobs />
                    {/* <Nearbyjobs /> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}