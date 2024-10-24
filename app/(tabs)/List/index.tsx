import React from 'react';

import { View as ReactNativeView } from 'react-native';

import {
    View,
    Image,
    Searchbar,
    IconButton,
    Card,
    TouchableRipple,
    Chip,
    Text,
    FABGroup,
} from '@tecq/react-native-paper-materials';

import { BaseRoute } from 'react-native-paper/lib/typescript/components/BottomNavigation/BottomNavigation';

import utils, { RefsManager } from '../../utils';

import * as __$$i18n from '../../i18n';

import __$$constants from '../../constants';

import { StyleSheet } from 'react-native';
import { router } from "expo-router";

const styles = StyleSheet.create({});

class List$$Page extends React.Component<{
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

    onPress(e, extra) {
        if (this.props.__designMode) {
            this.utils.navigateTo(
                'expo_test',
                'detail',
                {
                    info: extra,
                },
                this
            );
        } else {
            console.log('extra =>', extra)
            const { router } = require('expo-router');
            router.navigate({
                pathname: '/detail',
                // 目标页面的路径
                params: {
                    ...extra
                },
            });
        }
    }

    open() {
        this.setState({
            open: !this.state.open,
        });
    }

    componentDidMount() {
    }

    render() {
        const __$$context = this._context || this;
        const { state } = __$$context;
        return (
            <ReactNativeView
                ref={this._refsManager.linkRef('outerView')}
                titleSequenceId={86}
                style={{ height: '100%' }}
            >
                <View
                    style={{
                        backgroundColor: '#4634ae',
                        alignItems: 'center',
                        flexDirection: 'row',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        height: '70px',
                    }}
                >
                    <Image
                        style={{ margin: '5px', width: '45px', height: '45px' }}
                        source={{
                            uri: '/gateway/console/api/v1/asset/expo_test/assets/image/logo.png?branchName=main',
                        }}
                    />
                    <Image
                        style={{
                            margin: '5px',
                            width: '100px',
                            height: '45px',
                            marginLeft: '90px',
                        }}
                        source={{
                            uri: '/gateway/console/api/v1/asset/expo_test/assets/image/rose.png?branchName=main',
                        }}
                    />
                </View>
                <View
                    style={{
                        marginRight: '20px',
                        alignItems: 'center',
                        flexDirection: 'row',
                        display: 'flex',
                        marginTop: '20px',
                        marginLeft: '20px',
                    }}
                >
                    <Searchbar
                        mode="bar"
                        elevation={2}
                        showDivider={true}
                        style={{ width: '220px' }}
                        placeholder="Search"
                        loading={false}
                        value=""
                    />
                    <IconButton
                        mode="contained-tonal"
                        containerColor="#4634ae"
                        size={25}
                        icon="tag"
                        iconColor="#ffffff"
                        animated={false}
                        style={{ marginLeft: '10px' }}
                        selected={false}
                    />
                    <IconButton
                        mode="contained-tonal"
                        containerColor="#4634ae"
                        size={25}
                        icon="menu"
                        iconColor="#ffffff"
                    />
                </View>
                <View style={{ marginTop: '20px' }}>
                    <Card
                        mode="elevated"
                        elevation={1}
                        delayLongPress={0}
                        accessible={false}
                        disabled={false}
                        style={{
                            marginRight: '20px',
                            backgroundColor: '#ffffff',
                            marginBottom: '20px',
                            marginLeft: '20px',
                        }}
                    >
                        <TouchableRipple
                            onPress={function () {
                                return this.onPress.apply(
                                    this,
                                    Array.prototype.slice.call(arguments).concat([
                                        {
                                            name: 'John',
                                            job: 'manager',
                                            gender: 'male',
                                            location: 'San Francisco',
                                        },
                                    ])
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
                                        paramStr:
                                            '{\n \t "name": "John",\n\t "job": "manager",\n\t "gender": "male",\n\t "location": "San Francisco"\n}',
                                        name: 'onPress',
                                        type: 'componentEvent',
                                        relatedEventName: 'onPress',
                                    },
                                ],
                            }}
                        >
                            <Card.Title
                                left={(size) =>
                                    ((__$$context) => (
                                        <View>
                                            <Image
                                                style={{
                                                    borderRadius: '25px',
                                                    width: '50px',
                                                    height: '50px',
                                                }}
                                                source={{
                                                    uri: '/gateway/console/api/v1/asset/expo_test/assets/image/test4.jpg?branchName=main',
                                                }}
                                            />
                                        </View>
                                    ))(__$$createChildContext(__$$context, { size }))
                                }
                                subtitleStyle={{ color: '#adaaaa' }}
                                _unsafe_MixedSetter_left_select="SlotSetter"
                                subtitle="Manager"
                                titleStyle={{ fontWeight: 700 }}
                                title="John"
                            />
                        </TouchableRipple>
                        <Card.Content _unsafe_MixedSetter_children_select="SlotSetter">
                            {() =>
                                ((__$$context) => (
                                    <View>
                                        <Chip
                                            delayLongPress={0}
                                            maxFontSizeMultiplier={0}
                                            compact={false}
                                            showSelectedOverlay={false}
                                            selectedColor="#ebebeb"
                                            mode="flat"
                                            background={{
                                                color: '#ebebeb',
                                                borderless: false,
                                                foreground: false,
                                                radius: 4,
                                            }}
                                            elevated={false}
                                            ellipsizeMode="head"
                                            disabled={false}
                                            style={{
                                                backgroundColor: '#ebebeb',
                                                borderRadius: '16px',
                                                width: '80px',
                                                marginBottom: '10px',
                                            }}
                                            showSelectedCheck={false}
                                            accessibilityLabel=""
                                            selected={false}
                                            closeIconAccessibilityLabel="Close"
                                        >
                                            {
                                                <Text style={{ color: '#d0021b', fontWeight: 400 }}>
                                                    Second
                                                </Text>
                                            }
                                        </Chip>
                                    </View>
                                ))(__$$createChildContext(__$$context, {}))
                            }
                        </Card.Content>
                    </Card>
                    <Card
                        mode="elevated"
                        elevation={1}
                        delayLongPress={0}
                        accessible={false}
                        disabled={false}
                        style={{
                            marginRight: '20px',
                            backgroundColor: '#ffffff',
                            marginBottom: '20px',
                            marginLeft: '20px',
                        }}
                    >
                        <TouchableRipple
                            onPress={function () {
                                return this.onPress.apply(
                                    this,
                                    Array.prototype.slice.call(arguments).concat([
                                        {
                                            name: 'Mike',
                                            job: 'developer',
                                            gender: 'male',
                                            location: 'LA',
                                        },
                                    ])
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
                                        paramStr:
                                            '{\n\t"name": "Mike",\n\t"job": "developer",\n\t"gender": "male",\n\t"location": "LA"\n}',
                                        name: 'onPress',
                                        type: 'componentEvent',
                                        relatedEventName: 'onPress',
                                    },
                                ],
                            }}
                        >
                            <Card.Title
                                left={(size) =>
                                    ((__$$context) => (
                                        <View>
                                            <Image
                                                style={{
                                                    borderRadius: '25px',
                                                    width: '50px',
                                                    height: '50px',
                                                }}
                                                source={{
                                                    uri: '/gateway/console/api/v1/asset/expo_test/assets/image/test3.jpg?branchName=main',
                                                }}
                                            />
                                        </View>
                                    ))(__$$createChildContext(__$$context, { size }))
                                }
                                subtitleStyle={{ color: '#adaaaa' }}
                                _unsafe_MixedSetter_left_select="SlotSetter"
                                subtitle="Developer"
                                titleStyle={{ fontWeight: 700 }}
                                title="Mike"
                            />
                        </TouchableRipple>
                        <Card.Content _unsafe_MixedSetter_children_select="SlotSetter">
                            {() =>
                                ((__$$context) => (
                                    <View style={{ flexDirection: 'row', display: 'flex' }}>
                                        <Chip
                                            delayLongPress={0}
                                            maxFontSizeMultiplier={0}
                                            compact={false}
                                            showSelectedOverlay={false}
                                            selectedColor="#ebebeb"
                                            mode="flat"
                                            background={{
                                                color: '#ebebeb',
                                                borderless: false,
                                                foreground: false,
                                                radius: 4,
                                            }}
                                            elevated={false}
                                            ellipsizeMode="head"
                                            disabled={false}
                                            style={{
                                                backgroundColor: '#ebebeb',
                                                borderRadius: '16px',
                                                marginBottom: '10px',
                                            }}
                                            showSelectedCheck={false}
                                            accessibilityLabel=""
                                            selected={false}
                                            closeIconAccessibilityLabel="Close"
                                        >
                                            {
                                                <Text style={{ color: '#d0021b', fontWeight: 400 }}>
                                                    Second
                                                </Text>
                                            }
                                        </Chip>
                                        <Chip
                                            delayLongPress={0}
                                            maxFontSizeMultiplier={0}
                                            compact={false}
                                            showSelectedOverlay={false}
                                            selectedColor="#ebebeb"
                                            mode="flat"
                                            background={{
                                                color: '#ebebeb',
                                                borderless: false,
                                                foreground: false,
                                                radius: 4,
                                            }}
                                            elevated={false}
                                            ellipsizeMode="head"
                                            disabled={false}
                                            style={{
                                                backgroundColor: '#ebebeb',
                                                borderRadius: '16px',
                                                marginBottom: '10px',
                                                marginLeft: '10px',
                                            }}
                                            showSelectedCheck={false}
                                            accessibilityLabel=""
                                            selected={false}
                                            closeIconAccessibilityLabel="Close"
                                        >
                                            {
                                                <Text style={{ color: '#1ccbf8', fontWeight: 400 }}>
                                                    Third
                                                </Text>
                                            }
                                        </Chip>
                                    </View>
                                ))(__$$createChildContext(__$$context, {}))
                            }
                        </Card.Content>
                    </Card>
                    <Card
                        mode="elevated"
                        elevation={1}
                        delayLongPress={0}
                        accessible={false}
                        disabled={false}
                        style={{
                            marginRight: '20px',
                            backgroundColor: '#ffffff',
                            marginBottom: '20px',
                            marginLeft: '20px',
                        }}
                    >
                        <TouchableRipple
                            onPress={function () {
                                return this.onPress.apply(
                                    this,
                                    Array.prototype.slice.call(arguments).concat([
                                        {
                                            name: 'Tommy shelby',
                                            job: 'developer',
                                            gender: 'male',
                                            location: 'Birmingham',
                                        },
                                    ])
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
                                        paramStr:
                                            '{\n\t"name": "Tommy shelby",\n\t"job": "developer",\n\t"gender": "male",\n\t"location": "Birmingham"\n}',
                                        name: 'onPress',
                                        type: 'componentEvent',
                                        relatedEventName: 'onPress',
                                    },
                                ],
                            }}
                        >
                            <Card.Title
                                left={(size) =>
                                    ((__$$context) => (
                                        <View>
                                            <Image
                                                style={{
                                                    borderRadius: '25px',
                                                    width: '50px',
                                                    height: '50px',
                                                }}
                                                source={{
                                                    uri: '/gateway/console/api/v1/asset/expo_test/assets/image/test2.jpg?branchName=main',
                                                }}
                                            />
                                        </View>
                                    ))(__$$createChildContext(__$$context, { size }))
                                }
                                subtitleStyle={{ color: '#adaaaa' }}
                                _unsafe_MixedSetter_left_select="SlotSetter"
                                subtitle="Developer"
                                titleStyle={{ fontWeight: 700 }}
                                title="Tommy shelby"
                            />
                        </TouchableRipple>
                        <Card.Content _unsafe_MixedSetter_children_select="SlotSetter">
                            {() =>
                                ((__$$context) => (
                                    <View style={{ flexDirection: 'row', display: 'flex' }}>
                                        <Chip
                                            delayLongPress={0}
                                            maxFontSizeMultiplier={0}
                                            compact={false}
                                            showSelectedOverlay={false}
                                            selectedColor="#ebebeb"
                                            mode="flat"
                                            background={{
                                                color: '#ebebeb',
                                                borderless: false,
                                                foreground: false,
                                                radius: 4,
                                            }}
                                            elevated={false}
                                            ellipsizeMode="head"
                                            disabled={false}
                                            style={{
                                                backgroundColor: '#ebebeb',
                                                borderRadius: '16px',
                                                marginBottom: '10px',
                                            }}
                                            showSelectedCheck={false}
                                            accessibilityLabel=""
                                            selected={false}
                                            closeIconAccessibilityLabel="Close"
                                        >
                                            {
                                                <Text style={{ color: '#1ccbf8', fontWeight: 400 }}>
                                                    Third
                                                </Text>
                                            }
                                        </Chip>
                                    </View>
                                ))(__$$createChildContext(__$$context, {}))
                            }
                        </Card.Content>
                    </Card>
                    <Card
                        mode="elevated"
                        elevation={1}
                        delayLongPress={0}
                        accessible={false}
                        disabled={false}
                        style={{
                            marginRight: '20px',
                            backgroundColor: '#ffffff',
                            marginBottom: '20px',
                            marginLeft: '20px',
                        }}
                    >
                        <TouchableRipple
                            onPress={function () {
                                return this.onPress.apply(
                                    this,
                                    Array.prototype.slice.call(arguments).concat([
                                        {
                                            name: 'Path finder',
                                            job: 'QA',
                                            gender: 'female',
                                            location: 'New Jersey',
                                        },
                                    ])
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
                                        paramStr:
                                            '{\n\t"name": "Path finder",\n\t"job": "QA",\n\t"gender": "female",\n\t"location": "New Jersey"\n}',
                                        name: 'onPress',
                                        type: 'componentEvent',
                                        relatedEventName: 'onPress',
                                    },
                                ],
                            }}
                        >
                            <Card.Title
                                left={(size) =>
                                    ((__$$context) => (
                                        <View>
                                            <Image
                                                style={{
                                                    borderRadius: '25px',
                                                    width: '50px',
                                                    height: '50px',
                                                }}
                                                source={{
                                                    uri: '/gateway/console/api/v1/asset/expo_test/assets/image/test1.jpg?branchName=main',
                                                }}
                                            />
                                        </View>
                                    ))(__$$createChildContext(__$$context, { size }))
                                }
                                subtitleStyle={{ color: '#adaaaa' }}
                                _unsafe_MixedSetter_left_select="SlotSetter"
                                subtitle="QA"
                                titleStyle={{ fontWeight: 700 }}
                                title="Path finder"
                            />
                        </TouchableRipple>
                        <Card.Content _unsafe_MixedSetter_children_select="SlotSetter">
                            {() =>
                                ((__$$context) => (
                                    <View style={{ marginBottom: '10px' }}>
                                        <Text style={{ fontSize: '14px', fontWeight: 600 }}>
                                            (Add some tags!)
                                        </Text>
                                    </View>
                                ))(__$$createChildContext(__$$context, {}))
                            }
                        </Card.Content>
                    </Card>
                    <Card
                        mode="elevated"
                        elevation={1}
                        delayLongPress={0}
                        accessible={false}
                        disabled={false}
                        style={{
                            marginRight: '20px',
                            backgroundColor: '#ffffff',
                            marginBottom: '20px',
                            marginLeft: '20px',
                        }}
                    >
                        <TouchableRipple
                            onPress={function () {
                                return this.onPress.apply(
                                    this,
                                    Array.prototype.slice.call(arguments).concat([
                                        {
                                            name: 'Tony ma',
                                            job: 'Boss',
                                            gender: 'male',
                                            location: 'Singapore',
                                        },
                                    ])
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
                                        paramStr:
                                            '{\n\t"name": "Tony ma",\n\t"job": "Boss",\n\t"gender": "male",\n\t"location": "Singapore"\n}',
                                        name: 'onPress',
                                        type: 'componentEvent',
                                        relatedEventName: 'onPress',
                                    },
                                ],
                            }}
                        >
                            <Card.Title
                                left={(size) =>
                                    ((__$$context) => (
                                        <View>
                                            <Image
                                                style={{
                                                    borderRadius: '25px',
                                                    width: '50px',
                                                    height: '50px',
                                                }}
                                                source={{
                                                    uri: '/gateway/console/api/v1/asset/expo_test/assets/image/test1.jpg?branchName=main',
                                                }}
                                            />
                                        </View>
                                    ))(__$$createChildContext(__$$context, { size }))
                                }
                                subtitleStyle={{ color: '#adaaaa' }}
                                _unsafe_MixedSetter_left_select="SlotSetter"
                                subtitle="Boss"
                                titleStyle={{ fontWeight: 700 }}
                                title="Tony ma"
                            />
                        </TouchableRipple>
                        <Card.Content _unsafe_MixedSetter_children_select="SlotSetter">
                            {() =>
                                ((__$$context) => (
                                    <View style={{ marginBottom: '10px' }}>
                                        <Text style={{ fontSize: '14px', fontWeight: 600 }}>
                                            (Add some tags!)
                                        </Text>
                                    </View>
                                ))(__$$createChildContext(__$$context, {}))
                            }
                        </Card.Content>
                    </Card>
                    <Card
                        mode="elevated"
                        elevation={1}
                        delayLongPress={0}
                        accessible={false}
                        disabled={false}
                        style={{
                            marginRight: '20px',
                            backgroundColor: '#ffffff',
                            marginBottom: '20px',
                            marginLeft: '20px',
                        }}
                    >
                        <TouchableRipple
                            onPress={function () {
                                return this.onPress.apply(
                                    this,
                                    Array.prototype.slice.call(arguments).concat([
                                        {
                                            name: 'Ding zhen',
                                            job: 'Security staff',
                                            gender: 'male',
                                            location: 'Li tang',
                                        },
                                    ])
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
                                        paramStr:
                                            '{\n\t"name": "Ding zhen",\n\t"job": "Security staff",\n\t"gender": "male",\n\t"location": "Li tang"\n}',
                                        name: 'onPress',
                                        type: 'componentEvent',
                                        relatedEventName: 'onPress',
                                    },
                                ],
                            }}
                        >
                            <Card.Title
                                left={(size) =>
                                    ((__$$context) => (
                                        <View>
                                            <Image
                                                style={{
                                                    borderRadius: '25px',
                                                    width: '50px',
                                                    height: '50px',
                                                }}
                                                source={{
                                                    uri: '/gateway/console/api/v1/asset/expo_test/assets/image/021C036C5A9FAD612DA19A8D62D74857.jpg?branchName=main',
                                                }}
                                            />
                                        </View>
                                    ))(__$$createChildContext(__$$context, { size }))
                                }
                                subtitleStyle={{ color: '#adaaaa' }}
                                _unsafe_MixedSetter_left_select="SlotSetter"
                                subtitle="Security staff"
                                titleStyle={{ fontWeight: 700 }}
                                title="Ding zhen"
                            />
                        </TouchableRipple>
                        <Card.Content _unsafe_MixedSetter_children_select="SlotSetter">
                            {() =>
                                ((__$$context) => (
                                    <View style={{ flexDirection: 'row', display: 'flex' }}>
                                        <Chip
                                            delayLongPress={0}
                                            maxFontSizeMultiplier={0}
                                            compact={false}
                                            showSelectedOverlay={false}
                                            icon="plus"
                                            closeIcon=""
                                            selectedColor="#ebebeb"
                                            mode="flat"
                                            background={{
                                                color: '#ebebeb',
                                                borderless: false,
                                                foreground: false,
                                                radius: 4,
                                            }}
                                            elevated={false}
                                            ellipsizeMode="head"
                                            disabled={false}
                                            style={{
                                                backgroundColor: '#ebebeb',
                                                borderRadius: '16px',
                                                marginBottom: '10px',
                                            }}
                                            showSelectedCheck={false}
                                            accessibilityLabel=""
                                            selected={false}
                                            closeIconAccessibilityLabel="Close"
                                        >
                                            {
                                                <Text style={{ color: '#7ed321', fontWeight: 400 }}>
                                                    Add
                                                </Text>
                                            }
                                        </Chip>
                                    </View>
                                ))(__$$createChildContext(__$$context, {}))
                            }
                        </Card.Content>
                    </Card>
                    <FABGroup
                        toggleStackOnLongPress={false}
                        enableLongPressWhenStackOpened={false}
                        visible={true}
                        icon="plus"
                        style={{ position: 'fixed', zIndex: '9999' }}
                        onStateChange={function () {
                            return this.open.apply(
                                this,
                                Array.prototype.slice.call(arguments).concat([])
                            );
                        }.bind(this)}
                        actions={[{ icon: 'plus' }]}
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
                                    relatedEventName: 'open',
                                },
                            ],
                        }}
                    />
                </View>
            </ReactNativeView>
        );
    }
}

export default List$$Page;

function __$$eval(expr: any) {
    try {
        return expr();
    } catch (error) {
    }
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
