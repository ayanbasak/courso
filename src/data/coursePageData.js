import { sellybus, javaBackendDeveloperProgram } from "../images";
const experyDate = () => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days_in_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let date = new Date();
    let month = null;
    let day = null;
    let year = null;

    if ((date.getDate() + 2) > days_in_months[date.getMonth()]) {
        day = (date.getDate() + 2) % days_in_months[date.getMonth() + 1];
        month = months[(date.getMonth() + 1) % 12];
        if (date.getMonth() === 12) {
            year = date.getFullYear() + 1;
        } else {
            year = date.getFullYear();
        }
    } else {
        month = months[date.getMonth()];
        day = date.getDate() + 2;
        year = date.getFullYear();
    }

    return month + ' ' + day + ', ' + year;
}

export const courseTexts = [
    {
        courseId: 1,
        heroSection: {
            courseType: 'NANODEGREE PROGRAM',
            courseName: 'Java Backend Developer Program',
            courseTagLine: 'ACE TECHNICAL CODING INTERVIEWS',
            courseDetails: 'This program will help you to be a backend expert on Java technology and accelerate your career as a Java Developer.This Course will expose you the basic and advanced learning concept Back end application development.',
            coursePdf: sellybus
        },
        courseFeatures: [
            {
                topContent: 'ESTIMATED TIME',
                middleContent: '2 Months',
                endContent: 'At 8 hrs/week',
            },
            {
                topContent: 'PREREQUISITES',
                middleContent: 'Basic Programming',
                endContent: 'Those prerequests will help you understanding the course contents better',
            }
        ],
        syllabus: sellybus,
        courseContent: {
            heading: 'Why should you learn Java?',
            topContent: 'For those developers looking to get a high paying job in the professional world, Java is an ideal language to master. As Java use in businesses is widely popular, developers who become experts with the language can expect to reach and exceed the six-figure salary mark in the United States. Entry-level Java developers can still expect to make an average salary of nearly $60,000 per year according to Indeed.',
            bottomContent: 'After completing the program, you will be eligible for a variety of career opportunities and build your career in full-stack developer, backend developer, API roles in organizations ranging from start-ups to Fortune 500 companies',
            image: javaBackendDeveloperProgram
        },
        courseContentTwo: [
            {
                name: "Basic Java, Core Java & Java 8",
                content: [
                    "You will Learn Java the MODERN WAY - Step By Step - With HANDS-ON Code Examples",
                    "You will Acquire ALL the SKILLS to demonstrate an EXPERTISE with Java Programming in Your Job Interviews",
                    "You will learn the Basics of Object Oriented Programming - Interfaces, Inheritance, Abstract Class and Constructors.",
                    "You will learn about a wide variety of Java Collections - List, Map, Set and Queue Interfaces"
                ]
            },
            {
                name: "Manage Java Dependencies",
                content: [
                    "You will learn to Use Maven to Manage Dependencies in Java Projects,",
                    "Best Practices in using Maven",
                    "Maven Build Life Cycle and Project Object Model,build Multi Module Java Projects with Maven",
                    "Use Maven from the Command Line and combination with an IDE"
                ]
            },
            {
                name: "Spring Boot Beginner to expert",
                content: [
                    "You will learn the MAGIC of Spring Boot - Auto Configuration, Spring Initializr and Starter Projects",
                    "Develop RESTful web services with Spring Boot",
                    "Spring Boot Web, Spring Boot Test, Spring Boot Data JPA",
                    "How to make BEST USE of Spring Boot Actuator and Spring Boot Developer Tools",
                    "Basics of developing a Web Application - HTTP, MVC Pattern, POST, GET Requests etc"
                ]
            },
            {
                name: "Java Unit Testing with Spring Boot & Mockito",
                content: [
                    "You will learn to WRITE GREAT UNIT and INTEGRATION Tests using Spring Boot Starter Test from SCRATCH",
                    "Learn INDEPENDENT Unit Tests for RESTFUL web services talking with MULTIPLE  LAYERS - web, business and data",
                    "Use the most important Unit Testing ANNOTATIONS - @SpringBootTest, @WebMvcTest, @DataJpaTest and @MockBean",
                    "Unit tests using MOCKS and SPYS created with MOCKITO",
                    "Use ALL the FRAMEWORKS in Spring Boot Starter Test - JUnit, Spring Test, Spring Boot Test, AssertJ, Mockito, JSONassert and JsonPath",
                    "Write Integration Tests using an IN MEMORY DATABASE - H2"
                ]
            },
            {
                name: "Hibernate and JPA with Spring Boot",
                content: [
                    "You will learn the basics of JPA and Hibernate - Entities, Relationships, Inheritance Mappings and Annotations",
                    "Understand JPA and Hibernate Relationships in depth - One to One, Many to One and Many to Many",
                    "Basic of performance tuning your JPA application with Hibernate - Solve N+1 Queries Issue",
                    "Querying data using JPA and Hibernate - JPQL, Criteria API and Native Queries",
                    "Basics of caching - First Level Cache and Second Level Cache with EhCache"
                ]
            },
            {
                name: "Microservice with Spring Boot and Spring Cloud",
                content: [
                    "Develop and design RESTful web services with Spring Boot",
                    "MICROSERVICES with Spring Boot and Spring Cloud",
                    "IMPLEMENT Exception Handling, Validation, HATEOAS and filtering for RESTful Web Services",
                    "Implement client side load balancing (Ribbon), Dynamic scaling(Eureka Naming Server) and an API Gateway (Zuul)",
                    "Simplify communication with other Microservices using Feign REST Client",
                    "Learn to implement Distributed tracing for microservices with Spring Cloud Sleuth and Zipkin",
                    "Setup Centralized Microservices Configuration with Spring Cloud Config Server"
                ]
            },
            {
                name: "Kubernetes and Docker with Microservices on Google Cloud GKE, AWS EKS",
                content: [
                    "Simplify DevOps with Docker and Kubernetes for Java Spring Boot Applications",
                    "Use Kubernetes to orchestrate Docker based Java Spring Boot Microservices",
                    "Use Kubernetes Declaratively with YAML Configuration",
                    "Become an expert on the Kubernetes command line tool - kubectl",
                    "Implement Service Discovery, Centralized Configuration, Distributed Tracing and Load Balancing",
                    "Learn to Create Kubernetes clusters with Master Node and Nodes",
                    "Integrate Spring Boot Microservices on Kubernetes with Istio"
                ]
            },

            {
                name: "Learn  Apache Kafka",
                content: [
                    "Introduction to Kafka and internals of Kafka,",
                    "Building Enterprise standard Kafka Clients using Spring-Kafka/Spring-Boot,",
                    "Resilient Kafka Client applications using Error-Handling/Retry/Recovery,",
                    "Writing Unit/Integration tests using Junit."
                ]
            },
        ],
        breadcrumb: {
            currentPage: "Java Backend Developer Program"
        }
    }
    // next course content


]