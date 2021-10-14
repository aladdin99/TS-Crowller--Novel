"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var superagent_1 = __importDefault(require("superagent"));
/**
 * 基础类
 */
var CrowllerBase = /** @class */ (function () {
    function CrowllerBase() {
    }
    /**
     * 获取本地已存储的 JSON 内容
     */
    CrowllerBase.prototype.getJsonContent = function (filtePath) {
        var fileContent = {};
        if (fs_1.default.existsSync(filtePath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(filtePath, 'utf-8'));
        }
        return fileContent;
    };
    /**
     * 存储到到本地 JSON 文件中
     * 路径下的文件夹命名不使用英文点号 .
     */
    CrowllerBase.prototype.saveJsonContent = function (filePath, contentJson) {
        // 截取路径中的目录
        var cataloguePath = "";
        var rootPath = filePath.split("\\");
        if (rootPath[rootPath.length - 1].includes('.')) {
            rootPath.splice(rootPath.length - 1, 1);
            cataloguePath = rootPath.join('\\');
        }
        // 查看路径是否存在
        if (!fs_1.default.existsSync(filePath)) {
            // 查看目录是否存在
            fs_1.default.readdir(cataloguePath, function (error) {
                if (error === null && typeof (error) == "object") {
                    fs_1.default.writeFileSync(filePath, contentJson);
                }
                else {
                    fs_1.default.mkdir(cataloguePath, function (err) {
                        console.log(typeof (err));
                        console.log(cataloguePath);
                        console.log(err);
                        if (err === null && typeof (err) == "object") {
                            console.log("目录创建成功咯");
                            fs_1.default.writeFileSync(filePath, contentJson);
                            return;
                        }
                        console.log("目录创建失败啦");
                    });
                }
            });
        }
        else {
            fs_1.default.writeFileSync(filePath, contentJson);
        }
    };
    /**
     * 获取HTML文档API
     */
    CrowllerBase.prototype.getHtmlDom = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, superagent_1.default.get(url)];
                    case 1: return [4 /*yield*/, (_a.sent()).text];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return CrowllerBase;
}());
exports.default = CrowllerBase;
