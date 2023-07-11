<template>
  <main class="home" aria-labelledby="main-title" onselectstart="return false;">
    <header class="hero">
      <canvas width="48" height="48" 
        @click="alert('Bottoms up!')"
        @dblclick="startAnimation()"
        @mouseout="nextFrame()" ref="canvas">
      </canvas>
        
      <Alert @setMsg='alert' :msg="msg"/>

      <h1 v-if="data.heroText !== null" id="main-title">{{ data.heroText || $title || '无题' }}</h1>

      <p class="description">
        {{ data.tagline || $description || '导读不见了呢' }}
      </p>

      <p class="action" v-if="data.actionText && data.actionLink">
        <NavLink class="action-button" :item="actionLink"/>
      </p>
    </header>

    <div class="features" v-if="data.features && data.features.length">
      <div class="feature" v-for="(feature, index) in data.features" :key="index">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content class="theme-default-content custom"/>

    <div class="footer" v-if="data.footer">
      {{ data.footer }}
    </div>
  </main>
</template>

<script>
import NavLink from '@vuepress/theme-default/components/NavLink.vue'

export default {
  components: { NavLink },
  data(){
    return {
      msg:'',
      frameSpeed: 0,
      frameItem: 0,
      frames:[]
    }
  },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  },
  methods:{
    alert(m){
      return this.msg = m
    },
    nextFrame(){
      if(!this.frameSpeed) this.frameItem++
    },
    startAnimation(){
      if(this.frameSpeed < 3){
        console.log(`fps ${8*(++this.frameSpeed)}`)
        setInterval(()=>{
          this.frameItem++
        },125)
      }else{
        console.log(`播放速度已达上限`)
      }
    }
  },
  mounted(){
    const ctx = this.$refs.canvas.getContext("2d"),
      cd = {
        j: [140,201,240],
        k: [75,23,70],
        l: [251,137,154],
        m: [139,83,92],
        n: [251,183,145],
        o: [68,136,208],
        p: [253,240,197],
        q: [179,0,34],
        r: [248,36,53],
        s: [239,134,27],
        a: [252,202,53],
        b: [99,151,97],
        c: [102,169,208],
        d: [87,73,101],
        e: [75,29,76],
        f: [231,149,161],
        g: [251,209,216],
        h: [255,255,255],
        i: [169,163,189]
      }
    ctx.fillStyle = `rgb(${cd.j.toString()})`
    ctx.fillRect(0,0,48,40)
    ctx.fillStyle = `rgb(${cd.i.toString()})`
    ctx.fillRect(0,40,48,48)
    const px = ctx.getImageData(0,0,48,48)
    const fillPx = (rgbArray,pxpoints) => {
      let last = -1,p
      for (p of pxpoints) {
        p = p || last + 1
        ;[px.data[p*4], px.data[p*4 + 1], px.data[p*4 + 2]] = rgbArray
        last = p
      }
    }
    const firstFrameInit = time => {
      fillPx(cd.k,[1462])
      fillPx(cd.l,[1318,,1327,,1370,,,,1418,,,,])
      fillPx(cd.m,[1271,,,1276,,,,1415,1467,,1471,1514,1561])
      fillPx(cd.n,[1129,1177,1181,1223,1231,1469,,1516,1605,1651,,1799,1848,1850,1896,1899,1947])
      fillPx(cd.o,[1028,,1077,1091,1093,1095,1141,,1187,,,1235,1606,,1614,1653,,1656,,1666,1700,,1715,1748,1757,,1806,1854,,])
      fillPx(cd.p,[1081,1085,1224,,,,,,,1274,,1320,,,,,,,1367,,,1374,,1416,,1422,,1603,,1846,,1849,1894,,1897,,1942,,1945,,1990,1993,,])
      fillPx(cd.q,[848,,1458,,,,1508,,,,1662,1709,,])
      fillPx(cd.r,[700,,747,,,795,,,,802,,,,,843,,850,,,,,898,,,,,948,,,997,,1046,1238,1286,1334,,1382,,1430,,1457,1506,,1512,,1554,,,,,,,1658,,,,1708])
      fillPx(cd.s,[897,947,996,1044,,1133,1137,1179,1185,1232,,1236,,1280,1283,,,1331,,,1379,,,1427,,,1464,,,1475,,1522,,,1570,,1608,1618,,1667,1860])
      fillPx(cd.a,[890,,,,936,,,,,,,,,,,983,,,,,,,,,,,,,1030,,,,,,,,,,,,,,1078,,,1082,,,1086,,,,,1126,,,1130,,,1134,,,1138,1174,,,1178,1180,1182,,,1186,1234,1281,,1329,,1376,,,1424,,,1463,1472,,,1520,,1572,1616,,1620,1655,1664,,1668,1713,1716,,1764,,1908,,,1958])
      fillPx(cd.b,[1627,,,,,1670,,1674,,,,,,1696,,,1719,,,,,,,,,,,,,1744,,,1768,,,,,,,,,,,,,1786,1789,1791,,,,1816,,,,,,,,,,,,,1833,,1837,,,,,,,,1864,,,,,,,,,1877,,1881,,1884,,,,,,,,,])
      fillPx(cd.c,[814,,861,,,908,,,,956,,,,1003,,,,,1049,,,,,,,1097,,,,,,,1144,,,,,,,,1191,,,,,,,,,1240,,,,,,,,1288,,,,,,,,1337,,,,,,,1385,,,,,,,1433,,,,,,,1481,,,,,,,,1526,,,,,,,,,,,1543,1574,,,,,,,,,,,,1589,,,1622,,,,,1632,,1637,,,1672,,1680,,1685,,,1691,,1733,,,1739,,1781,,,1787,,1829,,,1835,,1879,1883])
      fillPx(cd.d,[1905,,,1944,1948,,1952,,,,,,1991,,1995,2002,2004,,,2039,,,,2050,2052,,,2090,2094,2098,,,,,2131,,2138,2141,,2146,,,,,2181,,2185,,2188,,,,,,,,,])
      fillPx(cd.e,[651,,,699,702,746,750,754,,,,,,794,799,,,807,842,855,888,,903,934,,951,979,,,,999,1027,1047,,1076,1096,1125,1143,1173,1190,1221,,1239,1287,1336,1366,1384,1408,,,,,,,1432,1456,1477,,,,1505,1525,1553,1573,1602,1621,1650,1669,1699,1702,1718,1747,1749,1766,,1795,,1815,1845,1863,1893,1911,1941,1959,1971,,,,1988,2007,2018,2023,2035,2055,2065,,2070,,2083,2103,2115,,,,2130,2151,2180,2197,,2229,2231,,,2236,,,2242,,,])
      fillPx(cd.f,[0,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,48,,,,,,,,,,,,,,,,,,,69,,,,,,,,,,,96,,,,,,,,,,107,,,,,,114,118,,,,,,,144,,,,,,155,,,,,,,,,,,,,,,,,192,,,,,,,,,,,,,,,,,,,,,,216,,240,,,,,,,,,,,,,,,,,,,,289,,,,,,,,,,,,,338,,,480,,,,528,,,,,,576,,,,,,,,624,,,,,,,,,,673,,,,,,,723,727,,1915,,1924,1930,1932,1936,1938,1967,,,1975,,1981,1985,,2009,2028,,,2059,2075,2104,2111,,2114,2125,2164,2171,2199,,2204,2213,,,2224,,2230,2234,2245,,2249,2253,,2260,2274,,2280,2287,2291,2299])
      fillPx(cd.g,[34,67,,80,,106,113,125,,150,,,,172,214,,218,,260,,264,,288,302,,,,,341,,,,,,,,672,680,722,724,,,1873,,,,1912,,,1917,,,,,,,1926,,,,1931,1933,1937,1939,,1960,,1982,,2008,2011,,,,,,,2024,2031,2056,,2060,2062,,2073,,2076,,2120,,2123,,2155,,,,2163,2170,2177,,,2205,2207,2226,2235,2239,,,2250,,2256,,2259,2268,,2272,,2281,,,,2286,2290])
      fillPx(cd.h,[684,,734,,760,,809,,845,,,894,,,1515,1517,,1563,,1568,,1611,1750,1752,1754,1798,1800,,,,1808,1812,,,1851,,1857,,,1862,1900,,,,,1984,2021,2049,2061,2086,2093,2097,2122,2140,2167,,,2206,2252,2258,2271,2285])
      ctx.putImageData(px,0,0)
      if(!this.data.initdate){
        this.$page.frontmatter.initdate = time
        console.log('首屏'+this.alert(`加载耗时${(time/1000).toFixed(2)}秒`))
      }
    }
    this.frames[1] = () => {
      fillPx(cd.f,[483,534,584])
      fillPx(cd.h,[682,,708,,1455,1504,1751,1753,1755])
      fillPx(cd.j,[684,,734,,760,,809,,1754])
      fillPx(cd.e,[1843,1892,1894,,])
      fillPx(cd.n,[1847])
      fillPx(cd.p,[1796,,,,1844,,])
      fillPx(cd.d,[1942,,])
      fillPx(cd.i,[1990,2039])
      ctx.putImageData(px,0,0)
    }
    this.frames[2] = () => {
      fillPx(cd.g,[35,127,198,,])
      fillPx(cd.f,[80,125,150,,214,262,302,585,634])
      fillPx(cd.j,[338,682,,1455,1504])
      fillPx(cd.h,[705,,,1452,,,])
      ctx.putImageData(px,0,0)
    }
    this.frames[3] = () => {
      fillPx(cd.h,[654,,703,,1451,1497,,,1630,1754,1798])
      fillPx(cd.j,[585,706,,,,754,1453,,1751,1753,1755,1797])
      fillPx(cd.f,[680])
      fillPx(cd.g,[681])
      fillPx(cd.e,[802,1796,1845])
      fillPx(cd.n,[1799])
      fillPx(cd.b,[1843,,1892])
      fillPx(cd.p,[1847,1894,,1942,,1990])
      fillPx(cd.d,[2038,,])
      ctx.putImageData(px,0,0)
    }
    this.frames[4] = () => {
      fillPx(cd.j,[35,127,262,655,703,,,746,1408,,,,,,,1451,,1499,1616,1664,1713])
      fillPx(cd.g,[80,125,150,,214,302,673,723,727])
      fillPx(cd.f,[198,,338])
      fillPx(cd.h,[650,,697,,1496,1570,1675,,1799])
      fillPx(cd.e,[654,747,1385,1415,1430,1433,1457,,,,,1481,1504,1510,1601,1698,1844])
      fillPx(cd.r,[1384,1432,1505,1602,,,,,,])
      fillPx(cd.c,[1478])
      fillPx(cd.q,[1506,,1556,,,,])
      fillPx(cd.a,[1511,,1522,1618,1666,1714])
      fillPx(cd.s,[1513])
      fillPx(cd.o,[1520,1568])
      fillPx(cd.b,[1630])
      fillPx(cd.p,[1651,,1991])
      fillPx(cd.n,[1653,1699,,])
      fillPx(cd.d,[1990])
      ctx.putImageData(px,0,0)
    }
    this.frames[5] = () => {
      fillPx(cd.j,[483,534,584,634,650,,681,698,1496,,,1665,1714])
      fillPx(cd.f,[673,723,727])
      fillPx(cd.g,[680])
      fillPx(cd.h,[696,743,,1444,,,1493,,,1522,1672,,])
      fillPx(cd.a,[1570,1619,1667])
      fillPx(cd.b,[1675,,])
      fillPx(cd.p,[1896,1944,1992])
      fillPx(cd.n,[1900])
      fillPx(cd.d,[1947,1994])
      ctx.putImageData(px,0,0)
    }
    this.frames[6] = () => {
      fillPx(cd.f,[483,534,584,634])
      fillPx(cd.j,[696,,743,,1445,,1493,,,])
      fillPx(cd.h,[788,,,,1393,,1442,,1622,1755,1804,1900])
      fillPx(cd.p,[1370,,,,1418,1800,,,1848,1850])
      fillPx(cd.s,[1512])
      fillPx(cd.c,[1672,,])
      fillPx(cd.m,[1799,1847])
      fillPx(cd.p,[1851])
      fillPx(cd.n,[1895,1898,1943,,])
      fillPx(cd.d,[1899,1945,,1992,,])
      ctx.putImageData(px,0,0)
    }
    this.frames[7] = () => {
      fillPx(cd.g,[35,127,198,,])
      fillPx(cd.f,[80,125,150,,214,262,302])
      fillPx(cd.j,[338,790,,1393,,1442,,,1504,1601])
      fillPx(cd.h,[786,,835,,1344])
      fillPx(cd.e,[1408,,,,,,,1505,1602,1699])
      fillPx(cd.m,[1415])
      fillPx(cd.p,[1419,1421,1603,,])
      fillPx(cd.r,[1457,1506,,1512,,1556,,,,])
      fillPx(cd.q,[1458,,,,1510,,])
      fillPx(cd.n,[1605,1651,,])
      fillPx(cd.o,[1606,,1653,1700])
      fillPx(cd.c,[1622,1698,1844])
      ctx.putImageData(px,0,0)
    }
    this.frames[8] = () => {
      fillPx(cd.k,[651,746,1384,1478])
      fillPx(cd.j,[654,789,835,,1344,1755,1804])
      fillPx(cd.f,[680])
      fillPx(cd.g,[681])
      fillPx(cd.h,[737,,813,,1570,1799,,,,1851])
      fillPx(cd.r,[747,1430])
      fillPx(cd.c,[1385])
      fillPx(cd.l,[1418,,1421])
      fillPx(cd.a,[1522,1665,1714])
      fillPx(cd.s,[1619,1667])
      fillPx(cd.p,[1847,1895,1898,1943,,,,1992,,])
      fillPx(cd.n,[1848,1850,1899,,])
      ctx.putImageData(px,0,0)
    }
    this.frames[9] = () => {
      fillPx(cd.j,[35,127,262,534,722,737,,786,,,813,1714])
      fillPx(cd.g,[80,125,150,,214,302,673,723,727])
      fillPx(cd.f,[198,,338])
      fillPx(cd.h,[734,,,783,,,859,,1568,1900])
      fillPx(cd.e,[754,1432])
      fillPx(cd.r,[802])
      fillPx(cd.c,[814,1433,1481])
      fillPx(cd.l,[1370,,,,])
      fillPx(cd.a,[1520,1616,1664])
      fillPx(cd.s,[1522,1570,1618])
      fillPx(cd.o,[1666])
      fillPx(cd.n,[1896,1947])
      fillPx(cd.d,[1944,1992])
      fillPx(cd.p,[1994])
      ctx.putImageData(px,0,0)
    }
    this.frames[0] = () => {
      fillPx(cd.j,[584,634,681,736,783,,,859,,])
      fillPx(cd.f,[673,723,727])
      fillPx(cd.g,[680,722])
      fillPx(cd.h,[684,,760,,809,,])
      fillPx(cd.a,[1713])
      fillPx(cd.n,[1799])
      fillPx(cd.p,[1990])
      fillPx(cd.d,[1991])
      fillPx(cd.i,[2038])
      ctx.putImageData(px,0,0)
    }
    requestAnimationFrame(firstFrameInit)
  },
  watch:{
    'frameItem': function(newItem, oldItem){
      requestAnimationFrame(this.frames[newItem%10])
    },
  }
}
</script>

<style lang="stylus">
.home
  padding $navbarHeight 2rem 0
  max-width 960px
  margin 0 auto
  display block
  .hero
    text-align center
    img
      display none
    canvas
      max-width: 100%
      height 24rem
      display block
      margin 3rem auto 1.5rem
      image-rendering pixelated
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      canvas
        margin 2rem auto 1.2rem
        height 16rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding .6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
