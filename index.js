let numCardsToMake = 24;
let showAdmin = false;
window.onload = () =>  {
    const content = document.querySelector("#cards");

    content.innerHTML = makeCards();
}

const makeCards = () => {
    let cardTags = "";

    for (let i = 0; i < numCardsToMake; i++) {
        cardTags += `<div class="thecards"> 
        
        <div class="demo-card-square mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title mdl-card--expand">
                <h2 class="mdl-card__title-text"></h2>
            </div>
            <div class="mdl-card__supporting-text">
              <div class="text-space">
                   <b>Name:</b> Joe Smith
               </div>
               <div class="text-space">
                   <b>Status:</b> 3rd year New Media Design
               </div>
                <div class="text-space">
                   <b>Email:</b> abcd@rit.edu
               </div>
        </div>

            <div class="mdl-card__actions">
                <button class="mdl-button mdl-js-button mdl-button--raised view-pf-btn">
                    View Portfolio
                </button>
                <div class="interest-tags">
                    <button class="mdl-chip">
                        <span class="mdl-chip__text"> #UI design</span>
                    </button>
                    <button class="mdl-chip">
                        <span class="mdl-chip__text">#3D modeling</span>
                    </button>
                    <button class="mdl-chip">
                        <span class="mdl-chip__text">#UX design</span>
                    </button>
                    <button class="mdl-chip">
                        <span class="mdl-chip__text">#Typography</span>
                    </button>
                </div>
            </div> `;
            if (showAdmin) {
                cardTags += 
                    `<div class = "admin-btns">
                        <button class="mdl-button mdl-js-button mdl-button--raised edit-btn">
                            Edit Listing
                        </button>
                        <button onclick="makeNewCards()" class="remove-btn mdl-button mdl-js-button mdl-button--raised">
                            Remove Listing
                        </button>
                    </div>`;
            }
        cardTags+=`</div>`;
    }
    numCardsToMake--;

    return cardTags;
}

const makeNewCards = () => {
    const content = document.querySelector("#cards");

    content.innerHTML = makeCards(numCardsToMake);
}

function onKonamiCode(cb) {
    var input = '';
    var key = '38384040373937396665';
    document.addEventListener('keydown', function (e) {
      input += ("" + e.keyCode);
      if (input === key) {
        return cb();
      }
      if (!key.indexOf(input)) return;
      input = ("" + e.keyCode);
    });
  }
  
onKonamiCode(function () {
    // let atag = document.createElement("a");
    // atag.href = "./admin.html";
    // atag.click();

    showAdmin = !showAdmin;
    makeNewCards();
})