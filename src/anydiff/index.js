import {EditorView, basicSetup} from "codemirror"
import {EditorState} from "@codemirror/state"

import {MergeView, unifiedMergeView} from "@codemirror/merge"

function render({ model, el }) {
  console.log("Diff widget");

  
  const update = () => {
    console.log("update");
    let orig = model.get("orig")
    let modified = model.get("modified")
    let unified = model.get("unified")
    // remove all content from el
    while (el.firstChild) {
      console.log("removing child");
      el.removeChild(el.firstChild);
    }
    //create a div for the diff view
    let diff = document.createElement("div");
    el.appendChild(diff);
    if (unified) {
      const view = new EditorView({
        parent: diff,
        doc: modified,
        extensions: [
          basicSetup,
          unifiedMergeView({
            original: orig,
            mergeControls: false
          }), 
          EditorView.editable.of(false),
          EditorState.readOnly.of(true)
        ]
      });  
    }
    else {
      const view = new MergeView({
        a: {
          doc: orig,
          extensions: basicSetup
        },
        b: {
          doc: modified,
          extensions: [
            basicSetup,
            EditorView.editable.of(false),
            EditorState.readOnly.of(true)
          ]
        },
        parent: diff
      });
    }  
    //trigger a redraw
    

  }
  update();  
  model.on("change", () => {
    console.log("value changed");
    update();
});
}
export default { render };
