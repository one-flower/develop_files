from pyecharts.charts import Line

line = Line()

line.add_xaxis(["第一","第二","第三"])

line.add_yaxis("分数",[30,40,10])

line.render()