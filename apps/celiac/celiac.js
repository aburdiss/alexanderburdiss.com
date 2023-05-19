// bundle-ignore
const TABLE = document.querySelector('table');
const SEARCH_BAR = document.querySelector('#search');
const ROWS = TABLE.querySelectorAll('tbody tr');
const HIDDEN_CLASS = 'js-hidden';
const NO_RESULTS = document.querySelector('.no-results');

// Make No's Red
ROWS.forEach((row) => {
  const value = row
    .querySelector('td:last-of-type')
    ?.textContent?.toLowerCase()
    ?.trim();
  row.classList.add(value);
});

// Hook up search
SEARCH_BAR.addEventListener('keyup', filterListOnType);
function filterListOnType(event) {
  NO_RESULTS.classList.add(HIDDEN_CLASS);
  TABLE.classList.remove(HIDDEN_CLASS);
  const SEARCH_TERM = event.target.value.toLowerCase();
  ROWS.forEach((row) => {
    row.classList.remove(HIDDEN_CLASS);
    const ROW_VALUE = row.querySelector('td').textContent.toLowerCase();
    if (SEARCH_TERM && !ROW_VALUE.includes(SEARCH_TERM)) {
      row.classList.add(HIDDEN_CLASS);
    }
  });
  const ROWS_HIDDEN = document.querySelectorAll('tr.' + HIDDEN_CLASS);
  if (ROWS.length === ROWS_HIDDEN.length) {
    console.log('here!');
    NO_RESULTS.classList.remove(HIDDEN_CLASS);
    TABLE.classList.add(HIDDEN_CLASS);
  }
}
