Angular Spring Boot Hospital Management System

📌 Project Overview

The Hospital Management System is a web-based application that simplifies hospital administration by efficiently managing patient records, appointments, doctor schedules, and billing. This full-stack project integrates Angular for the frontend and Spring Boot for the backend, ensuring a seamless user experience.

🚀 Features

Patient Management: Add, update, and delete patient records.

Doctor Management: Maintain doctor details and schedules.

Appointment Booking: Schedule and track patient appointments.

Billing System: Generate and manage invoices.

Authentication & Authorization: Secure login for doctors and staff.

Dashboard: Overview of key hospital activities.

🛠️ Tech Stack

Frontend

Angular (TypeScript, HTML, CSS, Bootstrap)

RxJS (Reactive programming for Angular services)

Backend

Spring Boot (Java, Spring MVC, Spring Security)

Hibernate/JPA (Database interactions)

MySQL (Database management)

Maven (Project management & dependency management)

Apache Tomcat (Server deployment)

🏗️ Project Setup

Prerequisites

Ensure you have the following installed:

Node.js & npm (for Angular frontend)

Angular CLI

Java JDK 17+

Spring Boot

MySQL

Maven

Backend Setup (Spring Boot)

Clone the repository:

git clone https://github.com/Bharat-Gadhave/Angular_SpringBoot-HospitalManagementSystem.git
cd Angular_SpringBoot-HospitalManagementSystem/backend

Configure application.properties with your MySQL database credentials:

spring.datasource.url=jdbc:mysql://localhost:3306/hospital_db
spring.datasource.username=root
spring.datasource.password=your_password

Build and run the backend:

mvn clean install
mvn spring-boot:run

Frontend Setup (Angular)

Navigate to the frontend directory:

cd Angular_SpringBoot-HospitalManagementSystem/frontend

Install dependencies:

npm install

Run the Angular app:

ng serve

Open http://localhost:4200 in your browser.

📝 API Endpoints

Method

Endpoint

Description

GET

/patients

Fetch all patients

POST

/patients

Add a new patient

GET

/doctors

Fetch all doctors

POST

/appointments

Book an appointment

GET

/bills

Retrieve billing details

🔐 Security

Uses Spring Security for authentication and role-based authorization.

Protects sensitive routes and data with JWT (JSON Web Token).

📸 Screenshots



👨‍💻 Contributors

Bharat Gadhave (GitHub)

📜 License

This project is licensed under the MIT License.

📞 Contact

For any queries, feel free to reach out:

📧 Email: bharatgadhave777@gmail.com

🔗 LinkedIn: Bharat Gadhave

🚀 Happy Coding!

