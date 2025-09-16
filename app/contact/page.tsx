export default function ContactPage() {
  return (
    <main className="content-grid">
      <div className="content rounded-2xl bg-white p-8 shadow">
        <h2>Kontakta oss</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nemo
          qui omnis nam consequatur aperiam recusandae placeat. Quae nobis
          vitae, animi tempora adipisci optio sit doloribus dicta ex molestiae
          est.
        </p>
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
            className="border"
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
            className="border"
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
            className="w-full resize-none border "
          ></textarea>

          <button type="submit" className="border">
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
