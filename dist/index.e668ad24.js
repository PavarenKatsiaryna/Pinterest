// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jU1rT":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "710c6a17e668ad24";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3LleC":[function(require,module,exports) {
var _boardsJs = require("./boards.js");
var _remoteJs = require("./remote.js");
var _headerJs = require("./header.js");
(0, _headerJs.createHeader)();
(0, _boardsJs.Boards).getFromLocalStorage();
if ((0, _boardsJs.Boards).getMainBoard().length == 0) (0, _remoteJs.getCards)().then((cards)=>{
    (0, _headerJs.createCardsGrid)(cards);
    (0, _boardsJs.Boards).setToLocalStorage(cards, "cardArray");
    (0, _boardsJs.Boards).setMainBoard(cards);
});
else (0, _headerJs.createCardsGrid)((0, _boardsJs.Boards).getMainBoard());
 //Данный код проверяет наличие данных (карточек) на основной доске.
 // Если данных нет, он загружает их асинхронно, отображает и сохраняет
 // их в локальное хранилище. Если данные уже есть, он просто отображает их.

},{"./boards.js":"aLNvh","./remote.js":"jmspP","./header.js":"5C8fu"}],"aLNvh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Boards", ()=>Boards);
const boards = {
    0: [],
    1: [],
    2: [],
    3: []
};
let activeBoardIndex = 0;
// Методы
function getMainBoard() {
    return boards[0];
}
function setMainBoard(data) {
    boards[0] = data;
}
function getFromLocalStorage() {
    boards[0] = JSON.parse(localStorage.getItem("cardArray") ?? "[]");
    boards[1] = JSON.parse(localStorage.getItem("cardArrayBoard1") ?? "[]");
    boards[2] = JSON.parse(localStorage.getItem("cardArrayBoard2") ?? "[]");
    boards[3] = JSON.parse(localStorage.getItem("cardArrayBoard3") ?? "[]");
}
function setToLocalStorage(array, name) {
    localStorage.setItem(name, JSON.stringify(array));
}
// Добавляет карточку на выбранную доску
function addCardToBoard(cardData, boardIndex) {
    boards[boardIndex].push(cardData);
    setToLocalStorage(boards[0], "cardArray");
    setToLocalStorage(boards[boardIndex], `cardArrayBoard${boardIndex}`);
}
function removeCardFromBoard(cardObj, boardIndex) {
    const boardCards = boards[boardIndex];
    // Ищем индекс карточки с указанным ID
    const cardIndex = boardCards.findIndex((card)=>card.id === cardObj.data.id);
    // Если карточка найдена, удаляем её
    if (cardIndex !== -1) {
        cardObj.view.remove();
        cardObj.view = null;
        boardCards.splice(cardIndex, 1);
        setToLocalStorage(boards[0], "cardArray");
        setToLocalStorage(boardCards, `cardArrayBoard${boardIndex}`);
    }
}
function getActive() {
    return activeBoardIndex;
}
function setActive(index) {
    activeBoardIndex = index;
}
const Boards = {
    boards,
    getFromLocalStorage,
    setToLocalStorage,
    addCardToBoard,
    getActive,
    setActive,
    getMainBoard,
    setMainBoard,
    removeCardFromBoard
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jmspP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCards", ()=>getCards);
async function getCards() {
    const response = await fetch("https://67376867aafa2ef22233bb01.mockapi.io/el/Pinterest");
    return await response.json();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5C8fu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createHeader", ()=>createHeader);
parcelHelpers.export(exports, "createCardsGrid", ()=>createCardsGrid);
var _boardsJs = require("./boards.js");
var _elementsJs = require("./elements.js");
var _cardViewJs = require("./card-view.js");
//=================================
// Заголовок страницы
function searchByLetters(searchTerm, cards) {
    return cards.filter((card)=>card.hashtag.toLowerCase().includes(searchTerm.toLowerCase()));
}
function updateSearchResults(results) {
    let main = document.querySelector("main");
    main.innerHTML = ""; // Очищаем содержимое main
    if (results.length === 0) {
        // Если результаты пусты, добавляем картинку
        let message = document.createElement("div");
        message.className = "not_found";
        main.appendChild(message);
    } else // Если есть результаты, создаем карточки
    createCardsGrid(results);
}
// Создает строку поиска
function createSearchBar(parent) {
    const inputNav = (0, _elementsJs.createElement)({
        tag: "input",
        className: [
            "navigation__input"
        ],
        text: undefined,
        attribute: {
            type: "search",
            placeholder: "\u041F\u043E\u0438\u0441\u043A..."
        },
        place: parent
    });
    inputNav.addEventListener("input", function(event) {
        const searchTerm = event.target.value.toLowerCase();
        // поиск и отображение результатов
        const boards = (0, _boardsJs.Boards).boards;
        const active = (0, _boardsJs.Boards).getActive();
        const board = active !== -1 ? boards[active] : (0, _boardsJs.Boards).getMainBoard();
        const searchResults = searchByLetters(searchTerm, board);
        updateSearchResults(searchResults);
    });
}
// Создает элементы выпадающего списка досок
function createBoardsDropdownOptions(dropdown) {
    const nameBoards = [
        "\u0414\u043E\u0441\u043A\u0430 0",
        "\u0414\u043E\u0441\u043A\u0430 1",
        "\u0414\u043E\u0441\u043A\u0430 2",
        "\u0414\u043E\u0441\u043A\u0430 3"
    ];
    for(let j = 1; j < nameBoards.length; j++){
        const linkBoard = (0, _elementsJs.createElement)({
            tag: "a",
            className: [
                "Boards__item"
            ],
            text: nameBoards[j],
            place: dropdown
        });
        linkBoard.addEventListener("click", function(event) {
            console.log("\u0412\u044B\u0431\u0440\u0430\u043D\u0430 \u0434\u043E\u0441\u043A\u0430:", nameBoards[j]);
            let main = document.querySelector("main");
            main.innerHTML = "";
            (0, _boardsJs.Boards).setActive(j);
            createCardsGrid((0, _boardsJs.Boards).boards[j]);
        });
    }
}
// Создает выпадающие список досок
function createBoardsDropdown(parent) {
    const dropdownMenu = (0, _elementsJs.createElement)({
        tag: "div",
        className: [
            "Boards__menu"
        ],
        place: parent
    });
    createBoardsDropdownOptions(dropdownMenu);
    return dropdownMenu;
}
// Создает заголовок страницы
function createHeader() {
    const header = (0, _elementsJs.createElement)({
        tag: "header",
        className: [
            "header"
        ],
        place: root
    });
    const headerContainer = (0, _elementsJs.createElement)({
        tag: "div",
        className: [
            "header__container"
        ],
        place: header
    });
    const navBlock = (0, _elementsJs.createElement)({
        tag: "nav",
        className: [
            "navigation"
        ],
        place: headerContainer
    });
    const linkNav = (0, _elementsJs.createElement)({
        tag: "div",
        className: [
            "link__nav"
        ],
        place: navBlock
    });
    const linkNavSpan = (0, _elementsJs.createElement)({
        tag: "span",
        className: [
            "link__nav-text"
        ],
        text: "Pinterest",
        place: linkNav
    });
    // Банер страницы
    const imgLink = (0, _elementsJs.createElement)({
        tag: "img",
        className: [
            "link__img"
        ],
        attribute: {
            src: "https://i.pinimg.com/280x280_RS/f6/e9/3a/f6e93a06b500b2d87ffd32e1f56f7c6f.jpg",
            alt: "Pinterest logo"
        },
        place: linkNav
    });
    // при загружает грид с главной страницы
    imgLink.addEventListener("click", function() {
        (0, _boardsJs.Boards).setActive(0);
        createCardsGrid((0, _boardsJs.Boards).getMainBoard());
    });
    const divInput = (0, _elementsJs.createElement)({
        tag: "div",
        className: [
            "div__input-icon"
        ],
        place: navBlock
    });
    createSearchBar(divInput);
    const divButton = (0, _elementsJs.createElement)({
        tag: "div",
        className: [
            "div__button"
        ],
        place: divInput
    });
    const buttonBoards = (0, _elementsJs.createElement)({
        tag: "a",
        attribute: {
            href: "#"
        },
        className: [
            "button-boards"
        ],
        place: divButton
    });
    //при клике одновременно срабатывает бургер "Х" и выпадает меню досок
    //и при клике на любую из досок модальное окно закрывается и бургер
    //возвращается в исходное положение
    buttonBoards.addEventListener("click", ()=>{
        const dropdownMenu = divButton.querySelector(".Boards__menu");
        dropdownMenu.classList.toggle("active");
        buttonBoards.classList.toggle("active-burger");
        if (dropdownMenu.classList.contains("active")) {
            const allBoardsItems = dropdownMenu.querySelectorAll(".Boards__item");
            allBoardsItems.forEach((item)=>{
                item.addEventListener("click", ()=>{
                    dropdownMenu.classList.remove("active");
                    buttonBoards.classList.remove("active-burger");
                });
            });
        }
    });
    const spanButton = (0, _elementsJs.createElement)({
        tag: "span",
        className: [
            "button-boards_span"
        ],
        text: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u043E\u0441\u043A\u0443",
        place: buttonBoards
    });
    createBoardsDropdown(divButton);
}
// Создает список доступных досок
function createBoardsOptions(parent, cardData, nameBoards) {
    for(let j = 1; j <= nameBoards.length; j++){
        const linkBoard = (0, _elementsJs.createElement)({
            tag: "a",
            className: [
                "list__item"
            ],
            attribute: {
                href: "#"
            },
            text: nameBoards[j],
            place: parent
        });
        linkBoard.addEventListener("click", function() {
            const index = (0, _boardsJs.Boards).getMainBoard().findIndex((item)=>item.id === cardData.id);
            if (index !== -1) {
                (0, _boardsJs.Boards).getMainBoard().splice(index, 1);
                addCardToBoard(cardData, j);
            }
            cardData.view.remove();
            cardData.view = null;
        });
    }
}
// Создает сетку карточек
function createCardsGrid(cards) {
    const oldMain = document.querySelector("main");
    if (oldMain) oldMain.remove();
    const main = (0, _elementsJs.createElement)({
        tag: "main",
        className: [
            "main"
        ],
        place: root
    });
    const mainContainer = (0, _elementsJs.createElement)({
        tag: "div",
        className: [
            "main__container"
        ],
        place: main
    });
    for (const cardData of cards){
        const card = {
            data: cardData
        };
        card.view = (0, _cardViewJs.createCardView)(card);
        card.pin = (0, _cardViewJs.createPinView)(card);
        mainContainer.append(card.view);
    }
}

},{"./boards.js":"aLNvh","./elements.js":"kF6BV","./card-view.js":"eVwLY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kF6BV":[function(require,module,exports) {
// Создает элемент с указанными свойствами
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createElement", ()=>createElement);
parcelHelpers.export(exports, "createButtonElement", ()=>createButtonElement);
function createElement({ tag, className, place, text, attribute }) {
    const someElem = document.createElement(tag);
    className.forEach((element)=>{
        someElem.classList.add(element);
    });
    if (text) someElem.innerText = text;
    if (attribute) for(key in attribute)someElem.setAttribute(`${key}`, `${attribute[key]}`);
    if (place) place.append(someElem);
    return someElem;
}
function createButtonElement(label, klass, id, parent) {
    const button = createElement({
        tag: "button",
        className: [
            klass
        ],
        attribute: {
            id: [
                id
            ]
        },
        place: parent,
        text: label
    });
    return button;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eVwLY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createCardView", ()=>createCardView);
parcelHelpers.export(exports, "createPinView", ()=>createPinView);
var _elementsJs = require("./elements.js");
var _cardAddViewJs = require("./card-add-view.js");
var _complaintViewJs = require("./complaint-view.js");
var _utilsJs = require("./utils.js");
var _boardsJs = require("./boards.js");
const heights = [
    200,
    260,
    280,
    300,
    240
];
function createCardView(cardObj) {
    const card = (0, _elementsJs.createElement)({
        tag: "div",
        className: [
            "card"
        ]
    });
    //карточки с рандомной высотой
    const height = (0, _utilsJs.getRandomArrayElement)(heights);
    const image = (0, _elementsJs.createElement)({
        tag: "img",
        className: [
            "card-picture"
        ],
        attribute: {
            src: cardObj.data.picture + "?random=" + cardObj.data.id,
            height: height + "px",
            width: "640px"
        },
        place: card
    });
    const content = (0, _elementsJs.createElement)({
        tag: "div",
        className: [
            "card-content"
        ],
        place: card
    });
    const avatarElement = (0, _elementsJs.createElement)({
        tag: "img",
        className: [
            "card-avatar"
        ],
        attribute: {
            src: cardObj.data.avatar
        },
        place: content
    });
    const hashtagElement = (0, _elementsJs.createElement)({
        tag: "div",
        className: [
            "card-hashtag"
        ],
        text: `#${cardObj.data.hashtag}`,
        place: content
    });
    return card;
}
function createPinView(cardObj) {
    const pin = (0, _elementsJs.createElement)({
        tag: "div",
        className: [
            "pin-menu"
        ],
        place: cardObj.view
    });
    const boards = (0, _boardsJs.Boards);
    const card = cardObj;
    const bid = (0, _boardsJs.Boards).getActive();
    const buttonAdd = (0, _elementsJs.createButtonElement)("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u0434\u043E\u0441\u043A\u0443", "pin-menu__button", "button-add", pin);
    const buttonComplain = (0, _elementsJs.createButtonElement)("\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F", "pin-menu__button", "button-complain", pin);
    const buttonDelete = (0, _elementsJs.createButtonElement)("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441 \u0434\u043E\u0441\u043A\u0438", "pin-menu__button", "button-delete", pin);
    // Проверяем, является ли текущая доска одной из целевых (1, 2 или 3)
    if ([
        1,
        2,
        3
    ].includes(bid)) {
        // Если это одна из целевых досок, меняем местами кнопки
        buttonAdd.style.display = "none";
        buttonDelete.style.display = "block";
    } else {
        // В противном случае оставляем стандартное поведение
        buttonAdd.style.display = "block";
        buttonDelete.style.display = "none";
    }
    //--------- Открытие окна добавления карточки ---------
    buttonAdd.addEventListener("click", ()=>{
        (0, _cardAddViewJs.createModalAdd)(document.querySelector("#root"), cardObj);
    });
    //----------- Открытие окна жалоб -----------
    buttonComplain.addEventListener("click", ()=>{
        (0, _complaintViewJs.createComplaintWindow)(document.querySelector("#root"));
    });
    //----------- Удаление карточки с доски -----------
    buttonDelete.addEventListener("click", ()=>{
        boards.removeCardFromBoard(card, bid);
    });
    cardObj.view.addEventListener("mouseover", function() {
        pin.style.display = "flex";
    });
    cardObj.view.addEventListener("mouseout", function() {
        pin.style.display = "none";
    });
}

},{"./elements.js":"kF6BV","./card-add-view.js":"7gUP2","./complaint-view.js":"bjlFa","./utils.js":"bVlgj","./boards.js":"aLNvh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7gUP2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createModalAdd", ()=>createModalAdd);
var _elementsJs = require("./elements.js");
var _boardsJs = require("./boards.js");
//-----  Создает список доступных досок ------
function createBoardsOptions(parent, card, nameBoards) {
    for(let j = 1; j < nameBoards.length; j++){
        const linkBoard = (0, _elementsJs.createElement)({
            tag: "a",
            className: [
                "list__item"
            ],
            attribute: {
                href: "#"
            },
            text: nameBoards[j],
            place: parent
        });
        linkBoard.addEventListener("click", function() {
            const cards = (0, _boardsJs.Boards).getMainBoard();
            const index = cards.findIndex((item)=>{
                return item.id === card.data.id;
            });
            if (index !== -1) {
                (0, _boardsJs.Boards).getMainBoard().splice(index, 1);
                (0, _boardsJs.Boards).addCardToBoard(card.data, j);
            }
        });
    }
}
// Окно добавления на доску
//-------- Создает модальное окно для добавления карточки на доску
function createModalAdd(parent, card) {
    const modalAdd = document.createElement("div");
    modalAdd.className = "modal-add";
    parent.append(modalAdd);
    const modalAddContainer = (0, _elementsJs.createElement)({
        tag: "div",
        className: [
            "modal-add__container"
        ],
        place: modalAdd
    });
    const modalAddBoards = (0, _elementsJs.createElement)({
        tag: "div",
        className: [
            "modal-add__boards"
        ],
        place: modalAddContainer
    });
    const modalAddTitle = (0, _elementsJs.createElement)({
        tag: "div",
        className: [
            "modal-add__title"
        ],
        text: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u0434\u043E\u0441\u043A\u0443",
        place: modalAddBoards
    });
    //доски с оберткой
    const modalAddList = (0, _elementsJs.createElement)({
        tag: "div",
        className: [
            "modal-add__list"
        ],
        place: modalAddBoards
    });
    createBoardsOptions(modalAddList, card, [
        "\u0414\u043E\u0441\u043A\u0430 0",
        "\u0414\u043E\u0441\u043A\u0430 1",
        "\u0414\u043E\u0441\u043A\u0430 2",
        "\u0414\u043E\u0441\u043A\u0430 3"
    ]);
    const modalAddFooter = (0, _elementsJs.createElement)({
        tag: "div",
        className: [
            "modal-add__footer"
        ],
        place: modalAddBoards
    });
    const modalAddClose = (0, _elementsJs.createElement)({
        tag: "button",
        className: [
            "modal-add__close"
        ],
        text: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        place: modalAddFooter
    });
    //Закрытие и удаление модального окна "Добавить на доску"
    modalAddClose.addEventListener("click", ()=>{
        modalAdd.remove();
    });
}

},{"./elements.js":"kF6BV","./boards.js":"aLNvh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bjlFa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createComplaintWindow", ()=>createComplaintWindow);
var _elementsJs = require("./elements.js");
//Модальное окно пожаловаться
// Создает окно жалобы
function createComplaintWindow(parent) {
    const rootDiv = document.createElement("div");
    rootDiv.className = "modal";
    parent.append(rootDiv);
    const body = (0, _elementsJs.createElement)({
        tag: "div",
        className: [
            "modal_body"
        ],
        place: rootDiv
    });
    const content = (0, _elementsJs.createElement)({
        tag: "div",
        className: [
            "modal_content"
        ],
        place: body
    });
    const title = (0, _elementsJs.createElement)({
        tag: "div",
        className: [
            "modal_title"
        ],
        text: "\u0416\u0430\u043B\u043E\u0431\u0430 \u043D\u0430 \u043F\u0438\u043D",
        place: content
    });
    //чекбоксы с оберткой
    const text = (0, _elementsJs.createElement)({
        tag: "div",
        className: [
            "modal_text"
        ],
        place: content
    });
    const arrText = [
        "\u0421\u043F\u0430\u043C",
        "\u0427\u043B\u0435\u043D\u043E\u0432\u0440\u0435\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E",
        "\u041B\u043E\u0436\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
        "\u0410\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",
        "\u041E\u043F\u0430\u0441\u043D\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B",
        "\u041F\u0440\u0435\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u043A\u0440\u0438\u0442\u0438\u043A\u0430",
        "\u0421\u0446\u0435\u043D\u044B \u043D\u0430\u0441\u0438\u043B\u0438\u044F",
        "\u041D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0435 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
    ];
    for(let i = 0; i <= arrText.length - 1; i++){
        const label = (0, _elementsJs.createElement)({
            tag: "label",
            className: [
                "modal_label"
            ],
            text: arrText[i],
            place: text
        });
        (0, _elementsJs.createElement)({
            tag: "input",
            className: [
                "modal_checkbox"
            ],
            attribute: {
                type: "checkbox"
            },
            place: label
        });
        (0, _elementsJs.createElement)({
            tag: "span",
            className: [
                "modal_span"
            ],
            place: label
        });
    }
    const footer = (0, _elementsJs.createElement)({
        tag: "div",
        className: [
            "modal_footer"
        ],
        place: content
    });
    const buttonClose = (0, _elementsJs.createElement)({
        tag: "button",
        className: [
            "modal_close"
        ],
        text: "\u041E\u0442\u043C\u0435\u043D\u0430",
        place: footer
    });
    const buttonSubmit = (0, _elementsJs.createElement)({
        tag: "button",
        className: [
            "modal_submit",
            "disabled"
        ],
        text: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
        place: footer
    });
    buttonSubmit.disabled = "true";
    const buttonSubmitSpinner = (0, _elementsJs.createElement)({
        tag: "span",
        className: [
            "spinner"
        ],
        place: buttonSubmit
    });
    //При нажатии на чекбокс кнопка отправить становиться активной
    const checkboxes = document.querySelectorAll(".modal_checkbox");
    checkboxes.forEach((checkbox)=>{
        checkbox.addEventListener("change", ()=>{
            // Проверяем, есть ли хотя бы один выбранный чекбокс
            const isChecked = Array.from(checkboxes).some((checkbox)=>checkbox.checked);
            buttonSubmit.disabled = !isChecked; // Активируем/деактивируем кнопку
            buttonSubmit.classList.toggle("disabled", !isChecked); // Меняем класс для стилей
        });
    });
    // При нажатии на кнопку "отмена", закрыть и удалить модальное окно
    buttonClose.addEventListener("click", ()=>{
        rootDiv.remove();
    });
    // При нажатии на кнопку"отправить",срабатывает спиннер +
    // закрывается модальное окно + срабатывает alert для экранов >=1024
    buttonSubmit.addEventListener("click", ()=>{
        buttonSubmit.style.display = "block";
        buttonSubmitSpinner.style.display = "flex";
        buttonSubmitSpinner.classList.add("spin");
        setTimeout(()=>{
            buttonSubmitSpinner.style.display = "none";
            rootDiv.remove();
            setTimeout(()=>{
                if (window.innerWidth >= 1024) alert("\u0412\u0430\u0448\u0430 \u0436\u0430\u043B\u043E\u0431\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430!");
            }, 700);
        }, 1500);
    });
    //Окраска текста при клике на чекбокс
    const selectors = rootDiv.querySelectorAll(".modal_label");
    for (const selector of selectors)selector.addEventListener("click", (e)=>{
        const container = e.currentTarget;
        if (container.firstElementChild.checked) container.style.color = "red";
        else container.style.color = "black";
    });
}

},{"./elements.js":"kF6BV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bVlgj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRandomArrayElement", ()=>getRandomArrayElement);
var _buttonScroll = require("./button-scroll");
const getRandomArrayElement = function(array) {
    return array[Math.floor(Math.random() * array.length)];
};
//вызов кнопки scroll
(0, _buttonScroll.buttonScrolling)(document.querySelector("#root"));

},{"./button-scroll":"1UYUT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1UYUT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buttonScrolling", ()=>buttonScrolling);
var _elements = require("./elements");
// Кнопка наверх для прокрутки страницы сайта в начало
function buttonScrolling(parent) {
    const rootDiv = document.createElement("div");
    rootDiv.className = "button-scroll";
    parent.append(rootDiv);
    const buttonScrContainer = (0, _elements.createElement)({
        tag: "div",
        className: [
            "btn-up",
            "btn-up_hide"
        ],
        place: rootDiv
    });
    const btnUp = {
        el: buttonScrContainer,
        show () {
            this.el.classList.remove("btn-up_hide");
        },
        hide () {
            this.el.classList.add("btn-up_hide");
        },
        addEventListener () {
            window.addEventListener("scroll", ()=>{
                const scrollY = window.scrollY || document.documentElement.scrollTop;
                scrollY > 200 ? this.show() : this.hide();
            });
            this.el.onclick = ()=>{
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                });
            };
        }
    };
    btnUp.addEventListener();
}

},{"./elements":"kF6BV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["jU1rT","3LleC"], "3LleC", "parcelRequiread0c")

//# sourceMappingURL=index.e668ad24.js.map
