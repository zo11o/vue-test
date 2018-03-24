<template class="RoomDetail">
  <div class="box">
    <header class="header">
      <div class="home_banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../assets/image/room.png">
            </div>
            <div class="swiper-slide">
                <img src="../assets/image/room.png">
            </div>
            <div class="swiper-slide">
                <img src="../assets/image/room.png">
            </div>
          </div>
        </div>
      </div>
      <!-- <img src="../assets/image/room.png" alt="11"> -->
    </header>
    <article class="main">
      <section class="section section-info">
        <div class="title">
          <span>温馨宜家甜蜜两房公寓</span>
        </div>
        <div class="title-sub">
          <span>38m³ / 两房一厅 / 4人</span>
        </div>
        <div class="title-tag">
            <span class="title-tag-item">房源紧张</span>
            <span class="title-tag-item">精致小巧</span>
            <span class="title-tag-item">舒适优雅</span>
        </div>
      </section>
      <section class="section section-detail">
        <div class="title detail-title">房型信息</div>
        <div class="detail">
          <div class="left">
            <ul class="info-left">
              <li>面积</li>
              <li>楼层</li>
              <li>窗户</li>
              <li>加床</li>
              <li>早餐</li>
            </ul>
            <ul class="info-right">
              <li>98-106M²</li>
              <li>5-23层</li>
              <li>部分有窗</li>
              <li>可加床 ¥184 / 张</li>
              <li>赠2份 ¥58 / 份</li>
            </ul>
          </div>
          <div class="right">
            <ul class="info-left">
              <li>无烟</li>
              <li>房屋结构</li>
              <li>房屋结构</li>
              <li>房屋结构</li>
            </ul>
            <ul class="info-right">
              <li>可做无烟处理</li>
              <li>2室一厅</li>
              <li>4人</li>
              <li>大床 2 张</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="section section-detail">
        <div class="title detail-title">服务设施</div>
        <div class="server-container">
          <div class="item item-1">
            <img src="../assets/image/icon-childrenspark.png" alt="">
            <p>儿童乐园</p>
          </div>
          <div class="item item-2">
            <img src="../assets/image/icon-childrenspark.png" alt="">
            <p>儿童乐园</p>
          </div>
          <div class="item item-3">
            <img src="../assets/image/icon-childrenspark.png" alt="">
            <p>儿童乐园</p>
          </div>
          <div class="item item-4">
            <img src="../assets/image/icon-childrenspark.png" alt="">
            <p>儿童乐园</p>
          </div>
          <div class="item item-5">
            <img src="../assets/image/icon-childrenspark.png" alt="">
            <p>儿童乐园</p>
          </div>
          <div class="item item-6">
            <img src="../assets/image/icon-childrenspark.png" alt="">
            <p>儿童乐园</p>
          </div>
          <div class="item item-7">
            <img src="../assets/image/icon-childrenspark.png" alt="">
            <p>儿童乐园</p>
          </div>
          <div class="item item-8">
            <img src="../assets/image/icon-childrenspark.png" alt="">
            <p>儿童乐园</p>
          </div>
        </div>
      </section>
      <section class="section section-detail">
        <div class="title detail-title">入户须知</div>
        <div class="tips-wrap">
          <div class="in-tips">
            <ul class="info-left">
              <li>入房时间</li>
              <li>退房时间</li>
              <li>前台服务时间</li>
              <li>客房服务时间</li>
              <li>入住押金</li>
              <li>房屋守则</li>
            </ul>
            <ul class="info-right">
              <li>14：00</li>
              <li>12：00</li>
              <li>07：00-22：00</li>
              <li>08：30-17：00</li>
              <li>一晚房费</li>
              <li>提供发票和水单（免费）、禁止携带宠物</li>
              <li>提供吸烟房、24小时安保服务、接待外宾</li>
            </ul>
          </div>
        </div>
      </section>
      <div class="copyright">
        最终解释权归酒店所有
      </div>
    </article>
    <footer class="footer">
      <div class="footer-wrap">
        <div class="money">
          <span class="money-value">¥ 900</span> 起
        </div>
        <div class="submit-btn">
          电话预订
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Swiper from './../../static/js/swiper-4.1.6.min.js'
// import $ from 'jquery'
export default {
  name: 'RoomDetail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      see: true,
      counter: 0
    }
  },

  methods: {
    hello () {
      console.log(this.msg)
    }
  },

  mounted () {
    var swiper1 = new Swiper('.home_banner .swiper-container', {
      direction: 'horizontal',
      loop: true,
      grabCursor: true,
      pagination: {
          el: '.swiper-pagination',
      }
    });
    // Swiper 推荐课程
    // var swiper2 = new Swiper('.course_swiper_wrap .swiper-container', {
    //   slidesPerView: 3,
    //   paginationClickable: true,
    //   nextButton: '.swiper-button-next-01',
    //   prevButton: '.swiper-button-prev-01',
    //   spaceBetween: 30,
    //   freeMode: true,
    //   loop: true
    // });
  }
}
</script>

<style>
  html {
    font-size: 12px;
  }
</style>

<style scoped>
@import url("../../static/style/swiper-4.1.6.min.css");
.box {
  background-color: rgba(247, 247, 247, 1)
}
.header img{
  width: 100%;
}
.main {
  margin-bottom: 6.2rem;
}
.section {
  background-color: #fff;
  border-radius: 6px;
  margin: 0 21px 0 21px;
  margin-bottom: 0.83rem;
  /* padding: 1rem 0.83rem; */
  position: relative;
  z-index: 1;
}
.section.section-info {
  margin-top: -2.92rem;
  display: flex;
  flex-direction: column;
  padding: 1.12rem 0.87rem;
}
.section.section-info .title {
  font-size: 1.25rem;
  font-weight: 900;
}
.section.section-info > div:not(:last-child) {
  margin-bottom: 1rem;
}
.section.section-info .title-sub{
  color: rgba(157, 157, 157, 1);
  line-height: 1;
}
.section.section-info .title-tag{
  display: flex;
  flex-direction: row;
  font-size: .8rem;
}
.section.section-info .title-tag-item {
  border: 1px solid #ed6451;
  color: rgba(237, 110, 81, 1);
  padding: 1px 4px;
  border-radius: 5px 5px 5px 0;
}
.section.section-info .title-tag-item:not(:last-child) {
  margin-right: 1.16rem;
}
.detail-title {
  font-size: 1.14rem;
  padding: 1.16rem .92rem;
  position:relative;
  color: #333333;
  font-weight: 500;
}
.section-detail .title:after {
    content: "";
    height: 0;
    display: block;
    border-bottom: 1px solid #ddd;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
}
.section-detail .detail {
  display: flex;
  padding: 1.16rem .92rem;
  /* justify-content: space-between; */
}
.section-detail .detail .left {
  width:50%;
  display: flex;
}
.section-detail .detail .info-left {
  color: #999999;
  margin-right: 1.7rem;
}
.section-detail .detail .right {
  width:50%;
  display: flex;
}
.section-detail .detail ul li {
  display: block;
  margin-bottom: 1.18rem;
}
.server-container {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 6.82rem 6.82rem;
  justify-items: center;
  align-items: center;
  text-align: center;
}
.server-container img{
  width: 2rem;
  height: 2rem;
  margin-bottom:.5rem;
}
.section .tips-wrap {
  padding: 1.16rem .92rem;
}
.section .in-tips {
  display: flex;
  flex-direction: row;
}
.section .in-tips .info-left {
  margin-right: 1.16rem;
  color: #999999;
}
.section .in-tips ul li {
  margin-bottom: 1.18rem;
}
.main .copyright {
  text-align: center;
  padding: 0 0 1rem 0;
  color: #999999;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;  
}
.footer-wrap {
  /* width:100%; */
  height: 6.2rem;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 12px;
  font-size: 1.5rem;
  align-items: center;
}
.footer-wrap .money-value {
  font-weight: 900;
}
.footer-wrap .submit-btn {
  color: #ffffff;
  background-color: #3a5147;
  padding: .5rem .7rem;
  font-weight: 300;
  border-radius: .3rem;
}
</style>
