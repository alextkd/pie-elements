exports.model = (id, element) => ({
  id,
  element,
  mode: 'gather',
  teacherInstructionsEnabled: false,
  rationaleEnabled: false,
  lockChoiceOrder: true,
  alternateResponse: {},
  // slateMarkup:
  //   '<div>Decide if the given value of <em>x</em> would make the inequality true  <em>x</em> + 7 ≥ 12<br><br><em>x</em> = 3.75 <br><br><span data-type="inline_dropdown" data-index="0" data-value="<div>No</div>"></span> <em>x</em> = 5 <br><br><span data-type="inline_dropdown" data-index="1" data-value="<div>Yes</div>"></span> <em>x</em> = 8<span data-latex="" data-raw="\\frac{5}{8}">\\frac{5}{8}</span>&nbsp;&nbsp;<br><br><span data-type="inline_dropdown" data-index="2" data-value="<div>Yes</div>"></span> <em>x</em> = –19 <span data-type="inline_dropdown" data-index="3" data-value="<div>No</div>"></span></div>',
  slateMarkup:
    '<div>Decide if the given value of <em>x</em> would make the inequality true  <em>x</em> + 7 ≥ 12<br><br><em>x</em> = 3.75 <br><br><span data-type="inline_dropdown" data-index="0" data-value="<div>No</div>"></span> <em>x</em> = 5 <br><br><span data-type="inline_dropdown" data-index="1" data-value="<div>Yes</div>"></span> <em>x</em> = 8<span data-latex="" data-raw="\\frac{5}{8}">\\frac{5}{8}</span>&nbsp;&nbsp;<br><br><span data-type="inline_dropdown" data-index="2" data-value="<div>Yes</div>"></span> <em>x</em> = –19 <span data-type="inline_dropdown" data-index="3" data-value="<div>No</div>"></span></div>',
  disabled: false,
  choices: {
    0: [
      { label: '<div>Yes</div>', value: '1', correct: false },
      {
        value: '2',
        correct: true,
        label: '<div>No</div>',
      },
    ],
    1: [
      { correct: true, value: '1', label: '<div>Yes</div>' },
      {
        correct: false,
        label: '<div>No</div>',
        value: '2',
      },
    ],
    2: [
      { label: '<div>Yes</div>', value: '1', correct: true },
      {
        label: '<div>No</div>',
        value: '2',
        correct: false,
      },
    ],
    3: [
      { label: '<div>Yes</div>', value: '1', correct: false },
      {
        correct: true,
        value: '2',
        label: '<div>No</div>',
      },
    ],
  },
  markup:
    '<div>Decide if the given value of <em>x</em> would make the inequality true  <em>x</em> + 7 ≥ 12<br><br><em>x</em> = 3.75 <br><br>{{0}} <em>x</em> = 5  <br><br>{{1}} <em>x</em> = 8<span data-latex="" data-raw="\\frac{5}{8}">\\frac{5}{8}</span>&nbsp;&nbsp;<br><br>{{2}} <em>x</em> = –19 {{3}}</div>',
  promptEnabled: false,
  prompt: '<div></div>',
  shuffle: true,
  studentInstructionsEnabled: false,
});
