// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"styles/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"C:\\Users\\melis\\Documents\\GitHub\\gliDev\\images\\stone-bg.jpg":[["stone-bg.eef9bcc9.jpg","images/stone-bg.jpg"],"images/stone-bg.jpg"],"./..\\images\\glinorcal-stone-firepit.jpg":[["glinorcal-stone-firepit.1400ddd4.jpg","images/glinorcal-stone-firepit.jpg"],"images/glinorcal-stone-firepit.jpg"],"./..\\images\\glinorcal-stone-path-masonry-glass-privacy-walls.jpg":[["glinorcal-stone-path-masonry-glass-privacy-walls.fb5a18c7.jpg","images/glinorcal-stone-path-masonry-glass-privacy-walls.jpg"],"images/glinorcal-stone-path-masonry-glass-privacy-walls.jpg"],"./..\\images\\glinorcal-stone-walls-patio-carpentry.jpg":[["glinorcal-stone-walls-patio-carpentry.83c3754f.jpg","images/glinorcal-stone-walls-patio-carpentry.jpg"],"images/glinorcal-stone-walls-patio-carpentry.jpg"],"./..\\images\\belvedere-lagoon\\belvedere-lagoon-1.jpg":[["belvedere-lagoon-1.3a227919.jpg","images/belvedere-lagoon/belvedere-lagoon-1.jpg"],"images/belvedere-lagoon/belvedere-lagoon-1.jpg"],"./..\\images\\san-francisco\\sf-7.jpg":[["sf-7.b8ad093b.jpg","images/san-francisco/sf-7.jpg"],"images/san-francisco/sf-7.jpg"],"./..\\images\\bel-marin-keys\\bel-marin-1.jpg":[["bel-marin-1.26ab2be4.jpg","images/bel-marin-keys/bel-marin-1.jpg"],"images/bel-marin-keys/bel-marin-1.jpg"],"./..\\images\\bel-marin-keys\\bel-marin-2.jpg":[["bel-marin-2.d7f401cb.jpg","images/bel-marin-keys/bel-marin-2.jpg"],"images/bel-marin-keys/bel-marin-2.jpg"],"./..\\images\\bel-marin-keys\\bel-marin-3.jpg":[["bel-marin-3.08a6ca5b.jpg","images/bel-marin-keys/bel-marin-3.jpg"],"images/bel-marin-keys/bel-marin-3.jpg"],"./..\\images\\bel-marin-keys\\bel-marin-4.jpg":[["bel-marin-4.ace49d9f.jpg","images/bel-marin-keys/bel-marin-4.jpg"],"images/bel-marin-keys/bel-marin-4.jpg"],"./..\\images\\bel-marin-keys\\bel-marin-5.jpg":[["bel-marin-5.3001551c.jpg","images/bel-marin-keys/bel-marin-5.jpg"],"images/bel-marin-keys/bel-marin-5.jpg"],"./..\\images\\bel-marin-keys\\bel-marin-6.jpg":[["bel-marin-6.f24b3f14.jpg","images/bel-marin-keys/bel-marin-6.jpg"],"images/bel-marin-keys/bel-marin-6.jpg"],"./..\\images\\bel-marin-keys\\bel-marin-7.jpg":[["bel-marin-7.02561720.jpg","images/bel-marin-keys/bel-marin-7.jpg"],"images/bel-marin-keys/bel-marin-7.jpg"],"./..\\images\\bel-marin-keys\\bel-marin-8.jpg":[["bel-marin-8.8279521c.jpg","images/bel-marin-keys/bel-marin-8.jpg"],"images/bel-marin-keys/bel-marin-8.jpg"],"./..\\images\\bel-marin-keys\\bel-marin-9.jpg":[["bel-marin-9.7c93b73d.jpg","images/bel-marin-keys/bel-marin-9.jpg"],"images/bel-marin-keys/bel-marin-9.jpg"],"./..\\images\\belvedere-firepit\\belvedere-firepit-1.jpg":[["belvedere-firepit-1.0a2325a6.jpg","images/belvedere-firepit/belvedere-firepit-1.jpg"],"images/belvedere-firepit/belvedere-firepit-1.jpg"],"./..\\images\\belvedere-firepit\\belvedere-firepit-2.jpg":[["belvedere-firepit-2.6c15f700.jpg","images/belvedere-firepit/belvedere-firepit-2.jpg"],"images/belvedere-firepit/belvedere-firepit-2.jpg"],"./..\\images\\belvedere-firepit\\belvedere-firepit-3.jpg":[["belvedere-firepit-3.d5193bf5.jpg","images/belvedere-firepit/belvedere-firepit-3.jpg"],"images/belvedere-firepit/belvedere-firepit-3.jpg"],"./..\\images\\belvedere-firepit\\belvedere-firepit-4.jpg":[["belvedere-firepit-4.ec085dd3.jpg","images/belvedere-firepit/belvedere-firepit-4.jpg"],"images/belvedere-firepit/belvedere-firepit-4.jpg"],"./..\\images\\belvedere-firepit\\belvedere-firepit-5.jpg":[["belvedere-firepit-5.5103df44.jpg","images/belvedere-firepit/belvedere-firepit-5.jpg"],"images/belvedere-firepit/belvedere-firepit-5.jpg"],"./..\\images\\belvedere-lagoon\\belvedere-lagoon-2.jpg":[["belvedere-lagoon-2.90622f6e.jpg","images/belvedere-lagoon/belvedere-lagoon-2.jpg"],"images/belvedere-lagoon/belvedere-lagoon-2.jpg"],"./..\\images\\belvedere-lagoon\\belvedere-lagoon-3.jpg":[["belvedere-lagoon-3.56218a1c.jpg","images/belvedere-lagoon/belvedere-lagoon-3.jpg"],"images/belvedere-lagoon/belvedere-lagoon-3.jpg"],"./..\\images\\belvedere-lagoon\\belvedere-lagoon-4.jpg":[["belvedere-lagoon-4.d305b091.jpg","images/belvedere-lagoon/belvedere-lagoon-4.jpg"],"images/belvedere-lagoon/belvedere-lagoon-4.jpg"],"./..\\images\\piedmont\\piedmont-1.jpg":[["piedmont-1.fc1eefd1.jpg","images/piedmont/piedmont-1.jpg"],"images/piedmont/piedmont-1.jpg"],"./..\\images\\piedmont\\piedmont-2.jpg":[["piedmont-2.0dfac108.jpg","images/piedmont/piedmont-2.jpg"],"images/piedmont/piedmont-2.jpg"],"./..\\images\\piedmont\\piedmont-3.jpg":[["piedmont-3.eebd91ba.jpg","images/piedmont/piedmont-3.jpg"],"images/piedmont/piedmont-3.jpg"],"./..\\images\\piedmont\\piedmont-4.jpg":[["piedmont-4.29099990.jpg","images/piedmont/piedmont-4.jpg"],"images/piedmont/piedmont-4.jpg"],"./..\\images\\piedmont\\piedmont-5.jpg":[["piedmont-5.12421d4e.jpg","images/piedmont/piedmont-5.jpg"],"images/piedmont/piedmont-5.jpg"],"./..\\images\\piedmont\\piedmont-6.jpg":[["piedmont-6.305a98f4.jpg","images/piedmont/piedmont-6.jpg"],"images/piedmont/piedmont-6.jpg"],"./..\\images\\san-rafael\\san-rafael-1.jpg":[["san-rafael-1.531ed3ba.jpg","images/san-rafael/san-rafael-1.jpg"],"images/san-rafael/san-rafael-1.jpg"],"./..\\images\\san-rafael\\san-rafael-2.jpg":[["san-rafael-2.27c37840.jpg","images/san-rafael/san-rafael-2.jpg"],"images/san-rafael/san-rafael-2.jpg"],"./..\\images\\san-rafael\\san-rafael-3.jpg":[["san-rafael-3.7eb11ae7.jpg","images/san-rafael/san-rafael-3.jpg"],"images/san-rafael/san-rafael-3.jpg"],"./..\\images\\san-rafael\\san-rafael-4.jpg":[["san-rafael-4.218a9dab.jpg","images/san-rafael/san-rafael-4.jpg"],"images/san-rafael/san-rafael-4.jpg"],"./..\\images\\san-francisco\\sf-1.jpg":[["sf-1.f26d5405.jpg","images/san-francisco/sf-1.jpg"],"images/san-francisco/sf-1.jpg"],"./..\\images\\san-francisco\\sf-2.jpg":[["sf-2.ef07293a.jpg","images/san-francisco/sf-2.jpg"],"images/san-francisco/sf-2.jpg"],"./..\\images\\san-francisco\\sf-3.jpg":[["sf-3.12f438e6.jpg","images/san-francisco/sf-3.jpg"],"images/san-francisco/sf-3.jpg"],"./..\\images\\san-francisco\\sf-4.jpg":[["sf-4.ecca7e44.jpg","images/san-francisco/sf-4.jpg"],"images/san-francisco/sf-4.jpg"],"./..\\images\\san-francisco\\sf-5.jpg":[["sf-5.a787c381.jpg","images/san-francisco/sf-5.jpg"],"images/san-francisco/sf-5.jpg"],"./..\\images\\san-francisco\\sf-6.jpg":[["sf-6.17efb3ad.jpg","images/san-francisco/sf-6.jpg"],"images/san-francisco/sf-6.jpg"],"C:\\Users\\melis\\Documents\\GitHub\\gliDev\\images\\contact-collage.jpg":[["contact-collage.e8cbb3c0.jpg","images/contact-collage.jpg"],"images/contact-collage.jpg"],"_css_loader":"../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/css-loader.js"}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56673" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/bundle-url.js"}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;

    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };

    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/bundle-loader.js");b.register("js",require("../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/loaders/browser/js-loader.js"));b.load([]);
},{}]},{},["../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/main.48b3db1d.js.map