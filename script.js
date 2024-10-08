(() => {
  const dynamicSelect = (id1, id2) => {
    const sel1 = document.getElementById("Металл_точка");
    const sel2 = document.getElementById("Толщина_точка");
    const clone = sel2.cloneNode(true);
    const clonedOptions = clone.getElementsByTagName("option");

    refreshDynamicSelectOptions(sel1, sel2, clonedOptions);
    sel1.addEventListener('change', () => {
      refreshDynamicSelectOptions(sel1, sel2, clonedOptions);
    });
  };

  const refreshDynamicSelectOptions = (sel1, sel2, clonedOptions) => {

    while (sel2.options.length) {
      sel2.remove(0);
    }
    const selectedOption = sel1.options[sel1.selectedIndex].value;

    for (let i = 0; i < clonedOptions.length; i++) {
      const option = clonedOptions[i];

      if (option.classList.contains('select') ||
        option.classList.contains(selectedOption)) {

        sel2.appendChild(option.cloneNode(true));
      }
    }

    const event = document.createEvent('HTMLEvents');
    event.initEvent('change', true, false);
    sel2.dispatchEvent(event);
  };

  // Вызов скрипта при загрузке страницы
  document.addEventListener("DOMContentLoaded", () => {
    dynamicSelect("select-1", "select-2");
  });
})();

(() => {
  const dynamicSelect = (id1, id2) => {
    const sel1 = document.getElementById("Металл_шов");
    const sel2 = document.getElementById("Толщина_шов");
    const clone = sel2.cloneNode(true);
    const clonedOptions = clone.getElementsByTagName("option");

    refreshDynamicSelectOptions(sel1, sel2, clonedOptions);
    sel1.addEventListener('change', () => {
      refreshDynamicSelectOptions(sel1, sel2, clonedOptions);
    });
  };

  const refreshDynamicSelectOptions = (sel1, sel2, clonedOptions) => {

    while (sel2.options.length) {
      sel2.remove(0);
    }
    const selectedOption = sel1.options[sel1.selectedIndex].value;

    for (let i = 0; i < clonedOptions.length; i++) {
      const option = clonedOptions[i];

      if (option.classList.contains('select') ||
        option.classList.contains(selectedOption)) {

        sel2.appendChild(option.cloneNode(true));
      }
    }

    const event = document.createEvent('HTMLEvents');
    event.initEvent('change', true, false);
    sel2.dispatchEvent(event);
  };

  // Вызов скрипта при загрузке страницы
  document.addEventListener("DOMContentLoaded", () => {
    dynamicSelect("select-1", "select-2");
  });
})();






