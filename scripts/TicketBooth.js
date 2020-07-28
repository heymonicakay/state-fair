import { RideTicketHolders } from "./rides/RideTicketHolders.js"

const contentTarget = document.querySelector(".entry")

const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "rideTicket") {
        
        const rideEvent = new CustomEvent("rideTicketClicked")

        eventHub.dispatchEvent(rideEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button class="ticketBoothButton" id="rideTicket">Ride Ticket</button>
        </div>
    `
}

