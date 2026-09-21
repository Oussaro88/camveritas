export default function ReportOutdated({ toolName }: { toolName: string }) {
  const subject = encodeURIComponent(`Outdated data on ${toolName}`);
  const body = encodeURIComponent(`Hi camVeritas,\n\nI noticed outdated data on the ${toolName}.\n\nSite/tool affected:\nWhat's wrong:\nCorrect info:\n\nThanks!`);

  return (
    <div style={{
      marginTop: 32, padding: '16px 20px', borderRadius: 10,
      background: 'rgba(107, 78, 158,0.04)', border: '1px solid rgba(107, 78, 158,0.08)',
      textAlign: 'center',
    }}>
      <p style={{ fontSize: 13, color: '#7A7A90' }}>
        Spotted outdated prices or data?{' '}
        <a
          href={`mailto:contact@camveritas.com?subject=${subject}&body=${body}`}
          style={{ color: '#6B4E9E', fontWeight: 700, textDecoration: 'none' }}
        >
          Report it →
        </a>
      </p>
    </div>
  );
}