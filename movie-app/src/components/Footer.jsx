import React from 'react';

const SocialLink = ({ href = '#', children, label }) => (
    <a href={href} className="text-gray-300 hover:text-white transition" aria-label={label}>
        {children}
    </a>
);

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    <div>
                        <h3 className="text-2xl font-bold text-white">MovieApp</h3>
                        <p className="text-gray-400 mt-2">Your ultimate movie companion. Discover, track and share your favorites.</p>
                        <div className="flex items-center gap-3 mt-4">
                            <SocialLink href="#" label="Follow on Twitter">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 5.92c-.64.29-1.32.49-2.04.58.73-.44 1.29-1.14 1.56-1.98-.69.41-1.46.7-2.28.86A3.49 3.49 0 0015.5 4c-1.92 0-3.48 1.6-3.48 3.57 0 .28.03.55.09.81C8.1 8.2 4.25 6.13 1.67 3.15c-.31.54-.49 1.17-.49 1.84 0 1.27.65 2.39 1.64 3.05-.6-.02-1.17-.18-1.66-.45v.05c0 1.77 1.22 3.25 2.83 3.59-.3.08-.62.12-.95.12-.23 0-.46-.02-.68-.06.46 1.45 1.8 2.5 3.38 2.53A7.02 7.02 0 010 19.54 9.9 9.9 0 005.36 21c6.43 0 9.95-5.88 9.95-10.97v-.5c.68-.5 1.27-1.12 1.74-1.83-.63.28-1.3.48-2 .57z"/></svg>
                            </SocialLink>
                            <SocialLink href="#" label="Follow on Github">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.19 9.16 7.61 10.64.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.1-3.09.67-3.74-1.45-3.74-1.45-.5-1.29-1.22-1.64-1.22-1.64-.99-.68.07-.67.07-.67 1.1.08 1.68 1.14 1.68 1.14.97 1.66 2.54 1.18 3.16.9.1-.7.38-1.18.69-1.45-2.47-.28-5.07-1.24-5.07-5.52 0-1.22.43-2.21 1.14-2.99-.12-.28-.5-1.4.11-2.92 0 0 .93-.3 3.05 1.14a10.6 10.6 0 012.78-.37c.94 0 1.89.13 2.78.37 2.12-1.44 3.05-1.14 3.05-1.14.61 1.52.23 2.64.11 2.92.71.78 1.14 1.77 1.14 2.99 0 4.29-2.61 5.24-5.09 5.52.39.34.74 1.02.74 2.06 0 1.49-.01 2.69-.01 3.05 0 .3.21.65.78.54 4.42-1.49 7.61-5.69 7.61-10.64C23.25 5.48 18.27.5 12 .5z"/></svg>
                            </SocialLink>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white">Quick links</h4>
                        <ul className="mt-4 space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">Movies</a></li>
                            <li><a href="#" className="hover:text-white">Genres</a></li>
                            <li><a href="#" className="hover:text-white">Favorites</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white">Stay up to date</h4>
                        <p className="text-gray-400 mt-2">Subscribe to our newsletter for the latest releases and deals.</p>
                        <form className="mt-4 flex max-w-sm">
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input id="email" type="email" placeholder="you@domain.com" className="w-full px-3 py-2 rounded-l-md bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none" />
                            <button type="submit" className="px-4 bg-yellow-400 text-gray-900 font-semibold rounded-r-md hover:brightness-95">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
                    <p>&copy; {year} MovieApp. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;