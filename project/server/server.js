
const express = require("express")
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const cors = require("cors")

const app = express
app.use(cors())
app.use(express.static("public"))
app.use(express.json());


const storeItems = new Map([
    ["price_1MmabZC1XZ1d3fP68vYmINZZ", {price: 4.99, name: "Pro"}]
])

app.post("/payment", async (req, res) =>{
    try{
        const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: req.body.items.map(item => {
            const storeItem = storeItems.get(item.id)
            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: storeItem.name
                    },
                    unit_amount:storeItem.price
                },
                quantity: item.quantity

            }
        }),
        success_url: 'https://localhost:3000/payment',
        cancel_url: 'https://localhost:3000/cancel'
    })
    res.json({ url: session.url})
    }catch(e){
        res.status(500).json({error: e.message})
    }

    
})

app.listen(3000)