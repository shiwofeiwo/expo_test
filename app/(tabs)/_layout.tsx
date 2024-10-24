import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { BaseRoute } from 'react-native-paper/lib/typescript/components/BottomNavigation/BottomNavigation';

import Detail$$Page from '@/app/(tabs)/Detail';
import List$$Page from '@/app/(tabs)/List';
import Shop$$Page from '@/app/(tabs)/Shop';

export default function TabLayout() {
  const [index, setIndex] = useState(0);

  const [routes] = useState<BaseRoute[]>([
    { key: 'List', title: 'List', focusedIcon: 'heart' },
    // { key: 'Detail', title: 'Detail', focusedIcon: 'heart' },
    { key: 'Shop', title: 'Shop', focusedIcon: 'heart' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    List: List$$Page,
    // Detail: Detail$$Page,
    Shop: Shop$$Page,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
