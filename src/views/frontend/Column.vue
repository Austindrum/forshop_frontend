<template>
  <div class="top-margin">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="$router.push('/shop/home')">首頁</a>
        </li>
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="$router.push('/shop/columns')">專欄</a>
        </li>
        <li class="breadcrumb-item active">{{ column.title }}</li>
      </ol>
    </nav>
    <div class="text-left pt-5">
      <h2 class="h4">
        <strong>{{ column.title }}</strong>
      </h2>
      <p class="text-muted">{{ column.time }}</p>
    </div>
    <div
     class="jumbotron jumbotron-fluid bg-img"
     :style= "{'background-image': 'url(' + column.img + ')'}"></div>
    <div class="container column-content text-left">
      <div class="mb-2">
         <p>{{ column.preface }}</p>
      </div>
      <div class="mb-4" v-for="(paragraph, index) in column.content" :key="index">
        <div class="mb-2">
          <span></span>
          <h3 class="h5 ml-3">{{ paragraph.subtitle }}</h3>
        </div>
        <p>{{ paragraph.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columnId: '',
      column: {},
      columns: [
        {
          id: 'second-hand-clothes-recycle',
          title: '【苗栗首間】日本快時尚眼鏡品牌JINS進駐!',
          time: '2021/02/05',
          img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2-2021-02-05-113833-1612496451.jpg?resize=768:*',
          preface: '日本時尚眼鏡品牌JINS進駐尚順購物中心1樓，成為首間進駐苗栗地區的日本快時尚眼鏡品牌，尚順購物中心有全台最大的室內主題樂園，周邊還有商業設施、娛樂設施、飯店等，吸引各年齡層顧客造訪，為了服務商場的廣大消費者，JINS帶來上千種眼鏡墨鏡，還於開幕特別推出疫情期間口罩族最貼心的必備品「防霧鏡片」，並且於現場設置體驗道具，讓民眾親手體驗防霧鏡片的特色。',
          content: [
            {
              subtitle: '鏡片鍍膜全面升級 不加價！',
              text: '迎新春，JINS鏡片鍍膜將全面升級不加價！一般型鏡片增加了抗刮、防靜電、防潑水等功能，最人氣的日製鏡片也將抗刮功能再強化。鏡片鍍膜升級後，更容易清潔髒汙，使用上更加輕鬆舒適。為了讓大家搶在年前換副新眼鏡好過年，2/4(四)-2/16(二)配鏡並升級濾藍光鏡片、防霧鏡片，就享9折優惠！2/1(一)-2/16(二) 買兩支眼鏡再抽IPHONE12！',
            },
            {
              subtitle: 'JINS新春賀喜 買兩副眼鏡抽IPHONE 12',
              text: '日本時尚眼鏡品牌JINS與大家迎新年，祭出多重優惠！新春2/10(三)-2/16(二)期間購買兩支眼鏡或墨鏡現折NT666元， 此外，還有每年都不能錯過的春節抽獎活動！2/1(一)-2/16(二)購買兩支眼鏡或墨鏡，並追蹤JINS Taiwan官方IG 就有機會獲得IPHONE 12、兩副眼鏡全單1元(不含升級鏡片)等驚喜大獎，還有AirPods Pro、小米手環5、全家禮物卡、小米行動電源、濾藍光眼鏡盒裝商品等豐富獎項，讓你以全新面貌迎接新春新氣象！',
            },
            {
              subtitle: '「喝一口美好」JINS聯手全家超商 買眼鏡再贈Let\'s Café',
              text: '喜愛多元異業合作的JINS，今年新春活動聯手全家超商，2/1(一)-2/16(二)購買兩支眼鏡或墨鏡，並追蹤JINS Taiwan官方IG，再贈兩張全家Let\'s Café中杯熱拿鐵咖啡卡，2/10(三)-2/23(二)至全台全家購買Let\'s Café，還可於發票末聯獲得JINS 300元優惠券，讓大家買眼鏡的同時也可與親朋好友一起分享，喝到暖心美好的Let\'s Café。',
            },
            {
              subtitle: '【JINS尚順購物中心店】',
              text: '電話：037-595-663   地址：苗栗縣頭份市育樂街8號1樓 (JINS尚順購物中心店1F)',
            },
          ],
        },
        {
          id: 'fashion-problem',
          title: '2021新年返鄉怎麼打包？超實用輕旅行「行李收納術」衣服這樣摺最省空間！',
          time: '2021/02/03',
          img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fotojet-3-1612347661.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*',
          preface: '農曆新年倒數，想好走春、拜年要穿什麼了嗎？行李打包最重要的關鍵點，正是取決於這趟旅行的行程：要去哪裡？去幾天？要穿戴什麼？整理行囊前，請先在心裡盤算好預計離家外出天數，並將物品分類為「必要的」和「想要的」，諸如充電器、藥品、私密衣物等必備物品先列好，衣服配件最好可以重複搭配，當你把東西都整理好攤出來後，接下來就要進行「分類」這個重頭戲了！',
          content: [
            {
              subtitle: '行李箱挑選指南',
              text: '0吋：適合1～3天小旅行。22吋：如果東西較多，建議選22吋，或是搭配後揹包一起帶。24吋：適合4～6天輕旅行。26吋：亞洲地區短程出國或是一週輕旅行適用，熱愛購物的朋友，可另外攜帶旅行袋搭配使用。',
            },
            {
              subtitle: '行李打包秘訣',
              text: '沉重的東西要先放！撇除貴重物品之外，越重的物品請先從行李箱靠近滾輪的位置開始放，如此一來，當行李拎起來的時候，才不會壓壞下方較輕的物品。',
            },
            {
              subtitle: '衣服收納秘訣_1',
              text: '有一派人認為用捲的更省空間，但其實如果你能將衣服摺疊得很平整，攤得越平反而更能裝，且較不容易皺。不過話又說回來，雞蛋捲收納法的確有好處，可以按衣物顏色排列，有利於迅速找到衣服也更容易拿取。',
            },
            {
              subtitle: '衣服收納秘訣_2',
              text: '再更進階一點，可以使用旅行用拉鍊收納袋分裝，將同類型或是同材質的衣物放置一起，有條不紊的，除了看起來心情特別好，也會發現原來行李箱有這麼多隱藏空間可以裝！',
            },
          ],
        },
        {
          id: 'Shimokitazawa',
          title: '下北澤攻略！日本古著聖地',
          time: '2020/06/09',
          img: 'https://images.unsplash.com/photo-1504583557080-9d04d0ba1304?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          preface: '東京旅遊時，想逛古著、二手雜貨及古董，就一定不能錯過熱鬧無比的下北澤。和一般跳蚤市場的印象不同，下北澤深受年輕族群喜愛，有很多劇場、Live House、文青小店和餐廳，每年六月還會舉辦音樂祭典。從車站以北和以南的商店街延伸出去，有各種特色店家等你來發掘！',
          content: [
            {
              subtitle: '逛到腿軟的二手衣、古著店',
              text: '多元文化並存的下北澤，街道上總是能看到形形色色、打扮前衛、毫不在意他人眼光的潮男潮女，無論是刷舊牛仔褲、大翻領復古襯衫、華麗歌德洋裝、清新森林系，在下北澤，的每個人都能自在表現自我風格。車站北口的古著街區堪稱是一級戰區，走進去發現簡直像個小型迷宮！店外常有一排排鮮豔亮麗的古著洋裝，從連身裙、長洋裝到風衣等一應俱全。往內走還有多家販售古著男靴的店家，以及帽子、首飾等配件。在古著街區裡挖寶最大的樂趣，在於每種商品都只有一件，而你永遠不知道會在這眼花撩亂的古著山裡找到什麼寶貝！',
            },
            {
              subtitle: '善待每一件古著 看見衣服的不同面貌',
              text: '許多古著因為保存得十分好，根本看不出來是二手商品。無論是大眾品牌，或是一些有個性的服飾，衣服品質都被把關地相當好，價位也有所區隔。也因為品質佳，所以不少明星藝人也都會來這裡挑選好貨回。多元的服飾種類，眼花撩亂的店鋪，也激發人們的穿搭想法。漫步在下北澤，舊衣也能是生活中的迷人存在。',
            },
          ],
        },
      ],
    };
  },
  created() {
    this.columnId = this.$route.params.id;
    this.column = this.columns.find((item) => item.id === this.columnId);
  },
};
</script>

<style lang="scss" scoped>
  .breadcrumb {
    font-size: 0.8rem;
    background-color: transparent;
    padding-left: 0;
  }
  .bg-img {
    background-size: cover;
    background-position: center center;
    height: 70vh;
    max-height: 350px;
  }
  .column-content {
    span {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        width: 0.4rem;
        background-color: #ffa010;
      }
    }
    h3 {
      display: inline;
      font-weight: bolder;
    }
    p {
      line-height: 1.8rem;
    }
  }
  @media (max-width: 992px) {
    .top-margin {
      margin-top: 3rem;
    }
  }
  @media (max-width: 576px) {
    .bg-img {
      height: 30vh;
    }
  }
</style>
