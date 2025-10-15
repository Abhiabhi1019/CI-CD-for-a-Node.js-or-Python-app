# Use official Python image
FROM python:3.12-slim

# Set working directory in container
WORKDIR /app

# Copy Python files and requirements
COPY requirements.txt .
COPY app.py .

# Install dependencies inside container
RUN pip install --no-cache-dir -r requirements.txt

# Expose port
EXPOSE 5000

# Run the app
CMD ["python", "app.py"]
