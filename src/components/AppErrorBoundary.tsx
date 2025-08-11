// src/components/AppErrorBoundary.tsx
import React from 'react';

export default class AppErrorBoundary extends React.Component<{children: React.ReactNode},{hasError:boolean}> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(err: unknown) { console.error('UI crash:', err); }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen grid place-items-center bg-slate-900 text-white px-6">
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-bold mb-2">Une erreur est survenue</h1>
            <p className="text-slate-300 mb-6">Recharge la page. Si ça persiste, vide le cache ou essaie en navigation privée.</p>
            <button className="px-4 py-2 rounded bg-blue-600" onClick={() => location.reload()}>
              Recharger
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
