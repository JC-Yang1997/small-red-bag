问题：

想在`reducer`中对`action.people`和`action.money`进行处理后返回bags，但是并没有调用，不知道是为什么...

```js
// 上面有setBags

switch (action.type) {
    case SET_ARGU:
    var bags = setBags(action.people, action.money)
        return {
            ...state, 
            people: action.people,
            money: action.money,
            bags: bags,
        }

    default: 
        return state
}
```