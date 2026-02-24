<section className="feedback-section">
  <div className="feedback-container">
    <h3>Give Us Your Feedback</h3>
    <p>We’d love to hear your thoughts or suggestions!</p>
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Your name" required />
      <input type="email" placeholder="Your email" required />
      <textarea placeholder="Your message" required></textarea>
      <button type="submit">Send Feedback</button>
    </form>
  </div>
</section>