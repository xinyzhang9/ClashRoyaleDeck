'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwitterShareCount = exports.PinterestShareCount = exports.GooglePlusShareCount = exports.LinkedinShareCount = exports.FacebookShareCount = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _shareCountGetters = require('./share-count-getters');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocialMediaShareCount = _react2.default.createClass({
  displayName: 'SocialMediaShareCount',

  propTypes: {
    children: _react2.default.PropTypes.func,
    className: _react2.default.PropTypes.string,
    getCount: _react2.default.PropTypes.func,
    url: _react2.default.PropTypes.string.isRequired
  },

  getInitialState: function getInitialState() {
    return {
      count: 0
    };
  },
  componentDidMount: function componentDidMount() {
    this.updateCount(this.props.url);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.url !== this.props.url) {
      this.updateCount(nextProps.url);
    }
  },
  updateCount: function updateCount(url) {
    var _this = this;

    if (this.props.getCount) {
      this.setState({
        isLoading: true
      });

      this.props.getCount(url, function (count) {
        if (_this.isMounted()) {
          _this.setState({
            count: count,
            isLoading: false
          });
        }
      });
    }
  },
  render: function render() {
    var _state = this.state,
        count = _state.count,
        isLoading = _state.isLoading;
    var _props = this.props,
        children = _props.children,
        className = _props.className;


    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('SocialMediaShareCount', className) },
      !isLoading && children(count || 0)
    );
  }
}); /* eslint-disable react/no-multi-comp */


SocialMediaShareCount.defaultProps = {
  children: function children(shareCount) {
    return shareCount;
  }
};

function shareCountFactory(getCount) {
  return function (props) {
    return _react2.default.createElement(SocialMediaShareCount, (0, _extends3.default)({ getCount: getCount }, props));
  };
}

var FacebookShareCount = exports.FacebookShareCount = shareCountFactory(_shareCountGetters.getFacebookShareCount);
var LinkedinShareCount = exports.LinkedinShareCount = shareCountFactory(_shareCountGetters.getLinkedinShareCount);
var GooglePlusShareCount = exports.GooglePlusShareCount = shareCountFactory(_shareCountGetters.getGooglePlusShareCount);
var PinterestShareCount = exports.PinterestShareCount = shareCountFactory(_shareCountGetters.getPinterestShareCount);
var TwitterShareCount = exports.TwitterShareCount = function TwitterShareCount() {
  throw new Error('TwitterShareCount was removed in version 1.3.0 because' + 'the Twitter API was shut down and there is no replacement. Please ' + 'remove it from your code.');
};