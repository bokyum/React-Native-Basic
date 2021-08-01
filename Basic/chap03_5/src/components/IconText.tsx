import React, { ComponentProps, FC } from 'react'
import { StyleProp, TextStyle,Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableView, TouchableViewProps } from './TouchableView'


export type IconTextProps = TouchableViewProps & 
    ComponentProps<typeof Icon> & {
        text: number | string
        textStyle: StyleProp<TextStyle>
    }


export const IconText: FC<IconTextProps> = ({
    name, size, color, textStyle, text, ...touchableViewProps }) => {
        return (
            <TouchableView {...touchableViewProps}>
                <Icon name={name} size={size} color={color} />
                <Text style={textStyle}>{text}</Text>
            </TouchableView>
        )
    }
    