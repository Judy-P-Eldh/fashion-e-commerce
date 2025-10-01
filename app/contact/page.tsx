export default function ContactPage() {
  return (
    <main className="content-grid">
      <div className="content-x-small rounded-2xl bg-light p-8 shadow">
        <h2>Contact us</h2>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nemo
          qui omnis nam consequatur aperiam recusandae placeat. Quae nobis
          vitae, animi tempora adipisci optio sit doloribus dicta ex molestiae
          est.
        </p>
        <p>Phone: +1 234 567 8901</p>
        <p>Email: hello@domain.com</p>
        <p>Opening hours: Mon-Fri 9am - 5pm</p>

        <form>
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full name"
            required
            className="input-field w-full"
          />

          <label htmlFor="email" className="block">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@domain.com"
            required
            className="input-field w-full"
          />

          <label htmlFor="message" className="block">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Type your message..."
            required
            className="input-field w-full resize-none"
          ></textarea>

          <button type="submit" className="button py-1 px-5 text-lg place-self-center">
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
