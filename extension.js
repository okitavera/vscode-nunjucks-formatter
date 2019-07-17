const vscode = require("vscode");
const prettydiff = require("./vendor/prettydiff2/prettydiff");

const id = "nunjucks";

function format(document, range, options) {
  const result = [];
  const content = document.getText(range);
  const editor = vscode.window.activeTextEditor.options;
  const workspace = vscode.workspace.getConfiguration("editor");
  const indentsize = editor.tabSize || workspace.tabSize;
  const defconfig = {
    source: content,
    lang: "twig",
    mode: "beautify",
    insize: editor.insertSpaces ? indentsize : 1,
    inchar: editor.insertSpaces ? " " : "\t"
  };

  var njkconfig = vscode.workspace.getConfiguration("nunjucksFormat");
  njkconfig = { jekyll: njkconfig.frontMatterData, ...njkconfig };
  delete njkconfig.frontmatter;
  const newText = prettydiff({
    ...defconfig,
    ...njkconfig
  });

  result.push(vscode.TextEdit.replace(range, newText));
  return result;
}

function activate(context) {
  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider(id, {
      provideDocumentFormattingEdits(document, options) {
        const start = new vscode.Position(0, 0);
        const end = new vscode.Position(
          document.lineCount - 1,
          document.lineAt(document.lineCount - 1).text.length
        );
        const range = new vscode.Range(start, end);
        return format(document, range, options);
      }
    })
  );
}

exports.activate = activate;
