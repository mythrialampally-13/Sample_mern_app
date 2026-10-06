from fastapi import APIRouter
from database import student_collection
from models import Student_model



student_router=APIRouter(prefix="/student",tags=["student"])
#localhost:8000/student/addstudent
@student_router.post("/addstudent")
def addStudent(stu:Student_model):
    result=student_collection.insert_one(stu.model_dump())
    #model_dump used to convert class fields into dict 
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
    