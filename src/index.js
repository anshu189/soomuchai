import App from './App';
import React from 'react'
import './assets/Css/App.css'
import FAQ from './pages/FAQ'
import Blogs from './pages/Blogs'
import Login from './pages/Login'
import Whywe from './pages/Whywe'
import Footer from './pages/Footer'
import Contact from './pages/Contact'
import ReactDOM from 'react-dom/client'
import Error404 from './pages/Error404'
import JoinHands from './pages/JoinHands'
import PressRelease from './pages/PressRelease'
import Testimonials from './pages/Testimonials'
import MobileApps from './pages/BlogPages/MobileApps'
import AutomatedFee from './pages/BlogPages/AutomatedFee'
import ParentSurvey from './pages/BlogPages/ParentSurvey'
import ExperienceERP from './pages/BlogPages/ExperienceERP'
import MinutesMastery from './pages/BlogPages/MinutesMastery'
import AdmissionCampaign from './pages/BlogPages/AdmissionCampaign'
import AutomatedGreeting from './pages/BlogPages/AutomatedGreeting'
import FreeCustomization from './pages/BlogPages/FreeCustomization'
import VirtualAssistants from './pages/BlogPages/VirtualAssistants'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import MultilingualProgram from './pages/BlogPages/MultilingualProgram'

const router = createBrowserRouter([{
    path: "/",
    element: <><App/><Footer/></>,
  },{
    path: "/joinhands",
    element: <><JoinHands/><Footer/></>,
  },{
    path: "/blogs",
    element: <><Blogs/><Footer/></>,
  },{
    path: "/pressrelease",
    element: <><PressRelease/><Footer/></>,
  },{
    path: "/testimonials",
    element: <><Testimonials/><Footer/></>,
  },{
    path: "/whywe",
    element: <><Whywe/><Footer/></>,
  },{
    path: "/faq's",
    element: <><FAQ/><Footer/></>,
  },{
    path: "/contactus",
    element: <><Contact/><Footer/></>,
  },{
    path: "/login",
    element: <><Login/></>,
  },{
    path: "/MultilingualProgram",
    element: <><MultilingualProgram/><Footer/></>,
  },{
    path: "/AdmissionCampaign",
    element: <><AdmissionCampaign/><Footer/></>,
  },{
    path: "/AutomatedFee",
    element: <><AutomatedFee/><Footer/></>,
  },{
    path: "/ParentSurvey",
    element: <><ParentSurvey/><Footer/></>,
  },{
    path: "/AutomatedGreeting",
    element: <><AutomatedGreeting/><Footer/></>,
  },{
    path: "/ExperienceERP",
    element: <><ExperienceERP/><Footer/></>,
  },{
    path: "/MobileApps",
    element: <><MobileApps/><Footer/></>,
  },{
    path: "/MinutesMastery",
    element: <><MinutesMastery/><Footer/></>,
  },{
    path: "/FreeCustomization",
    element: <><FreeCustomization/><Footer/></>,
  },{
    path: "/VirtualAssistants",
    element: <><VirtualAssistants/><Footer/></>,
  },{
    path: "*",
    element: <><Error404/><Footer/></>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  //  <React.StrictMode>
    <RouterProvider router={router} />
   // </React.StrictMode>
);
