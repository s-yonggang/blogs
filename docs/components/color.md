# Color

快速复制颜色及class

### 主题色
我们内置了一个色盘供您选择 

```js
<color color="#fa541c"/>
<color color="#fadb14"/>
<color color="#3eaf7c"/>
<color color="#13c2c2"/>
<color color="#1890ff"/>
<color color="#722ed1"/>
<color color="#eb2f96"/>
```

<color color="#fa541c"/>
<color color="#fadb14"/>
<color color="#3eaf7c"/>
<color color="#13c2c2"/>
<color color="#1890ff"/>
<color color="#722ed1"/>
<color color="#eb2f96"/>

### 功能色
除了主题色，系统还有一些功能性颜色，分别为：成功色、警告色和错误色。默认色值分别为：
|   名称   |         success          |         warning          |           error           |
| :------: | :----------------------: | :----------------------: | :-----------------------: |
|   色值   |       ``#52c41a``        |       ``#faad14``        |        ``#f5222d``        |
|   颜色   | <color color="#52c41a"/> | <color color="#faad14"/> | <color color="#f5222d" /> |
| less变量 |      @success-color      |      @warning-color      |       @error-color        |


### antd 的色系
除了以上颜色，我们还引入了 ant-design 内置的色系。如下：

<table style="text-align: center">
  <tr>
    <th>色系</th>
    <th>类型</th>
    <th>颜色</th>
  </tr>
  <tr>
    <td rowspan="2">blue/拂晓蓝</td>
    <td>色盘</td>
    <td >
      <color-list
       :colors="['#e6f7ff', '#bae7ff', '#91d5ff', '#69c0ff', '#40a9ff', '#1890ff', '#096dd9', '#0050b3', '#003a8c', '#002766']" 
      />
    </td>
  </tr>
  <tr>
    <td>less变量</td>
    <td>
      <code>@blue-1</code>、
      <code>@blue-2</code>
      <code>...</code>
      <code>@blue-10</code>
    </td>
  </tr>
  <tr>
    <td rowspan="2">purple/酱紫</td>
    <td>色盘</td>
    <td>
      <color-list
       :colors="['#f9f0ff', '#efdbff', '#d3adf7', '#b37feb', '#9254de', '#722ed1', '#531dab', '#391085', '#22075e', '#120338']" 
      />
    </td>
  </tr>
  <tr>
    <td>less变量</td>
    <td>
      <code>@purple-1</code>、
      <code>@purple-2</code>
      <code>...</code>
      <code>@purple-10</code>
    </td>
  </tr>
  <tr>
    <td rowspan="2">cyan/明青</td>
    <td>色盘</td>
    <td>
      <color-list
       :colors="['#e6fffb', '#b5f5ec', '#87e8de', '#5cdbd3', '#36cfc9', '#13c2c2', '#08979c', '#006d75', '#00474f', '#002329']" 
      />
    </td>
  </tr>
  <tr>
    <td>less变量</td>
    <td>
      <code>@cyan-1</code>、
      <code>@cyan-2</code>
      <code>...</code>
      <code>@cyan-10</code>
    </td>
  </tr>
  <tr>
    <td rowspan="2">green/极光绿</td>
    <td>色盘</td>
    <td>
      <color-list
       :colors="['#f6ffed', '#d9f7be', '#b7eb8f', '#95de64', '#73d13d', '#52c41a', '#389e0d', '#237804', '#135200', '#092b00']" 
      />
    </td>
  </tr>
  <tr>
    <td>less变量</td>
    <td>
      <code>@green-1</code>、
      <code>@green-2</code>
      <code>...</code>
      <code>@green-10</code>
    </td>
  </tr>
  <tr>
    <td rowspan="2">magenta/法式洋红</td>
    <td>色盘</td>
    <td>
      <color-list
       :colors="['#fff0f6', '#ffd6e7', '#ffadd2', '#ff85c0', '#f759ab', '#eb2f96', '#c41d7f', '#9e1068', '#780650', '#520339']" 
      />
    </td>
  </tr>
  <tr>
    <td>less变量</td>
    <td>
      <code>@magenta-1</code>、
      <code>@magenta-2</code>
      <code>...</code>
      <code>@magenta-10</code>
    </td>
  </tr>
  <tr>
    <td rowspan="2">red/薄暮</td>
    <td>色盘</td>
    <td>
      <color-list
       :colors="['#fff1f0', '#ffccc7', '#ffa39e', '#ff7875', '#ff4d4f', '#f5222d', '#cf1322', '#a8071a', '#820014', '#5c0011']" 
      />
    </td>
  </tr>
  <tr>
    <td>less变量</td>
    <td>
      <code>@red-1</code>、
      <code>@red-2</code>
      <code>...</code>
      <code>@red-10</code>
    </td>
  </tr>
  <tr>
    <td rowspan="2">orange/日暮</td>
    <td>色盘</td>
    <td>
      <color-list
       :colors="['#fff7e6', '#ffe7ba', '#ffd591', '#ffc069', '#ffa940', '#fa8c16', '#d46b08', '#ad4e00', '#873800', '#612500']" 
      />
    </td>
  </tr>
  <tr>
    <td>less变量</td>
    <td>
      <code>@orange-1</code>、
      <code>@orange-2</code>
      <code>...</code>
      <code>@orange-10</code>
    </td>
  </tr>
  <tr>
    <td rowspan="2">yellow/日出</td>
    <td>色盘</td>
    <td>
      <color-list
       :colors="['#feffe6', '#ffffb8', '#fffb8f', '#fff566', '#ffec3d', '#fadb14', '#d4b106', '#ad8b00', '#876800', '#614700']" 
      />
    </td>
  </tr>
  <tr>
    <td>less变量</td>
    <td>
      <code>@yellow-1</code>、
      <code>@yellow-2</code>
      <code>...</code>
      <code>@yellow-10</code>
    </td>
  </tr>
  <tr>
    <td rowspan="2">volcano/火山</td>
    <td>色盘</td>
    <td>
      <color-list
       :colors="['#fff2e8', '#ffd8bf', '#ffbb96', '#ff9c6e', '#ff7a45', '#fa541c', '#d4380d', '#ad2102', '#871400', '#610b00']" 
      />
    </td>
  </tr>
  <tr>
    <td>less变量</td>
    <td>
      <code>@volcano-1</code>、
      <code>@volcano-2</code>
      <code>...</code>
      <code>@volcano-10</code>
    </td>
  </tr>
  <tr>
    <td rowspan="2">geekblue/极客蓝</td>
    <td>色盘</td>
    <td>
      <color-list
       :colors="['#f0f5ff', '#d6e4ff', '#adc6ff', '#85a5ff', '#597ef7', '#2f54eb', '#1d39c4', '#10239e', '#061178', '#030852']" 
      />
    </td>
  </tr>
  <tr>
    <td>less变量</td>
    <td>
      <code>@geekblue-1</code>、
      <code>@geekblue-2</code>
      <code>...</code>
      <code>@geekblue-10</code>
    </td>
  </tr>
  <tr>
    <td rowspan="2">lime/青柠</td>
    <td>色盘</td>
    <td>
      <color-list
       :colors="['#fcffe6', '#f4ffb8', '#eaff8f', '#d3f261', '#bae637', '#a0d911', '#7cb305', '#5b8c00', '#3f6600', '#254000']" 
      />
    </td>
  </tr>
  <tr>
    <td>less变量</td>
    <td>
      <code>@lime-1</code>、
      <code>@lime-2</code>
      <code>...</code>
      <code>@lime-10</code>
    </td>
  </tr>
  <tr>
    <td rowspan="2">gold/金盏花</td>
    <td>色盘</td>
    <td>
      <color-list
       :colors="['#fffbe6', '#fff1b8', '#ffe58f', '#ffd666', '#ffc53d', '#faad14', '#d48806', '#ad6800', '#874d00', '#613400']" 
      />
    </td>
  </tr>
  <tr>
    <td>less变量</td>
    <td>
      <code>@gold-1</code>、
      <code>@gold-2</code>
      <code>...</code>
      <code>@gold-10</code>
    </td>
  </tr>
</table>