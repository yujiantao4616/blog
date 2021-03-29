---
slug: react/hook
title: React Hook
tags: [react]
---

### useEffect 中的清除（return）

React只会在[浏览器绘制](https://medium.com/@dan_abramov/this-benchmark-is-indeed-flawed-c3d6b5b6f97f)后运行effects。这使得你的应用更流畅因为大多数effects并不会阻塞屏幕的更新。Effect的清除同样被延迟了。**上一次的effect会在重新渲染后被清除**



```jsx
const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('effect', count)
    return () => {
      console.log('cleard', count)
    }
  }, [count])
  console.log('render', count)
  return (
    <div className='App'>
      {count}
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        click
      </button>
    </div>
  )
```
从初次渲染到点击按钮
<img src={require('./images/reactHook-1.png')} />
1.优先渲染
2.执行上一次effect的清除
3.执行本次渲染的effect
总结：*组件内的每一个函数（包括事件处理函数，effects，定时器或者API调用等等）会捕获定义它们的那次渲染中的props和state。*
