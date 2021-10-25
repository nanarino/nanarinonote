# FastAPI框架

[FastAPI](https://fastapi.tiangolo.com/zh/)是使用uvicorn网络微框架asgi异步服务器的高性能RESTful API web框架

而django使用的是uWSGI。

版本（写这个的时候2021年）：

```bash
fastapi==0.68.1
uvicorn==0.15.0
```



## 装饰器收集路由

从零开始的RESTful API

[RESTful API](https://restfulapi.cn/)是定义**HTTP动作**的风格的API

fastapi可以使用装饰器定义和收集路由

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional

app = FastAPI()

#设置允许跨域
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#请求获取指定id的item；按路径参数
@app.get('/item/{id}')
async def get_item(id: int):
    return {"id": id}

#请求获取items列表；按查询参数
@app.get('/items')
async def get_items(limit: Optional[int] = None, offset: Optional[int] = None):
    return {"limit": limit, "offset": offset}

'''除此之外还有
请求创建POTS
请求全部覆盖PUT
请求部分修改PATCH
以及删除DELETE动作
他们可能需要用的请求体'''
if __name__ == '__main__':
    import os
    os.system('')
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
```

使用uvicorn.run比uvicorn指令更方便



## 用于参数校验的类

支持混用各种参数

### Query

显式声明查询参数。第一个参数是设置默认值，必填时传`...`。

```python
from fastapi import Query

@app.get('/pics')
async def get_pics(tg: str = Query(..., max_length=16)):
    pass
```

### Path

路径参数声明校验。还可以定义元数据title。

```python
from fastapi import Path

@app.get('/user/{id}')
async def get_user(id: int = Path(..., title="User's UUID")):
    pass
```

### Body

多个请求体模型时需要结构 单个不需要。

在接受请求体里未定义在模型里的其他键时，它避免被当成查询参数：

```python
from pydantic import BaseModel
class User(BaseModel):
    pass
class Tag(BaseModel):
    pass

from fastapi import Body
@app.post('/group')
async def create_group(leader:User, tg:Tag, idol: str=Body(...)):
    pass
```

同时也可以为单个请求体模型时指定解构取值：

```python
class Item(BaseModel):
    pass

@app.post('/item')
async def create_item(item: Item=Body(..., embed=True)):
    pass
```

#### Field

定义Body里的字段

```python
from pydantic import BaseModel, Field
from typing import List
class User(BaseModel):
    pass
class group(BaseModel):
    id: int
    # 定义字段
    name: str = Field(...,title="TagName", max_length=16)
    # 泛型含有其他模型的注解
    users: list[User] = []
```

### Form，File

需要接收的不是 JSON（`application/json`）

而是表单以及表单上传文件时（`multipart/form-data`）使用

```python
from fastapi import Form

@app.post("/login/")
async def login(username: str = Form(...), password: str = Form(...)):
    return {"username": username}
```



## 抛出异常

http异常

```python
from fastapi import HTTPException

raise HTTPException(status_code=404, detail="Not found",headers={})
```

自定义异常数据返回

```python
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

class UnicornException(Exception):
    def __init__(self, name: str):
        self.name = name

app = FastAPI()

@app.exception_handler(UnicornException)
async def unicorn_exception_handler(request: Request, exc: UnicornException):
    return JSONResponse(
        status_code=418,
        content={"message": f"Oops! {exc.name} did something..."},
    )

@app.get("/unicorns/{name}")
async def read_unicorn(name: str):
    if name == "yolo":
        raise UnicornException(name=name)
    return {"unicorn_name": name}
```



