async function fetchArweaveData() {
    try {
        console.log('Fetching Arweave data...');
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=arweave&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data fetched:', data);
        const arValue = data.arweave.usd;
        const tradingValue = data.arweave.usd_24h_vol / 1_000_000; // Convert to millions
        const marketValue = data.arweave.usd_market_cap / 1_000_000; // Convert to millions

        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        });

        document.getElementById('ar-value').textContent = formatter.format(arValue);
        document.getElementById('trading-value').textContent = `${formatter.format(tradingValue)}M`;
        document.getElementById('market-value').textContent = `${formatter.format(marketValue)}M`;
    } catch (error) {
        console.error('Error fetching Arweave data:', error);
    }
}

fetchArweaveData();