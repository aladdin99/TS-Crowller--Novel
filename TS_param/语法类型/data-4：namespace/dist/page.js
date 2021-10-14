"use strict";
var Components;
(function (Components) {
    // 支持导出子命名空间
    var SubComponents;
    (function (SubComponents) {
        var Test = /** @class */ (function () {
            function Test() {
            }
            return Test;
        }());
    })(SubComponents = Components.SubComponents || (Components.SubComponents = {}));
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement('div');
            elem.innerText = "This is Footer";
            document.body.appendChild(elem);
        }
        return Header;
    }());
    Components.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement('div');
            elem.innerText = "This is Content";
            document.body.appendChild(elem);
        }
        return Content;
    }());
    Components.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerText = "This is Footer";
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
// 命名空间引用的方式，三个反斜杠开头。
///<reference path="./components.ts"/>
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            this.user = {
                name: '123'
            };
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
