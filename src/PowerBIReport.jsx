

const PowerBIReport = () => {
  const embedUrl ="https://playground.powerbi.com/sampleReportEmbed"; // Replace with your actual embed URL

  return (
    <div style={{ height: '800px', width: '1200px' }}>
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        title="Power BI Sample Report"
      ></iframe>
    </div>
  );
};

export default PowerBIReport;