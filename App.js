import React from "react";
import { View, Text, TextInput } from "react-native";

export default function Cat()
{
    const emoji = '😋';

    return (
        <View
            style={{ backgroundColor: 'gold', paddingHorizontal: 24, paddingBottom: 24, paddingTop: 48 }}>
            <Text>Hello, I am your cat! {emoji}</Text>
            <TextInput
                style=
                {{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue="Text"
            />
        </View>
    );
}