const express = require("express");
const cors = require("cors");

const app = express();
const stripe = require("stripe")(
  "sk_test_51MfjA5EhJx2w283plYzPAigO7XhpfgVe1qnKLwXYf0wlKIL6fF3L9DcpCwEhOFj9pswzIbp3NwbxtAkORm5ycB5Y00QL3LgiD6" //secret key
);

// require express, cors, stripe(sk)
// seting up middleware
// accept post request
// take id-> req.body and total-price -> req.query
// paymentIntents.create({amount, payment_method, currency})
// take client_secret -> response and send it to the front-end
// res.send({secret-key: value})

// listening on random port

app.use(cors());

app.use(express.json()); // req.body.id = id123

app.post("/payment", (req, res) => {
  const { id } = req.body; //from payment method
  console.log("id from server page (payment method)" + id);
  var totals = req.query.total;
  // query parameter -> route parameters -> req.params
  // req.params.id
totals = Math.round(totals);
// console.log("Total=" + totals);

  let client_secret = "";

  stripe.paymentIntents
    .create({
      amount: totals,
      payment_method: id,
      currency: "usd",
      description: "sample desc",
    })
    .then((response) => {
        console.log("Client secret key from server"+response.client_secret);
      var client_secret = response.client_secret;
      res.send({ secret: client_secret });
    });

  console.log( "Recheck client secret key" + client_secret);
});

app.listen(3004, () => console.log("server listening on port 3004!"));
// exports.api = functions.https.onRequest(app);
