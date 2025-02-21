from anywidget import AnyWidget
import traitlets
import pathlib

class DiffWidget(AnyWidget):
    _esm = pathlib.Path(__file__).parent / "bundle.js"
    _css = pathlib.Path(__file__).parent / "bundle.css"
    orig = traitlets.Unicode("").tag(sync=True)
    modified = traitlets.Unicode("").tag(sync=True)
    unified = traitlets.Bool(True).tag(sync=True)
