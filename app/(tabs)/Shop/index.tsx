import React from 'react';

import { View as ReactNativeView } from 'react-native';

import {
  View,
  Text,
  Chip,
  TouchableRipple,
  Image,
  FABGroup,
} from '@tecq/react-native-paper-materials';

import { BaseRoute } from 'react-native-paper/lib/typescript/components/BottomNavigation/BottomNavigation';

import utils, { RefsManager } from '../../utils';

import * as __$$i18n from '../../i18n';

import __$$constants from '../../constants';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({});

class Shop$$Page extends React.Component<{
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

    this.state = { open: false };
  }

  $ = (refName: string) => {
    return this._refsManager.get(refName);
  };

  $$ = (refName: string) => {
    return this._refsManager.getAll(refName);
  };

  onPress() {
    alert('go any where');
  }

  emptyFn() {}

  onStateChange() {
    this.setState({
      open: !this.state.open,
    });
  }

  componentDidMount() {}

  render() {
    const __$$context = this._context || this;
    const { state } = __$$context;
    return (
      <ReactNativeView
        ref={this._refsManager.linkRef('outerView')}
        titleSequenceId={37}
        style={{ height: '100%' }}
      >
        <View
          style={{
            backgroundColor: '#212e35',
            alignItems: 'center',
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-around',
            height: 60,
          }}
        >
          <Text style={{ color: '#ffffff' }}>Coupons</Text>
          <Text style={{ color: '#ffffff' }}>Alerts</Text>
        </View>
        <View style={{ margin: 10, flexDirection: 'row', display: 'flex' }}>
          <Chip
            delayLongPress={0}
            maxFontSizeMultiplier={0}
            compact={false}
            showSelectedOverlay={false}
            icon="bell-ring"
            closeIcon="close-circle"
            mode="flat"
            onClose={function () {
              return this.emptyFn.apply(
                this,
                Array.prototype.slice.call(arguments).concat([])
              );
            }.bind(this)}
            background={{ color: '#f8e71c', borderless: false }}
            elevated={false}
            ellipsizeMode="head"
            disabled={false}
            style={{
              marginRight: 10,
              backgroundColor: '#14802d',
              borderRadius: 16,
            }}
            showSelectedCheck={false}
            accessibilityLabel=""
            selected={false}
            __events={{
              eventList: [
                {
                  name: 'onPress',
                  description: 'Function to execute on press.',
                  disabled: false,
                },
                {
                  name: 'onLongPress',
                  description: 'Function to execute on long press.',
                  disabled: false,
                },
                {
                  name: 'onPressIn',
                  description:
                    'Function to execute as soon as the touchable element is pressed and invoked even before onPress.',
                  disabled: false,
                },
                {
                  name: 'onPressOut',
                  description:
                    'Function to execute as soon as the touch is released even before onPress.',
                  disabled: false,
                },
                {
                  name: 'onClose',
                  description:
                    'Function to execute on close button press. The close button appears only when this prop is specified.',
                  disabled: true,
                },
              ],
              eventDataList: [
                {
                  name: 'onClose',
                  type: 'componentEvent',
                  relatedEventName: 'emptyFn',
                },
              ],
            }}
            closeIconAccessibilityLabel="Close"
          >
            {<Text>Xiaomi</Text>}
          </Chip>
          <Chip
            delayLongPress={0}
            maxFontSizeMultiplier={0}
            compact={false}
            showSelectedOverlay={false}
            icon="bell-ring-outline"
            closeIcon="close-circle"
            mode="flat"
            onClose={function () {
              return this.emptyFn.apply(
                this,
                Array.prototype.slice.call(arguments).concat([])
              );
            }.bind(this)}
            background={{ color: '', borderless: false }}
            elevated={false}
            ellipsizeMode="head"
            disabled={false}
            style={{
              marginRight: 10,
              backgroundColor: '#ececec',
              borderRadius: 16,
            }}
            showSelectedCheck={false}
            accessibilityLabel=""
            selected={false}
            __events={{
              eventList: [
                {
                  name: 'onPress',
                  description: 'Function to execute on press.',
                  disabled: false,
                },
                {
                  name: 'onLongPress',
                  description: 'Function to execute on long press.',
                  disabled: false,
                },
                {
                  name: 'onPressIn',
                  description:
                    'Function to execute as soon as the touchable element is pressed and invoked even before onPress.',
                  disabled: false,
                },
                {
                  name: 'onPressOut',
                  description:
                    'Function to execute as soon as the touch is released even before onPress.',
                  disabled: false,
                },
                {
                  name: 'onClose',
                  description:
                    'Function to execute on close button press. The close button appears only when this prop is specified.',
                  disabled: true,
                },
              ],
              eventDataList: [
                {
                  name: 'onClose',
                  type: 'componentEvent',
                  relatedEventName: 'emptyFn',
                },
              ],
            }}
            closeIconAccessibilityLabel="Close"
          >
            {<Text>OnePlus 7 pro</Text>}
          </Chip>
        </View>
        <View>
          <TouchableRipple
            onPress={function () {
              return this.onPress.apply(
                this,
                Array.prototype.slice.call(arguments).concat([])
              );
            }.bind(this)}
            borderless={false}
            centered={false}
            disabled={false}
            __events={{
              eventList: [
                { name: 'onPress', disabled: true },
                { name: 'onLongPress', disabled: false },
                { name: 'onPressIn', disabled: false },
                { name: 'onPressOut', disabled: false },
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
            <View
              style={{ margin: 5, flexDirection: 'row', display: 'flex' }}
            >
              <Image
                style={{ width: 90, height: 90 }}
                source={require('@/assets/image/test1.jpg')}
              />
              <View style={{ flexWrap: 'wrap', width: 270 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    display: 'flex',
                    marginLeft: 5,
                    height: 20,
                  }}
                >
                  <Text
                    style={{
                      color: '#767676',
                      fontSize: 12,
                      height: 20,
                    }}
                  >
                    Banggood
                  </Text>
                  <Text
                    style={{
                      color: '#767676',
                      fontSize: 12,
                      marginLeft: 85,
                      height: 20,
                    }}
                  >
                    2h ago
                  </Text>
                </View>
                <Text style={{ marginLeft: 5 }}>
                  Original ZMI USB Type-C to 3.5mm Audio Adapter from Xiaomi
                  Eco-_
                </Text>
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    display: 'flex',
                    marginLeft: 5,
                    height: 30,
                  }}
                >
                  <Text style={{ fontSize: 15, fontWeight: 700 }}>
                    $2.54
                  </Text>
                  <Image
                    style={{
                      width: 80,
                      height: 30,
                      marginLeft: 140,
                    }}
                    source={require('@/assets/image/QQ20241022-165056.png')}
                  />
                </View>
              </View>
            </View>
          </TouchableRipple>
          <View
            style={{ margin: 5, flexDirection: 'row', display: 'flex' }}
          >
            <Image
              style={{ width: 90, height: 90 }}
              source={require('@/assets/image/test2.jpg')}
            />
            <View style={{ flexWrap: 'wrap', width: 270 }}>
              <View
                style={{
                  flexDirection: 'row',
                  display: 'flex',
                  marginLeft: 5,
                  height: 20,
                }}
              >
                <Text
                  style={{ color: '#767676', fontSize: 12, height: 20 }}
                >
                  Banggood
                </Text>
                <Text
                  style={{
                    color: '#767676',
                    fontSize: 12,
                    marginLeft: 85,
                    height: 20,
                  }}
                >
                  2h ago
                </Text>
              </View>
              <Text style={{ marginLeft: 5 }}>
                FLOVEME Car Phone Holder Air Vent Mount Gravity Auto Lock 3...
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  display: 'flex',
                  marginLeft: 5,
                  height: 30,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: 700 }}>$3.71</Text>
                <Image
                  style={{ width: 80, height: 30, marginLeft: 140 }}
                  source={require('@/assets/image/QQ20241022-165056.png')}
                />
              </View>
            </View>
          </View>
          <View
            style={{ margin: 5, flexDirection: 'row', display: 'flex' }}
          >
            <Image
              style={{ width: 90, height: 90 }}
              source={require('@/assets/image/test3.jpg')}
            />
            <View style={{ flexWrap: 'wrap', width: 270 }}>
              <View
                style={{
                  flexDirection: 'row',
                  display: 'flex',
                  marginLeft: 5,
                  height: 20,
                }}
              >
                <Text
                  style={{ color: '#767676', fontSize: 12, height: 20 }}
                >
                  Banggood
                </Text>
                <Text
                  style={{
                    color: '#767676',
                    fontSize: 12,
                    marginLeft: 85,
                    height: 20,
                  }}
                >
                  2h ago
                </Text>
              </View>
              <Text style={{ marginLeft: 5 }}>
                12Pcs/Set Xiaomi Radical 0.4mm Swiss Gel Pen Prevents Ink
                Leak...
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  display: 'flex',
                  marginLeft: 5,
                  height: 30,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: 700 }}>$7.22</Text>
                <Image
                  style={{ width: 80, height: 30, marginLeft: 140 }}
                  source={require('@/assets/image/QQ20241022-165056.png')}
                />
              </View>
            </View>
          </View>
          <View
            style={{ margin: 5, flexDirection: 'row', display: 'flex' }}
          >
            <Image
              style={{ width: 90, height: 90 }}
              source={require('@/assets/image/test4.jpg')}
            />
            <View style={{ flexWrap: 'wrap', width: 270 }}>
              <View
                style={{
                  flexDirection: 'row',
                  display: 'flex',
                  marginLeft: 5,
                  height: 20,
                }}
              >
                <Text
                  style={{ color: '#767676', fontSize: 12, height: 20 }}
                >
                  Banggood
                </Text>
                <Text
                  style={{
                    color: '#767676',
                    fontSize: 12,
                    marginLeft: 85,
                    height: 20,
                  }}
                >
                  2h ago
                </Text>
              </View>
              <Text style={{ marginLeft: 5 }}>
                !MORE iBFree sport Light Wireless bluetooth Earphone
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  display: 'flex',
                  marginLeft: 5,
                  height: 30,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: 700 }}>$4.52</Text>
                <Image
                  style={{ width: 80, height: 30, marginLeft: 140 }}
                  source={require('@/assets/image/QQ20241022-165056.png')}
                />
              </View>
            </View>
          </View>
          <View
            style={{ margin: 5, flexDirection: 'row', display: 'flex' }}
          >
            <Image
              style={{ width: 90, height: 90 }}
              source={require('@/assets/image/logo.png')}
            />
            <View style={{ flexWrap: 'wrap', width: 270 }}>
              <View
                style={{
                  flexDirection: 'row',
                  display: 'flex',
                  marginLeft: 5,
                  height: 20,
                }}
              >
                <Text
                  style={{ color: '#767676', fontSize: 12, height: 20 }}
                >
                  Banggood
                </Text>
                <Text
                  style={{
                    color: '#767676',
                    fontSize: 12,
                    marginLeft: 85,
                    height: 20,
                  }}
                >
                  2h ago
                </Text>
              </View>
              <Text style={{ marginLeft: 5 }}>
                Original ZMI USB Type-C to 3.5mm Audio Adapter from Xiaomi Eco-_
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  display: 'flex',
                  marginLeft: 5,
                  height: 30,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: 700 }}>$1.73</Text>
                <Image
                  style={{ width: 80, height: 30, marginLeft: 140 }}
                  source={require('@/assets/image/QQ20241022-165056.png')}
                />
              </View>
            </View>
          </View>
          <View
            style={{ margin: 5, flexDirection: 'row', display: 'flex' }}
          >
            <Image
              style={{ width: 90, height: 90 }}
              source={require('@/assets/image/8d4f2816e9087ee743880763c45ac021e3b3b7a9.jpg')}
            />
            <View style={{ flexWrap: 'wrap', width: 270 }}>
              <View
                style={{
                  flexDirection: 'row',
                  display: 'flex',
                  marginLeft: 5,
                  height: 20,
                }}
              >
                <Text
                  style={{ color: '#767676', fontSize: 12, height: 20 }}
                >
                  Banggood
                </Text>
                <Text
                  style={{
                    color: '#767676',
                    fontSize: 12,
                    marginLeft: 85,
                    height: 20,
                  }}
                >
                  2h ago
                </Text>
              </View>
              <Text style={{ marginLeft: 5 }}>
                Original ZMI USB Type-C to 3.5mm Audio Adapter from Xiaomi Eco-_
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  display: 'flex',
                  marginLeft: 5,
                  height: 30,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: 700 }}>$2.27</Text>
                <Image
                  style={{ width: 80, height: 30, marginLeft: 140 }}
                  source={require('@/assets/image/QQ20241022-165056.png')}
                />
              </View>
            </View>
          </View>
        </View>
        <FABGroup
          toggleStackOnLongPress={false}
          enableLongPressWhenStackOpened={false}
          visible={true}
          icon="plus"
          onStateChange={function () {
            return this.onStateChange.apply(
              this,
              Array.prototype.slice.call(arguments).concat([])
            );
          }.bind(this)}
          actions={[
            {
              color: '#4a4a4a',
              accessibilityHint: '',
              icon: 'plus',
              label: 'test',
              accessibilityLabel: '',
            },
          ]}
          open={__$$eval(() => this.state.open)}
          __events={{
            eventList: [
              { name: 'onPress', disabled: false },
              { name: 'onLongPress', disabled: false },
              { name: 'onStateChange', disabled: true },
            ],
            eventDataList: [
              {
                name: 'onStateChange',
                type: 'componentEvent',
                relatedEventName: 'onStateChange',
              },
            ],
          }}
        />
      </ReactNativeView>
    );
  }
}

export default Shop$$Page;

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
