
from fastapi import APIRouter

staff_router = APIRouter(prefix="/staff", tags=["staff"])


# localhost:8000/staff/addstaff
@staff_router.post("/addstaff")
def addStaff():
    return "add staff method called"


# localhost:8000/staff/getstaff
@staff_router.get("/getstaff")
def getStaff():
    return "get staff method called"


# localhost:8000/staff/putstaff
@staff_router.put("/putstaff")
def putStaff():
    return "put staff method called"


# localhost:8000/staff/deletestaff
@staff_router.delete("/deletestaff")
def deleteStaff():
    return "delete staff method called"
