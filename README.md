# **🏥 Hospital Management System**

## **📌 Project Overview**
The **Hospital Management System** is a **web-based application** designed to streamline hospital operations. It provides an efficient way to manage **patient records, doctor schedules, appointments, and billing**. This **full-stack project** is built using **Angular** for the frontend and **Spring Boot** for the backend.

---

## **🚀 Features**
✅ **Patient Management** – Add, update, and delete patient records.  
✅ **Doctor Management** – Maintain doctor details and schedules.  
✅ **Appointment Booking** – Schedule and track patient appointments.  
✅ **Billing System** – Generate and manage invoices.  
✅ **Authentication & Authorization** – Secure login for doctors and staff.  
✅ **Dashboard** – Provides an overview of key hospital activities.  

---

## **🛠 Tech Stack**
### **Frontend**
- **Angular** (TypeScript, HTML, CSS, Bootstrap)
- **RxJS** (Reactive programming for Angular services)

### **Backend**
- **Spring Boot** (Java, Spring MVC, Spring Security)
- **Hibernate/JPA** (ORM for database interaction)
- **MySQL** (Database management)
- **Maven** (Dependency management)
- **Apache Tomcat** (Server deployment)

---

## **🏗 Project Setup**
### **Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) & **npm** (for Angular frontend)
- [Angular CLI](https://angular.io/cli)
- [Java JDK 17+](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [MySQL](https://www.mysql.com/)
- [Maven](https://maven.apache.org/)

### **Backend Setup (Spring Boot)**
```sh
# Clone the repository
git clone https://github.com/Bharat-Gadhave/Angular_SpringBoot-HospitalManagementSystem.git
cd Angular_SpringBoot-HospitalManagementSystem/backend

# Configure database in application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/hospital_db
spring.datasource.username=root
spring.datasource.password=your_password

# Build and run the backend
mvn clean install
mvn spring-boot:run

