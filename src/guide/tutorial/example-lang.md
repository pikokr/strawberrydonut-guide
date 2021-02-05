# 예제 딸기언어

## 무작위 문자열

```strawberrylang
func randomString(length) {
    readonly strings = list('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')
    result = ''
    repeat(length) result += choice(strings)
    return result
}

randomString(10) // "dR5a1PlzOf"
```
