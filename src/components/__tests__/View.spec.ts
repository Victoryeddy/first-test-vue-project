import {render,screen} from "@testing-library/vue"
import {describe,it,expect} from "vitest"
import View from "@/components/View.vue"

//using describe would be a way to group test by components
//using concurrent means all the tests runs at the same time
describe.concurrent("View", () => {
    const viewText = "Hello from inside a view"

    // We use `it` to run single test
    it("Render span correctly", async() => {
       // arrange
       const viewId = "ViewId"

       // This is a way of mounting components we can also use mount from @test/utils    
       render(View, {
          props:{element: "p", ariaLabel: viewId, isDisabled: false},
          // for slots if there is no slot name , we use default   
          slots: {content: viewText}
       })

       const view = await screen.findByText(viewText)

      //assert    
        expect(view.ariaLabel).toBe(viewId)
    })
})

