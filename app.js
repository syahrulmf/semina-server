const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

// router
const categoriesRouter = require("./app/api/v1/categories/router");
const imagesRouter = require("./app/api/v1/images/router");
const eventsRouter = require("./app/api/v1/events/router");
const participantsRouter = require("./app/api/v1/participants/router");
const talentsRouter = require("./app/api/v1/talents/router");
const organizersRouter = require("./app/api/v1/organizers/router");
const ticketCategoriesRouter = require("./app/api/v1/ticket_categories/router");
const authCMSRouter = require("./app/api/v1/auth/router");
const ordersRouter = require("./app/api/v1/orders/router");

const v1 = "/api/v1/cms";

// middlewares
const notFoundMiddleware = require("./app/middlewares/not-found");
const handleErrorMiddleware = require("./app/middlewares/handler-error");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welocome to semina API",
  });
});

app.use(v1, categoriesRouter);
app.use(v1, imagesRouter);
app.use(v1, eventsRouter);
app.use(v1, participantsRouter);
app.use(v1, talentsRouter);
app.use(v1, organizersRouter);
app.use(v1, ticketCategoriesRouter);
app.use(v1, authCMSRouter);
app.use(v1, ordersRouter);

// middlewares
app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;
