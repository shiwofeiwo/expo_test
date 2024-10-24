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
            height: '60px',
          }}
        >
          <Text style={{ color: '#ffffff' }}>Coupons</Text>
          <Text style={{ color: '#ffffff' }}>Alerts</Text>
        </View>
        <View style={{ margin: '10px', flexDirection: 'row', display: 'flex' }}>
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
              marginRight: '10px',
              backgroundColor: '#23a943',
              borderRadius: '16px',
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
              marginRight: '10px',
              backgroundColor: '#ececec',
              borderRadius: '16px',
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
              style={{ margin: '5px', flexDirection: 'row', display: 'flex' }}
            >
              <Image
                style={{ width: '90px', height: '90px' }}
                source={{
                  uri: '/gateway/console/api/v1/asset/expo_test/assets/image/test1.jpg?branchName=main',
                }}
              />
              <View style={{ wordWrap: 'break-word', width: '270px' }}>
                <View
                  style={{
                    flexDirection: 'row',
                    display: 'flex',
                    marginLeft: '5px',
                    height: '20px',
                  }}
                >
                  <Text
                    style={{
                      color: '#767676',
                      fontSize: '12px',
                      height: '20px',
                    }}
                  >
                    Banggood
                  </Text>
                  <Text
                    style={{
                      color: '#767676',
                      fontSize: '12px',
                      marginLeft: '85px',
                      height: '20px',
                    }}
                  >
                    2h ago
                  </Text>
                </View>
                <Text style={{ marginLeft: '5px' }}>
                  Original ZMI USB Type-C to 3.5mm Audio Adapter from Xiaomi
                  Eco-_
                </Text>
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    display: 'flex',
                    marginLeft: '5px',
                    height: '30px',
                  }}
                >
                  <Text style={{ fontSize: '15px', fontWeight: 700 }}>
                    $2.54
                  </Text>
                  <Image
                    style={{
                      width: '80px',
                      height: '30px',
                      marginLeft: '140px',
                    }}
                    source={{
                      uri: '/gateway/console/api/v1/asset/expo_test/assets/image/QQ20241022-165056.png?branchName=main',
                    }}
                  />
                </View>
              </View>
            </View>
          </TouchableRipple>
          <View
            style={{ margin: '5px', flexDirection: 'row', display: 'flex' }}
          >
            <Image
              style={{ width: '90px', height: '90px' }}
              source={{
                uri: '/gateway/console/api/v1/asset/expo_test/assets/image/test2.jpg?branchName=main',
              }}
            />
            <View style={{ wordWrap: 'break-word', width: '270px' }}>
              <View
                style={{
                  flexDirection: 'row',
                  display: 'flex',
                  marginLeft: '5px',
                  height: '20px',
                }}
              >
                <Text
                  style={{ color: '#767676', fontSize: '12px', height: '20px' }}
                >
                  Banggood
                </Text>
                <Text
                  style={{
                    color: '#767676',
                    fontSize: '12px',
                    marginLeft: '85px',
                    height: '20px',
                  }}
                >
                  2h ago
                </Text>
              </View>
              <Text style={{ marginLeft: '5px' }}>
                FLOVEME Car Phone Holder Air Vent Mount Gravity Auto Lock 3...
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  display: 'flex',
                  marginLeft: '5px',
                  height: '30px',
                }}
              >
                <Text style={{ fontSize: '15px', fontWeight: 700 }}>$3.71</Text>
                <Image
                  style={{ width: '80px', height: '30px', marginLeft: '140px' }}
                  source={{
                    uri: '/gateway/console/api/v1/asset/expo_test/assets/image/QQ20241022-165056.png?branchName=main',
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={{ margin: '5px', flexDirection: 'row', display: 'flex' }}
          >
            <Image
              style={{ width: '90px', height: '90px' }}
              source={{
                uri: '/gateway/console/api/v1/asset/expo_test/assets/image/test3.jpg?branchName=main',
              }}
            />
            <View style={{ wordWrap: 'break-word', width: '270px' }}>
              <View
                style={{
                  flexDirection: 'row',
                  display: 'flex',
                  marginLeft: '5px',
                  height: '20px',
                }}
              >
                <Text
                  style={{ color: '#767676', fontSize: '12px', height: '20px' }}
                >
                  Banggood
                </Text>
                <Text
                  style={{
                    color: '#767676',
                    fontSize: '12px',
                    marginLeft: '85px',
                    height: '20px',
                  }}
                >
                  2h ago
                </Text>
              </View>
              <Text style={{ marginLeft: '5px' }}>
                12Pcs/Set Xiaomi Radical 0.4mm Swiss Gel Pen Prevents Ink
                Leak...
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  display: 'flex',
                  marginLeft: '5px',
                  height: '30px',
                }}
              >
                <Text style={{ fontSize: '15px', fontWeight: 700 }}>$7.22</Text>
                <Image
                  style={{ width: '80px', height: '30px', marginLeft: '140px' }}
                  source={{
                    uri: '/gateway/console/api/v1/asset/expo_test/assets/image/QQ20241022-165056.png?branchName=main',
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={{ margin: '5px', flexDirection: 'row', display: 'flex' }}
          >
            <Image
              style={{ width: '90px', height: '90px' }}
              source={{
                uri: '/gateway/console/api/v1/asset/expo_test/assets/image/test4.jpg?branchName=main',
              }}
            />
            <View style={{ wordWrap: 'break-word', width: '270px' }}>
              <View
                style={{
                  flexDirection: 'row',
                  display: 'flex',
                  marginLeft: '5px',
                  height: '20px',
                }}
              >
                <Text
                  style={{ color: '#767676', fontSize: '12px', height: '20px' }}
                >
                  Banggood
                </Text>
                <Text
                  style={{
                    color: '#767676',
                    fontSize: '12px',
                    marginLeft: '85px',
                    height: '20px',
                  }}
                >
                  2h ago
                </Text>
              </View>
              <Text style={{ marginLeft: '5px' }}>
                !MORE iBFree sport Light Wireless bluetooth Earphone
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  display: 'flex',
                  marginLeft: '5px',
                  height: '30px',
                }}
              >
                <Text style={{ fontSize: '15px', fontWeight: 700 }}>$4.52</Text>
                <Image
                  style={{ width: '80px', height: '30px', marginLeft: '140px' }}
                  source={{
                    uri: '/gateway/console/api/v1/asset/expo_test/assets/image/QQ20241022-165056.png?branchName=main',
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={{ margin: '5px', flexDirection: 'row', display: 'flex' }}
          >
            <Image
              style={{ width: '90px', height: '90px' }}
              source={{
                uri: '/gateway/console/api/v1/asset/expo_test/assets/image/logo.png?branchName=main',
              }}
            />
            <View style={{ wordWrap: 'break-word', width: '270px' }}>
              <View
                style={{
                  flexDirection: 'row',
                  display: 'flex',
                  marginLeft: '5px',
                  height: '20px',
                }}
              >
                <Text
                  style={{ color: '#767676', fontSize: '12px', height: '20px' }}
                >
                  Banggood
                </Text>
                <Text
                  style={{
                    color: '#767676',
                    fontSize: '12px',
                    marginLeft: '85px',
                    height: '20px',
                  }}
                >
                  2h ago
                </Text>
              </View>
              <Text style={{ marginLeft: '5px' }}>
                Original ZMI USB Type-C to 3.5mm Audio Adapter from Xiaomi Eco-_
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  display: 'flex',
                  marginLeft: '5px',
                  height: '30px',
                }}
              >
                <Text style={{ fontSize: '15px', fontWeight: 700 }}>$1.73</Text>
                <Image
                  style={{ width: '80px', height: '30px', marginLeft: '140px' }}
                  source={{
                    uri: '/gateway/console/api/v1/asset/expo_test/assets/image/QQ20241022-165056.png?branchName=main',
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={{ margin: '5px', flexDirection: 'row', display: 'flex' }}
          >
            <Image
              style={{ width: '90px', height: '90px' }}
              source={{
                uri: '/gateway/console/api/v1/asset/expo_test/assets/image/8d4f2816e9087ee743880763c45ac021e3b3b7a9.jpg?branchName=main',
              }}
            />
            <View style={{ wordWrap: 'break-word', width: '270px' }}>
              <View
                style={{
                  flexDirection: 'row',
                  display: 'flex',
                  marginLeft: '5px',
                  height: '20px',
                }}
              >
                <Text
                  style={{ color: '#767676', fontSize: '12px', height: '20px' }}
                >
                  Banggood
                </Text>
                <Text
                  style={{
                    color: '#767676',
                    fontSize: '12px',
                    marginLeft: '85px',
                    height: '20px',
                  }}
                >
                  2h ago
                </Text>
              </View>
              <Text style={{ marginLeft: '5px' }}>
                Original ZMI USB Type-C to 3.5mm Audio Adapter from Xiaomi Eco-_
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  display: 'flex',
                  marginLeft: '5px',
                  height: '30px',
                }}
              >
                <Text style={{ fontSize: '15px', fontWeight: 700 }}>$2.27</Text>
                <Image
                  style={{ width: '80px', height: '30px', marginLeft: '140px' }}
                  source={{
                    uri: '/gateway/console/api/v1/asset/expo_test/assets/image/QQ20241022-165056.png?branchName=main',
                  }}
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
