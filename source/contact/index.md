---
description: 'エルバルコへのお問い合わせ'
---

<div class="mv__contact mv__content">
  <h2 class="mv__content--heading">CONTACT</h2>
</div>

<div id="formWrapper">
  <div class="form__area">
    <form action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSf2cqqIeZdyxTlekW_DC4-z6DsoW6olILqewxiGylNtmpYPqg/formResponse" id="form" name="myform" class="form" target="dummyIframe">
      <ul>
        <li class="form--list">
          <label for="name" class="form--label">ご予約内容 *</label>
          <div>
            <ul class="form--radio--list">
              <li class="form--radio--content">
              <input type="radio" name="entry.153226148" id="select3" value="席のみ" class="form--input" checked = "checked">
              <label for="select3" class="form--label--seat form--label form--radio--txt">席のみ</label>
              </li>
              <li class="form--radio--content">
              <input type="radio" name="entry.153226148" id="select1" value="パエーリャコース" class="form--input">
              <label for="select1" class="form--label--course1 form--label form--radio--txt">パエーリャコース ￥3,500</label>
              </li>
              <li class="form--radio--content">
              <input type="radio" name="entry.153226148" id="select2" value="エスペシャルコース" class="form--input">
              <label for="select2" class="form--label--course2 form--label form--radio--txt">エスペシャルコース ￥6,500</label>
              </li>
            </ul>
          </div>
        </li>
        <li class="form--list">
          <label for="" class="form--label">御予約人数*<br class="sp_only">（御予約の場合は記載してください。）</label>
          <select name="entry.1350566039" class="select">
            <option value="">-</option>
            <option value="1人">1</option>
            <option value="2人">2</option>
            <option value="3人">3</option>
            <option value="4人">4~6</option>
            <option value="5人">7~9</option>
            <option value="6人">10~</option>
          </select>
        </li>
        <li class="form--list">
          <label for="day" class="form--label">ご予約予定日 *</label>
          <input type="date" id="day" name="entry.998286514" class="form--input" style="height: 30px;" required>
        </li>
        <li class="form--list">
          <label for="name" class="form--label">名前 *</label>
          <input type="text" id="name" name="entry.88240847" class="form--input" required>
        </li>
        <li class="form--list">
          <label for="tel" class="form--label">電話番号 （ハイフンあり）*</label>
          <input type="tel" id="tel" name="entry.379781615" class="form--input" pattern = "\d{2,4}-\d{2,4}-\d{3,4}" required>
        </li>
        <li class="form--list">
          <label for="message" class="form--label">お問い合わせ・ご要望</label>
          <textarea id="message" name="entry.596342401" class="form--textarea"></textarea>
        </li>
        <li class="form--list">
          <input type="button" class ="form--button" value="送信する" onclick = "doPost();">
          <input type="submit" value="不可視ボタン" style="display:none" name=submitBtn>
        </li>
      </ul>
    </form>
  <iframe name="dummyIframe" style="display:none;"></iframe>
  </div>
</div>

<div id="thxMessage" style="display:none;">
  <div class="ThxMessage">
    お問い合わせありがとうございました。
  </div>
  <a class="TopLink" href="https://elbarco.jp/">トップページへ戻る</a>
</div>
