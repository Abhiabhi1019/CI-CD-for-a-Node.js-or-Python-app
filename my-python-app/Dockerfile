# Step 1: Use official Python image
FROM python:3.10-slim

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy dependency file
COPY requirements.txt .

# Step 4: Install dependencies
RUN pip install -r requirements.txt

# Step 5: Copy project files
COPY . .

# Step 6: Expose port
EXPOSE 5000

# Step 7: Run the app
CMD ["python3", "app.py"]
