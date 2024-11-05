const darkWebUsernames = [
  "ShadowBroker99",
  "Crypt0Freak",
  "HexedOutlaw",
  "NightShadeX",
  "PhantomCipher",
  "TorWanderer",
  "0xDEADB33F",
  "ObsidianSoul",
  "DeepDiver21",
  "SilentSpectre",
  "ByteBandit",
  "GhostProtocol",
  "LucidDreamer",
  "VirusVendetta",
  "HexHunter",
  "DarkMatter32",
  "MidnightViper",
  "SpectralShift",
  "CipherNinja",
  "EncryptedReaper",
  "QuantumGh0st",
  "N3cr0M4ncer",
  "Cyb3rV01d",
  "V1rusW0rm",
  "NihilistNemesis",
  "ShadowCrawler",
  "VenomousVex",
  "NeonHavoc",
  "H4x0rHaven",
  "TheOnyxWraith",
  "GlitchGoblin",
  "An0n0maly",
  "CrypticSpectre",
  "ZeroDarkEther",
  "SpiderByte",
  "SpectreVigil",
  "BinaryBanshee",
  "Oblivion13",
  "FallenHex",
  "H4untedH0st",
  "PhreakPhantom",
];

const prices = [
  74.99, 150.0, 85.5, 99.99, 135.75, 120.25, 195.0, 65.49, 180.99, 52.5,
];

const article = document.querySelector(".lies");
const modal = document.querySelector("#modal");
const modalText = document.querySelector("#modal__inner-text");
const modalForm = document.querySelector(".modal__inner-form");

// makes the modal appear after 3.5 seconds
setTimeout(function () {
  article.style.filter = "blur(3px)";
  /**
   * setting the modal to display block is more
   * consistent in layout and cross browser functionality
   * compared to setting it to inline
   */
  modal.style.display = "block";
}, 3500);

modalForm.addEventListener("submit", function (submit) {
  submit.preventDefault();
  const modalFormData = new FormData(modalForm);
  const userNameSurname = modalFormData.get("userNameSurname");

  document.querySelector(".modal__inner-title").style.textAlign = "center";
  document.querySelector(".modal__inner-form").style.display = "none";
  /**
   * for the file path below think in terms of your index.html file
   * because we are inserting this content into that doc, so the relative
   * file path would need to be relative from that document
   */
  modalText.innerHTML = `<div class="modal__inner-loading">
                          <img src="./assets/images/loading.svg" class="loading" />
                          <p id="modal__inner-upload-text">
                            Uploading the information of <span class="modal__display-name">${userNameSurname}</span> to the dark web
                          </p>
                        </div>`;

  const modalTextUpload = document.querySelector("#modal__inner-upload-text");
  setTimeout(() => {
    modalTextUpload.textContent = `Selling information to ${randomIndex(
      darkWebUsernames
    )}`;
  }, 2250);

  setTimeout(() => {
    modalTextUpload.textContent = `Information sold for $${randomIndex(
      prices
    )}`;
  }, 5000);

  setTimeout(() => {
    modal.style.display = "none";
    article.style.filter = "blur(0)";
  }, 6500);
});

function randomIndex(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
