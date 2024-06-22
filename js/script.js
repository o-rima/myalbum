// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkUZpkw2p9UYtL0CxZ2rt1wkw56NyHtXM",
  authDomain: "gsmil07-2c699.firebaseapp.com",
  databaseURL: "https://gsmil07-2c699-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gsmil07-2c699",
  storageBucket: "gsmil07-2c699.appspot.com",
  messagingSenderId: "478603345189",
  appId: "1:478603345189:web:06031108f310db8b98aecc",
  measurementId: "G-Q1MDCELBT3"
};
// Initialize Firebase
initializeApp(firebaseConfig);

//サインアップボタンを押したら（自分で作成した関数）
//finctionを作成
function signUpUser(email, password){
const auth = getAuth();
//console.log(email, password, 2) //処理の流れの確認用

createUserWithEmailAndPassword(auth, email, password)
  .then(function(userInfo){
  //登録成功時
  //console.log(userInfo)
  document.getElementById('forlogin').style.display = 'block';
  })
  .catch(function(error){
  //登録失敗時やエラー時
  //console.log(error)
  $('#message').html(error);
  })
}

//「ログインはこちら」をクリックしたら
$('#forlogin-button').on('click', function(){
  location.href = "index.html"
  });

//「新規登録はこちら」をクリックしたら
  $('#signup2-button').on('click', function(){
location.href = "signup.html"
  });

//Sign-upボタンをクリックしたら
$('#signup-button').on('click' ,function(){
  const email = $("#signup-email").val();
  const password = $("#signup-password").val();
//console.log(email, password, 1) //処理の流れの確認用

signUpUser(email, password);
})

//ログイン処理（独自関数）
function loginUser(email, password){
const auth = getAuth();

signInWithEmailAndPassword(auth, email, password)
  .then(function(userInfo){
  //ログイン成功時
  //console.log(userInfo)
  location.href = "index.html";
  })
  
  .catch(function(error){
    //ログイン失敗時やエラー時
    //console.log(error)
    $('#message').html(error);
})
}

//Loginボタンをクリックしたら
$('#login-button').on('click', function(){
  const email = $("#login-email").val();
  const password = $("#login-password").val();
  
  //loginuser関数を実行する
  loginUser(email, password);

})

//ログアウト処理をする独自関数
function logoutUser(){
  const auth = getAuth();
  
  signOut(auth)
  .then(function(userInfo){
  //ログアウト成功時
  location.href = "login.html";
  })
  .catch(function(error){
  //ログアウト失敗時やエラー時
  $('#message').html(error);
  })
}

//ログアウトボタンをクリックしたら
$('#logout-button').on('click', function(){
  logoutUser();
})

//画像アップロード処理
document.getElementById('imageUpload').addEventListener('change', function(event) {
  const files = Array.from(event.target.files);
  const preview = document.getElementById('preview');

  files.forEach(file => {
    if (file.type.startsWith('image/')) {
      handleFile(file, preview);
    }
  });
});

  function handleFile(file, preview) {
    const reader = new FileReader();
  
    reader.onload = function(e) {
      const imgElement = document.createElement('img');
      imgElement.src = e.target.result;
      imgElement.alt = '画像プレビュー';

    const container = document.createElement('div');
    container.classList.add('image-container');
    container.appendChild(imgElement);

    // 先頭に新しい画像を追加
    preview.insertBefore(container, preview.firstChild);
    };
  
    reader.readAsDataURL(file);
  }