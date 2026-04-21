import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('Umati error boundary:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center px-6 bg-ivory-50">
          <div className="text-center max-w-md">
            <p className="eyebrow text-umati-600">A small interruption</p>
            <h1 className="mt-3 display-mega text-4xl sm:text-5xl text-onyx-900">Something went wrong.</h1>
            <p className="mt-4 text-onyx-500 text-sm">Give the page a refresh — if it persists, message us on WhatsApp and we will take a look.</p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className="px-7 py-3.5 bg-onyx-900 text-white text-xs tracking-[0.18em] uppercase font-semibold hover:bg-umati-500 transition-colors"
              >
                Refresh
              </button>
              <a
                href="/"
                className="px-7 py-3.5 border border-onyx-900 text-onyx-900 text-xs tracking-[0.18em] uppercase font-semibold hover:bg-onyx-900 hover:text-ivory-50 transition-colors"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
