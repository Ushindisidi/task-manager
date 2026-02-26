from sqlalchemy import column, Integer, String, DateTime
from sqlalchemy.sql import func
from database import Base

class Task(Base):
    __tablename__ = "tasks"
    id = column(Integer, primary_key=True, autoincrement=True)
    title = column(String, nullable=False)
    description = column(String, nullable=True)
    status = column(String, default="pending")
    create_date = column(DateTime, default=func.now())
    due_date = column(DateTime, nullable=True)
    