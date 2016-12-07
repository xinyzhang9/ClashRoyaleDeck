'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.generateIcon = generateIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('./icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateIcon(network) {
  if (!_icons2.default[network.toLowerCase()]) {
    throw new Error('invalid network name for a social icon');
  }

  var iconConfig = _icons2.default[network.toLowerCase()];

  return _react2.default.createClass({
    propTypes: {
      className: _react2.default.PropTypes.string,
      iconBgStyle: _react2.default.PropTypes.object,
      logoFillColor: _react2.default.PropTypes.string,
      round: _react2.default.PropTypes.bool,
      size: _react2.default.PropTypes.number
    },

    getDefaultProps: function getDefaultProps() {
      return {
        logoFillColor: 'white',
        size: 64
      };
    },
    render: function render() {
      var _props = this.props,
          className = _props.className,
          iconBgStyle = _props.iconBgStyle,
          logoFillColor = _props.logoFillColor,
          round = _props.round,
          size = _props.size;


      var baseStyle = {
        width: size,
        height: size
      };

      var classes = 'social-icon social-icon--' + network + ' ' + (className || '');

      var finalIconBgStyle = (0, _extends3.default)({}, iconBgStyle);

      return _react2.default.createElement(
        'div',
        { style: baseStyle },
        _react2.default.createElement(
          'svg',
          {
            viewBox: '0 0 64 64',
            fill: logoFillColor,
            width: size,
            height: size,
            className: classes },
          _react2.default.createElement(
            'g',
            null,
            !round ? _react2.default.createElement('rect', {
              width: '64',
              height: '64',
              fill: iconConfig.color,
              style: finalIconBgStyle }) : _react2.default.createElement('circle', {
              cx: '32',
              cy: '32',
              r: '31',
              fill: iconConfig.color,
              style: finalIconBgStyle })
          ),
          _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: iconConfig.icon })
          )
        )
      );
    }
  });
}