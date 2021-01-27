const choice = (l, v) => ({ label: l, value: v });

// const markup = '<p>The {{0}} <br> jumped {{1}} <br> the {{2}}</p>';
const markup = "Let <math><mi>&#402;</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfenced open="|" close="|"><mi>x</mi></mfenced><mo>+</mo><mn>5</mn></math>&#160;and <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>-</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn></math>.<br>↵<br>↵Part A:<br>↵<br>↵Complete the table below by determining the values of &#402;(<em>x</em>) and <em>g</em>(<em>x</em>) for the given values of <em>x</em>.<br>↵&#160;↵<table class="KdsTable01">↵	<tbody>↵		<tr>↵			<td width="100px"><em>x</em></td>↵			<td width="100px">-3</td>↵			<td width="100px">-2</td>↵			<td width="100px">-1</td>↵			<td width="100px">0</td>↵			<td width="100px">1</td>↵			<td width="100px">2</td>↵			<td width="100px">3</td>↵		</tr>↵		<tr>↵			<td>&#402;(<em>x</em>)</td>↵			<td>{{0}}</td>↵			<td>{{1}}</td>↵			<td>{{2}}</td>↵			<td>{{3}}</td>↵			<td>{{4}}</td>↵			<td>{{5}}</td>↵			<td>{{6}}</td>↵		</tr>↵		<tr>↵			<td><em>g</em>(<em>x</em>)</td>↵			<td>{{7}}</td>↵			<td>{{8}}</td>↵			<td>{{9}}</td>↵			<td>{{10}}</td>↵			<td>{{11}}</td>↵			<td>{{12}}</td>↵			<td>{{13}}</td>↵		</tr>↵	</tbody>↵</table>↵";
exports.model = (id, element) => ({
  id,
  element,
  markup,
  disabled: false,
  choices: {
    0: [choice('cow', '0'), choice('cattle', '1'), choice('calf', '2')],
    1: [choice('over', '0'), choice('past', '1'), choice('beyond', '2')],
    2: [choice('moon', '0')]
  },
  prompt: 'Complete the sentence',
  promptEnabled: true
});
