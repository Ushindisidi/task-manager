from pydantic import BaseModel
from typing import Optional
from datetime import datetime
# These Pydantic models define the structure of data for creating, updating, and responding with tasks in the API.
class TaskCreate(BaseModel):
    title: str
    description: Optional[str] = None
    status: Optional[str] = "pending"
    due_date: Optional[datetime] = None

class TaskUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    status: Optional[str] = None
    due_date: Optional[datetime] = None

class TaskResponse(BaseModel):
    id: int
    title: str
    description: Optional[str] = None
    status: str
    create_date: datetime
    due_date: Optional[datetime] = None

    class Config:
        from_attributes = True