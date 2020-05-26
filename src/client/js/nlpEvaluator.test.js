import { updateUI } from './nlpEvaluator'

test('evaluate url for polarity and subjectivity', () => {
  document.body.innerHTML = `
    <section>
      <strong>Evaluation Results:</strong>
      <div class="results" id="polarity"></div>
      <div class="results" id="subjectivity"></div>
    </section>
    `;
    updateUI({
      polarity: 'positive',
      subjectivity: 'subjective',
      text: 'I would love to see a @ABCSharkTank episode that includes updates on the deals we passed on. Sometimes you win by not losing.',
      polarity_confidence: 0.8764857649803162,
      subjectivity_confidence: 1
    });
    expect(document.getElementById('polarity').innerHTML).toBe('Polarity: positive');
    expect(document.getElementById('subjectivity').innerHTML).toBe('Subjectivity: subjective');
});