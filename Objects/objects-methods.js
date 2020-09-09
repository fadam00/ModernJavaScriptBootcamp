let restaurant = {
    name: 'Booey Monger',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;//in this case, "this" refers to the object
        return partySize <= seatsLeft
    },

    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize;
        this.guestCapacity = this.guestCapacity - partySize;
    },

    removeParty: function (partySize) {

        if(this.guestCount > 0){
        this.guestCount = this.guestCount - partySize;
        this.guestCapacity = this.guestCapacity + partySize;
        } else {
            console.log('There are no guests at the restaurant');
        }
    }
}

// seatParty - takes party size to be seated and adds to guestCount

//removeParty - takes party size leaving and subtracts from guestCount

//console.log(restaurant.checkAvailability(5));

restaurant.seatParty(56);

console.log(restaurant.checkAvailability(30));

restaurant.removeParty(56);

console.log(restaurant.checkAvailability(30));






