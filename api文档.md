# 接口文档

## 目录：

    1). 登录
    2). 到微信服务器换取微信用户身份 id

## 1. 登录

### 请求 URL：

    http://localhost:5010/login

### 请求方式：

    POST

### 参数类型

| 参数         | 是否必选 | 类型     | 说明                                          |
| ------------ | -------- | -------- | --------------------------------------------- |
| username     | Y        | string   | 用户名                                        |
| password     | Y        | string   | 密码                                          |
| phone        | N        | string   | 电话号码                                      |
| email        | N        | string   | 邮箱                                          |
| role_id      | N        | string   | 角色 ID                                       |
| code         | Y        | string   | 在 wx.login 的 success 回调中拿到微信登录凭证 |

### 返回示例：

    成功:
      {
        "status": 0,
        "data": {
          "_id": "5c3b297dea95883f340178b0",
          "sessionId": "xxx",
          "__v": 0
        }
      }
    失败
      {
        "status": 1,
        "msg": "用户名或密码不正确!"
      }

## 2. 到微信服务器换取微信用户身份 id

### 请求 URL：

    https://api.weixin.qq.com/sns/jscode2session?appid=<AppId>&secret=<AppSecret>&js_code=<code>&grant_type=authorization_code

### 请求方式：

    POST

### 参数类型

| 参数        | 是否必选 | 类型     | 说明                    |
| ----------- | -------- | -------- | ----------------------- |
| appid       | Y        | string   | 用户名                  |
| secret      | Y        | string   | 密码                    |
| js_code     | Y        | string   | “登录”中提交上来的 code |

### 返回示例：

    成功:
      {
        "status": 0,
        "data": {
          "openid": "xxx",
          "session_key": "xxx",
          "unionid": "xxx",
          "__v": 0
        }
      }
    失败
      {
        "status": 1,
        "msg": "用户名或密码不正确!"
      }

### 备注：

- 开发者服务器和微信服务器通信也是通过 HTTPS 协议

### 返回参数描述：

| 参数                  | 类型     | 说明                                                                 |
| --------------------- | -------- | -------------------------------------------------------------------- |
| openid                | string   | 微信用户的唯一标识                                                   |
| session_key           | string   | 会话密钥                                                             |
| unionid               | string   | 用户在微信开放平台的唯一标识符。本字段在满足一定条件的情况下才返回。 |
