<template>
  <div class="nav-bar">
    <div class="inner">
      <div class="logo">
        <div class="img">
          <img
            src="https://img.alicdn.com/imgextra/i4/2677240814/O1CN01L4Yoht1Hsr1zxxoJs_!!2677240814.png"
            alt=""
          />
        </div>
        <router-link to="/"
          ><span style="color: #393e46">BigTail</span></router-link
        >
      </div>
      <div class="guide">
        <router-link v-for="item in guideList" :key="item.id" :to="item.path"
          ><span>{{ item.name }}</span></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      guideList: [
        { id: "guide1", name: "Archives", path: "/archives" },
        { id: "guide2", name: "Notes", path: "/notes" },
      ],
    };
  },
};
</script>

<style lang='less' scoped>
.nav-bar {
  width: 100%;
  height: 100px;
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
  .inner {
    position: relative;
    align-items: center;
    margin: 0 auto;
    width: 1400px;
    height: 100px;
    .logo {
      position: absolute;
      left: 50px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      .img {
        margin-right: 16px;
        width: 80px;
        img {
          display: block;
          width: 100%;
        }
      }

      span {
        cursor: pointer;
        font-family: "Microsoft YaHei";
        font-size: 30px;
        font-weight: 700;
      }
    }
    .guide {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 70%;
      display: flex;
      align-items: center;
      text-decoration: none;
      span {
        display: inline-block;
        padding: 10px 30px;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        color: #393e46;
      }
    }
    a {
      text-decoration: none;
    }
  }
}
</style>