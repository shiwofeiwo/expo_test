import React from 'react';

import { View as ReactNativeView } from 'react-native';

import {
  PaperProvider,
  View,
  Searchbar,
  Button,
  Card,
  IconButton,
} from '@tecq/react-native-paper-materials';

import { BaseRoute } from 'react-native-paper/lib/typescript/components/BottomNavigation/BottomNavigation';

import utils, { RefsManager } from '../../utils';

import * as __$$i18n from '../../i18n';

import __$$constants from '../../constants';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({});

class Home$$Page extends React.Component<{
  __designMode?: string;
  route: BaseRoute;
  jumpTo: (key: string) => void;
}> {
  _context = this;

  utils: Record<string, any>;

  _refsManager: RefsManager;

  get constants() {
    return __$$constants || {};
  }

  constructor(props: any, context: any) {
    super(props);

    this.utils = utils;

    this._refsManager = new RefsManager();

    __$$i18n._inject2(this);

    this.state = {};
  }

  $ = (refName: string) => {
    return this._refsManager.get(refName);
  };

  $$ = (refName: string) => {
    return this._refsManager.getAll(refName);
  };

  componentDidMount() {}

  render() {
    const __$$context = this._context || this;
    const { state } = __$$context;
    return (
      <ReactNativeView
        ref={this._refsManager.linkRef('outerView')}
        titleSequenceId={23}
        style={{ height: '100%' }}
      >
        <PaperProvider>
          <View
            style={{
              margin: '10px',
              alignItems: 'center',
              flexWrap: 'wrap',
              flexDirection: 'row',
              display: 'flex',
              paddingHorizontal: '12',
            }}
          >
            <Searchbar
              mode="bar"
              elevation={0}
              showDivider={true}
              style={{ width: '100%' }}
              placeholder="Search"
              loading={false}
              value=""
            />
            <Button
              mode="contained"
              compact={false}
              buttonColor="#f5a623"
              labelStyle={{ fontSize: 12, fontStyle: 'normal' }}
              dark={true}
              style={{ margin: '4px' }}
            >
              Run/Walk
            </Button>
            <Button
              mode="contained"
              compact={false}
              buttonColor="#f5a623"
              dark={true}
              labelStyle={{ fontSize: 12 }}
              style={{ margin: '4px' }}
            >
              Auckland
            </Button>
            <Button
              mode="contained"
              compact={false}
              buttonColor="#f5a623"
              dark={true}
              labelStyle={{ fontSize: 12 }}
              style={{ margin: '4px' }}
            >
              Long(20km)
            </Button>
          </View>
          <Card
            mode="elevated"
            elevation={1}
            delayLongPress={0}
            accessible={false}
            disabled={false}
            style={{ margin: '10px' }}
          >
            <Card.Title subtitle="Sun 20 Oct 2019" title="Auckland Marathon" />
            <Card.Cover
              source={{
                uri: '/gateway/console/api/v1/asset/expo_test/assets/image/logo.png?branchName=main',
              }}
            />
            <Card.Actions>
              <IconButton size={30} icon="star" iconColor="#4a90e2" />
            </Card.Actions>
          </Card>
        </PaperProvider>
      </ReactNativeView>
    );
  }
}

export default Home$$Page;

function __$$eval(expr: any) {
  try {
    return expr();
  } catch (error) {}
}

function __$$evalArray(expr: any) {
  const res = __$$eval(expr);
  return Array.isArray(res) ? res : [];
}

function __$$createChildContext(oldContext: any, ext: any) {
  const childContext = {
    ...oldContext,
    ...ext,
  };
  childContext.__proto__ = oldContext;
  return childContext;
}
