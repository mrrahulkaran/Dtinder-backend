# dev Tinder APIs

authRouter

- POST / signup
- POST / login
- POST / logout

  profileRouter

- GET / profile/view
- PATCH / profile/edit
- PATCH / profile/password

  connectionRequestRouter
  connection Status: intrested , ignore, accesept , reject

- POST /request/send/intrested/:userId
- POST /request/send/ignored/:userId
- POST /request/review/accesepted/:requestId
- POST /request/review/reject/:requestId

  userRouter

- GET /connections
- GET /requests/recived
- GET /feed - see all the users avilable in plateform
