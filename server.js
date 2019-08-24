const express = require('express')
const uc = require ('./usersCtrl')

const app = express()
app.use(express.json())

// ENDPOINTS
app.get("/api/user", uc.getUser)
app.get("/api/user/:userId", uc.getUserById)
app.get("/api/admin", uc.getAdmins)
app.get("/api/nonadmin", uc.getNonAdmins)
app.get("/api/type/:userType", uc.getUsersByType)
app.put("/api/user/:userId", uc.updateUserById)
app.post("/api/user", uc.addNewUser)
app.delete("/api/user/:userId", uc.deleteUser)

app.listen(3000, () => console.log('Listening on Port 3000'))