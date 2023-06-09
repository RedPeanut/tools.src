import React from 'react';
// import {minify} from 'html-minifier';
// import requirejs from 'requirejs';
// var requirejs = require('requirejs');
import $ from "jquery";
window.jQuery = $;

class Html extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}

    // Constants
    this.JS_HTML_MINIFIER_URL = 'https://cdnjs.cloudflare.com/ajax/libs/html-minifier/4.0.0/htmlminifier.min.js';
    this.JS_BEAUTIFY_URL = 'https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.14.0/beautifier.js';
    this.ace_common_options = {
      mode: 'ace/mode/html',
      showPrintMargin: false,
    };
    // Instants or Variables
    this.inputACEEditor = null;
    this.outputACEEditor = null;
    this.scriptsLoaded = [];
  }

  componentDidMount() {
    ace.require("ace/ext/rtl");
    ace.require("ace/multi_select");
    this.setupInputEditor();
    this.setupOutputEditor();
  }

  componentWillUnmount() {
    if(this.inputACEEditor) {
      this.inputACEEditor.destroy();
      this.inputACEEditor.container.remove();
    }
    if(this.outputACEEditor) {
      this.outputACEEditor.destroy();
      this.outputACEEditor.container.remove();
    }
  }

  //
  setupInputEditor() {
    let self = this;
    let editor = this.inputACEEditor = ace.edit('inputACEEditor',
      {
        ...this.ace_common_options,
        placeholder: `Paste or type your data here...`,
        // enableBasicAutocompletion: true,
        // enableSnippets: true,
        // enableLiveAutocompletion: true
      }
    );
    // editor.setTheme('ace/theme/monokai');
    // editor.setShowPrintMargin(false);
    // editor.session.setMode('ace/mode/html');
    /* editor.session.on('change', function(delta) {
      // delta.start, delta.end, delta.lines, delta.action
      console.log('delta = ', delta);
      self.updateInputAceEditorStatusBar();
    }); */
    let lang = ace.require("ace/lib/lang");
    let statusUpdate = lang.delayedCall(function() {
      self.updateInputAceEditorStatusBar(editor);
    }.bind(this)).schedule.bind(null, 100);
    // console.log('lang = ', lang);
    editor.on('changeStatus', statusUpdate);
    editor.on("changeSelection", statusUpdate);
    editor.on("keyboardActivity", statusUpdate);
  }
  postSetupInputEditor() {}
  updateInputAceEditorStatusBar(editor) {
    console.log('updateInputAceEditorStatusBar() is called...');
    console.log('editor.keyBinding.getStatusText(editor) = ', editor.keyBinding.getStatusText(editor));
    let selection = editor.selection;
    let lead = selection.lead;
    // console.log('selection = ', selection);
    console.log('lead = ', lead);
  }
  setupOutputEditor() {
    let self = this;
    let editor = this.outputACEEditor = ace.edit('outputACEEditor', {
      ...this.ace_common_options,
    });
    // editor.setTheme('ace/theme/monokai');
    // editor.setShowPrintMargin(false);
    // editor.session.setMode('ace/mode/html');
    editor.session.on('change', function(delta) {
      // delta.start, delta.end, delta.lines, delta.action
      self.updateOutputAceEditorStatusBar();
    });
  }
  postSetupOutputEditor() {}
  updateOutputAceEditorStatusBar() {}
  setupEditorAndLoadData() {}

  loadScript(url, callback) {
    let split = url.split('/');
    let filename = split[split.length-1];
    console.log('filename = ', filename);
    let scriptsLoaded = this.scriptsLoaded;
    if(!scriptsLoaded.includes(filename)) {
      console.log('load script...');
      scriptsLoaded.push(filename);
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.onload = function() { callback(); };
      script.src = url;
      document.getElementsByTagName('head')[0].appendChild(script);
    } else 
      callback();
  }
  
  beautifyHTML = (event) => {
    let self = this;
    this.loadScript(this.JS_BEAUTIFY_URL, function() {
      // console.log('script is loaded...');
      // console.log('beautifier = ', beautifier);
      let opts = {
        'indent_size': '2',
        'indent_char': ' ',
      };
      let inputEditor = self.inputACEEditor;
      let output = beautifier.html(inputEditor.getValue(), opts);
      let outputEditor = self.outputACEEditor;
      outputEditor.setValue(output, -1);
    });
  }

  minifyHTML = (event) => {
    let self = this;
    // alert("개발예정입니다.");
    // let minify = requirejs('html-minifier').minify;
    // console.log('minify = ', minify);
    /* this.loadScript(this.JS_HTML_MINIFIER_URL, function() {
      console.log('script is loaded...');
      let minify = require('html-minifier').minify;
      // let minify = require('not-exist-module').minify;
      console.log('minify = ', minify);
      let opts = {
      };
      let inputEditor = self.inputACEEditor;
      // let output = minify.html(inputEditor.getValue(), opts);
      // let outputEditor = self.outputACEEditor;
      // outputEditor.setValue(output);
    }); */
  }

  // Input
  copyTextInputEditor = (event) => {
    // console.log('copyTextInputEditor() is called...');
    this.inputACEEditor.selectAll();
    this.inputACEEditor.focus();
    document.execCommand("copy");
    /* let currentText = this.inputACEEditor.getValue();
    let copyArea = $('<textarea />')
      .text(currentText)
      .attr('readonly', '')
      .css({ 'position': 'absolute', 'left': '-9999px' });
    $('body').append(copyArea);
    copyArea.select();
    document.execCommand('copy');
    copyArea.remove(); */
  }
  selectInputEditor = (event) => {
    this.inputACEEditor.selectAll();
    // this.inputACEEditor.focus();
  }
  cleanInputEditor = (event) => {
    this.inputACEEditor.setValue("");
  }
  getHTMLSampleData = (event) => {
    let editor = this.inputACEEditor;
    let sampleData = `<!DOCTYPE html>
<html>
  <head>
    <title>Largest companies by market cap — US Stock Market</title>
    <meta charset='UTF-8'>
  </head>
  <body>
    <h1>Apple : 2010 Billion</h1>
    <h2>Saudi Aramco : 1812 Billion</h2>
    <h3>Microsoft : 1800 Billion</h3>
    <h4>Alphabet (Google) : 1155 Billion</h4>
    <h5>Amazon : 869 Billion</h5>
    <b>This data is as of 21 Dec 2022.</b>
  </body>
</html>`;
    // console.log('sampleData = ', sampleData);
    // editor.getSession().setUseWorker(false);
    // editor.getSession().setUseWorker(true);
    editor.setValue(sampleData);
    // $(editor).click();
  }

  // Output
  copyTextOutputEditor = (event) => {}
  selectOutputEditor = (event) => {}
  cleanOutputEditor = (event) => {}
  
  render() {
    return (
      <div className="container is-fluid">
        <div className="columns mb-0 is-desktop">
          <div className="column">
            <div id="inputDiv" className="aceEditorBorder">
              <div className="aceEditorMenu">
                <label className="aceEditorMenuLabel">
                  <i>Input</i>
                </label>
                <div className="editortoolbar btn-group-sm">
                  <a href="#" id="inputcopy" className="icon" title="Copy to Clipboard" onClick={this.copyTextInputEditor}>
                    <svg className="svgicon">
                      <use href="#copy"></use>
                    </svg>
                  </a>
                  <a href="#" className="icon" title="Select All" onClick={this.selectInputEditor}>
                    <span className="material-symbols-outlined">select_all</span>
                  </a>
                  <a href="#" className="icon" title="Clear" onClick={this.cleanInputEditor}>
                    <svg className="svgicon">
                      <use href="#trash"></use>
                    </svg>
                  </a>
                </div>
                <a href="#" className="icon" style={{marginRight:'25px',float:'right'}} title="Sample HTML Data" onClick={this.getHTMLSampleData}>
                  <i>Sample</i>
                </a>
              </div>
              <div id="inputACEEditor" className="twoEditor"></div>
              <div className="columns m-0 is-mobile" id="inputACEStatusBar" style={{backgroundColor:'#ededed',border:'1px solid #dbdbdb'}}>
                <span className="column p-0 pl-1" id="inputAceLineColumn">Ln: 1 Col: 0</span>
                <span className="column p-0 has-text-centered" id="inputTextSize">Size: 0</span>
                {/* <span className="column p-0 is-hidden-mobile" id="inputFontSize">
                  <a href="#" id="inputFontSizeI" title="Increase Text Size" className="icon is-pulled-right">
                    <svg className="svgicon">
                      <use href="#title"></use>
                    </svg>
                  </a>
                  <a href="#" id="inputFontSizeD" title="Decrease Text Size" className="icon is-pulled-right">
                    <svg className="svgicon16">
                      <use href="#title"></use>
                    </svg>
                  </a>
                </span> */}
              </div>
            </div>
          </div>
          <div className="column is-12-mobile is-2-desktop box has-text-centered">
            <div className="columns mb-0">
              <div className="column">
                <div className="select">
                  <select id="indent" onChange={this.beautifyHTML} defaultValue={2}>
                    <option value="t">Use Tab</option>
                    <option value="1">1 Space</option>
                    <option value="2">2 Space</option>
                    <option value="3">3 Space</option>
                    <option value="4">4 Space</option>
                    <option value="5">5 Space</option>
                    <option value="6">6 Space</option>
                    <option value="7">7 Space</option>
                    <option value="8">8 Space</option>
                    <option value="9">9 Space</option>
                    <option value="10">10 Space</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field mt-2">
              <p className="control">
                <button className="button is-fullwidth is-info is-medium" onClick={this.beautifyHTML}>
                  <span className="icon is-hidden-desktop-only">
                    <svg className="svgicon">
                      <use href="#format_indent"></use>
                    </svg>
                  </span>
                  <span>Beautify HTML</span>
                </button>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-fullwidth" onClick={this.minifyHTML}>
                  <span className="icon is-hidden-desktop-only">
                    <svg className="svgicon">
                      <use href="#notes"></use>
                    </svg>
                  </span>
                  <span>Minify HTML</span>
                </button>
              </p>
            </div>
          </div>
          <div className="column">
            <div id="outputDiv" className="aceEditorBorder">
              <div className="aceEditorMenu">
                <label className="aceEditorMenuLabel">
                  <i>Output</i>
                </label>
                <div id="outputToolBar" className="editortoolbar btn-group-sm">
                  <a href="#" id="outputcopy" className="icon" title="Copy to Clipboard" onClick={this.copyTextOutputEditor}>
                    <svg className="svgicon">
                      <use href="#copy"></use>
                    </svg>
                  </a>
                  <a href="#" className="icon" title="Select All" onClick={this.selectOutputEditor}>
                    <span className="material-symbols-outlined">select_all</span>
                  </a>
                  <a href="#" className="icon" title="Clear" onClick={this.cleanOutputEditor}>
                    <svg className="svgicon">
                      <use href="#trash"></use>
                    </svg>
                  </a>
                </div>
              </div>
              <div id="outputACEEditor" className="twoEditor"></div>
              <div id="viewerhtml" style={{display:'none',overflowY:'scroll'}}>
                <iframe id="iFrameMD" src="data:text/html;charset=utf-8," style={{width:'100%',height:'62vh'}}></iframe>
              </div>
              <div className="columns m-0 is-mobile" id="outputACEStatusBar" style={{backgroundColor:'#ededed',border:'1px solid #dbdbdb'}}>
                <span className="column p-0 pl-1" id="outputAceLineColumn">Ln: 1 Col: 0</span>
                <span className="column p-0 has-text-centered" id="outputTextSize">Size: 0</span>
                {/* <span className="column p-0 is-hidden-mobile" id="outputFontSize">
                  <a href="#" id="outputFontSizeI" title="Increase Text Size" className="icon is-pulled-right">
                    <svg className="svgicon">
                      <use href="#title"></use>
                    </svg>
                  </a>
                  <a href="#" id="outputFontSizeD" title="Decrease Text Size" className="icon is-pulled-right">
                    <svg className="svgicon16">
                      <use href="#title"></use>
                    </svg>
                  </a>
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Html;