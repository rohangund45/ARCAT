export function Footer() {
  return (
    <footer className="border-t border-white/20 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8 text-sm opacity-80 flex justify-between">
        <div>© {new Date().getFullYear()} ARCAT</div>
        <div>AI-Powered Rural Climate Alert Toolkit</div>
      </div>
    </footer>
  );
}

