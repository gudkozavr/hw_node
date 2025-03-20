function delayPromise<T>(ms: number, result: T): Promise<T> {
    return new Promise(resolve => setTimeout(() => resolve(result), ms));
}

async function processSequentially(): Promise<void> {
    console.log("Start");

    const res1: string = await delayPromise(1000, "First result");
    console.log(res1);

    const res2: string = await delayPromise(1500, "Second result");
    console.log(res2);

    const res3: string = await delayPromise(500, "Third result");
    console.log(res3);

    console.log("End");
}

processSequentially();

function asyncToUpperCase(str: string): Promise<string> {
    return new Promise(resolve => 
        setTimeout(() => resolve(str.toUpperCase()), Math.random() * 1000)
    );
}

async function processArrayParallel(arr: string[]): Promise<void> {
    const promises: Promise<string>[] = arr.map(asyncToUpperCase);
    const results: string[] = await Promise.all(promises);
    console.log(results);
}

const words: string[] = ["apple", "banana", "cherry"];
processArrayParallel(words);

function successfulPromise(value: string, delay: number): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve(value), delay));
}

function failingPromise(): Promise<never> {
    return new Promise((_, reject) => 
        setTimeout(() => reject(new Error("Intentional failure")), 1200)
    );
}

async function processWithErrorHandling(): Promise<void> {
    try {
        const results: string[] = await Promise.all([
            successfulPromise("Success 1", 1000),
            failingPromise(),
            successfulPromise("Success 2", 1500)
        ]);
        console.log(results);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error occurred:", error.message);
        }
    }
}

processWithErrorHandling();

function delayNumber(ms: number): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve(`Resolved after ${ms}ms`), ms));
}

async function processDynamicDelays(numbers: number[]): Promise<void> {
    const promises: Promise<string>[] = numbers.map(delayNumber);
    const results: string[] = await Promise.all(promises);
    console.log(results);
}

const delays: number[] = [300, 1000, 500, 700];
processDynamicDelays(delays);

