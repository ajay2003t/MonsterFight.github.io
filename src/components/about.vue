<template>
    <div>
        <main>
            <section class="about-section">
                <div class="container">
                    <h1>AjAy</h1>
                    <p>
                        With expertise in HTML, CSS, and JavaScript, I specialize in designing responsive and
                        mobile-friendly websites that adapt to various screen sizes. I stay up-to-date with the latest
                        design trends and technologies to ensure that my clients' websites are modern, engaging, and
                        optimized for performance.
                    </p>
                    <p>
                        Throughout my career, I have collaborated with clients from diverse industries, including
                        e-commerce, healthcare, and education. I believe in a client-centric approach, understanding their
                        unique requirements, and translating them into effective design solutions. I value clear
                        communication and strive to exceed my clients' expectations with every project.
                    </p>
                    <p>
                        If you have a project in mind or want to discuss how I can help you improve your online presence,
                        feel free to get in touch. I'm always excited to work on new and challenging projects.
                    </p>
                </div>
            </section>
        </main>

        <footer>
            <div class="container">
                <p>&copy; 2023 AjAy - Web Designer. All rights reserved.</p>
            </div>
        </footer>

    </div>
</template>

<script>
export default {
    name: 'about'
}
</script>

<style scoped>
/* Reset some default styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Basic styling for header */
  header {
    background-color: #333;
    color: #fff;
    padding: 20px;
  }
  
  nav ul {
    list-style: none;
    display: flex;
    justify-content: flex-end;
  }
  
  nav ul li {
    margin-left: 15px;
  }
  
  nav ul li a {
    color: #fff;
    text-decoration: none;
  }
  
  /* Styling for the main content section */
  .about-section {
    padding: 50px;
    text-align: center;
  }
  
  .about-section h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  
  .about-section p {
    margin-bottom: 15px;
  }
  
  /* Basic styling for the footer */
  footer {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
  }
  
  .container {
    max-width: 960px;
    margin: 0 auto;
  }
  
  @media only screen and (max-width: 768px) {
    /* Adjustments for smaller screens */
    .about-section {
      padding: 30px;
    }
  
    .about-section h1 {
      font-size: 28px;
    }
  }
  
</style>