const Ticket = require('./models/Ticket');
const User = require('./models/User');

async function createTicket() {
    const user = await User.findOne({ username: 'adminUser' }); // Get the user
    const newTicket = new Ticket({
        title: "Example Ticket",
        description: "This is a description for the ticket.",
        status: "Open",
        priority: "High",
        amount: 50.00,
        created_by: user._id
    });

    await newTicket.save();
    console.log("Ticket created:", newTicket);
}

createTicket();
