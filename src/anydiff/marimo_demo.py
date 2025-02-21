import marimo

__generated_with = "0.11.5"
app = marimo.App()


@app.cell
def _():
    import marimo as mo
    return (mo,)


@app.cell
def _():
    import os
    return (os,)


@app.cell
def _():
    from gr_agentic.ui.diff import DiffWidget
    return (DiffWidget,)


@app.cell
def _(DiffWidget, mo):
    # Issue:  While the initial render looks ok, if one of the code strings is edited, and a cell re-run, the widget does not update to reflect the new code.


    code1 = """def greet(name):
    print("Hello, " + name + "!")


    dsfsdfsdf
    return 90
    """


    code2 = """def greet(name):
    print(f"Hello, ${name}!")

    f

    return 42"""
    w = DiffWidget(orig = code1, modified= code2)
    mo.ui.anywidget(w)
    return code1, code2, w


@app.cell
def _():
    return


if __name__ == "__main__":
    app.run()
