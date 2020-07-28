const contentTarget = document.querySelector(".rides")

const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketClicked", customEvent => {
        contentTarget.innerHTML += `
            <div class="person rider">
            </div>
            `
    })
}

