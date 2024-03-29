// Generated by CoffeeScript 2.5.1
(function() {
  var cliargumentsmodule, cwd, extractMeowed, getHelpText, getOptions, log, meow;

  cliargumentsmodule = {
    name: "cliargumentsmodule"
  };

  //#############################################################
  //region logPrintFunctions
  log = function(arg) {
    if (allModules.debugmodule.modulesToDebug["cliargumentsmodule"] != null) {
      console.log("[cliargumentsmodule]: " + arg);
    }
  };

  //endregion

  //#############################################################
  //region node_modules
  meow = require("meow");

  ({cwd} = require('process'));

  //endregion

  //#############################################################
  cliargumentsmodule.initialize = function() {
    log("cliargumentsmodule.initialize");
  };

  //#############################################################
  //region internal functions
  getHelpText = function() {
    log("getHelpText");
    return `Usage
    $ auto-compose arg1
    
Options
    optional:

        arg1, --path <path/to/root/dir> -p <path/to/root/dir>
            the directory to start autocomposing
            cwd(current working directory) is default
        
        --recursive, -r
            recursive switch, if present it would recursively autocompose
            doing so in depth-first style 
        
Examples
    $  auto-compose /home/user/code/autocompose-sources/ -r
    ...
    `;
  };

  getOptions = function() {
    log("getOptions");
    return {
      flags: {
        path: {
          type: "string",
          alias: "p"
        },
        recursive: {
          type: "boolean",
          alias: "r"
        }
      }
    };
  };

  extractMeowed = function(meowed) {
    var path, recursive;
    log("extractMeowed");
    path = cwd();
    recursive = false;
    if (meowed.input[0]) {
      path = meowed.input[0];
    }
    if (meowed.flags.path) {
      path = meowed.flags.source;
    }
    if (meowed.flags.recursive) {
      recursive = true;
    }
    return {path, recursive};
  };

  //endregion

  //#############################################################
  //region exposed functions
  cliargumentsmodule.extractArguments = function() {
    var extract, meowed, options;
    log("cliargumentsmodule.extractArguments");
    options = getOptions();
    meowed = meow(getHelpText(), getOptions());
    extract = extractMeowed(meowed);
    return extract;
  };

  //endregion exposed functions
  module.exports = cliargumentsmodule;

}).call(this);
