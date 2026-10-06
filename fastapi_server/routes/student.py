from fastapi import APIRouter
student_router=APIRouter(prefix="/student",tags=["student"])
#localhost:8000/student/addstudent
@student_router.post("/addstudent")
def addStudent():

    return  "add student method called"
#localhost:8000/student/getstudent
@student_router.get("/getstudent")
def getStudent():
    return "get student method called"
#localhost:8000/student/updatestudent
@student_router.put("/getstudent")
def putStudent():
    return "put student method called"
#localhost:8000/student/deletestudent
@student_router.delete("/deletestudent")
def deleteStudent():
    return "delete student method called"
    