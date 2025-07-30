// checkboxes.js

document.addEventListener('DOMContentLoaded', function () {
  const CHECKBOX_HTML = `
    <label class="field-label" style="margin-bottom: 25px; font-weight: 500;">
      <input type="checkbox" style="margin-right: 5px;" class="select-all-checkbox">
      <span class="label-value" style="font-size: 16px;">
        Согласиться со всеми перечисленными ниже условиями
      </span>
    </label>
  `;

  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    const checkboxSelectors = [
      '.part-userField input[type="checkbox"]',
      '.part-commentField input[type="checkbox"]',
      '.global-confirm-checkbox-block input[type="checkbox"]'
    ];
    const checkboxes = form.querySelectorAll(checkboxSelectors.join(','));

    if (checkboxes.length < 2) return;

    const firstFieldWrapper = checkboxes[0].closest(
      '.part-userField, .part-commentField, .global-confirm-checkbox-block'
    );

    if (!firstFieldWrapper) return;

    // Вставляем "Согласен со всеми" перед первым чекбоксом
    firstFieldWrapper.insertAdjacentHTML('beforebegin', CHECKBOX_HTML);

    const selectAllCheckbox = firstFieldWrapper.previousElementSibling.querySelector('input[type="checkbox"]');

    selectAllCheckbox.addEventListener('change', (e) => {
      const shouldCheck = e.target.checked;
      checkboxes.forEach(cb => {
        if (cb.checked !== shouldCheck) {
          cb.click(); // триггерит onChange и визуальный эффект
        }
      });
    });
  });
});
