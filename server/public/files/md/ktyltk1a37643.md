**记录自己学习的笔记，成长的过程。**

## 1.W3C盒模型与IE6盒模型
![QQ图片20210516214240.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cd94526823404af392475bdc5fccb037~tplv-k3u1fbpfcp-watermark.image)

![QQ图片20210516214245.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/10b8a257b5ee4eb09e09df8183e32a97~tplv-k3u1fbpfcp-watermark.image)

从图可以看出W3C盒子与IE6盒子的区别就是（***与下面标准盒模型和怪异盒模型相同***）：

W3C: 属性`width,height`只包含内容`content`，不包含`border，padding`。

IE6: 属性`width,height`包含`content，border，padding`。

## 2.相关css属性
### 1.内容区
放置内容的部分，可以由盒子中的内容撑开，或者设置 `width，height` 属性来指定固定的大小。

```css
div{
    width: 100px;  /*宽度*/
    height: 100px;  /*高度*/
}
```
### 2.padding(内边距，相当于内容四周的填充物)
padding属性接收长度值或百分比值，但是不接收负值：

内边距部分会显示盒子背景；

内边距会撑大盒子的整体大小，但是不会影响内容的大小；
```css
 div{
    padding-top: 10px;   /*上内边距*/
    padding-right: 5px;  /*右内边距*/
    padding-bottom: 5px; /*下内边距*/
    padding-left: 5px;    /*左内边距*/
}
```
```css
/* case 1 */
div{ padding: 10px; } /* 上下左右 全部10px */

/* case 2 */
div{ padding: 10px 5px; } /* 上下 10px    左右 5px */

/* case 3 */
div{ padding: 10px 5px 7px; } /* 上 10px    左右 5px    下 7px */

/* case 4 */
div{ padding: 10px 9px 8px 7px ; } /* 上 10px  右 9px  下 8px  左 7px  即顺时针顺序*/
```

### 3.border（边框）
> | 值        | 描述             |
> | --------- | ---------------- |
> | **none**  | **定义无边框**。 |
> | **solid** | **定义实线**。   |
> | **dotted** | **定义点状边框，在大多数浏览器中呈现为实线。**                
> | **dashed** | **定义虚线，在大多数浏览器中呈现为实线。**                     
> | double   | 定义双线。双线的宽度等于 border-width 的值。                 |
> | hidden   | 与 "none" 相同。不过应用于表时除外，对于表，hidden 用于解决边框冲突。 |
> | groove   | 定义 3D 凹槽边框。其效果取决于 border-color 的值。           |
> | ridge    | 定义 3D 垄状边框。其效果取决于 border-color 的值。           |
> | inset    | 定义 3D inset 边框。其效果取决于 border-color 的值。         |
> | outset   | 定义 3D outset 边框。其效果取决于 border-color 的值。        |
> | inherit  | 规定应该从父元素继承边框样式。  

可由统一的border属性来规定边框大小：
```css
/*三个值分别表示： 四周边框大小   边框线类型   边框线颜色 */
div{ border: 5px solid red; } 
```
border也可由分解属性表示：

```css
div{
  border-top: 10px solid red;
  border-right: 5px solid red;
  border-bottom: 7px solid red;
  border-left: 8px solid red;
}
```
还可进一步分解为border-width、border-style、border-color：

```css
/* case 1 */
div{
  border-width: 5px;
  border-style: solid; 
  border-color: red;
}
```
### 4.margin（内边距，相当于盒子和其他盒子之间的间距）
margin属性的值和padding类似

外边距是在边框外层的，**不会**显示盒子的背景。

margin**允许负值**，margin多了左右的`auto（自动）`值，可以用来将盒子在父级中左右居中；
### 3.怪异盒模型与标准盒模型
怪异盒模型和标准盒模型的区别在于，width、height所包含的部分不同。

标准盒模型`width，height`只表示`content`内容区。

而怪异盒模型的`width，height`包含`content，padding，border`部分。

我们可以使用 `box-sizing` 属性来指定盒模型类型：

标准盒模型：`content-box`

怪异盒模型：`border-box`
### 1.标准盒模型

```css
/*标准盒模型*/
.div1{
    box-sizing: content-box; /*标准盒模型，默认值*/
}
```
### 2.怪异盒模型
```css
/*怪异盒模型*/
.div2{
    box-sizing: border-box; /*开启怪异盒模型*/
}
```
## 4.行内、块级、行内块盒模型
### 1.行内盒模型
行内盒模型 `inline`
        
行内盒模型有：  `strong/b em/i a span img`

特性：

1.和其他行内行内元素会并排排列

2.行内元素都不支持宽度高度

(可以使用`line-height` , `font-size`行高及字体大小来控制)

3.*上下*的`margin，padding`无效 , 不支持`auto`居中

(*左右*的有效，`text-align`可以实现盒子内容居中)

4.标签之间会产生间隙。



### 2.块级盒模型
块级盒模型`block`

块级盒模型有: `h1-h6 p ul ol dl dt dd li hr blockqute div`

特性：

1.默认宽度占满一整行(继承父级的宽度),高度由内容撑开高度

2.支持`width,height,padding,border,margin`的所有值的设置,支持`auto`居中

### 3.行内块盒模型
行内块盒模型`inline-block`

特性：

1.本质上他是一个行内元素,具有行内元素的性质(不支持行高)

2.支持`width,height`,支持`margin,padding,border`,不支持`auto`

3.标签之间也会产生空格解析

### 4.元素之间类型转换
类型转换`display`


| 值               | 描述                   |
| ---------------- | ---------------------- |
| **none**         | **元素消失**。         |
| **block**        | **转换为块元素**。     |
| **inline-block** | **转换为行内块元素。** |

### 5.间隙

标签之间会产生空格解析

```css
<style>
    .box{
    }
    .box1{
      display: inline-block; /* 转换为行内块模型 */
      width: 100px;
      height: 100px;
      background-color: red;
    }
    .box2{
      display: inline-block;
      width: 100px;
      height: 100px;
      background-color: green;
    }
</style>
<body>
    <div class="box">
      <div class="box1"></div>
      <div class="box2"></div>
    </div>
</body>
```

![QQ图片20210517143535.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b0600eb7a84d4b16bf5d7f455eef8519~tplv-k3u1fbpfcp-watermark.image)


**产生原因**: 浏览器解析时候 标签之间有**换行**或者**多个空格**都会被解析成为一个空格字符

**解决方法**: 给父级元素字体大小`font-size`设置为**0**

(无需担心整行内文字无法显示，可用权重更高的选择器覆盖属性)

```css
.box{
      font-size: 0px;
}
```

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/606c46dcf7f74220a107f2f5be09280c~tplv-k3u1fbpfcp-watermark.image)
## 5.外边距合并
在某些特定情况下，两个盒子之间的上下外边距会合并：

### 兄弟元素之间外边距合并

  ```html
  <style>
    .box1{
      width: 100px;
      height: 100px;
      background-color: red;
      margin-bottom: 50px; /* 下外边距50px */
    }
    .box2{
      width: 100px;
      height: 100px;
      background-color: green;
      margin-top: 30px; /* 上外边距30px */
    }
  </style>
  <div class="box1"></div>
  <div class="box2"></div>
  ```

![QQ图片20210517195804.jpg](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8bc67ea57b354120a4d9380eb79af88c~tplv-k3u1fbpfcp-watermark.image)

### 父子元素之间上外边距合并
```html
  <style>
    .wrap{
      width: 200px;
      height: 200px;
      background-color: red;
      margin-top: 50px; /* 上外边距50px */
    }
    .child{
      width: 100px;
      height: 100px;
      background-color: green;
      margin-top: 30px; /* 上外边距30px */
    }
  </style>
  <div class="wrap">
    <div class="child"></div>
  </div>
```


![QQ图片20210517200450.jpg](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/015777cfd846487d9e4094860b7fd18a~tplv-k3u1fbpfcp-watermark.image)

当父元素top方向添加`border`或`padding`，不会合并。

## 6.浮动

### 1. 原理

- 普通文档流

  浏览器在默认情况下规定一个块元素在父元素内的排列规则：

  - 从上往下排列
  - 从左开始排列
  - 一个块元素占一行

  ```html
  <style>
      .parent{width:800px; height:400px; border:10px solid blue;}
  
      .box1{width:250px; height:80px; background-color:#ed7d31;}
      .box2{width:400px; height:100px; background-color:#70ad47;}
      .box3{width:200px; height:200px; background-color:#7030a0;}
  </style>
  <div class="parent">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
  </div>
  ```

  <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f5bb201a7c3649a6afef3da83b941d28~tplv-k3u1fbpfcp-zoom-1.image" style="zoom: 50%;" /><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5fab0cb8d6f44a3c8cfa8d3c0e73fe35~tplv-k3u1fbpfcp-zoom-1.image" style="zoom: 50%;" />

- 浮动之后的文档流

  ```html
  <style>
      .parent{width:800px; height:400px; border:10px solid blue;}
  
      .box1{float:left; width:250px; height:80px; background-color:#ed7d31;}
      .box2{width:400px; height:100px; background-color:#70ad47;}
      .box3{width:200px; height:200px; background-color:#7030a0;}
  </style>
  <div class="parent">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
  </div>
  ```

  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e3531f1cec8a42e4b71392b2421c231b~tplv-k3u1fbpfcp-zoom-1.image)

  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cde5f8b9757f4e59b8fe7d07d634135e~tplv-k3u1fbpfcp-zoom-1.image)

### 2. 各种浮动情况

- box1 box2 都浮动

  box1 box2不再遵循普通文档流的占据一行规则，变得可以水平排布。box3往上占据空出来的文档流位置。

  ```html
  <style>
    .parent{width:800px; height:400px; border:10px solid blue;}
  
    .box1{float:left; width:250px; height:80px; background-color:#ed7d31;}
    .box2{float:left; width:400px; height:100px; background-color:#70ad47;}
    .box3{width:200px; height:200px; background-color:#7030a0;}
  </style>
  <div class="parent">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
  </div>
  ```

  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d2597bc3204b4daf94c3378c8f4b6b3b~tplv-k3u1fbpfcp-zoom-1.image)

- box1 box2 box3都浮动

  box1 box2 box3都脱离原来的文档流，水平排布，但是因为父级宽度不够，所以box3换行显示。

  ```html
  <style>
    .parent{width:800px; height:400px; border:10px solid blue;}
  
    .box1{float:left; width:250px; height:80px; background-color:#ed7d31;}
    .box2{float:left; width:400px; height:100px; background-color:#70ad47;}
    .box3{float:left; width:200px; height:200px; background-color:#7030a0;}
  </style>
  <div class="parent">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
  </div>
  ```

  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/37cf2f9a2f594783a1b8c2afef616d36~tplv-k3u1fbpfcp-zoom-1.image)

- box1 box2 box3都浮动，box1高度比box2高

  同上box3会换行显示，但是在过程中会被box1“卡住”。

  ```html
  <style>
    .parent{width:800px; height:400px; border:10px solid blue;}
  
    .box1{float:left; width:250px; height:100px; background-color:#ed7d31;}
    .box2{float:left; width:400px; height:80px; background-color:#70ad47;}
    .box3{float:left; width:200px; height:200px; background-color:#7030a0;}
  </style>
  <div class="parent">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
  </div>
  ```

  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/903e0e6971db49258a0f9de1b7bed3c5~tplv-k3u1fbpfcp-zoom-1.image)

- box1 box2向右浮动，box3 box4向左浮动

  各自按照对应的方向排列。

  ```html
  <style>
    .parent{width:800px; height:400px; border:10px solid blue;}
  
    .box1{float:right; width:150px; height:100px; background-color:#ed7d31;}
    .box2{float:right; width:150px; height:80px; background-color:#70ad47;}
    .box3{float:left; width:150px; height:200px; background-color:#7030a0;}
    .box4{float:left; width:150px; height:150px; background-color: #9293a3;}
  </style>
  <div class="parent">
    <div class="box1">1</div>
    <div class="box2">2</div>
    <div class="box3">3</div>
    <div class="box4">4</div>
  </div>
  ```

  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/812bfbe1ab6d472ca41070728e03ab7f~tplv-k3u1fbpfcp-zoom-1.image)



### 3. 元素父级高度塌陷

当父级元素没有设置高度时，高度会由文档流内容撑开。

而当子元素浮动之后，脱离了文档流，所以父级高度不会被撑开，这对我们后续的布局结构会造成很多困扰。

解决高度塌陷方法：

- 方法1 -- 子元素加clear

  在浮动元素后面加一个空的子元素，并给其CSS属性*clear*；

  `<div style="clear:both"></div`

  clear取值： left 清除左浮动 | right 清除右浮动 | both 清除所有浮动

- 方法2 -- 父元素加宽高

  直接规定父元素的宽高，就不存在塌陷问题了。缺点是，得手动计算合适的宽高，并且扩展性不好。

- 方法3 -- 父元素BFC(Block formatting context)化

  父元素满足下列条件之一即可：

  - 根元素
  - float属性不为none
  - position不为static和relative
  - overflow不为visible（**较常用，通常设置overflow : hidden来解决高度塌陷**）
  - display为inline-block / table-cell / table-caption / flex / inline-flex

- 方法4 -- 父元素利用伪类after

  **当前最主流的方式**，利用伪元素，相当于给父级多加了一个子元素，同时我们可以将样式公用，所有需要清除浮动的父元素加上一个相同的class名*clear*就可以解决：

  ```css
  .clear{zoom: 1;}/*IE6,7不支持::after伪类，所以没法用下面的代码，这个神奇的zoom可以直接解决IE6,7的清除浮动问题*/
  .clear::after{ content: ""; display: block; clear:both; }
  ```
## 7.定位

### 1. 定位

`postion` 定位

可以让我们将元素从文档流中取出，然后使用方位词属性（`left top right bottom`）精准的控制它的位置。



### 2. 取值

| 值       | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| absolute | 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。 |
| fixed    | 生成绝对定位的元素，相对于浏览器窗口进行定位。               |
| relative | 生成相对定位的元素，相对于其正常位置进行定位。               |
| static   | 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。 |

- relative

  相对定位能让元素**保持原文本流位置**的同时，可以通过**方位属性**进行**相对于原位置**的偏移。

  （定位元素才有的方位属性： *top* | *bottom* | *left* | *right*，值一般使用px单位或%值。）

  - 特点

    > 不会脱离文档流
    >
    > 不影响元素本身的任何特性
    >
    > 如果不加方位词偏移那么没有任何影响

- absolute

  绝对定位能让元素脱离文档流（原地起飞...），使用方位属性相对于**最近的有定位的父级**元素进行偏移；

  **注意！方位属性初始值不是0，而是auto。**

  **方位属性left和top 优先级比 right和bottom高，比如一个元素既拥有left也拥有right，最终位置以left为准。**

  - 特点

    > 脱离文档流
    >
    > 元素宽高默认值为0
    >
    > 找不到最近的定位父级则相对于body标签
    >
    > 一般配合绝对定位使用
    >
    > margin:auto失效（不能直接设置）

- fixed

  固定定位能让元素脱离文档流，使用方位属性相对于**浏览器可视区**进行偏移；

  - 特点

    > 脱离文档流
    >
    > 元素宽高默认值为0
    >
    > margin:auto失效（不能直接设置）

### 3. 层级

定位元素之间，如果出现覆盖问题，那么越到后面的元素优先级越高，当然我们可以使用z-index层级属性来调整优先级。

> z-index属性只针对定位元素有效
>
> 取值为一个整数数字，默认0，可正可负

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4b8fe8f61ec3425385a3a236e6780c60~tplv-k3u1fbpfcp-zoom-1.image)

### 4. 盒子居中

使用定位让元素在父级中居中的方式：

```css
/*关键属性*/
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
```

或者：

```css
/*关键属性*/
position: absolute;
top: 50%;
left: 50%;
margin-left: -自身宽度一半;
margin-top: -自身高度一半;
```

## 8.弹性盒模型

### 1. 什么是弹性盒模型

传统布局基本依靠`display` `float` `position`来完成，有些特殊的布局写起来不太方便。

CSS3 弹性盒（ Flexible Box 或 flexbox），是一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式。引入弹性盒布局模型的目的是提供一种更加有效的方式来对一个容器中的子元素进行排列、对齐和分配空白空间。

### 2. 如何使用

为父级元素添加 `display: flex;` 或者 `display: inline-flex;` 。其子元素则可按照弹性盒模型的规则进行布局。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c27fb12131024092aa365f3647330c6b~tplv-k3u1fbpfcp-zoom-1.image)

### 3. flex子元素默认的展示方式

父级为弹性盒模型时，子元素默认有一些特殊的展示方式。当然我们可以通过后面的学习知道如何改变这些展示方式。

- 横向排列

  默认盒模型中，各子元素上下排列，弹性盒模型中，子元素**默认**按主轴从左到右**横向排列**。（可以通过属性改变主轴及主轴起点）

  ```html
  <style>
      *{ margin: 0; padding: 0;}
      #wrap{display: flex;width: 500px;height: 500px;border: 1px solid red;margin: 50px auto;}
      #wrap .d1{width: 100px;height: 200px;background-color: #99cc99;}
      #wrap .d2{width: 150px;height: 150px;background-color: #f60;}
      #wrap .d3{width: 200px;height: 200px;background-color: #1da6ba}
  </style>
  <div id="wrap">
      <div class="d1">1</div>
      <div class="d2">2</div>
      <div class="d3">3</div>
  </div>
  ```

  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2b90a3688c5547b28e70e66110bdc134~tplv-k3u1fbpfcp-zoom-1.image)
  
- 子元素总宽大于父级宽度，**默认不换行**，按比例缩放各个子元素的宽

  ```html
  <style>
      *{ margin: 0; padding: 0;}
      #wrap{display: flex;width: 500px;height: 300px;border: 1px solid red;margin: 50px auto;}
      /* d1实际宽 = 100/(100+200+300)*500=83.33  */
      #wrap .d1{width: 100px;background-color: #99cc99;}
      /* d2实际宽 = 200/(100+200+300)*500=166.67  */
      #wrap .d2{width: 200px;background-color: #f60;}
      /* d3实际宽 = 300/(100+200+300)*500=250  */
      #wrap .d3{width: 300px;background-color: #1da6ba}
  </style>
  <div id="wrap">
      <div class="d1">1</div>
      <div class="d2">2</div>
    <div class="d3">3</div>
  </div>
  ```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5a5e1c18da624baa8ab94505c65e4346~tplv-k3u1fbpfcp-zoom-1.image)

### 4. 父容器的属性

- flex-direction

  `flex-direction`属性决定主轴的方向，默认为`row`，即水平方向，起点在左。

  子项目按照主轴的方向从起点开始排列。

  - `row` ，默认值，水平主轴，起点在左；
  - `row-reverse`，水平主轴，起点在右；
  - `column`，垂直主轴，起点在上；
  - `column-reverse`，垂直主轴，起点在下。

  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/875be387d3df4abc942f9b4ead9a2405~tplv-k3u1fbpfcp-zoom-1.image)

- flex-wrap

  `flex-wrap`属性决定子元素主轴摆放不下的时候，项目换不换行，默认不换行。

  - `none` ，默认值，不换行；（摆放不下按比例缩放）
  - `wrap`，换行，第一排在最前；
  - `wrap-reverse`，换行，最后一排在最前。

  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/56f703498164461a8867c0669c699fa5~tplv-k3u1fbpfcp-zoom-1.image)

- flex-flow

  `flex-flow`属性是`flex-direction`和`flex-wrap`的缩写。

  默认值为`flex-flow: row none;`。

- justify-content

  `justify-content`属性定义子元素在主轴的对齐方式。

  - `flex-start`，默认值，起点对齐；
  - `flex-end`，终点对齐；
  - `center`，居中
  - `space-between`，两端对齐，中间间隔分均分配；
  - `space-around`，所有间隔分均分配，即所有子元素拥有相同的左右(上下)间隔。

  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d4c449fd5f9a4a2f9a0ed6f582a17edb~tplv-k3u1fbpfcp-zoom-1.image)

- align-items

  `align-items`定义子元素在副轴的对齐方式。

  - `flex-start`，副轴起点对齐；
  - `flex-end`，副轴终点对齐；
  - `center`，副轴居中对齐；
  - `baseline`，文本基线对齐
  - `stretch`，默认值，子元素如果没有设置高度(宽度)，占满整个容器。（如果全部子元素**都有**设置高度值，则表现和`flex-start`一致。）
  
  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e17212cd57f447ddaeb0d2611ee8d43c~tplv-k3u1fbpfcp-zoom-1.image)
  
- align-content

  `align-content`属性定义多主轴之间（也就是换行后行与行之间）的对齐方式。所以，如果子元素没有换行，这个属性就不起作用。

  - `flex-start`，副轴起点对齐；
  - `flex-end`，副轴终点对齐；
  - `center`，副轴居中对齐；
  - `space-between`，副轴两端对齐，中间平均分配；
  - `space-around`，每行之间间距平均分配；
  - `strecth`，默认值，如果子元素没有设置高度，则占满对应主轴。（其余5个值中，没有设置高度的子元素和该行最高的高度一样）

  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2eee5b6046dc40f89ac2e2ab677299db~tplv-k3u1fbpfcp-zoom-1.image)

### 5. 子元素的属性

- order

  `order`属性定义子元素（视觉上）的展示顺序，值为一个数字，越小越优先摆放。

- flex-grow

  `flex-grow`属性用于规定 主轴有剩余空间时 子元素增大的分配比例，默认为0，即不增大。

  ```html
  <style>
      *{ margin: 0; padding: 0;}
      .wrap{display: flex;width: 400px;height: 100px;margin: 20px auto;border: 1px solid red;font-size: 26px;font-weight: bolder;}
      .wrap .d1{width: 50px;background-color: #99cc99;}
      .wrap .d2{width: 150px;flex-grow: 1;background-color: #f60;}
      .wrap .d3{width: 50px;flex-grow: 2;background-color: #1da6ba;}
  </style>
  <div class="wrap">
      <div class="d1">1</div>
      <div class="d2">2</div>
      <div class="d3">3</div>
  </div>
  ```

  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8e1942a079f14e85ac2f7980d105c933~tplv-k3u1fbpfcp-zoom-1.image)

- flex-shrink

  `flex-shrink`属性用于规定 主轴空间不足时 子元素缩小的分配比例，默认为1，即分均分配来缩小。

  ```html
  <style>
      *{ margin: 0; padding: 0;}
      .wrap{display: flex;width: 400px;height: 100px;margin: 20px auto;border: 1px solid red;font-size: 26px;font-weight: bolder;}
      .wrap .d1{width: 150px;background-color: #99cc99;flex-shrink: 1;}
      .wrap .d2{width: 200px;background-color: #f60; flex-shrink: 1;}
      .wrap .d3{width: 250px;background-color: #1da6ba; flex-shrink: 2;}
  </style>
  <div class="wrap">
      <div class="d1">1</div>
      <div class="d2">2</div>
      <div class="d3">3</div>
  </div>
  ```

  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/02cd013f15fa47888c69ae9ea75a32db~tplv-k3u1fbpfcp-zoom-1.image)

- flex-basis

  `flex-basis`属性定义在分配空间之前，子元素占据的主轴空间大小。默认值`auto`即元素本来的大小。

- flex

  `flex`属性是`flex-grow` `flex-shrink` `flex-basis`的简写，默认值就是这三者的默认值`flex: 0 1 auto;`。最少需要写一个值，后两个值省略。
  
  `flex`有两个特殊值，`auto`相当于`1 1 auto`，`none`相当于`0 0 auto`。
  
  推荐使用优先使用这个属性，而不是单独写三个分解属性，因为浏览器会自动推算相关值。

- align-self

  `align-self`属性允许子元素自己规定自己的对齐方式。该属性默认继承父级的`align-items`，可以通过修改各自的`align-self`实现各个子元素不同的对齐方式。