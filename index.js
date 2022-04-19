'use strict'
const http = require('http');
// HTTP モジュールでサーバーを立ち上げる
// req = request サーバが受信するリクエスト
// res = response requestへ返信する内容
const server = http.createServer((req, res) => {
    // リクエストが来た時の挙動
    // サーバが存在し リクエストが届く = 成功・・・200（ステータスコード）
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });
    // res.write ブラウザ名などを書き出す
    res.write(req.headers['user-agent']);
    // レスポンス書き出しを終了、レスポンスオブジェクトへの接続を切断
    res.end();
});

// HTTPを起動させるポートの指定 8000
const port = 8000;
// サーバーが立った後はポートからのリクエストを常に待つ　トリガー
server.listen(port, () => {
    console.log(`Listening on ${port}`);
});