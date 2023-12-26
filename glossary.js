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
{target:`Number()`, content:`Number オブジェクトを生成します。関数として呼び出された場合は、数値型のプリミティブ値を返すコンストラクター。<br>***('123')→123`},
{target:`parseInt()`, content:`文字列の引数を解釈し、指定された基数 （数学的記数法の底）の整数値を返す関数。<br>***('123')→123`},
{target:`parseFloat()`, content:`引数を (必要に応じてまず文字列に変換してから) 解釈し、浮動小数点値を返す関数。<br>***('123.123')→123.123`},
{target:`.concat()`, content:`二つの配列を結合するメソッド。新しい配列を返す。<br>array.***(array)`},
{target:`.filter()`, content:`配列の要素をフィルタリングするためのメソッド。テストに合格した要素だけを抽出したシャローコピーの配列を作成する。。<br>array.***(callbackFn, thisArg)`},
{target:`.forEach()`, content:`配列の各要素に対して指定された関数を実行するメソッド。<br>array.***(callbackFn, thisArg)`},
{target:`.length`, content:`要素の数を調べるプロパティ。<br>array.***`},
{target:`.map()`, content:`配列の各要素に対して指定された関数を適用するメソッド。新しい配列を返す。<br>array.***(callbackFn, thisArg)`},
{target:`.at()`, content:`整数値を受け取り、その位置にある項目を返すメソッド。負の整数は、配列の最後の項目から前へ数え項目を返す。<br>array.***(index)`},
{target:`.pop()`, content:`配列の最後の要素を削除するメソッド。<br>array.***()`},
{target:`.push()`, content:`配列の最後に要素を加えるメソッド。<br>array.***(element)`},
{target:`.split()`, content:`文字列を指定の区切りで分割するメソッド。('')で1文字ずつ分割。<br>'apple,orange,banana'.***(',')→['apple', 'orange', 'banana']<br<'str'.***('')→['s', 't', 'r']`},
{target:`.unshift()`, content:`配列の最初に要素を加えるメソッド。<br>array.***(element)`},
{target:`.shift()`, content:`配列から最初の要素を取り除き、その要素を返すメソッド。配列の長さを変える。<br>const array1 = [1, 2, 3];<br>const firstElement = array1.***();<br>array1→[2, 3], firstElement→1`},
{target:`.reverse()`, content:`配列の要素を反転させ、その配列への参照を返すメソッド。元の配列を変更せずに配列の要素を反転させるには toReversed() を使用。<br>array.***()`},
{target:`.sort()`, content:`配列の要素をソートし、ソートされた同じ配列の参照を返すメソッド。既定のソート順は昇順で、要素を文字列に変換してから、 UTF-16 コード単位の値の並びとして比較します。元の配列を変更せずに配列内の要素をソートするには、 toSorted() を使用。関数を使用する場合は、aとbの2値を引数とし、aが大きい場合は正の、aが小さい場合は負の、同じ場合は0を返すように関数を作る。<br>array.***() array.***(compareFn(a, b))`},
{target:`.slice()`, content:`配列の一部を start から end （end は含まれない）までの範囲で、選択した新しい配列オブジェクトにシャローコピーして返すメソッド。 元の配列は変更されない<br>array.***(start, end) array.***()⇒シャローコピー`},
{target:`.splice()`, content:`配列の既存の要素を取り除いたり、置き換えたり、新しい要素を追加するメソッド<br>array.***(start, deleteCount, item1)`},
{target:`.copyWithin()`, content:`この配列の一部を配列内の他の場所にシャローコピーし、この配列の長さを変更せず返すメソッド。<br>array.***(targetIndex, startIndex, endIndex)`},
{target:`.entries()`, content:`配列内の各要素に対するキー/値のペアを含む新しい配列イテレーターオブジェクトを返すメソッド。元の配列は変更しない。<br>array.***()`},
{target:`.every()`, content:`配列のそれぞれの要素に対して、指定された callbackFn 関数が偽値を返すまで一度ずつ呼び出すメソッド。 そのような要素が見つかった場合、 every() は直ちに false を返し、配列の反復処理を中止する。そうでない場合、 callbackFn がすべての要素に対して真値を返すと、 every() は true を返す。<br>array.***(callbackFn)`},
{target:`.fill()`, content:`インデックスの範囲内にある配列のすべての要素を一定の値に変更するメソッド。<br>array.***(value, startIndex, endIndex)`},
{target:`.find()`, content:`提供されたテスト関数を満たす配列内の最初の要素を返すメソッド。 テスト関数を満たす値がない場合は undefined を返す。<br>const array = [5, 12, 8, 130, 44];<br>const found = array.***((element) => element > 10)→12`},
{target:`.findIndex()`, content:`配列内の指定されたテスト関数に合格する最初の要素のインデックスを返すメソッド。 テスト関数に合格する要素がなかった場合は -1 を返す。<br>const array = [5, 12, 8, 130, 44];<br>const found = array.***((element) => element > 13)→3`},
{target:`.findLast()`, content:`配列を逆順に反復処理し、提供されたテスト関数を満たす最初の要素を返すメソッド。 テスト関数を満たす値がない場合は undefined を返す。<br>const array = [5, 12, 8, 130, 44];<br>const found = array.***((element) => element > 100)→130`},
{target:`.findLastIndex()`, content:`配列を逆順に反復処理し、テスト関数に合格する最初の要素のインデックスを返すメソッド。 テスト関数に合格する要素がなかった場合は -1 を返す。<br>const array = [5, 12, 8, 130, 44];<br>const found = array.***((element) => element > 100)→3`},
{target:`.flat()`, content:`すべてのサブ配列の要素を指定した深さで再帰的に結合した新しい配列を生成するメソッド。<br>***(depth)`},
{target:`.flatMap()`, content:`最初にマッピング関数を使用してそれぞれの要素をマップした後、結果を新しい配列内に平坦化するメソッド。<br>const arr = [1, 2, 1];<br>const result = arr.***((num) => (num === 2 ? [2, 2] : 1));→[1, 2, 2, 1]`},
{target:`.includes()`, content:`特定の要素が配列に含まれているかどうかを true または false で返すメソッド。<br>array.***(searchElement, fromIndex)<br>const array = [1, 2, 3];<br>array.***(2));→true`},
{target:`.indexOf()`, content:`引数に与えられた内容と同じ内容を持つ最初の配列要素の添字を返すメソッド。存在しない場合は -1 を返す。<br>const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];<br>beasts.***('bison');→1`},
{target:`.join()`, content:`配列の全要素を順に連結した新しい文字列を返すメソッド。区切り文字はカンマ、または指定された文字列。配列に要素が一つしかない場合は、区切り文字を使用せずに要素が返される。<br>const elements = ['Fire', 'Air', 'Water'];<br>elements.***('-');→'Fire-Air-Water'`},
{target:`.keys()`, content:`配列内の各インデックスのキーを含む、新しい配列イテレーターオブジェクトを返すメソッド。<br>array.***()`},
{target:`.lastIndexOf()`, content:`配列中で与えられた要素が見つかった最後の添字を返すメソッド。存在しなければ -1 を返す。配列は fromIndex から逆向きに検索される。<br>const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];<br>animals.***('Dodo');→3`},
{target:`.reduce()`, content:`配列のそれぞれの要素に対して、「縮小」コールバック関数を呼び出し、直前の要素での計算結果の返値を渡すメソッド。配列の全要素に対して縮小関数を実行した結果を返す。コールバックの初回実行時は初期値（指定の無い場合は0）が使用され、次の要素から反復処理が開始される。縮小関数に((a, b) => a + b)を宣言すると配列の合計値が返される;<br>***(callbackFn, initialValue)<br>const array1 = [1, 2, 3, 4];<br>const initialValue = 0;<br>const sumWithInitial = array1.***(<br>(accumulator, currentValue) => accumulator + currentValue,  initialValue,<br>);<br>sumWithInitial→10<br>array.***((a, b) => a + b);`},
{target:`.reduceRight()`, content:`アキュームレーターと配列のそれぞれの値に対して（右から左へ）関数を適用して、単一の値を返すメソッド。左から右へ適用する場合は Array.prototype.reduce() を参照。<br>const array1 = [[0, 1], [2, 3], [4, 5],];<br>reduceRight(callbackFn, initialValue)<br>const result = array1.***((accumulator, currentValue) =><br>accumulator.concat(currentValue),<br>);<br>result→[4, 5, 2, 3, 0, 1]`},
{target:`.some()`, content:`指定された関数で実装されているテストに、配列の中の少なくとも 1 つの要素が合格するかどうかを判定するメソッド。配列の中で指定された関数が true を返す要素を見つけた場合は true を返し、そうでない場合は false を返す。それ以外の場合は false を返す。<br>array.***(callbackFn)<br>const array = [1, 2, 3, 4, 5];<br>array.***(even)→true`},
{target:`.values()`, content:`配列の各インデックスの値を含む新しい「配列イテレーター」オブジェクトを返すメソッド。<br>array.***()`},
{target:`.with()`, content:`ブラケット記法に対応するコピーメソッド。指定された位置の要素を指定された値で置き換えた新しい配列を返す。<br>arrayInstance.***(index, value)<br>const arr = [1, 2, 3, 4, 5];<br>arr.***(2, 6)→[1, 2, 6, 4, 5], arr→[1, 2, 3, 4, 5]`},
{target:`.toReversed()`, content:`要素を逆順に並べた新しい配列を返すメソッド。<br>newArray = array.***()`},
{target:`.toLocaleString()`, content:`配列の要素を表す文字列を返すメソッド。引数 locales と options を指定して呼び出し、実装で定義された区切り文字 (',') でその結果を連結したものを返す。<br>const prices = ['￥7', 500, 8123, 12];<br>prices.***('ja-JP', { style: 'currency', currency: 'JPY'<br>});→'￥7,￥500,￥8,123,￥12' `},
{target:`.toSorted()`, content:`.sort() メソッドに対応するコピーメソッド。要素を昇順にソートした新しい配列を返す。<br>const values = [1, 10, 21, 2];<br>const sortedValues = values.***((a, b) => a - b);<br>sortedValues→[1, 2, 10, 21], values→[1, 10, 21, 2]`},
{target:`.toSpliced()`, content:`.splice() メソッドに対応するコピーメソッド。指定された位置の要素を除去したり置き換えたりした新しい配列を返す。<br>***(startIndex, deleteCount, item1, item2)<br>const months = ['Jan', 'Feb', 'May'];<br>const months1 = months.***(1, 1, 'Feb', 'Mar');<br>months1→['Jan', 'Feb', 'Mar', 'May'], months→['Jan', 'Feb', 'May']`},
{target:`.toString()`, content:`指定された配列とその要素を表す文字列を返すメソッド。<br>const array = [1, 2, 'a', '1a'];<br>array1.***()→'1,2,a,1a'`},
{target:`Array()`, content:`配列オブジェクトを生成するコンストラクター。スプレッド構文と組合せることでn個のundefinedからなる新しい配列を作成できる。これと.forEach等を組合せることでn回の繰り返し作業が可能（空はスキップされるためスプレッド構文による展開が必要）。<br>***('りんご', 'バナナ')→['りんご', 'バナナ']<br>***(2)→[空、空]<br>[...***(3)]→[undefined, undefined, undefined]`},
{target:`Array.from()`, content:`反復可能オブジェクトや配列風オブジェクトからシャローコピーされた、新しい Array インスタンスを生成する静的メソッド。<br>***.***([1, 2, 3], (x) => x + x))→[2, 4, 6]<br>***.***('foo')→['f', 'o', 'o']`},
{target:`Array.isArray()`, content:`渡された値が配列かどうかを判断する静的メソッド。<br>***.***([1, 3, 5]);→true<br>***.***('[]'));→false`},
{target:`Array.of()`, content:`引数の数や型にかかわらず、可変長引数から新しい配列インスタンスを生成する静的メソッド。<br>const array = ***.***('foo', 2, 'bar', true);→['foo', 2, 'bar', true]`},
{target:`Object.assign()`, content:`すべての列挙可能な自身のプロパティの値を、 1 つ以上のコピー元オブジェクトからコピー先オブジェクトにコピーするために使用するメソッド。ターゲットに空のオブジェクトを指定することで、新たなオブジェクトにsourceのオブジェクトのコピーを作れる。<br>***.***(target, ...sources);<br>copyObj = ***.***({}, source);`},
{target:`Object.keys()`, content:`指定されたオブジェクトが持つプロパティの 名前の配列を、通常のループで取得するのと同じ順序で返すメソッド。<br>***.***(obj)`},
{target:`Object.values()`, content:`指定されたオブジェクトが持つ列挙可能なプロパティの値を、 for...in ループで提供される場合と同じ順序で配列にして返すメソッド。<br>***.***(obj);`},
{target:`Object.groupBy()`, content:`指定されたコールバック関数によって返された文字列値に従って、指定された反復可能な要素をグループ化する静的メソッド。返されるオブジェクトには、グループごとに個別のプロパティがあり、グループ内の要素を含む配列が格納。<br>***.***(items, callbackFn)<br>const inventory = [<br>  { name: 'asparagus', type: 'vegetables', quantity: 5 },<br>  { name: 'bananas', type: 'fruit', quantity: 0 },<br>  { name: 'goat', type: 'meat', quantity: 23 },<br>  { name: 'cherries', type: 'fruit', quantity: 5 },<br>  { name: 'fish', type: 'meat', quantity: 22 },<br>};<br>const result = ***.***(inventory, ({ type }) => type);<br>{  vegetables: [{ name: 'asparagus', type: 'vegetables', quantity: 5 },],  fruit: [ { name: 'bananas', type: 'fruit', quantity: 0 },  { name: 'cherries', type: 'fruit', quantity: 5 }],  meat: [  { name: 'goat', type: 'meat', quantity: 23 }, { name: 'fish', type: 'meat', quantity: 22 } ]}`},
{target:`.toString()`, content:`値を文字列に変換するメソッド。<br>let num = 42; num.***()→'42'`},
{target:`.toLowerCase()`, content:`文字列を小文字に変換するメソッド。<br>'Hello'.***()→'hello'`},
{target:`.toUpperCase()`, content:`文字列を大文字に変換するメソッド。<br>'hello'.***()→'HELLO'`},
{target:`.startsWith()`, content:`文字列が引数で指定された文字列で始まるかを判定して true か false を返すメソッド。<br>***(searchString, endPosition)`},
{target:`.endsWith()`, content:`文字列が引数で指定された文字列で終わるかを判定して true か false を返すメソッド。<br>***(searchString, endPosition)`},
{target:`.includes()`, content:`1 つの文字列を別の文字列の中に見出すことができるかどうかを判断し、必要に応じて true か false を返すメソッド。<br>***(searchString, position)`},
{target:`.indexOf()`, content:`この文字列を検索し、指定した部分文字列が最初に出現するインデックスを返すメソッド。<br>***(searchString, position)`},
{target:`.padEnd()`, content:`結果の文字列が指定した長さになるように、現在の文字列を他の文字列で（必要に応じて繰り返して）延長するメソッド。延長は、現在の文字列の末尾から適用される。<br>***(targetLength, padString)`},
{target:`.padStart()`, content:`結果の文字列が指定した長さになるように、現在の文字列を他の文字列で（必要に応じて繰り返して）延長するメソッド。延長は、現在の文字列の最初から適用される。<br>***(targetLength, padString)`},
{target:`.repeat()`, content:`呼び出し元の文字列を指定した数だけコピーして結合した新しい文字列を構築して返すメソッド。<br>const mood = 'Happy! ';<br>***.repeat(3)→'Happy! Happy! Happy! '`},
{target:`.replace()`, content:`pattern に一致する文字列の一部またはすべてを replacement で置き換えた新しい文字列を返すメソッド。<br>***(pattern, replacement)`},
{target:`.replaceAll()`, content:`pattern に一致したすべての文字列を replacement で置き換えた新しい文字列を返すメソッド。<br>***(pattern, replacement)`},
{target:`.search()`, content:`正規表現とこの 文字列オブジェクトが一致するかどうかを調べるメソッド。<br>***(regexp)`},
{target:`.slice()`, content:`元の文字列を変更せず、文字列の一部分を取り出し、それを新しい文字列として返すメソッド。<br>***(indexStart, indexEnd)`},
{target:`.split()`, content:`パターンを受け取り、文字列をパターン検索によって部分文字列の順序付きリストに分割し、これらの部分文字列を配列に入れ、その配列を返すメソッド。<br>***(separator, limit)`},
{target:`.substring()`, content:`文字列の一部、開始インデックスから終了インデックスの手前まで、または終了インデックスが指定されなかった場合は文字列の最後までを返すメソッド。<br>***(indexStart, indexEnd)`},
{target:`.trim()`, content:`文字列の両端からホワイトスペースを取り除き、元の文字列を変更せずに新しい文字列を返すメソッド。<br>const greeting = '   Hello world!   ';<br>greeting.***()→'Hello world!'`},
{target:`.trimEnd()`, content:`元の文字列を変更せずに、文字列の末尾のホワイトスペースを削除した新しい文字列を返すメソッド。<br>const greeting = '   Hello world!   ';<br>greeting.***()→'   Hello world!'`},
{target:`.trimStart()`, content:`元の文字列を変更せずに、文字列の先頭のホワイトスペースを削除した新しい文字列を返すメソッド。<br>const greeting = '   Hello world!   ';<br>greeting.***()→'Hello world!   '`},
{target:`.valueOf()`, content:`文字列オブジェクトのプリミティブ値を返すメソッド。<br>***()`},
{target:`Math.abs()`, content:`数値の絶対値を返す関数。<br>***.***(x)→|x|`},
{target:`Math.pow()`, content:`数の累乗を計算する JavaScript の組み込み関数。<br>Math.pow(2, 3)→8`},
{target:`Math.random()`, content:`0 以上 1 未満 (0 は含むが、 1 は含まない) の範囲で浮動小数点の擬似乱数を返す関数。<br>***.***()`},
{target:`Math.round()`, content:`引数として与えた数を四捨五入して、もっとも近似の整数を返す関数。<br>***.***(0.9)→1`},
{target:`Math.ceil()`, content:`引数として与えた数以上の最小の整数を返す関数。<br>***.***(0.95)→1`},
{target:`Math.floor()`, content:`与えられた数値以下の最大の整数を返す関数。<br>***.***(1.2)→1`},
{target:`Math.trunc()`, content:`引数として与えた数の小数部の桁を取り除くことによって整数部を返す関数。<br>***.***(13.3)→13, ***.***(-12.3)→-12`},
{target:`Math.sign()`, content:`引数として渡された数値の符号が正か負かを表す +/- 1 を返す関数。渡された数が 0 であれば、 +/- 0 を返す。数値が正である場合、明示的な (+) は返さない。<br>***.***(3)→1`},
{target:`Math.max()`, content:`入力引数として与えられた 0 個以上の数値のうち最大の数を返す関数。<br>***.***(1, 3, 2)→3`},
{target:`Math.min()`, content:`引数で渡されたもののうち最小の値を返す関数。<br>***.***(2, 3, 1)→1`},
{target:`Math.hypot()`, content:`各引数の二乗の合計値の平方根を返す関数。<br>***.***(3, 4)→5`},
{target:`Math.sqrt()`, content:`ある数の平方根を返す関数。<br>***.***(4)→2`},
{target:`Math.PI`, content:`円周と直径の比率を表すプロパティ`},
{target:`.toString()`, content:`指定された数値を表現する文字列を返すメソッド。<br>***(10)→'10'`},
{target:`.toFixed()`, content:`数を固定小数点表記を用いて整形するメソッド。<br>Number.***(2)→'123.45'`},
{target:`Number.isInteger()`, content:`整数かどうかを判定する静的メソッド。<br>***.***(42.5)→false`},
{target:`Number.parseFloat()`, content:`引数を解釈して浮動小数点値を返す静的メソッド。<br>***.***('42.5')→42.5`},
{target:`Number.parseInt()`, content:`文字列の引数を解釈し、指定された基数の整数値を返す静的メソッド。<br>***.***('12')→12`},
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
{target:`src`, content:`要素のソースのCSSプロパティ。<br>***: local(font);`},
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
{target:`.getElementsByTagName()`, content:`タグ名に基づいて要素を取得するDOMメソッド。<br>document.***()`},
{target:`.getElementsByClassName()`, content:`クラス名に基づいて要素を取得するDOMメソッド。<br>document.***()`},
{target:`.getElementById()`, content:`IDに基づいて要素を取得するDOMメソッド。<br>document.***()`},
{target:`.createElement()`, content:`新しい要素を作成するDOMメソッド。<br>document.***()`},
{target:`.appendChild()`, content:`要素に子要素を追加するDOMメソッド。<br>element.***()`},
{target:`.addEventListener()`, content:`イベントリスナーを要素に追加するDOMメソッド。リスナーには関数を指定。<br>element.***(type, listener)`},
{target:`.animate( , )`, content:`要素に対してアニメーションを適用するDOMメソッド。<br>element.***(keyframes, options)`},
{target:`.innerText`, content:`要素のテキストコンテンツを取得または設定するプロパティ。<br>element.***`},
{target:`.innerHTML`, content:`要素のHTMLコンテンツを取得または設定するプロパティ。<br>element.***`},
{target:`.textContent`, content:`要素のテキストコンテンツを取得または設定するプロパティ。<br>element.***`},
{target:`.duration`, content:`アニメーションやメディアの時間長さを表すプロパティ。<br>element.***`},
{target:`.className`, content:`要素のクラス名を取得または設定するプロパティ。<br>element.***`},
{target:`.onclick`, content:`クリック時の動作のDOMメソッド。<br>element.***`},
{target:`.classList`, content:`要素のクラス一覧を取得または設定するプロパティ。<br>element.***`},
{target:`.remove()`, content:`要素の削除するDOMメソッド。<br>element.***()`},
{target:`.add()`, content:`要素への追加するDOMメソッド。<br>element.***()`},
{target:`.location.assign()`, content:`新しいURLへ移動するDOMメソッド。<br>window.***.***()`},
{target:`.querySelector()`, content:`指定されたセレクターまたはセレクター群に一致する、文書内の最初の Element を返すメソッド。<br>document.***(selectors)`},
{target:`.querySelectorAll()`, content:`要素の複数選択するDOMメソッド。<br>document.***(selectors)`},
{target:`.removeEventListener`, content:`イベントリスナーの削除するDOMメソッド。<br>element.***(type, listener)`},
{target:`.removeChild()`, content:`子要素の削除するDOMメソッド。<br>document.***(child)`},
{target:`setTimeout()`, content:`一定時間後に指定された関数を実行するDOMメソッド。<br>***(code, delay)<br>***(() => {<br>  console.log('Delayed for 1 second.');<br>}, '1000');`},
{target:`location.reload()`, content:`現在のURLの再読み込みのDOMメソッド。<br>***.***()`},
{target:`.location`, content:`現在のURL。代入で新しいURLへ移行するDOMプロパティ。<br>document.***`},
{target:`placeholder`, content:`入力欄のプレースホルダを取得または設定するプロパティ。<br>***=`},
{target:`.outerHTML`, content:`要素のHTML全体を取得または設定するプロパティ。<br>element.***`},
{target:`.style`, content:`要素のインラインスタイルを CSSStyleDeclaration オブジェクトの形で返します。このオブジェクトには、その要素のインラインの style 属性で定義されている属性に値が割り当てられている、その要素のすべてのスタイルプロパティのリストが入るプロパティ。<br>element.***.backgroundColor = 'red'`},
{target:`.search`, content:`URLのクエリ文字列を取得または設定するプロパティ。<br>url.***`},
{target:`setInterval()`, content:`定期的な処理の開始するタイマーメソッド。<br>***(func, delay)`},
{target:`clearInterval()`, content:`定期的な処理の停止するタイマーメソッド。<br>***(intervalID)`},
{target:`.alert()`, content:`ダイアログボックスを表示する。<br>***('Hello, World!');→ダイアログに 'Hello, World!' を表示<br>window.***('Hello world!')`},
{target:`align-items`, content:`フレックスアイテムの垂直方向の配置を指定するCSSプロパティ。<br>***: center;→アイテムを垂直中央に配置`},
{target:`background-image`, content:`背景に使用する画像を指定するCSSプロパティ。<br>***: url('image.jpg');→背景に 'image.jpg' 画像を表示`},
{target:`background-size`, content:`背景画像のサイズを指定するCSSプロパティ。<br>***: cover;→背景画像を要素に合わせて表示`},
{target:`border-radius`, content:`ボーダーの角の半径を指定するCSSプロパティ。<br>***: 10px;→ボーダーの角を10pxの円で丸くする`},
{target:`border-right`, content:`ボーダーの右側を指定するCSSプロパティ。<br>***: 1pxsolid#000;→ボーダーの右側を1pxの黒い実線に指定`},
{target:`border-top`, content:`ボーダーの上側を指定するCSSプロパティ。<br>***: 1pxsolid#000;→ボーダーの上側を1pxの黒い実線に指定`},
{target:`bottom`, content:`要素の下端位置を指定するCSSプロパティ。<br>***: 20px;→要素の下端を20px下に配置`},
{target:`box-shadow`, content:`要素に影を付けるするCSSプロパティ。<br>***: 2px2px4px#000;→要素に2px右下に4pxの黒い影を追加`},
{target:`box-sizing`, content:`ボックスモデルのサイズ計算方法を指定するCSSプロパティ。<br>***: border-box;→ボックスモデルにボーダーとパディングを含む`},
{target:`column-gap`, content:`列と列の間隔を指定するCSSプロパティ。<br>***: 20px;→列と列の間隔を20pxに指定`},
{target:`cursor`, content:`マウスポインタの形状を指定するCSSプロパティ。<br>***: pointer;→マウスポインタをポインター形状に指定`},
{target:`flex-direction`, content:`フレックスコンテナ内のアイテムの配置方向を指定するCSSプロパティ。<br>***: column;→アイテムを縦方向に配置`},
{target:`font-family`, content:`テキストに使用するフォントを指定するCSSプロパティ。<br>***: Arial',sans-serif;→'Arial' フォントまたはサンセリフフォントを指定`},
{target:`font-size`, content:`テキストのフォントサイズを指定するCSSプロパティ。<br>***: 16px;→テキストのフォントサイズを16pxに指定`},
{target:`font-weight`, content:`テキストの太さを指定するCSSプロパティ。<br>***: bold;→テキストの太さを太字に指定`},
{target:`letter-spacing`, content:`文字間のスペースを指定するCSSプロパティ。<br>***: 2px;→文字間に2pxのスペースを設ける`},
{target:`line-height`, content:`行の高さを指定するCSSプロパティ。<br>***: 1.5;→行の高さをフォントサイズの1.5倍に指定`},
{target:`list-style`, content:`リストアイテムのマーカーのスタイルを指定するCSSプロパティ。<br>***: squareinside;→マーカーのスタイルを正方形に指定`},
{target:`margin-top`, content:`要素の上端からのマージンを指定するCSSプロパティ。<br>***: 10px;→上端から10pxのマージンを設ける`},
{target:`max-height`, content:`要素の最大の高さを指定するCSSプロパティ。<br>***: 300px;→要素の高さを最大300pxに制限`},
{target:`max-width`, content:`要素の最大の幅を指定するCSSプロパティ。<br>***: 500px;→要素の幅を最大500pxに制限`},
{target:`object-fit`, content:`画像などの置換要素の表示方法を指定するCSSプロパティ。<br>***: cover;→画像を要素に合わせて表示`},
{target:`object-fit`, content:`画像などの置換要素の表示方法を指定するCSSプロパティ。<br>***: cover;→画像を要素に合わせて表示`},
{target:`overflow`, content:`要素のオーバーフローの挙動を指定するCSSプロパティ。<br>***: hidden;→要素のオーバーフローを非表示にする`},
{target:`scale`, content:`変形（拡大縮小）のスケールを指定するCSSプロパティ。<br>***: scale(1.5);→要素を1.5倍に拡大`},
{target:`scroll-behavior`, content:`スクロールの動作を指定するCSSプロパティ。<br>***: smooth;→スクロールを滑らかにする`},
{target:`text-align`, content:`テキストの水平方向の配置を指定するCSSプロパティ。<br>***: center;→テキストを中央に配置`},
{target:`text-decoration`, content:`テキストの装飾を指定するCSSプロパティ。<br>***: underline;→テキストに下線を追加`},
{target:`text-shadow`, content:`テキストに影を指定するCSSプロパティ。<br>***: 2px2px4px#000;→テキストに2px右下に4pxの黒い影を追加`},
{target:`text-wrap`, content:`テキストの折り返し方法を指定するCSSプロパティ。<br>***: nowrap;→テキストを折り返さずに表示`},
{target:`top`, content:`要素の上端位置を指定するCSSプロパティ。<br>***: 20px;→要素の上端を20px上に配置`},
{target:`transition`, content:`変化時のアニメーション効果を指定するCSSプロパティ。<br>***: opacity0.5sease-in-out;→不透明度の変化を0.5秒かけてイージングで実行`},
{target:`width`, content:`要素の幅を指定するCSSプロパティ。<br>***: 200px;→要素の幅を200pxに指定`},
{target:`z-index`, content:`要素のスタッキングコンテキストの位置を指定するCSSプロパティ。<br>***: 3;→要素のスタッキングコンテキストの位置を3に指定`},
{target:`prompt()`, content:`ユーザーに質問を提示して入力を受け取るする。<br>***('What's your name?');→ダイアログで質問し、入力を取得`},
{target:`confirm()`, content:`ユーザーに確認を求める。<br>***('Are you sure?');→ダイアログで確認し、OKかキャンセルを取得`},
{target:`Date`, content:`日付と時刻を表すオブジェクト。<br>new ***();→現在の日付と時刻のオブジェクトを作成`},
{target:`.toLocaleDateString()`, content:`ローカルの日付を文字列に変換するメソッド。<br>new Date().***();→ローカルの日付を文字列に変換`},
{target:`.toLocaleTimeString()`, content:`ローカルの時刻を文字列に変換するメソッド。<br>new Date().***();→ローカルの時刻を文字列に変換`},
{target:`Promise`, content:`非同期処理を扱うオブジェクト。<br>new ***((resolve, reject) => {...});→***インスタンスを作成`},
{target:`async`, content:`非同期関数の宣言修飾子。<br>*** function fetchData() { ... }→非同期関数を宣言`},
{target:`await`, content:`Promise の解決を待つ。<br>const result = *** fetchData();→非同期処理の結果を待つ`},
{target:`.cookie`, content:`クッキーの操作のプロパティ。<br>document.*** = 'user=John';→クッキーに 'user=John' を保存`},
{target:`fetch()`, content:`ネットワークリクエストを行うするメソッド。<br>***('https://api.example.com/data');→リモートサーバーからデータを取得`},
{target:`.then()`, content:`最大 2 つの引数として、 Promise が成功した場合と失敗した場合のコールバック関数を取るメソッド。<br>fetch('...').***(response => {...});→Promise の成功時に実行される処理を定義`},
{target:`localStorage`, content:`ローカルストレージにアクセスのプロパティ。<br>***.setItem('key', 'value');→ローカルストレージにデータを保存`},
{target:`sessionStorage`, content:`セッションストレージにアクセスのプロパティ。<br>***.setItem('key', 'value');→セッションストレージにデータを保存`},
{target:`.navigator`, content:`スクリプトを実行しているアプリケーションに関するメソッドとプロパティを持つ Navigator オブジェクトへの参照を返すプロパティ。<br>***.userAgent;→ブラウザのユーザーエージェントを取得`},
{target:`.history`, content:`ブラウザの履歴を制御のプロパティ。<br>window.***.back();→ブラウザの履歴を一つ戻る`},
{target:`.screen`, content:`デバイスの画面に関する情報のプロパティ。<br>window.***.width;→画面の幅を取得`},
{target:`setTimeout()`, content:`指定した時間後に関数を実行するメソッド。<br>***(() => { console.log('Hi!'); }, 1000);→1秒後に 'Hi!' をログに表示`},
{target:`RegExp`, content:`正規表現を表すオブジェクト。<br>const *** = new RegExp('\\d+');→数字にマッチする正規表現オブジェクト`},
{target:`.test()`, content:`正規表現に対して文字列をテストするメソッド。<br>regex.***('123');→正規表現に合致するかをテスト`},
{target:`.match()`, content:`文字列を正規表現で検索するメソッド。<br>Hello, World!'.***(/World/);→'World' にマッチする部分を取得`},
{target:`.charCodeAt()`, content:`文字列内の指定位置の文字コードを取得するメソッド。<br>'ABC'.charCodeAt(1);→66 (文字 'B' のUnicodeコード)`},
{target:`String.fromCharCode()`, content:`Unicodeコードから文字列を生成する静的メソッド。<br>***.***(65, 66, 67);→'ABC'`},
{target:`.getDate()`, content:`日付オブジェクトから日を取得するメソッド。<br>new Date().***();→現在の日を取得`},
{target:`.getDay()`, content:`日付オブジェクトから曜日を取得するメソッド。<br>new Date().***();→現在の曜日を取得`},
{target:`.getFullYear()`, content:`日付オブジェクトから年を取得するメソッド。<br>new Date().***();→現在の年を取得`},
{target:`.getHours()`, content:`日付オブジェクトから時を取得するメソッド。<br>new Date().***();→現在の時を取得`},
{target:`.getMilliseconds()`, content:`日付オブジェクトからミリ秒を取得するメソッド。<br>new Date().***();→現在のミリ秒を取得`},
{target:`.getMinutes()`, content:`日付オブジェクトから分を取得するメソッド。<br>new Date().***();→現在の分を取得`},
{target:`.getMonth()`, content:`日付オブジェクトから月を取得するメソッド。<br>new Date().***();→現在の月を取得`},
{target:`.getSeconds()`, content:`日付オブジェクトから秒を取得するメソッド。<br>new Date().***();→現在の秒を取得`},
{target:`.getTime()`, content:`日付オブジェクトからエポックからのミリ秒を取得するメソッド。<br>new Date().***();→現在のエポックからのミリ秒を取得`},
{target:`.getTimezoneOffset()`, content:`タイムゾーンオフセットを取得するメソッド。<br>new Date().***();→タイムゾーンのオフセットを取得`},
{target:`.getUTCDate()`, content:`UTC時刻から日を取得するメソッド。<br>new Date().***();→現在のUTC日を取得`},
{target:`.getUTCDay()`, content:`UTC時刻から曜日を取得するメソッド。<br>new Date().***();→現在のUTC曜日を取得`},
{target:`.getUTCFullYear()`, content:`UTC時刻から年を取得するメソッド。<br>new Date().***();→現在のUTC年を取得`},
{target:`.getUTCHours()`, content:`UTC時刻から時を取得するメソッド。<br>new Date().***();→現在のUTC時を取得`},
{target:`.getUTCMilliseconds()`, content:`UTC時刻からミリ秒を取得するメソッド。<br>new Date().***();→現在のUTCミリ秒を取得`},
{target:`.getUTCMinutes()`, content:`UTC時刻から分を取得するメソッド。<br>new Date().***();→現在のUTC分を取得`},
{target:`.getUTCMonth()`, content:`UTC時刻から月を取得するメソッド。<br>new Date().***();→現在のUTC月を取得`},
{target:`.getUTCSeconds()`, content:`UTC時刻から秒を取得するメソッド。<br>new Date().***();→現在のUTC秒を取得`},
{target:`.setDate()`, content:`日付オブジェクトの日を設定のメソッド。<br>new Date(); date.***(15);→date の日を 15 に設定`},
{target:`.setFullYear()`, content:`日付オブジェクトの年を設定のメソッド。<br>new Date(); date.***(2023);→date の年を 2023 に設定`},
{target:`.setHours()`, content:`日付オブジェクトの時を設定のメソッド。<br>new Date(); date.***(12);→date の時を 12 に設定`},
{target:`.setMilliseconds()`, content:`日付オブジェクトのミリ秒を設定のメソッド。<br>new Date(); date.***(500);→date のミリ秒を 500 に設定`},
{target:`.setMinutes()`, content:`日付オブジェクトの分を設定のメソッド。<br>new Date(); date.***(30);→date の分を 30 に設定`},
{target:`.setMonth()`, content:`日付オブジェクトの月を設定のメソッド。<br>new Date(); date.***(5);→date の月を 5 に設定`},
{target:`.setSeconds()`, content:`日付オブジェクトの秒を設定のメソッド。<br>new Date(); date.***(45);→date の秒を 45 に設定`},
{target:`.setTime()`, content:`日付オブジェクトにエポックからのミリ秒を設定のメソッド。<br>new Date(); date.***(1609459200000);→date を指定のエポックミリ秒に設定`},
{target:`.setUTCDate()`, content:`UTC時刻の日を設定のメソッド。<br>new Date(); date.***(10);→date のUTC日を 10 に設定`},
{target:`.setUTCFullYear()`, content:`UTC時刻の年を設定のメソッド。<br>new Date(); date.***(2023);→date のUTC年を 2023 に設定`},
{target:`.setUTCHours()`, content:`UTC時刻の時を設定のメソッド。<br>new Date(); date.***(8);→date のUTC時を 8 に設定`},
{target:`.setUTCMilliseconds()`, content:`UTC時刻のミリ秒を設定のメソッド。<br>new Date(); date.***(200);→date のUTCミリ秒を 200 に設定`},
{target:`.setUTCMinutes()`, content:`UTC時刻の分を設定のメソッド。<br>new Date(); date.***(45);→date のUTC分を 45 に設定`},
{target:`.setUTCMonth()`, content:`UTC時刻の月を設定のメソッド。<br>new Date(); date.***(5);→date のUTC月を 5 に設定`},
{target:`.setUTCSeconds()`, content:`UTC時刻の秒を設定のメソッド。<br>new Date(); date.***(30);→date のUTC秒を 30 に設定`},
{target:`.toDateString()`, content:`日付オブジェクトを文字列に変換のメソッド。<br>new Date(); date.***();→date を文字列に変換`},
{target:`.toISOString()`, content:`日付オブジェクトをISO形式の文字列に変換のメソッド。<br>new Date(); date.***();→date をISO形式の文字列に変換`},
{target:`.toJSON()`, content:`日付オブジェクトをJSON形式の文字列に変換のメソッド。<br>new Date(); date.***();→date をJSON形式の文字列に変換`},
{target:`.toTimeString()`, content:`日付オブジェクトの時刻部分を文字列に変換のメソッド。<br>new Date(); date.***();→date の時刻部分を文字列に変換`},
{target:`.toUTCString()`, content:`日付オブジェクトをUTC時刻の文字列に変換のメソッド。<br>new Date(); date.***();→date をUTC時刻の文字列に変換`},
{target:`.apply()`, content:` this 値を指定して関数を呼び出し、 arguments は配列 (または配列風オブジェクト) として提供するメソッド。<br>func.***(context, argsArray);→func を指定した context で実行`},
{target:`.bind()`, content:`関数のthisと引数を固定するメソッド。<br>const boundFunc = func.***(context, arg1, arg2);→func の this を context に、引数を arg1, arg2 に固定`},
{target:`.call()`, content:`this の値と、独立して提供された引数によって関数を呼び出すメソッド。<br>func.***(context, arg1, arg2);→func を指定した context で実行`},
{target:`.name`, content:`関数オブジェクトの名前プロパティ。<br>function example() {}; example.***;→example`},
{target:`EvalError`, content:`評価中に発生するエラーオブジェクト。<br>throw new ***('Custom EvalError');→評価中のエラーを表すオブジェクト`},
{target:`URIError`, content:`URI操作関連のエラーオブジェクト。<br>throw new ***('Custom URIError');→URI関連のエラーを表すオブジェクト`},
{target:`TypeError`, content:`型エラーオブジェクト。<br>throw new ***('Custom TypeError');→型に関連するエラーを表すオブジェクト`},
{target:`SyntaxError`, content:`構文エラーオブジェクト。<br>throw new ***('Custom SyntaxError');→構文に関連するエラーを表すオブジェクト`},
{target:`ReferenceError`, content:`参照エラーオブジェクト。<br>throw new ***('Custom ReferenceError');→変数やプロパティの参照に関連するエラーを表すオブジェクト`},
{target:`RangeError`, content:`範囲エラーオブジェクト。<br>throw new ***('Custom RangeError');→数値の範囲に関連するエラーを表すオブジェクト`},
]
