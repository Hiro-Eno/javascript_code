// glossaryファイル JavaScript_Code
`use strict`
const glossary = [
{target:`typeof`, content:`データ型を返す演算子。<br>*** operand;`},
{target:`const`, content:`定数を宣言するためのキーワード。ブロックスコープを持つ。<br>*** name1 = value1;`},
{target:`let`, content:`変数を宣言するためのキーワード。ブロックスコープを持つ。<br>*** name1 = value1;`},
{target:`var`, content:`非推奨。変数を宣言するためのキーワード。再宣言が可能。<br>*** name1 = value1;`},
{target:`if`, content:`条件文を表現するためのキーワード。条件が真の場合にコードを実行。<br>*** (condition) {}`},
{target:`else`, content:`if文の条件が偽の場合に実行されるブロックを指定するためのキーワード。<br>} *** {}`},
{target:`else if`, content:`if文の条件が偽で、さらなる条件を検証するためのキーワード。<br>} *** *** (condition) {}`},
{target:`function`, content:`指定された引数を使用して関数を定義するためのキーワード。<br>*** name(param) {statements}`},
{target:`return`, content:`関数の実行を終了して、関数の呼び出し元に返す値を指定するためのキーワード。<br>*** expression;`},
{target:`for`, content:`ループ構造を表現するためのキーワード。指定された条件で繰り返し処理を行う。<br>*** (initialization; condition; afterthought) {statement}`},
{target:`while`, content:`ループ構造を表現するためのキーワード。指定された条件が真の場合にコードを実行し、条件が偽になるまで繰り返す。<br>*** (condition) {statement}`},
{target:`length`, content:`要素の数を調べるプロパティ。<br>array.***`},
{target:`.push()`, content:`配列の最後に要素を加えるメソッド。<br>array.***(element)`},
{target:`.pop()`, content:`配列の最後の要素を削除するメソッド。<br>array.***()`},
{target:`.unshift()`, content:`配列の最初に要素を加えるメソッド。<br>array.***(element)`},
{target:`.concat()`, content:`二つの配列を結合するメソッド。新しい配列を返す。<br>array.***(array)`},
{target:`.map()`, content:`配列の各要素に対して指定された関数を適用するメソッド。新しい配列を返す。<br>array.***(callbackFn, thisArg)`},
{target:`.filter()`, content:`配列の要素をフィルタリングするためのメソッド。テストに合格した要素だけを抽出したシャローコピーの配列を作成する。。<br>array.***(callbackFn, thisArg)`},
{target:`.forEach()`, content:`配列の各要素に対して指定された関数を実行するメソッド。<br>array.***(callbackFn, thisArg)`},
{target:`break`, content:`ループやswitch文から抜けるためのキーワード。<br>***;`},
{target:`catch`, content:`try文で発生した例外を捕捉するためのブロック。<br>try {tryStatements} *** (exceptionVar) {catchStatements} finally {finallyStatements}`},
{target:`continue`, content:`ループの次の繰り返しに進むためのキーワード。<br>***;`},
{target:`debugger`, content:`プログラムの実行を一時停止し、デバッガの実行を可能にする。<br>***;`},
{target:`delete`, content:`オブジェクトからプロパティを削除する演算子。<br>*** expression;`},
{target:`extends`, content:`クラスが他のクラスを継承するためのキーワード。<br>*** ChildClass extends ParentClass { ... }`},
{target:`finally`, content:`try文のブロックが終了した後に実行されるブロック。<br>try {tryStatements} catch (exceptionVar) {catchStatements} *** {finallyStatements}`},
{target:`in`, content:`オブジェクトが指定されたプロパティを持っているかをチェックする演算子。<br>prop *** object;`},
{target:`instanceof`, content:`オブジェクトが指定されたクラスのインスタンスであるかをチェックする演算子。<br>object *** constructor;`},
{target:`new`, content:`インスタンスを生成するための演算子。<br>*** constructor[([arguments])];`},
{target:`switch`, content:`式を評価して、一連のcase節に対してその式の値を照合し、最初に値が一致したcase節の後の文を、break文に出会うまで実行。一致したcase の後にある文も同様に実行。default節には、 caseが式の値と一致しない場合にジャンプする。<br>*** (expression) {case value1: 文 case value2: 文 // … case valueN: 文 default: 文}`},
{target:`this`, content:`オブジェクト自体を指すキーワード。<br>***`},
{target:`throw`, content:`例外を発生させるためのキーワード。<br>*** expression;`},
{target:`try`, content:`例外を試みるためのブロック。<br>*** {tryStatements} catch (exceptionVar) {catchStatements} finally {finallyStatements}`},
{target:`void`, content:`式を評価し、undefinedを返す演算子。<br>*** expression;`},
{target:`yield`, content:`ジェネレータ関数内で値を生成するためのキーワード。<br>[rv] = ***[expression];`},
{target:`super`, content:`サブクラスでスーパークラスのメソッドやプロパティにアクセスするためのキーワード。<br>***([arguments]); `},
{target:`color`, content:`テキストの色を指定するCSSプロパティ。<br>***: red;`},
{target:`background-color`, content:`背景色を指定するCSSプロパティ。<br>***: red;`},
{target:`font-size`, content:`フォントのサイズを指定するCSSプロパティ。<br>***: 10px;`},
{target:`width`, content:`要素の幅を指定するCSSプロパティ。<br>***: 200px;`},
{target:`height`, content:`要素の高さを指定するCSSプロパティ。<br>***: 200px;`},
{target:`font-family`, content:`フォントの種類を指定するCSSプロパティ。<br>***: 'Gill Sans Extrabold', sans-serif;`},
{target:`border`, content:`要素の境界線（ボーダー）のスタイル、太さ、色を指定するCSSプロパティ。<br>***: solid;`},
{target:`padding`, content:`要素の内側の余白を指定するCSSプロパティ。<br>***: 10px 50px 20px;`},
{target:`margin`, content:`要素の外側の余白を指定するCSSプロパティ。<br>***: 10px 50px 20px 0;`},
{target:`display`, content:`HTML要素の表示を設定。noneは最初から無かったかのように要素を隠し、次の要素が繰り上がるCSSプロパティ。<br>***: none; ***: inline;`},
{target:`float`, content:`HTML要素を左や右に配置。また、flowから外れ、この要素が最初からなかったかのように次の要素が配置。次の要素に含まれるテキストなどインラインのコンテンツは回り込むCSSプロパティ。<br>***: right;`},
{target:`clear`, content:`HTML要素を左や右に配置。テキストの回り込みを避けたい場合に設定するCSSプロパティ。<br>***: none; ***: left;`},
{target:`position`, content:`HTML要素を、relativeはflowの場所から指定された距離だけずらす。abusoluteは指定された一番近い親要素もしくはwindowの端から指定の距離だけ離れた位置に配置。fixedはwindowに対して指定の場所に要素を固定し、スクロールしても要素は動かない。stickyのある要素はwindowの端にくるとfixedになる。Staticは要素をデフォルトのflow layoutに従わせるCSSプロパティ。<br>***: relative; ***: absolute;`},
{target:`flex-direction`, content:`レイアウトの方向のCSSプロパティ。<br>***: row; ***: row-reverse; ***: column;`},
{target:`justify-content`, content:`レイアウトの方向に沿っての配置するCSSプロパティ。<br>***: center; ***: space-between; ***: space-around; ***: space-evenly; `},
{target:`align-items`, content:`レイアウト方角に直角に配置するCSSプロパティ。center|flex=enc|space-around\space-between|stretch。<br>***: stretch; ***: center; ***: start; ***: end;`},
{target:`visibility`, content:`HTML要素の表示を設定するCSSプロパティ。hiddenは要素は見えなくなるも、flowに存在しているため、次の要素は動かない。<br>***: visible ***: hidden; ***: collapse;`},
{target:`transform`, content:`要素の変形（位置、回転、スケールなど）を指定するCSSプロパティ。<br>***: rotate(0.5turn); ***: scale(2, 0.5); ***: scale(0.5) translate(-100%, -100%);`},
{target:`keyup`, content:`キーボードのキーが上がったときに発生するイベント。<br>addEventListener('***', (event) => {});`},
{target:`keydown`, content:`キーボードのキーが押されたときに発生するイベント。<br>addEventListener('***', (event) => {});`},
{target:`keypress`, content:`キーボードのキーが押されたときに発生するイベント。<br>addEventListener('***', (event) => {});`},
{target:`click`, content:`要素がクリックされたときに発生するイベント。<br>addEventListener('***', (event) => {});`},
{target:`hover`, content:`要素にマウスが重なったときに発生するイベント。<br>addEventListener('***', (event) => {});`},
{target:`mouseenter`, content:`要素にマウスが入ったときに発生するイベント。<br>addEventListener('***', (event) => {});`},
{target:`mouseleave`, content:`要素からマウスが出たときに発生するイベント。<br>addEventListener('***', (event) => {});`},
{target:`mouseover`, content:`要素にマウスが乗ったときに発生するイベント。<br>addEventListener('***', (event) => {});`},
{target:`change`, content:`フォーム要素の値が変更されたときに発生するイベント。<br>addEventListener('***', (event) => {});`},
{target:`focus`, content:`要素がフォーカスを受け取ったときに発生するイベント。<br>addEventListener('***', (event) => {});`},
{target:`src`, content:`要素のソースのCSSプロパティ。<br>***: local(font);`},
{target:`.getElementsByTagName()`, content:`タグ名に基づいて要素を取得するDOMメソッド。<br>document.***()`},
{target:`.getElementsByClassName()`, content:`クラス名に基づいて要素を取得するDOMメソッド。<br>document.***()`},
{target:`.getElementById()`, content:`IDに基づいて要素を取得するDOMメソッド。<br>document.***()`},
{target:`.createElement()`, content:`新しい要素を作成するDOMメソッド。<br>document.***()`},
{target:`.appendChild()`, content:`要素に子要素を追加するDOMメソッド。<br>element.***()`},
{target:`.addEventListener()`, content:`イベントリスナーを要素に追加するDOMメソッド。<br>element.***(type, listener)`},
{target:`setTimeout( , )`, content:`一定時間後に指定された関数を実行するDOMメソッド。<br>***(code, delay)`},
{target:`.animate( , )`, content:`要素に対してアニメーションを適用するDOMメソッド。<br>element.***(keyframes, options)`},
{target:`.innerText`, content:`要素のテキストコンテンツを取得または設定するプロパティ。<br>element.***`},
{target:`.innerHTML`, content:`要素のHTMLコンテンツを取得または設定するプロパティ。<br>element.***`},
{target:`.textContent`, content:`要素のテキストコンテンツを取得または設定するプロパティ。<br>element.***`},
{target:`.duration`, content:`アニメーションやメディアの時間長さを表すプロパティ。<br>element.***`},
{target:`.className`, content:`要素のクラス名を取得または設定するプロパティ。<br>element.***`},
{target:`.onclick`, content:`クリック時の動作のDOMメソッド。<br>element.***`},
{target:`location`, content:`現在のURL。代入で新しいURLへ移行するDOMメソッド。<br>***`},
{target:`location.assign()`, content:`新しいURLへ移動するDOMメソッド。<br>***.***()`},
{target:`location.reload()`, content:`現在のURLの再読み込みのDOMメソッド。<br>***.***()`},
{target:`placeholder`, content:`入力欄のプレースホルダを取得または設定するプロパティ。<br>***=`},
{target:`.outerHTML`, content:`要素のHTML全体を取得または設定するプロパティ。<br>element.***`},
{target:`.search`, content:`URLのクエリ文字列を取得または設定するプロパティ。<br>url.***`},
{target:`querySelectorAll()`, content:`要素の複数選択するDOMメソッド。<br>***(selectors)`},
{target:`.classList`, content:`要素のクラス一覧を取得または設定するプロパティ。<br>element.***`},
{target:`.remove()`, content:`要素の削除するDOMメソッド。<br>element.***()`},
{target:`.add()`, content:`要素への追加するDOMメソッド。<br>element.***()`},
{target:`removeEventListener`, content:`イベントリスナーの削除するDOMメソッド。<br>***(type, listener)`},
{target:`removeChild()`, content:`子要素の削除するDOMメソッド。<br>***(child)`},
{target:`setInterval()`, content:`定期的な処理の開始するタイマーメソッド。<br>***(func, delay)`},
{target:`clearInterval()`, content:`定期的な処理の停止するタイマーメソッド。<br>***(intervalID)`},
]
