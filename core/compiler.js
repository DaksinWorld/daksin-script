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
exports.__esModule = true;
exports.main = void 0;
var fs = require('fs');
var _a = require('fs/promises'), readFile = _a.readFile, writeFile = _a.writeFile;
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var files, i, file, findFunctions, firstStage, secondStage, thirdStage, s4, s5, s6, s7, nameForFile;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (fs.existsSync('./res')) {
                        fs.rmSync('./res', { recursive: true, force: true });
                    }
                    files = fs.readdirSync('./files', { withFileTypes: true });
                    fs.mkdirSync('./res');
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < files.length)) return [3 /*break*/, 5];
                    return [4 /*yield*/, readFile("./files/" + files[i].name, 'utf-8')];
                case 2:
                    file = _a.sent();
                    findFunctions = file.match(/function/gm);
                    if (findFunctions) {
                        console.log('u have unexpected code');
                    }
                    firstStage = file.replace(/func/gm, 'function');
                    secondStage = firstStage.replace(/rtn/gm, 'return');
                    thirdStage = secondStage.replace(/\elif/gm, 'else if');
                    s4 = thirdStage.replace(/cl\(/gm, 'console.log(');
                    s5 = s4.replace(/\.dkjs/gm, '');
                    s6 = s5.replace(/\ ->/gm, ':');
                    s7 = s6.replace(/\|or\|/gm, '|');
                    nameForFile = files[i].name.replace(/\.dkjs/gm, '.ts');
                    return [4 /*yield*/, writeFile("./res/" + nameForFile, s7, 'utf-8', function (err) {
                            if (err)
                                throw err;
                            console.log('done');
                        })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.main = main;
main();
