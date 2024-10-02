import { View, Text } from 'react-native'
import React, { forwardRef, useMemo } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

const BottomSheet = forwardRef((props, ref) => {
    const snapPoint = useMemo(() => ['50%'], []);
  return (
    <BottomSheetModal ref={ref} snapPoints = {snapPoint}>
        <View>
            <Text>Bottom Sheet</Text>
        </View>
    </BottomSheetModal>
  )
});

export default BottomSheet