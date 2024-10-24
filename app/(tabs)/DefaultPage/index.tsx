import React from 'react';

import { View as ReactNativeView } from 'react-native';

import {
  View,
  Image,
  Input,
  HelperText,
  Icon,
  Text,
  Button,
} from '@tecq/react-native-paper-materials';

import { BaseRoute } from 'react-native-paper/lib/typescript/components/BottomNavigation/BottomNavigation';

import utils, { RefsManager } from '../../utils';

import * as __$$i18n from '../../i18n';

import __$$constants from '../../constants';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({});

class DefaultPage$$Page extends React.Component<{
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

    this.state = {
      password: '',
      error: {
        username: false,
        password: false,
      },
      username: '',
    };
  }

  $ = (refName: string) => {
    return this._refsManager.get(refName);
  };

  $$ = (refName: string) => {
    return this._refsManager.getAll(refName);
  };

  onPress() {
    const { username, password } = this.state;
    const res = {
      username: username !== 'admin',
      password: password !== '123',
    };
    this.setState({
      error: {
        ...this.state.error,
        ...res,
      },
    });
    console.log(res);
    if (!res.username && !res.password) {
      // change error to undefined
      this.setState({
        error: {
          ...this.state.error,
          username: false,
          password: false,
        },
      });
      if (this.props.__designMode) {
        this.utils.history.push('/expo_test/list');
      } else {
        try {
          const { router } = require('expo-router');
          router.navigate('/(tabs)/List');
        } catch (e) {
          console.log(e);
        }
      }
    }
  }

  onPwdChangeText(e) {
    this.setState({
      password: e,
    });
  }

  onUsernameChangeText(e) {
    this.setState({
      username: e,
    });
  }

  componentDidMount() {}

  render() {
    const __$$context = this._context || this;
    const { state } = __$$context;
    return (
      <ReactNativeView
        ref={this._refsManager.linkRef('outerView')}
        titleSequenceId={30}
        style={{ height: '100%' }}
      >
        <View
          style={{
            backgroundColor: '#54a1f7',
            alignItems: 'center',
            display: 'flex',
            height: '100vh',
          }}
        >
          <Image
            resizeMethod="resize"
            style={{ width: '95%', marginTop: '200px', height: '12%' }}
            source={{
              uri: '/gateway/console/api/v1/asset/expo_test/assets/image/logo_text.png?branchName=main',
            }}
          />
          <View
            style={{ alignItems: 'center', display: 'flex', marginTop: '40px' }}
          >
            <Input
              mode="flat"
              onChangeText={function () {
                return this.onUsernameChangeText.apply(
                  this,
                  Array.prototype.slice.call(arguments).concat([])
                );
              }.bind(this)}
              style={{ width: '300px', marginBottom: '20px' }}
              label="Username"
              placeholder="Please enter username"
              error={__$$eval(() => this.state.error.username || this.state.error.password)}
              __events={{
                eventList: [
                  { name: 'onChangeText', disabled: true },
                  { name: 'onFocus', disabled: false },
                  { name: 'onBlur', disabled: false },
                ],
                eventDataList: [
                  {
                    name: 'onChangeText',
                    type: 'componentEvent',
                    relatedEventName: 'onUsernameChangeText',
                  },
                ],
              }}
            />
            <Input
              mode="flat"
              onChangeText={function () {
                return this.onPwdChangeText.apply(
                  this,
                  Array.prototype.slice.call(arguments).concat([])
                );
              }.bind(this)}
              style={{ width: '300px', marginTop: '0px' }}
              disabled={false}
              label="Password"
              placeholder="Please enter password"
              error={__$$eval(() => this.state.error.username || this.state.error.password)}
              __events={{
                eventList: [
                  { name: 'onChangeText', disabled: true },
                  { name: 'onFocus', disabled: false },
                  { name: 'onBlur', disabled: false },
                ],
                eventDataList: [
                  {
                    name: 'onChangeText',
                    type: 'componentEvent',
                    relatedEventName: 'onPwdChangeText',
                  },
                ],
              }}
            />
            <HelperText
              padding="none"
              visible={__$$eval(
                () => this.state.error.username || this.state.error.password
              )}
              disabled={false}
              type="error"
            >
              {[
                <Icon size={15} color="#d0021b" source="close" />,
                <Text>username or password incorrect</Text>,
              ]}
            </HelperText>
            <Button
              mode="elevated"
              onPress={function () {
                return this.onPress.apply(
                  this,
                  Array.prototype.slice.call(arguments).concat([])
                );
              }.bind(this)}
              style={{ width: '150px', marginTop: '30px' }}
              __events={{
                eventList: [
                  {
                    name: 'onAccessibilityEscape',
                    description:
                      'When accessible is true, the system will invoke this function when the user performs the escape gesture (scrub with two fingers).',
                    disabled: false,
                  },
                  {
                    name: 'onAccessibilityTap',
                    description:
                      'When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.',
                    disabled: false,
                  },
                  {
                    name: 'onMagicTap',
                    description:
                      'When accessible is true, the system will invoke this function when the user performs the magic tap gesture.',
                    disabled: false,
                  },
                  { name: 'onPress', disabled: true },
                  { name: 'onPressIn', disabled: false },
                  { name: 'onPressOut', disabled: false },
                  { name: 'onLongPress', disabled: false },
                ],
                eventDataList: [
                  {
                    name: 'onPress',
                    type: 'componentEvent',
                    relatedEventName: 'onPress',
                  },
                ],
              }}
            >
              Login
            </Button>
          </View>
        </View>
      </ReactNativeView>
    );
  }
}

export default DefaultPage$$Page;

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
