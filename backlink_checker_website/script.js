
document.getElementById("checkBtn").addEventListener("click", () => {
  const domain = document.getElementById("domainInput").value.trim();
  if (!domain) return;

  chrome.runtime.sendMessage({ type: "getCompetitors", domain }, response => {
    const results = response.competitors || [];
    let html = `<p>Found ${results.length} competitors</p><ul>`;
    results.slice(0, 1000).forEach(c => {
      html += `<li>${c.domain} - ${c.backlinkCount}</li>`;
    });
    html += "</ul>";
    document.getElementById("results").innerHTML = html;
  });
});
