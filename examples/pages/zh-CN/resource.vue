<style scoped>
  .page-resource {
    padding-top: 55px;
    box-sizing: border-box;
    
    .resource-placeholder {
      margin: 50px auto 100px;
      text-align: center;
      
      img {
        width: 150px;
      }
      
      h4 {
        margin: 20px 0 16px;
        font-size: 16px;
        color: #1f2f3d;
        line-height: 1;
      }
      
      p {
        margin: 0;
        font-size: 14px;
        color: #99a9bf;
        line-height: 1;
      }
    }
  }
  .cards {
    margin: 35px auto 110px;

    .container {
      @utils-clearfix;
      padding: 0;
      margin: 0 -11px;
      width: auto;
    }

    li {
      width: 33.33333%;
      padding: 0 11px;
      box-sizing: border-box;
      float: left;
      list-style: none;
    }
  }
  h2 {
    font-size: 28px;
    margin: 0;
  }
  p {
    font-size: 14px;
    color: #5e6d82;
  }
  .card {
    height: 394px;
    width: 100%;
    background:#ffffff;
    border:1px solid #eaeefb;
    border-radius:5px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    transition: bottom .3s;
    bottom: 0;

    img {
      margin: 75px auto 35px;
      height: 87px;
    }
    h3 {
      margin: 0 0 10px;
      font-size: 18px;
      color: #1f2f3d;
      font-weight: normal;
      height: 22px;
    }
    p {
      font-size: 14px;
      color: #99a9bf;
      padding: 0 30px;
      margin: 0;
      word-break: break-all;
      line-height: 1.8;
    }
    a {
      height: 42px;
      width: 190px;
      display: inline-block;
      line-height: @height;
      font-size: 14px;
      background-color: #409EFF;
      color: #fff;
      text-align: center;
      border: 0;
      padding: 0;
      cursor: pointer;
      border-radius: 2px;
      transition: all .3s;
      text-decoration: none;
      margin-top: 20px;
    }
  }
  @media (max-width: 850px) {
    .cards {
      li {
        max-width: 500px;
        float: none;
        margin: 10px auto 30px;
        width: 80%;
        .card {
          height: auto;
          padding-bottom: 20px;
        }
      }
      h3 {
        height: auto;
      }
    }
  }
</style>
<template>
  <div class="page-container page-resource">
    <h2>资源</h2>
    <!--<div class="resource-placeholder">-->
      <!--<img src="~examples/assets/images/resource-placeholder.svg" alt="">-->
      <!--<h4>整理中</h4>-->
      <!--<p>设计资源正在整理和完善中</p>-->
    <!--</div>-->
    
    <p>设计资源正在整理和完善中</p>
    <div class="cards">
      <ul class="container">
        <li>
          <div class="card">
            <img src="~examples/assets/images/Axure-Components.svg" alt="">
            <h3>Axure Components</h3>
            <p>通过在 Axure 中导入 Element 组件库，可以在交互设计阶段方便地调用常用的组件</p>
            <a href="https://github.com/ElementUI/Resources/raw/master/Element_Components_v2.0.0.rplib">下载</a>
          </div>
        </li>
        <li>
          <div class="card">
            <img src="~examples/assets/images/Sketch-Template.svg" alt="">
            <h3>Sketch Template</h3>
            <p>从 Element Template 快速调用常用组件，在提升设计效率的同时，保证统一的视觉风格</p>
            <a href="https://github.com/ElementUI/Resources/raw/master/Element%20UI%20Kit_v2.0.sketch">下载</a>
          </div>
        </li>
        <!--<li>-->
          <!--<div class="card">-->
            <!--<img src="~examples/assets/images/Module.svg" alt="">-->
            <!--<h3>组件交互文档</h3>-->
            <!--<p>进一步查看 Element 交互文档，从一个较为微观的角度详细地了解各个组件的交互细节</p>-->
            <!--<a href="https://github.com/ElementUI/Resources/raw/master/Element%20Components%20Documentation.zip">下载</a>-->
          <!--</div>-->
        <!--</li>-->
      </ul>
    </div>
  </div>
</template>
