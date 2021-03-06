import { SegwitP2SHWallet } from '../../class';
import React, { Component } from 'react';
import { ActivityIndicator, Dimensions, View } from 'react-native';
import {
  BlueSpacing,
  BlueButton,
  SafeBlueArea,
  BlueCard,
  BlueText,
  BlueHeaderDefaultSub,
  BlueSpacing40,
} from '../../BlueComponents';
import PropTypes from 'prop-types';
let EV = require('../../events');
let BlueApp = require('../../BlueApp');
let loc = require('../../loc');
const { height, width } = Dimensions.get('window');
const aspectRatio = height / width;
let isIpad;
if (aspectRatio > 1.6) {
  isIpad = false;
} else {
  isIpad = true;
}

export default class WalletsAdd extends Component {
  static navigationOptions = {
    tabBarVisible: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  async componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <SafeBlueArea
        forceInset={{ horizontal: 'always' }}
        style={{ flex: 1, paddingTop: 40 }}
      >
        {(() => {
          if (isIpad) {
            return <BlueSpacing40 />;
          } else {
            return <BlueSpacing />;
          }
        })()}
        <BlueHeaderDefaultSub
          leftText={loc.wallets.add.title}
          onClose={() => this.props.navigation.goBack()}
        />

        <BlueCard>
          <BlueText>{loc.wallets.add.description}</BlueText>

          <BlueButton
            large
            icon={{
              name: 'qrcode',
              type: 'font-awesome',
              color: BlueApp.settings.buttonTextColor,
            }}
            title={loc.wallets.add.scan}
            onPress={() => {
              this.props.navigation.navigate('ScanQrWif');
            }}
          />

          <BlueButton
            large
            icon={{
              name: 'bitcoin',
              type: 'font-awesome',
              color: BlueApp.settings.buttonTextColor,
            }}
            title={loc.wallets.add.create}
            onPress={() => {
              this.props.navigation.goBack();
              setTimeout(async () => {
                let w = new SegwitP2SHWallet();
                w.setLabel(loc.wallets.add.label_new_segwit);
                w.generate();
                BlueApp.wallets.push(w);
                await BlueApp.saveToDisk();
                EV(EV.enum.WALLETS_COUNT_CHANGED);
              }, 1);
            }}
          />
        </BlueCard>
      </SafeBlueArea>
    );
  }
}

WalletsAdd.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }),
};
