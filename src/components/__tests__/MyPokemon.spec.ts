import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/vue"
import MyPokemon from "@/components/MyPokemon.vue"

describe.concurrent("MyPokemon", () => {
    it("render span correctly", async () => {
        //Arrange 
        render(MyPokemon)
        const pokemon = await screen.findByText("Get Pokemon")

        // This is a way of simulating click events in our test environment   
        await fireEvent.click(pokemon)

        const value = await screen.findByText('bulbasaur')

        //Assert

        expect(value.innerHTML).toBe("bulbasaur")

    })
})
