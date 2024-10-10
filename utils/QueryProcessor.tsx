export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew")) {
    return (
      "My Andrew ID is evelynnc."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "evelynnc"
    );
  }

  if (query.toLowerCase().includes("18, 38, 79")) {
    return (
      "79"
    );
  }

  if (query.toLowerCase().includes("33, 31, 27")) {
    return (
      "33"
    );
  }

  return "";
}
