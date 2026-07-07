/* Hand-Crafted Code — written by hand, naturally. */

(function () {
  "use strict";

  /* ---------- Reveal on scroll ---------- */

  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Certificate generator ---------- */

  var HERITAGE_ATTRIBUTES = [
    "Contains one (1) load-bearing global variable",
    "Aged overnight before commit",
    "Trace technical debt, as nature intended",
    "Off-by-one error, hand-placed",
    "Comments drafted in fountain pen and transcribed faithfully",
    "Indentation set by eye, two spaces at a time",
    "One TODO, preserved since the first pressing",
    "Recursion achieved from memory alone",
    "Whitespace balanced without instruments",
    "Variable names of single-origin terroir",
    "Reviewed aloud by candlelight in a batch of forty lines",
    "Semicolons placed at room temperature"
  ];

  var HOUSE_ARTISANS = [
    "Aldous Finch",
    "Beatriz Oquendo",
    "Wm. Harrington the Elder",
    "Sanae Okabe",
    "Costel Dragomir",
    "Margaux Devereux",
    "Ezra Thistlewood",
    "Ines Palladino"
  ];

  var form = document.getElementById("cert-form");
  var repoInput = document.getElementById("repo-name");
  var devInput = document.getElementById("dev-name");
  var errorLine = document.getElementById("form-error");
  var area = document.getElementById("certificate-area");

  function pick(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  function fakeHash(length) {
    var chars = "0123456789abcdef";
    var out = "";
    for (var i = 0; i < length; i++) {
      out += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return out;
  }

  function longDate(date) {
    var months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
  }

  function commitDate() {
    // A plausible commit, some weeks before today. Freshly written code rests.
    var daysAgo = 14 + Math.floor(Math.random() * 76);
    var d = new Date();
    d.setDate(d.getDate() - daysAgo);
    return d;
  }

  function serialNumber() {
    var n = 200 + Math.floor(Math.random() * 800);
    return "No. " + String(n).padStart(4, "0") + " · Series MMXXVI";
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function renderCertificate(repo, artisan) {
    var cert = el("article", "certificate");
    cert.setAttribute("aria-label", "Certificate of authenticity for " + repo);

    cert.appendChild(el("p", "cert-kicker", "Hand-Crafted Code Atelier"));
    cert.appendChild(el("h3", "cert-title", "Certificate of Authenticity"));
    cert.appendChild(el("p", "cert-presents", "This document accompanies the repository"));
    cert.appendChild(el("p", "cert-repo", repo));
    cert.appendChild(el("p", "cert-line",
      "Hand-crafted by " + artisan + ", by feel, without autocomplete."));
    cert.appendChild(el("p", "cert-attribute", pick(HERITAGE_ATTRIBUTES)));

    var blame = el("p", "cert-blame");
    blame.textContent = "blame  " + fakeHash(9) + "  (" + artisan + "  " +
      commitDate().toISOString().slice(0, 10) + ")  · signed by hand";
    cert.appendChild(blame);

    var footer = el("div", "cert-footer");

    var meta = el("div", "cert-meta");
    meta.appendChild(el("div", null, serialNumber()));
    meta.appendChild(el("div", null, "Issued " + longDate(new Date())));
    meta.appendChild(el("div", null, "Guild of Deliberate Engineers"));
    footer.appendChild(meta);

    footer.appendChild(el("div", "cert-seal", "HC"));

    var signature = el("div", "cert-signature");
    signature.appendChild(el("div", "sig", "R. Whitfield"));
    signature.appendChild(el("div", "sig-role", "Keeper of the Blame"));
    footer.appendChild(signature);

    cert.appendChild(footer);

    var actions = el("div", "cert-actions");
    var printBtn = el("button", "button button-quiet", "Print for Framing");
    printBtn.type = "button";
    printBtn.addEventListener("click", function () { window.print(); });
    actions.appendChild(printBtn);
    cert.appendChild(actions);

    return cert;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var repo = repoInput.value.trim();
    if (!repo) {
      errorLine.textContent =
        "Every certificate begins with a name. Kindly provide the repository's.";
      repoInput.focus();
      return;
    }
    errorLine.textContent = "";

    var artisan = devInput.value.trim() || pick(HOUSE_ARTISANS);

    area.innerHTML = "";
    var cert = renderCertificate(repo, artisan);
    area.appendChild(cert);

    // Let the paper settle before it appears.
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        cert.classList.add("is-shown");
      });
    });

    cert.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

})();
