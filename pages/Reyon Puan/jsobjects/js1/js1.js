export default {
  parseXML: () => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(tcmbKur.data, "text/xml");

    // Find the USD Currency node
    const currencies = xmlDoc.getElementsByTagName("Currency");
    for (let i = 0; i < currencies.length; i++) {
      const currency = currencies[i];
      const currencyCode = currency.getAttribute("CurrencyCode");
      if (currencyCode === "USD") {
        const forexSelling = currency.getElementsByTagName("BanknoteSelling")[0].childNodes[0].nodeValue;
        return forexSelling;
      }
    }

    return null; // Return null if USD not found
  }
}
