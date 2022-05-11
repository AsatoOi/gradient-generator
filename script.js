//pickerをそれぞれ変数に格納
let colorOne = document.getElementById("color-a");
let colorTwo = document.getElementById("color-b");
//現在のディレクションを格納
let currentDirection = "to bottom";
//コピー用のコードを格納するテキストエリアを変数に格納
let outputCode = document.getElementById("code");

//ディレクションを切り替えるボタンのクラス付与の関数
const setDirection = (value, self) => {
  let directions = document.querySelectorAll(".buttons button");
  //一旦全ての要素から"active"を消す
  for (let i of directions) {
    i.classList.remove("active");
  }
  //thisが引数にわたってきたものだけに"active"を付与
  self.classList.add("active");
  //引数にわたってきたディレクションを変数「currentDirection」に付与
  currentDirection = value;
};

//実際にbackGround-Colorを変える・そのコードを取得するコードを生成する関数
const generateCode = () => {
  //コードをテキストエリア内に表示する
  outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value});`;
  //実際にbodyタグに背景を適用
  document.getElementsByTagName(
    "BODY"
  )[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
};
generateCode();

//クリップボードにコピーを生成する
const copyText = () => {
  navigator.clipboard
    .writeText(outputCode.value)
    .then((text) => {
      alert("コピーされました！");
    })
    .catch((err) => {
      console.error("error!", err);
    });
};
