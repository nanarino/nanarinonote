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

从零开始的RESTful API

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
from pydantic import BaseModel

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/item/{id}')
async def get_item(id: int):
    return {"id": id}


@app.get('/items')
async def get_items(limit: Optional[int] = None, offset: Optional[int] = None):
    return {"limit": limit, "offset": offset}


class Item(BaseModel):
    title: str
    content: str
    user: int


@app.post('/item')
async def create_item(item: Item):
    return item

if __name__ == '__main__':
    import os
    os.system('')
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
```

使用uvicorn.run比uvicorn指令更方便

