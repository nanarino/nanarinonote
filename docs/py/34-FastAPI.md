# FastAPI框架

FastAPI是使用uvicorn网络微框架asgi异步服务器的高性能RESTful API web框架

而django使用的是uWSGI

::: tip 关于框架
本笔记只记录基础，详细的框架用法请左转其官方文档。
:::



## FastAPI

[官方文档](https://fastapi.tiangolo.com/zh/)

版本（写这个的时候2021年）

```bash
fastapi==0.68.1
uvicorn==0.15.0
```

从零开始

```python
from fastapi import FastAPI

app = FastAPI()

@app.get('/')
async def main():
    return {"msg":"helloworld"}

if __name__ == '__main__':
    import os
    os.system('')
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=80)
```

使用uvicorn.run比uvicorn指令更方便

