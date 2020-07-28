import { RideTicketHolders } from "./rides/RideTicketHolders.js"

const contentTarget = document.querySelector(".entry")

const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "rideTicket") {
        
        const rideEvent = new CustomEvent("rideTicketClicked")

        eventHub.dispatchEvent(rideEvent)
    }

    else if (clickEvent.target.id === "foodTicket") {
        
        const foodEvent = new CustomEvent("foodTicketClicked")

        eventHub.dispatchEvent(foodEvent)
    }
    else if (clickEvent.target.id === "gameTicket") {
        
        const gameEvent = new CustomEvent("gameTicketClicked")

        eventHub.dispatchEvent(gameEvent)
    }
    else if (clickEvent.target.id === "sideshowTicket") {
        
        const sideshowEvent = new CustomEvent("sideshowTicketClicked")

        eventHub.dispatchEvent(sideshowEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button class="ticketBoothButton" id="rideTicket">Ride Ticket</button>
        <button class="ticketBoothButton" id="foodTicket">Food Ticket</button>
        <button class="ticketBoothButton" id="gameTicket">Game Ticket</button>
        <button class="ticketBoothButton" id="sideshowTicket">Sideshow Ticket</button>
        </div>
    `
}

