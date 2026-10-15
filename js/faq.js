/**
 * Adds "Expand all" and "Collapse all" controls to the FAQ page.
 *
 * Controls are created and injected dynamically so that if JavaScript is
 * disabled, the buttons do not appear at all.
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var items = document.querySelectorAll("details.faq-item");
    if (!items.length) {
      return;
    }

    var firstHeading = document.querySelector("main h2");
    if (!firstHeading) {
      return;
    }

    var controls = document.createElement("div");
    controls.className = "faq-controls btn-row";

    var expandBtn = document.createElement("button");
    expandBtn.type = "button";
    expandBtn.className = "btn";
    expandBtn.textContent = "Expand all";
    expandBtn.setAttribute("aria-label", "Expand all questions");

    var collapseBtn = document.createElement("button");
    collapseBtn.type = "button";
    collapseBtn.className = "btn";
    collapseBtn.textContent = "Collapse all";
    collapseBtn.setAttribute("aria-label", "Collapse all questions");

    controls.appendChild(expandBtn);
    controls.appendChild(collapseBtn);

    firstHeading.parentNode.insertBefore(controls, firstHeading);

    expandBtn.addEventListener("click", function () {
      Array.prototype.forEach.call(items, function (item) {
        item.open = true;
      });
    });

    collapseBtn.addEventListener("click", function () {
      Array.prototype.forEach.call(items, function (item) {
        item.open = false;
      });
    });
  });
})();
