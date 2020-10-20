/**
 *   Name: Cow Disguise
 * Description: A fake client side password protection
 * Version: 0.0.0
 * Author: Anthony Kung
 * Author URI: https://anth.dev
 * Copyright: 2020 Anthony Kung
 * License: MIT
 * 
 * Created with <3 by Anthony Kung
 */

function pwdAuth() {
  var chk = 'william lin cute';
  var pwd = document.getElementById('pwd').value;
  if (pwd == chk) {
    window.location.href = "/blog/shiftyblockprivatejournalwilliamlin";
  }
  else {
    var prompt = document.getElementById('prompt');
    prompt.innerText = 'Incorrect Password';
  }
}

document.getElementById('submit').addEventListener('click', pwdAuth);
