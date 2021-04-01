type CardKey =
  | "VISA"
  | "AMERICAN_EXPRESS"
  | "DISCOVER"
  | "MASTER_CARD"
  | "UNKNOWN";

interface CardDef {
  prefix: string;
  length: number;
}

type CardMap = {
  [company in CardKey]: CardDef | null;
};

// credit cards are typically between 13 and 16 digits long
const cardDefs: CardMap = {
  VISA: { prefix: "4", length: 16 },
  MASTER_CARD: { prefix: "5", length: 16 },
  AMERICAN_EXPRESS: { prefix: "37", length: 15 },
  DISCOVER: { prefix: "6", length: 16 },
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

// this works b/c we know these groups don't overlap
export const checkCardNaive = (cardNumber: string): CardKey => {
  if (isAmericanExpress(cardNumber)) return "AMERICAN_EXPRESS";
  if (isVisa(cardNumber)) return "VISA";
  if (isMasterCard(cardNumber)) return "MASTER_CARD";
  if (isDiscover(cardNumber)) return "DISCOVER";
  return "UNKNOWN";
};
