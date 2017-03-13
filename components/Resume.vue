<template>
    <div id="resume" class="block app-block-resume p-t-lg">
        <div class="container">

            <!-- Header -->
            <div class="row">
                <div class="col-sm-9 col-lg-8">
                    <h1 class="m-t-0">

                        Nick LoCascio

                    </h1>

                    <h3 class="m-t-0">
                        Full-Stack Web Developer

                        <span class="text-nowrap">
                        <a href="#" class="btn btn-link btn-xs disabled">
                            <i class="fa fa-fw fa-lg fa-map-marker"></i>
                            Northampton, MA
                        </a>
                        <a href="mailto:nlocascio@gmail.com" class="btn btn-link btn-sm">
                            <i class="fa fa-fw fa-lg fa-envelope"></i>
                            nlocascio@gmail.com
                        </a>
                            </span>
                    </h3>

                    <p class="m-b-sm">
                        I'm a developer currently living in Northampton, MA. Besides being a passionate programmer,
                        I also have a background in business operations, marketing, and sales. Available for
                        contract, full-time, or part-time projects.
                    </p>

                    <p class="text-xs-center text-sm-left">
                        <a class="btn btn-default btn-sm" href="https://nlocascio.myportfolio.com">
                            <i class="fa fa-picture-o fa-lg" aria-hidden="true"></i>
                            Portfolio
                        </a>
                        <a class="btn btn-default btn-sm" href="https://github.com/nlocascio">
                            <i class="fa fa-github fa-lg" aria-hidden="true"></i>
                            GitHub
                        </a>
                        <a class="btn btn-default btn-sm" href="https://www.linkedin.com/in/nicklocascio">
                            <i class="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
                            LinkedIn
                        </a>
                    </p>

                </div>
                <div class="col-lg-offset-1 col-sm-3 hidden-xs">

                    <!-- Profile Picture -->
                    <img class="img-circle img-thumbnail img-responsive" src="/img/nicklocascio.jpg">

                </div>
            </div>

            <div class="row">
                <div class="col-sm-9 col-lg-8 p-r-md">
                    <h4>

                        Current Employment
                    </h4>
                    <h5>Software Engineer</h5>
                    <p>Freelance/Contract, <em>February 2015 to Present</em></p>
                    <ul>
                        <li>Developed custom business automation software working heavily in PHP (Laravel) and JavaScript (VueJS).</li>
                        <li>Built an open source Laravel package which authorizes users against an external third-party platform (MINDBODY API).</li>
                    </ul>

                    <h4>

                        Previous Employment
                    </h4>

                    <h5>Founder/Owner</h5>
                    <p>FitBody Easthampton, <em>October 2013 to November 2016</em></p>
                    <ul>
                        <li>Managed all aspects of a startup business.</li>
                        <li>Leveraged web software to grow business to $250,000 annual revenue in first fiscal year.
                        </li>
                        <li>Hired and supervised a team of 5 employees.</li>
                    </ul>

                    <h5>General Manager/Senior Sales Manager</h5>
                    <p>Gold's Gym / Greenfield Fitness LLC, <em> October 2007 to February 2012</em></p>
                    <ul>
                        <li>Installed and supported new business management software system which enabled remote
                            management and online sales of our services.
                        </li>
                        <li>Oversaw daily operations of all aspects of the health-club business.</li>
                        <li>Hired, trained, and directed a team of 14 employees.</li>
                        <li>Achieved growth of 3,000 customers and $1,500,000 in revenue over two years.</li>
                    </ul>

                    <h4>

                        Education
                    </h4>
                    <h5>University of Massachusetts Amherst</h5>
                    <p>Bachelors of Science in Human Nutrition, <em>December 2012</em></p>

                </div>
                <div class="col-lg-offset-1 col-sm-3 col-xs-8">

                    <h4>

                        Proficiencies
                    </h4>
                    <skill-list category="Programming">
                        <skill name="PHP" rating="4"></skill>
                        <skill name="JavaScript" rating="4"></skill>
                        <skill name="HTML5" rating="4"></skill>
                        <skill name="CSS3" rating="3"></skill>
                        <skill name="Less/Sass" rating="3"></skill>
                        <skill name="SQL" rating="3"></skill>
                    </skill-list>
                    <skill-list category="Frameworks">
                        <skill name="Laravel" rating="4"></skill>
                        <skill name="Vue" rating="4"></skill>
                        <skill name="Bootstrap" rating="4"></skill>
                        <skill name="Angular" rating="3"></skill>
                        <skill name="JQuery" rating="3"></skill>
                        <skill name="Webpack" rating="2"></skill>
                    </skill-list>
                    <skill-list category="APIs">
                        <skill name="Stripe" rating="4"></skill>
                        <skill name="Slack" rating="3"></skill>
                        <skill name="Pusher" rating="3"></skill>
                        <skill name="Twilio" rating="3"></skill>
                        <skill name="ZenDesk" rating="3"></skill>
                        <skill name="QuickBooks" rating="2"></skill>
                    </skill-list>
                    <skill-list category="Other">
                        <skill name="OS X" rating="4"></skill>
                        <skill name="Linux" rating="4"></skill>
                        <skill name="Photoshop" rating="4"></skill>
                        <skill name="Git" rating="3"></skill>
                        <skill name="Nginx" rating="3"></skill>
                        <skill name="Apache" rating="3"></skill>
                    </skill-list>

                </div>

            </div>

            <div class="row m-t">
                <div class="col-sm-4 text-xs-center text-sm-left">
                    <a class="btn btn-default btn-sm" href="https://github.com/nlocascio/resume">
                        <i class="fa fa-github fa-lg" aria-hidden="true"></i>
                        View Source
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        components: {
            'skill-list': require('./SkillList.vue'),
            'skill': require('./Skill.vue')
        }
    }
</script>