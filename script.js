/* =========================
   LOGIN
========================= */

function login() {

    const username =
        document.getElementById("loginUsername").value;

    const password =
        document.getElementById("loginPassword").value;

    if (username === "" || password === "") {
        alert("Please enter username and password");
        return;
    }

    document.getElementById("loginPage")
        .classList.add("hidden");

    document.getElementById("twitterPage")
        .classList.remove("hidden");
}


/* =========================
   SHOW SIGNUP
========================= */

function showSignup() {

    document.getElementById("loginPage")
        .classList.add("hidden");

    document.getElementById("signupPage")
        .classList.remove("hidden");
}


/* =========================
   SHOW LOGIN
========================= */

function showLogin() {

    document.getElementById("signupPage")
        .classList.add("hidden");

    document.getElementById("loginPage")
        .classList.remove("hidden");
}


/* =========================
   SIGNUP
========================= */

function signup() {

    const username =
        document.getElementById("signupUsername").value;

    const email =
        document.getElementById("signupEmail").value;

    const password =
        document.getElementById("signupPassword").value;

    if (
        username === "" ||
        email === "" ||
        password === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    alert("Account created successfully!");

    showLogin();
}


/* =========================
   CREATE POST
========================= */

function createPost() {

    const postInput =
        document.getElementById("postInput");

    const postText =
        postInput.value.trim();

    if (postText === "") {
        alert("Please write something!");
        return;
    }

    const posts =
        document.getElementById("posts");

    const newPost =
        document.createElement("article");

    newPost.className = "post";

    newPost.innerHTML = `
        <div class="post-user">

            <div class="avatar">
                S
            </div>

            <div>
                <strong>Sanju</strong>
                <span>@sanju</span>
            </div>

        </div>

        <p>${postText}</p>

        <div class="post-actions">
            <button>💬 0</button>
            <button>🔁 0</button>
            <button>❤️ 0</button>
        </div>
    `;

    posts.prepend(newPost);

    postInput.value = "";
}


/* =========================
   LOGOUT
========================= */

function logout() {

    document.getElementById("twitterPage")
        .classList.add("hidden");

    document.getElementById("loginPage")
        .classList.remove("hidden");
}