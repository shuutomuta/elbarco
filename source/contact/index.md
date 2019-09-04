<div class="mv__menu">
  <h2 class="mv__menu--heading">contact</h2>
</div>

<div class="form__area">
    <form action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSf2cqqIeZdyxTlekW_DC4-z6DsoW6olILqewxiGylNtmpYPqg/formResponse" method="post" class="form" target="dummyIframe">
      <ul>
        <li class="form--list">
          <label for="name" class="form--label">ご予約内容 *</label>
          <div class="form--radio--content form--radio--reserve">
          <ul class="form--radio--list">
            <li>
            <input type="radio" name="entry.153226148" id="select3" value="1" class="form--input">
            <label for="select3" class="form--label--seat form--label form--radio--txt">席のみ</label>
            </li>
            <li>
            <input type="radio" name="entry.153226148" id="select4" value="2" class="form--input">
            <label for="select4" class="form--label--course1 form--label form--radio--txt">パエーリャコース ￥3,500</label>
            </li>
            <li>
            <input type="radio" name="entry.153226148" id="select5" value="3" class="form--input">
            <label for="select5" class="form--label--course2 form--label form--radio--txt">エスペシャルコース ￥6,500</label>
            </li>
          </ul>
          </div>
        </li>
        <li class="form--list">
          <label for="name" class="form--label">御予約人数<br class="sp_only">（御予約の場合は記載してください。）</label>
          <select required name="entry.1350566039" class="form--select">
            <option value="">-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4~6</option>
            <option value="5">7~9</option>
            <option value="6">10~</option>
          </select>
        </li>
        <li class="form--list">
          <label for="name" class="form--label">ご予約予定日 *</label>
          <input required type="date" id="name" name="entry.998286514" class="form--input">
        </li>
        <li class="form--list">
          <label for="name" class="form--label">名前 *</label>
          <input required type="text" id="name" name="entry.88240847" class="form--input">
        </li>
        <li class="form--list">
          <label for="tel" class="form--label">電話番号（ハイフンあり） *</label>
          <input required type="text" id="tel" name="entry.379781615" class="form--input">
        </li>
        <li class="form--list">
          <label for="message" class="form--label">その他ご要望ありましたらご記載ください</label>
          <textarea id="message" name="entry.596342401" class="form--textarea"></textarea>
        </li>
        <li class="form--list">
          <input type="submit" value="送信する" onclick="SendDummy()">
        </li>
      </ul>
    </form>
    <iframe name= "dummyIframe" style = "display:none;"></iframe>
  </div>
<div id="thxMessage" style="display:none;">
  <div class ="ThxMessage">
    お問い合わせありがとうございました。
  </div>
  <a class = "TopLink" href="https://study-alldays.work/demo6/index.html">トップページへ戻る</a>
</div>