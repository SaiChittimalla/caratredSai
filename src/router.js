import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./components/MainPage.vue";
import SoftwareCompany from "./components/Home/SoftwareCompany.vue";
import HelpDesk from "./components/Home/HelpDesk.vue";
import FooterPage from "./components/FooterPage.vue";
import StartupHome from "./components/Home/StartupHome.vue";
import WhyChoose from "./components/Aboutus/WhyChoose.vue";
import OurTeam from "./components/Aboutus/OurTeam.vue";
import AboutUs from "./components/Aboutus/AboutUs.vue";
import EzyGst from './components/Products/EzyGst.vue';
import DevopsInfra from "./components/ServicesOne/DevopsInfra.vue";
import ServicesPage from "./components/ServicesOne/ServicesPage.vue";
import ProductPage from './components/Products/ProductPage.vue';
import ServicesBenefits from "./components/ServicesTwo/ServicesBenefits.vue";
import RoboticAutomations from './components/ServicesOne/RoboticAutomations.vue';
import DomainsPage from "./components/ServicesTwo/DomainsPage.vue";
import FooterDesign from "./components/FooterDesign.vue";
import HomePage from "./components/Home/HomePage.vue";
import DatasciencePage from './components/Home/DatasciencePage.vue';
import WebDevelopment from './components/Home/WebDevelopment.vue';
import CareersPage from './components/careers/CareersPage.vue';
import ItAgency from './components/Home/ItAgency.vue';
import SaaSAppLanding from './components/Home/SaaSAppLanding.vue';
import CeoBiography from './components/Aboutus/CeoBiography.vue';
import EzyEnvoicing from './components/Products/EzyEnvoicing.vue';
import EzySuite from './components/Products/EzySuite.vue';
import ErpSolution from './components/ServicesOne/ErpSolution.vue';
import IntroductionPage from './components/ServicesTwo/IntroductionPage.vue';
import ModulePage from './components/ServicesTwo/ModulePage.vue';
import ContactUs from './components/contact/ContactUs.vue';
import EzyClbs from './components/Products/EzyClbs.vue';

const routes = [{
    path: '/',
    redirect: {
        name: 'Home'
    }
},
{
    path: '/Home',
    // component: MainPage,
    name: 'Home',
    redirect: {
        name: 'HomePage'
    },
    children: [
        {
            path: '/HomePage',
            component: HomePage,
            name: 'HomePage',
        },
        {
            path: '/WebDevelopment',
            component: WebDevelopment,
            name: 'WebDevelopment',
        },
        {
            path: '/DatasciencePage',
            component: DatasciencePage,
            name: 'DatasciencePage',
        },
        {
            name: 'SoftwareCompany',
            path: '/softwarecompany',
            component: SoftwareCompany
        },
        {
            name: 'HelpDesk',
            path: '/helpdesk',
            component: HelpDesk
        },
        {
            name: 'FooterPage',
            path: '/footer',
            component: FooterPage
        },
        {
            name: 'StartupHome',
            path: '/startuphome',
            component: StartupHome
        },
        {
            name: 'FooterDesign',
            path: 'footerpage',
            component: FooterDesign
        },
        {
            name: "ItAgency",
            path: '/ItAgency',
            component: ItAgency
        },
        {
            name: 'SaaSAppLanding',
            path: '/SaasApplanding',
            component: SaaSAppLanding
        }
    ]
},
{
    path: '/AboutPage',
    component: MainPage,
    redirect: { name: 'AboutPage' }, // Redirect to the child1 route
    children: [

        {
            name: '',
            path: '/aboutus',
            component: AboutUs
        },
        {
            name: 'WhyChoose',
            path: '/whychooseus',
            component: WhyChoose
        },
        {
            name: 'OurTeam',
            path: '/ourteam',
            component: OurTeam
        },
        {
            name: 'CeoBiography',
            path: '/CeoBiography',
            component: CeoBiography
        },
    ],
},
{
    path: '/ProductPage',
    component: MainPage,
    children: [

        {
            name: 'ProductPage',
            path: '/productpage',
            component: ProductPage
        },
        {
            name: 'EzyGst',
            path: '/ezygst',
            component: EzyGst
        },
        {
            name: 'EzyEnvoicing',
            path: '/EzyEnvoicing',
            component: EzyEnvoicing
        },
        {
            name: 'EzySuite',
            path: '/EzySuite',
            component: EzySuite
        },
        {
            name: 'EzyClbs',
            path: '/EzyClbs',
            component: EzyClbs,
        },

    ],
},
{
    path: '/ServicePage',
    component: MainPage,
    children: [
        {
            name: 'ErpSolution',
            path: '/ErpSolution',
            component: ErpSolution,
        },
        {
            name: 'ServicesPage',
            path: '/servicespage',
            component: ServicesPage
        },

        {
            name: 'ServicesBenefits',
            path: '/benefits',
            component: ServicesBenefits
        },
        {
            name: 'RoboticAutomations',
            path: '/roboticautomations',
            component: RoboticAutomations
        },
        {
            name: 'DomainsPage',
            path: '/domains',
            component: DomainsPage
        },
        {
            name: 'DevopsInfra',
            path: '/devopsinfra',
            component: DevopsInfra
        },
        {
            name: 'IntroductionPage',
            path: '/IntroductionPage',
            component: IntroductionPage
        },
        {
            name: 'ModulePage',
            path: '/ModulePage',
            component: ModulePage
        },
    ],
},
{
    path: '/CareersPage',
    component: MainPage,
    children: [
        {
            path: '',
            component: CareersPage,
            name: 'CareersPage',
        }
    ]
},
{
    path: '/ContactPage',
    component: MainPage,
    children: [
        {
            name: 'ContactUs',
            path: '/ContactUs',
            component: ContactUs
        }
    ]
},
]





const router = createRouter({
    history: createWebHistory(), routes,


});
export default router






