import React from 'react';

import { View as ReactNativeView } from 'react-native';

import {
  Appbar,
  View,
  Input,
  RadioButtonGroup,
  Text,
  RadioButton,
} from '@tecq/react-native-paper-materials';

import { BaseRoute } from 'react-native-paper/lib/typescript/components/BottomNavigation/BottomNavigation';

import utils, { RefsManager } from '../../utils';

import * as __$$i18n from '../../i18n';

import __$$constants from '../../constants';

import { StyleSheet } from 'react-native';
import withRouter from "expo-router/plugin/build";

const styles = StyleSheet.create({});

class Detail$$Page extends React.Component<{
  __designMode?: string;
  route: BaseRoute;
  jumpTo: (key: string) => void;
  params?: any
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

    this.state = { info: {} };
  }

  $ = (refName: string) => {
    return this._refsManager.get(refName);
  };

  $$ = (refName: string) => {
    return this._refsManager.getAll(refName);
  };

  back() {
    if (this.props.__designMode) {
      this.utils.back(this);
    } else {
      const { router } = require('expo-router');
      router.back();
    }
  }

  componentDidMount() {
    if (this.props.__designMode) {
      const res = this.utils.getNavigatedData('info', this);
      this.setState({
        info: res,
      });
    } else {
      try {
        const { params } = this.props
        this.setState({
          info: params,
        });
      } catch (e) {
        console.log(e);
      }
    }
  }

  render() {
    const __$$context = this._context || this;
    const { state } = __$$context;
    return (
      <ReactNativeView
        ref={this._refsManager.linkRef('outerView')}
        titleSequenceId={15}
        style={{ height: '100%' }}
      >
        <Appbar
          backAction={{
            onPress: function () {
              if (this.back) {
                return this.back.apply(
                  this,
                  Array.prototype.slice.call(arguments).concat([])
                );
              }
            }.bind(this),
            color: '#000000',
            size: 25,
          }}
          content={{
            title: __$$eval(() => this.state.info?.name ?? 'unknown'),
          }}
        />
        <View style={{ margin: '10px' }}>
          <Input
            mode="flat"
            label="Name"
            value={__$$eval(() => this.state.info?.name)}
          />
        </View>
        <View style={{ margin: '10px' }}>
          <Input
            mode="flat"
            label="Job"
            value={__$$eval(() => this.state.info?.job)}
          />
        </View>
        <View style={{ margin: '10px' }}>
          <RadioButtonGroup value={__$$eval(() => this.state.info?.gender)}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Text style={{ fontSize: '20px' }}>Male</Text>
              <RadioButton
                color=""
                uncheckedColor=""
                disabled={false}
                style={{}}
                value="male"
                status="checked"
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Text style={{ fontSize: '20px' }}>Female</Text>
              <RadioButton
                color=""
                uncheckedColor=""
                disabled={false}
                value="female"
                status="checked"
              />
            </View>
          </RadioButtonGroup>
        </View>
        <View style={{ margin: '10px' }}>
          <Input
            mode="flat"
            label="Address"
            value={__$$eval(() => this.state.info?.location)}
          />
        </View>
      </ReactNativeView>
    );
  }
}

export default Detail$$Page;

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
