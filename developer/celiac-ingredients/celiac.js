// bundle-ignore
const TABLE = document.querySelector('table');
const SEARCH_BAR = document.querySelector('#search');
const ROWS = TABLE.querySelectorAll('tbody tr');
const HIDDEN_CLASS = 'js-hidden';
const NO_RESULTS = document.querySelector('.no-results');
const YES_CHECKBOX = document.querySelector('#yes');
const NO_CHECKBOX = document.querySelector('#no');
const HIGH_RISK_CHECKBOX = document.querySelector('#highrisk');
const YES = 'yes';
const NO = 'no';
const HIGH_RISK = 'high risk';

// Make No's Red
ROWS.forEach((row) => {
  const value = row
    .querySelector('td:last-of-type')
    ?.textContent?.toLowerCase()
    ?.replaceAll(' ', '')
    ?.trim();
  row.classList.add(value);
});

// Hide filtered out items
YES_CHECKBOX.addEventListener('change', filterListOnType);
NO_CHECKBOX.addEventListener('change', filterListOnType);
if (HIGH_RISK_CHECKBOX) {
  HIGH_RISK_CHECKBOX.addEventListener('change', filterListOnType);
}

// Hook up search
SEARCH_BAR.addEventListener('keyup', filterListOnType);
function filterListOnType(event) {
  NO_RESULTS.classList.add(HIDDEN_CLASS);
  TABLE.classList.remove(HIDDEN_CLASS);
  const SEARCH_TERM = SEARCH_BAR.value.toLowerCase();
  const SHOW_YES_ROWS = YES_CHECKBOX.checked;
  const SHOW_NO_ROWS = NO_CHECKBOX.checked;
  const SHOW_HIGH_RISK_ROWS = HIGH_RISK_CHECKBOX?.checked;
  ROWS.forEach((row) => {
    row.classList.remove(HIDDEN_CLASS);
    const ROW_TITLE = row.querySelector('td').textContent.toLowerCase();
    const ROW_VALUE = row
      .querySelector('td:last-of-type')
      .textContent?.toLowerCase()
      ?.trim();
    const HIDE_IF_SEARCH = SEARCH_TERM && !ROW_TITLE.includes(SEARCH_TERM);
    const HIDE_IF_YES = !SHOW_YES_ROWS && ROW_VALUE === YES;
    const HIDE_IF_NO = !SHOW_NO_ROWS && ROW_VALUE === NO;
    const HIDE_IF_HIGH_RISK = HIGH_RISK_CHECKBOX
      ? !SHOW_HIGH_RISK_ROWS && ROW_VALUE === HIGH_RISK
      : false;
    if (HIDE_IF_SEARCH || HIDE_IF_NO || HIDE_IF_YES || HIDE_IF_HIGH_RISK) {
      row.classList.add(HIDDEN_CLASS);
    }
  });
  const ROWS_HIDDEN = document.querySelectorAll('tr.' + HIDDEN_CLASS);
  if (ROWS.length === ROWS_HIDDEN.length) {
    NO_RESULTS.classList.remove(HIDDEN_CLASS);
    TABLE.classList.add(HIDDEN_CLASS);
  }
}
