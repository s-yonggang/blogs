<template>
  <div class="canvas-editor-wrapper" ref="canvasEditorRef"></div>
</template>

<script setup>
import { ref, onMounted } from "vue"
let canvasEditorRef = ref(null);
function createScript(src, callback) {
  if (typeof window !== 'undefined') {
    const hasId = document.getElementById('glslEditorScriptId')
    hasId && hasId.remove();
    const newScript = window.document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = src;
    newScript.id = 'glslEditorScriptId';
    document.head.appendChild(newScript);
    newScript.addEventListener('load', () => {
      callback()
    });
  }
}

function createCSS(href, callback) {
  if (typeof window !== 'undefined') {
    const hasId = document.getElementById('glslEditorStyleId')
    hasId && hasId.remove();
    const newLink = window.document.createElement('link');
    newLink.type = 'text/css';
    newLink.rel = "stylesheet";
    newLink.id = 'glslEditorStyleId';
    newLink.href = href;
    document.head.appendChild(newLink);
    callback && newLink.addEventListener('load', callback);
  }
}

function createEditor() {
  const c = canvasEditorRef.value;
  const width = canvasEditorRef.value.offsetWidth;
  // const height = canvasEditorRef.value.offsetHeight;
  // c.width = width;
  // c.height = width > height ? width / 2.0 : width;
  const editorConfig = {
    canvas_size: width/4.0,
    canvas_draggable: false,
    theme: 'monokai',
    canvas_follow: true,
    multipleBuffers: false,
    watchHash: true,
    fileDrops: true,
    menu: false,
    multipleBuffers: true,
    lineWrapping: true,
    frag_header: '',
    frag_footer: '',
    indentUnit: 4,
  }

  const glslEditor = new GlslEditor(c, editorConfig);
}

onMounted(() => {
  createCSS('https://cdn.jsdelivr.net/npm/glslEditor/build/glslEditor.min.css', () => {
    if (typeof GlslEditor !== 'undefined') {
      createEditor();
      return;
    }
    createScript('https://cdn.jsdelivr.net/npm/glslEditor/build/glslEditor.min.js', () => {
      createEditor();
    });
  });
})

</script>

<style>
.canvas-editor-wrapper {
  width: 100%;
  position: relative;
}

.canvas-editor-wrapper .ge_canvas_container {
  position: absolute !important;

}

/* 
.ge_editor {
  background-color: inherit !important;
} */
/* 
.CodeMirror-gutters {
  background-color: inherit !important;
  border-right: 1px solid var(--c-border) !important;
} */

/* .CodeMirror {
  background-color: inherit !important;
  color: inherit !important;
  margin-top: 0 !important;
  font-weight: bold !important;
  z-index: inherit !important;
} */





/* .cm-s-monokai .CodeMirror-matchingbracket {
  color: #3aa675 !important;
}

.CodeMirror-selected {
  background: #3aa675aa !important;
} */
</style>