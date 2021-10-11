<template>
  <div class="component3">
    <h2>外部サイトのサンプル</h2>
    <ul class="sample-site">
      <li>
        <p>
          WordPressで作成した<a
            href="http://rokkou.wp.xdomain.jp/"
            target="_blank"
            >ブログ</a
          >
        </p>
        <p>WordPressを使用して作成したシンプルなブログ</p>
      </li>

      <li>
        <p>
          PHPとMysqlを使った<a
            href="http://rokkou.php.xdomain.jp/"
            target="_blank"
            >シフト管理表</a
          >
        </p>
        <p>PHPとデータベース(Mysql)を使用して作成したシフト管理表<br>
        
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Component3",
};
</script>

<style lang="scss" scoped>
.component3 {
  max-width: 1100px;
  margin: 58px auto 0;
  padding: 1.5em;
  height: 100vh;
  & .sample-site {
    margin: 1em 0;
  }
  & h2 {
    background: lightgreen;
    padding: 0.5em;
    text-shadow: 0 0 3px green;
    text-align: center;
  }
}
</style>
