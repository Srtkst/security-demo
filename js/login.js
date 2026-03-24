// =======================
// ① 脆弱ログイン体験
// =======================
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const result = document.getElementById("loginResult");

    const correctID = "yamada.hanako@example.com";
    const correctPASS = "hanako2007";

    // 正解ログイン
    if (username === correctID && password === correctPASS) {
        result.innerHTML = "✅ ログイン成功！（推測成功）";
        result.style.color = "lightgreen";
        return;
    }

    // SQLインジェクション風（わざと脆弱）
    if (password.includes("' OR '1'='1") || password.includes("or 1=1")) {
        result.innerHTML = "🚨 ログイン成功…？（不正アクセス！）";
        result.style.color = "orange";
        return;
    }

    result.innerHTML = "❌ ログイン失敗";
    result.style.color = "red";
}


// =======================
// ② パスワード強度チェック
// =======================
function checkPassword() {
    const pw = document.getElementById("pwcheck").value;
    const result = document.getElementById("pwStrength");

    let score = 0;

    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[a-z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;

    if (score <= 2) {
        result.innerHTML = "⚠ 弱いパスワードです";
        result.style.color = "red";
    } else if (score <= 4) {
        result.innerHTML = "△ まあまあ";
        result.style.color = "yellow";
    } else {
        result.innerHTML = "✅ 強いパスワードです！";
        result.style.color = "lightgreen";
    }
}


// =======================
// ③ 暗号解読（シーザー暗号 -1）
// =======================
function decrypt() {
    const input = document.getElementById("cipherInput").value.toLowerCase();
    const result = document.getElementById("decryptResult");

    const correctAnswer = "there is a secret code";

    if (input === correctAnswer) {
        result.innerHTML = "🎉 正解！シーザー暗号（-1）でした！";
        result.style.color = "lightgreen";
    } else {
        result.innerHTML = "❌ ちがいます。ヒント：アルファベットが1つ前にずれています。";
        result.style.color = "red";
    }
}



// =======================
// ヒント表示切り替え
// =======================
function toggleHint(button) {
    const hint = button.nextElementSibling;

    if (hint.style.display === "none") {
        hint.style.display = "block";
    } else {
        hint.style.display = "none";
    }
}