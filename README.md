<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Uri Shamai - Touch and Sound Treatments</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f8f8;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            margin-top: 20px;
        }

        h1,
        h2 {
            color: #333;
        }

        h2 {
            margin-top: 20px;
        }

        p {
            color: #666;
        }

        button {
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
        }

        button:hover {
            background-color: #0056b3;
        }

        a {
            color: #007bff;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        .more {
            display: block;
            margin-top: 20px;
        }

        .treatment-cards {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }

        .treatment-card {
            flex: 1 1 200px;
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 10px;
            text-align: center;
        }

        .treatment-image {
            width: 100%;
            border-radius: 5px;
        }

        .contact-section {
            margin-top: 40px;
        }

        .contact-section p {
            margin: 5px 0;
        }

        @media (max-width: 600px) {
            .container {
                padding: 10px;
            }

            h1 {
                font-size: 24px;
            }

            h2 {
                font-size: 20px;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Uri Shamai - Touch and Sound Treatments</h1>
        <p>This is a website for Uri Shamai's touch and sound treatments, offering a variety of relaxing and balancing treatments. The site includes sections for learning about Uri Shamai, exploring treatments offered, and contacting for appointments.</p>

        <h2>Getting Started</h2>
        <p>To get started with the project, clone this repository and install the necessary dependencies using npm:</p>
        <pre><code>npm install</code></pre>
        <p>Then, you can start the development server:</p>
        <pre><code>npm start</code></pre>

        <h2>Technologies Used</h2>
        <ul>
            <li>React</li>
            <li>React Router</li>
            <li>CSS</li>
        </ul>

        <h2>Components</h2>

        <h3>HomePage</h3>
        <p>The <code>HomePage</code> component serves as the main entry point for the website, displaying sections for the hero, about, treatments, and contact.</p>

        <h3>HeroSection</h3>
        <p>The <code>HeroSection</code> component displays a hero image and a call-to-action button for coordinating treatments.</p>

        <h3>AboutSection</h3>
        <p>The <code>AboutSection</code> component provides information about Uri Shamai, including qualifications and the range of treatments offered.</p>

        <h3>TreatmentsSection</h3>
        <p>The <code>TreatmentsSection</code> component displays a variety of treatments offered, with the option to show additional treatments and a link to view more treatments.</p>

        <h3>ContactSection</h3>
        <p>The <code>ContactSection</code> component provides contact information for Uri Shamai, including address, phone number, email, and opening hours.</p>

        <h2>Contact</h2>
        <p>For more information about Uri Shamai's treatments and to make an appointment, visit the website or contact directly using the provided contact details.</p>
    </div>
</body>

</html>
