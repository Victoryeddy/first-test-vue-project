import {describe, it, expect, beforeAll,afterEach, afterAll} from 'vitest'
import { http, HttpResponse } from 'msw';
import {setupServer} from 'msw/node'
import { MockPockemon } from "@/components/__tests__/mockPockemon"
import "whatwg-fetch"


export const restHandlers = [
    http.get(`https://pokeapi.co/api/v2/pokemon`, () => {
        return HttpResponse.json({
            results: MockPockemon
        })
    })
]

const server = setupServer(...restHandlers);

//start server before all tests
beforeAll(() => server.listen({onUnhandledRequest: 'error'}))

//close server after all test
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());