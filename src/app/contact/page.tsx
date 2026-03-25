import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Sevensky',
  description: 'Get in touch for your marketing, branding, and event needs.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-500">Connect</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Whether you&apos;re looking to book a mall activation, require a comprehensive digital marketing strategy, or just want to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 max-w-5xl mx-auto">

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">Reach Out Directly</h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-400 font-bold text-xl">
                  @
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-white mb-2">Email Us</h3>
                  <p className="text-slate-400"> sevenskymedia26@gmail.com</p>
                  <p className="text-slate-400">admin@sevenskymedia.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-400 font-bold text-xl">
                  📞
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-white mb-2">Call Us</h3>
                  <p className="text-slate-400">+971 565805774</p>
                  <p className="text-slate-400">Available Mon-Fri, 9am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-400 font-bold text-xl">
                  📍
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-white mb-2">Headquarters</h3>
                  <p className="text-slate-400">123 Event Plaza, Marketing Avenue<br />Global Hub City, 10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-slate-300">First name</label>
                  <div className="mt-2">
                    <input type="text" name="first-name" id="first-name" className="block w-full rounded-md border-0 bg-white/5 py-2.5 px-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-brand-500 sm:text-sm sm:leading-6 outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-slate-300">Last name</label>
                  <div className="mt-2">
                    <input type="text" name="last-name" id="last-name" className="block w-full rounded-md border-0 bg-white/5 py-2.5 px-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-brand-500 sm:text-sm sm:leading-6 outline-none transition-all" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-300">Email address</label>
                <div className="mt-2">
                  <input type="email" name="email" id="email" className="block w-full rounded-md border-0 bg-white/5 py-2.5 px-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-brand-500 sm:text-sm sm:leading-6 outline-none transition-all" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-slate-300">Message</label>
                <div className="mt-2">
                  <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 bg-white/5 py-2.5 px-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-brand-500 sm:text-sm sm:leading-6 outline-none transition-all"></textarea>
                </div>
              </div>

              <button type="button" className="w-full rounded-md bg-brand-600 px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-all border border-brand-400/20">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
