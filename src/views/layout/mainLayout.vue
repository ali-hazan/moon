<template>
  <a-layout has-sider>
    <a-layout-sider
      v-model:collapsed="collapsed"
      :style="{
        overflow: 'auto',
        height: '90vh',
        position: 'fixed',

        left: '16px',
        top: '16px',
        bottom: '16px',
        borderRadius: '48px',
        overflowX: 'hidden',
      }"
    >
      <div>
        <div class="logo-wrapper">
          <img src="@/assets/logo.png" alt="Alchemi" class="logo" /> <span></span>
        </div>

        <a-menu
          v-model:selectedKeys="selectedKeys"
          mode="inline"
          style="margin-top: 8px"
        >
          <a-menu-item key="1">
            <user-outlined />
            <span class="nav-text">nav 1</span>
          </a-menu-item>
       
        </a-menu>
      </div>

      <div class="nav-collapse-btn" @click="collapsed = !collapsed">
        <right-circle-outlined v-if="collapsed" />
        <left-circle-outlined v-else />
      </div>
    </a-layout-sider>
    <a-layout
      :style="collapsed ? { marginLeft: '96px' } : { marginLeft: '216px' }"
    >
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <router-view />
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        AlchemiDigit ©2022 
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
  RightCircleOutlined,
  LeftCircleOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
    RightCircleOutlined,
    LeftCircleOutlined,
  },

  setup() {
    return {
      collapsed: ref(true),
      selectedKeys: ref(["4"]),
    };
  },
});
</script>
<style>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
.ant-layout-sider-children {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.nav-collapse-btn {
  border: none !important;
  margin-bottom: 28px;
  font-size: 22px;
}
.nav-collapse-btn:hover {
  color: red;
}
.logo-wrapper {
  background-color: #000;
  padding-top: 12px;
  padding-bottom: 18px;
}
.logo {
  width: 28px;
}
</style>