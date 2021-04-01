type CardKey =
  | "VISA"
  | "VISA_ELECTRON"
  | "AMERICAN_EXPRESS"
  | "DISCOVER"
  | "MASTER_CARD"
  | "UNKNOWN";

interface CardDef {
  prefix: string | string[];
  length: number;
}

type CardMap = {
  [company in CardKey]: CardDef | null;
};

// credit cards are typically between 13 and 16 digits long
export const cardDefs: CardMap = {
  VISA: { prefix: "4", length: 16 },
  MASTER_CARD: { prefix: "5", length: 16 },
  AMERICAN_EXPRESS: { prefix: "37", length: 15 },
  DISCOVER: { prefix: "6", length: 16 },
  // i dont remember the prefixes asked for electron, but just decided to pull from a list
  // (there's a lot of electron prefixes out there)
  // https://www.stevemorse.org/ssn/List_of_Bank_Identification_Numbers.html
  VISA_ELECTRON: { prefix: ["4130", "403677", "4913"], length: 16 },
  UNKNOWN: null,
};

function isVisa(c: string): boolean {
  return (
    c.slice(0, 1) === cardDefs.VISA.prefix && c.length === cardDefs.VISA.length
  );
}

function isDiscover(c: string): boolean {
  return (
    c.slice(0, 1) === cardDefs.DISCOVER.prefix &&
    c.length === cardDefs.DISCOVER.length
  );
}

function isMasterCard(c: string): boolean {
  return (
    c.slice(0, 1) === cardDefs.MASTER_CARD.prefix &&
    c.length === cardDefs.MASTER_CARD.length
  );
}

function isAmericanExpress(c: string): boolean {
  return (
    c.slice(0, 2) === cardDefs.AMERICAN_EXPRESS.prefix &&
    c.length === cardDefs.AMERICAN_EXPRESS.length
  );
}

function isVisaElectron(c: string): boolean {
  const prefixes = cardDefs.VISA_ELECTRON.prefix as string[];
  const isElectron = prefixes.some((p) => {
    return c.slice(0, p.length) === p;
  });

  return isElectron && c.length === cardDefs.VISA_ELECTRON.length;
}

// this works b/c we know these groups mostly don't overlap
export const checkCardNaive = (cardNumber: string): CardKey => {
  if (isAmericanExpress(cardNumber)) return "AMERICAN_EXPRESS";
  // every visa electron card is a visa card
  if (isVisa(cardNumber)) {
    if (isVisaElectron(cardNumber)) return "VISA_ELECTRON";
    return "VISA";
  }
  if (isMasterCard(cardNumber)) return "MASTER_CARD";
  if (isDiscover(cardNumber)) return "DISCOVER";
  return "UNKNOWN";
};
