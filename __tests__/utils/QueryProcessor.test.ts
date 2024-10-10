import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id response', () => {
        const query = "What is your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("My Andrew ID is evelynnc.");
    });

    test('should return player name response', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("evelynnc");
    });

    test('should return 79', () => {
        const query = "Which of the following numbers is the largest: 18, 38, 79?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("79");
    });

    test('should return 33', () => {
        const query = "Which of the following numbers is the largest: 33, 31, 27?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("33");
    });
});