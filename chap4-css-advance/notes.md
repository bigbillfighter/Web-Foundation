# chap4 CSS-Advanced

## 4-1 Transform

- 用于对元素进行平移、旋转、缩放、倾斜
  - translate：平移
  - rotate：旋转
  - scale：缩放
  - skew：倾斜
- transform不会对其它元素布局产生影响

### translate

- 表示平移
- 可以单独translateX和translateY
- 其中使用%表示时，是相对于元素自身
- 是相对于原来应该所在位置，如果使用两次，第二次会将第一次覆盖，即还是从本来所在位置移动

### rotate

- 都是顺时针旋转

- 使用deg单位表示角度
- turn单位表示圈数
- 可以设置transform-origin表示以某个为中心旋转，这个中心的位置是相对于图片自身位置的。如0,0就是图片左上角的点
- transform-origin默认是图像的中心点

### scale

- scale可以分别设置水平方向和竖直方向的缩放大小
- \>1就是放大、(0, 1) 就是缩小
- 设置transform-origin后，该点的位置无论放大还是缩小都不会变化

### skew

- skew表示拉伸，X方向表示图片的水平拉伸， Y方向表示竖直拉伸

### 顺序

当图像transform的顺序不同的时候，会产生一些不同的效果

例如先平移后旋转和先旋转后平移是不同的。应为旋转后上下左右的方向变了。

如：`transform: translateX(100px) rotate(90deg)`

和`transform: rotate(90deg) translateX(100px)`

由于rotate之后X轴变成向下的方向，所以第二种实际会向下移动

当图形scale之后，实际translate的距离会乘以scale倍数

## perspective

- perspective表示人的观察点距离屏幕的距离
- 越近使用变形操作时效果越强
- 可以配合translate3d达到类3D效果

## 4-2 CSS transition

- transition 指定从一个状态到另一个状态时如何过渡
- transition-property表示当哪个属性变化时需要过渡
- transition-duration表示动画持续时间
- transition-timing-function表示变化快慢控制的函数
- transition-delay表示动画延时

### timing-function

- linear
- ease
- ease-in
- ease-out
- ease-in-out
- steps(n)

## 4-3 animation

- 相比transition可以实现更加复杂的样式变化效果
- 使用方式
  - 定义关键帧
  - 应用动画到元素上
- 关键帧用@keyframes表示，后面跟上关键帧动画的名字
- animation-name 关键帧函数的名字
- animation-duration 关键帧持续的时间
- animation-timing-function 控制变化快慢的函数
- animation-delay 延时多少时间播放
- animation-iteration-count  循环次数
- animation-direction 动画是正序播放、倒序播放还是正反交替播放

## 4-4 响应式设计

- 同一个页面可以适配不同屏幕大小设备的设计方案

- 设置viewport

  - 如在head标签里面添加元数据样式

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### media-query

- 可以针对不同的屏幕尺寸，应对不同的样式
- 可以作为条件的属性
  - width/height
  - device-width/device-height
  - device-pixel-ratio
  - orientation

### 使用不同尺寸的照片或者字体

## 4-5 CSS兼容

- 查阅浏览器的兼容性质：
  - caniuse.com
  - MDN CSS Reference
  - Codrops CSS Reference
  - QuirksMode.org CSS

### 需要兼容哪些浏览器

- 根据浏览器面向的用户决定兼容哪些游览器
  - 通过日志和公开的数据分析获取用户使用的浏览器分布

### 处理浏览器不支持

1. 低版本的浏览器没有这个特性可以接受吗

   - border-radius 、box-shadow、animation等一般都是可以接受的

2. 使用替代方案

3. 使用效果稍微差一点的替代方案

###  不同浏览器使用不同的样式

- 层叠Cascading
- 条件注释
- 浏览器怪癖