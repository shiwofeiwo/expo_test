import React from 'react';

import { View as ReactNativeView } from 'react-native';

import { DrawerItem } from '@tecq/react-native-paper-materials';

import { BaseRoute } from 'react-native-paper/lib/typescript/components/BottomNavigation/BottomNavigation';

import utils, { RefsManager } from '../../utils';

import * as __$$i18n from '../../i18n';

import __$$constants from '../../constants';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({});

class ErrorPage$$Page extends React.Component<{
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

  navigateToDefaultPage() {
    this.utils.navigateTo('${app_id}', 'DefaultPage');
  }

  componentDidMount() {}

  render() {
    const __$$context = this._context || this;
    const { state } = __$$context;
    return (
      <ReactNativeView
        ref={this._refsManager.linkRef('outerView')}
        titleSequenceId={2}
        style={{ height: '100%' }}
      >
        <DrawerItem active={false} disabled={false} />
      </ReactNativeView>
    );
  }
}

export default ErrorPage$$Page;

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
