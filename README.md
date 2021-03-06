# ForShop 購物網站 FrontEnd

[DEMO](https://austindrum.github.io/forshop_frontend/#/)

ForShop_FrontEnd 是一個使用 Vue 建立的電子商務前端專案，平台使用者主要是下列兩種身份，分別為一般消費者（Visitor）、商家管理員（Admin），搭配 [ForShop-Backend](https://github.com/Austindrum/forshop_backend) 後端專案，打造一個全方位的電商網站。

## 使用技術

- 利用 [Vue.js](https://vuejs.org/) 搭配 [Vue CLI](https://cli.vuejs.org/) 建立專案
- 利用 [axios](https://github.com/axios/axios) 處理 AJAX 請求，獲取後端資料
- 利用 [Bootstrap 4](https://getbootstrap.com/) 建立畫面 UI ，具備響應式設計
- 利用 [VeeValidate](https://vee-validate.logaretm.com/v3) 處理表單驗證
- 利用 [vue-sweetalert2](https://github.com/avil13/vue-sweetalert2) 設置提示訊息，提升使用者體驗
- 利用 [AOS](https://michalsnik.github.io/aos/) 製作視差滾動

## 特色介紹

**前台**
1. 包含Landing Page、商城、商品分類頁、商品細節頁等頁面  
![image](https://github.com/Austindrum/forshop_frontend/blob/master/git1.png)
2. 具備關聯商品、專欄空間、分店簡介等多元區塊  
![image](https://github.com/Austindrum/forshop_frontend/blob/master/git2.png)  
  
![image](https://github.com/Austindrum/forshop_frontend/blob/master/git3.png)
3. 擁有具互動性的購物車、願望清單系統  
![image](https://github.com/Austindrum/forshop_frontend/blob/master/git4.png)  
  
![image](https://github.com/Austindrum/forshop_frontend/blob/master/git5.png)
4. 具有資料驗證、確認下單等功能  
![image](https://github.com/Austindrum/forshop_frontend/blob/master/git6.png)  
  
![image](https://github.com/Austindrum/forshop_frontend/blob/master/git7.png)

**後台**
1. 可進行商品的新增、修改、刪除等操作  
![image](https://github.com/Austindrum/forshop_frontend/blob/master/git8.png) 
  
![image](https://github.com/Austindrum/forshop_frontend/blob/master/git9.png) 
2. 可管理訂單  
![image](https://github.com/Austindrum/forshop_frontend/blob/master/git10.png) 
3. 具備使用者驗證機制，以確保操作安全

---


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
