from fastapi import FastAPI
app=FastAPI()


@app.get("/getStudents")
def getStudents():
    return "get student method called"
#localhost:8000/addStudents
@app.post("/addStudent")
def addStudent():
    return "add student method called"
#localhost:8000/updateStudent
@app.put("/updateStudent")
def updateStudent():
    return "update student method called"  
#localhost:8000/deleteStudent
@app.delete("/deleteStudent")
def deleteStudent():
    return "delete student method called"  
#localhost:8000/getParticularStudent/5
@app.get("/getParticularStudent/{userid}")
def getParticularStudent(userid:int):
    return {"userid":userid}
#localhost:8000/getdeptdetails?dept=cse&mark=50

