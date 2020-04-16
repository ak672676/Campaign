"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _web = require("../etherium/web3");

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require("semantic-ui-react");

var _campaign = require("../etherium/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\AMIT\\Desktop\\BlockChain\\kickstart\\components\\RequestRow.js";


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);
              _context.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);
              _context2.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context2.sent;

              console.log(accounts);
              _context2.next = 7;
              return campaign.methods.finalizeRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: "render",
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          approversCount = _props.approversCount;

      return _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _web2.default.utils.fromWei(request.value, "ether")), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, request.recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, request.approvalCount, "/", approversCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: "green", basic: true, onClick: this.onApprove, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "Approve")), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: "teal", basic: true, onClick: this.onFinalize, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "Finalize")));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ3ZWIzIiwiVGFibGUiLCJCdXR0b24iLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJvbkFwcHJvdmUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwib25GaW5hbGl6ZSIsImNvbnNvbGUiLCJsb2ciLCJmaW5hbGl6ZVJlcXVlc3QiLCJSb3ciLCJDZWxsIiwicmVxdWVzdCIsImFwcHJvdmVyc0NvdW50IiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSIsInJlY2lwaWVudCIsImFwcHJvdmFsQ291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTzs7QUFDaEIsQUFBTyxBQUFjOzs7Ozs7Ozs7SSxBQUNmOzs7Ozs7Ozs7Ozs7Ozs7b04sQUFDSixxRkFBWSxtQkFBQTtvQkFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFDSjtBQURJLHlCQUNPLHdCQUFTLE1BQUEsQUFBSyxNQURyQixBQUNPLEFBQW9COzhCQUQzQjtxQkFFYSxjQUFBLEFBQUssSUFGbEIsQUFFYSxBQUFTOztpQkFBMUI7QUFGSSxrQ0FBQTs4QkFBQTs4QkFJSixBQUFTLFFBQVQsQUFBaUIsZUFBZSxNQUFBLEFBQUssTUFBckMsQUFBMkMsSUFBM0MsQUFBK0M7c0JBQzdDLFNBTEUsQUFJSixBQUFvRCxBQUNsRCxBQUFTO0FBRHlDLEFBQ3hELGVBREk7O2lCQUpJO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0EsZUFRWixBLHNGQUFhLG9CQUFBO29CQUFBO3NFQUFBO2tCQUFBOzZDQUFBO2lCQUNMO0FBREsseUJBQ00sd0JBQVMsTUFBQSxBQUFLLE1BRHBCLEFBQ00sQUFBb0I7K0JBRDFCO3FCQUVZLGNBQUEsQUFBSyxJQUZqQixBQUVZLEFBQVM7O2lCQUExQjtBQUZLLG1DQUdYOztzQkFBQSxBQUFRLElBSEcsQUFHWCxBQUFZOytCQUhEOzhCQUlMLEFBQVMsUUFBVCxBQUFpQixnQkFBZ0IsTUFBQSxBQUFLLE1BQXRDLEFBQTRDLElBQTVDLEFBQWdEO3NCQUM5QyxTQUxHLEFBSUwsQUFBcUQsQUFDbkQsQUFBUztBQUQwQyxBQUN6RCxlQURJOztpQkFKSztpQkFBQTsrQkFBQTs7QUFBQTttQkFBQTtBOzs7Ozs2QkFRSjtVQUFBLEFBQ0MsTUFERCxBQUNlLHVCQURmLEFBQ0M7VUFERCxBQUNNLE9BRE4sQUFDZSx1QkFEZixBQUNNO21CQUMyQixLQUZqQyxBQUVzQztVQUZ0QyxBQUVDLFlBRkQsQUFFQztVQUZELEFBRUssaUJBRkwsQUFFSztVQUZMLEFBRWMsd0JBRmQsQUFFYyxBQUNyQjs7NkJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxTQURGLEFBQ0UsQUFDQSxxQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxpQkFGRixBQUVFLEFBQWUsQUFDZiw4QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSx1QkFBTyxBQUFLLE1BQUwsQUFBVyxRQUFRLFFBQW5CLEFBQTJCLE9BSHBDLEFBR0UsQUFBTyxBQUFrQyxBQUN6QywyQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxpQkFKRixBQUlFLEFBQWUsQUFDZiw0QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxpQkFBQSxBQUNXLGVBQWdCLEtBTjdCLEFBS0UsQUFHQSxpQ0FBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLE9BQXRCLE1BQTRCLFNBQVMsS0FBckMsQUFBMEM7b0JBQTFDO3NCQUFBO0FBQUE7U0FUSixBQVFFLEFBQ0UsQUFJRiw2QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxRQUFPLE9BQXJCLE1BQTJCLFNBQVMsS0FBcEMsQUFBeUM7b0JBQXpDO3NCQUFBO0FBQUE7U0FmTixBQUNFLEFBYUUsQUFDRSxBQU1QOzs7OztBQXpDc0IsQSxBQTRDekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9BTUlUL0Rlc2t0b3AvQmxvY2tDaGFpbi9raWNrc3RhcnQifQ==