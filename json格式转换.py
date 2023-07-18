import json

# 转json
data = [{"name": "小王", "age": 21}]
json_str = json.dumps(data, ensure_ascii=False)
print(json_str, type(json_str))

# json转其他
s = '[{"name": "小王", "age": 21}]'
def_srt = json.loads(s)
print(def_srt, type(def_srt))