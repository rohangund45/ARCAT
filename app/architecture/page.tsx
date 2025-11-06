export default function ArchitecturePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Architecture</h2>
      <div className="glass rounded p-6">
        <ol className="space-y-3">
          <li>
            <span className="font-semibold">Weather APIs</span> → data inputs
          </li>
          <li>
            <span className="font-semibold">AI Engine</span> → generates predictions
          </li>
          <li>
            <span className="font-semibold">Alert Generator</span> → creates localized alerts
          </li>
          <li>
            <span className="font-semibold">Delivery</span> → SMS / BitChat / App Notification
          </li>
        </ol>
      </div>
    </div>
  );
}

