export function getFromStorage(key){
  return JSON.parse(localStorage.getItem(key));
}

export function setToStorage(key, data){
  localStorage.setItem(key, JSON.stringify(data));
}

export function getJSON(url, query){
  if(typeof query == "object"){
    query = Object.entries(query)
      .map(([key, value]) => {
        return encodeURIComponent(key) + "=" + encodeURIComponent(value)
      })
      .join("&");
  }

  if(query)
    url += "?" + query;

  return fetch(url).then((res) => res.json())
}

export function getPricingRt(name, onUpdate){
  const ws = new WebSocket(
    `wss://stream.binance.com:9443/ws/${name}usdt@trade`
  );

  ws.onmessage = (event) => {
    let priceObject = JSON.parse(event.data);
    let current = parseFloat(priceObject.p).toFixed(2);

    onUpdate(current);
  };

  return () => ws.close();
}