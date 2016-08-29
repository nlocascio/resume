<template>
    <div id="resume" class="block app-block-resume p-t-lg">
        <div class="container">

            <!-- Header -->
            <div class="row block-header">
                <div class="col-sm-8">
                    <div class="row">
                        <h1 class="m-t-0">Nick LoCascio</h1>
                        <h3 class="m-t-0 m-b-md">Full-Stack Web Developer</h3>

                        <div class="col-sm-4">
                            <ul class="fa-ul">
                                <li>
                                    <i class="fa-li fa fa-lg fa-map-marker" aria-hidden="true"></i>
                                    Northampton, MA
                                </li>
                                <li>
                                    <i class="fa-li fa fa-lg fa-phone"></i>
                                    <a href="tel:+15084942175">
                                        (508) 494-2175
                                    </a>
                                </li>
                                <li>
                                    <i class="fa-li fa fa-lg fa-envelope"></i>
                                    <a href="mailto:nlocascio@gmail.com">
                                        nlocascio@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-sm-4">
                            <ul class="fa-ul">
                                <li>
                                    <i class="fa-li fa fa-lg fa-picture-o" aria-hidden="true"></i>
                                    <a href="https://nlocascio.myportfolio.com">
                                        Portfolio
                                    </a>
                                </li>

                                <li>
                                    <i class="fa-li fa fa-lg fa-github" aria-hidden="true"></i>
                                    <a href="https://github.com/nlocascio">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <i class="fa-li fa fa-lg fa-linkedin-square" aria-hidden="true"></i>
                                    <a href="https://www.linkedin.com/in/nicklocascio">
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>

                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 hidden-xs">
                    <img class="img-circle" src="/img/nick.jpg">
                </div>
            </div>

            <div class="row">
                <div class="col-sm-8 p-r-md">
                    <h4>

                        Current Employment
                    </h4>
                    <h5>Founder/Owner</h5>
                    <p>FitBody Easthampton, <em>October 2013 to present</em></p>
                    <ul>
                        <li>Developed custom business automation software working heavily in Laravel and Vue.</li>
                        <li>Manages all aspects of a startup business.</li>
                        <li>Leveraged web software to grow business to $250,000 annual revenue in first fiscal year.</li>
                        <li>Hired and supervised 5 employees</li>
                    </ul>

                    <h4>

                        Previous Employment
                    </h4>

                    <h5>General Manager</h5>
                    <p>Greenfield Fitness Inc., Greenfield, MA, <em>September 2009 to February 2012</em></p>
                    <ul>
                        <li>Installed and supported new business management software system, enabling remote management and online sales of our services.</li>
                        <li>Oversaw daily operations of all aspects of the health-club business.</li>
                        <li>Hired, trained, and supervised a team of 14 employees.</li>
                        <li>Achieved growth of 3,000 customers and $1,500,000 in revenue over two years.</li>
                    </ul>

                    <h5>Senior Sales Manager</h5>
                    <p>Gold’s Gym, Amherst, MA, <em>October 2007 to September 2009</em></p>
                    <ul>
                        <li>Assisted prospective customers in learning about the benefits of membership at the fitness club.</li>
                        <li>Produced a direct mail, e-mail, and phone marketing campaign that resulted in 200 new customers.</li>
                        <li>Generated and analyzed detailed business performance data and reports.</li>
                    </ul>

                    <h4>

                        Education
                    </h4>
                    <h5>University of Massachusetts Amherst</h5>
                    <p>Bachelors of Science in Human Nutrition, <em>December 2012</em></p>

                </div>
                <div class="col-sm-4">

                    <h4>

                        Proficiencies
                    </h4>
                    <skill-list category="Programming">
                        <skill name="PHP" rating="4"></skill>
                        <skill name="JavaScript" rating="4"></skill>
                        <skill name="HTML5" rating="4"></skill>
                        <skill name="CSS3" rating="3"></skill>
                        <skill name="Sass" rating="3"></skill>
                        <skill name="SQL" rating="3"></skill>
                        <skill name="Gulp" rating="2"></skill>
                    </skill-list>
                    <skill-list category="Frameworks">
                        <skill name="Laravel" rating="4"></skill>
                        <skill name="Vue" rating="4"></skill>
                        <skill name="Bootstrap" rating="4"></skill>
                        <skill name="Angular" rating="3"></skill>
                        <skill name="JQuery" rating="3"></skill>
                    </skill-list>
                    <skill-list category="APIs">
                        <skill name="Stripe" rating="4"></skill>
                        <skill name="Slack" rating="3"></skill>
                        <skill name="Pusher" rating="3"></skill>
                        <skill name="Mandrill" rating="3"></skill>
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
                        <skill name="AWS" rating="2"></skill>
                    </skill-list>

                </div>

            </div>

            <div class="row m-t">
                <div class="col-sm-4 text-xs-center text-sm-left">
                    <a class="btn btn-default btn-sm" href="https://github.com/nlocascio/resume">
                        <i class="fa fa-github fa-lg" aria-hidden="true"></i>
                        View Source</a>
                </div>
            </div>

        </div>
    </div>
</template>

<style>
    .block-header li {
        margin-bottom: 15px;
    }
</style>

<script>
    export default {
        components: {
            'skill-list': require('./SkillList.vue'),
            'skill': require('./Skill.vue')
        }
    }
</script>