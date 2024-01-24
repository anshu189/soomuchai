import React from 'react'
import Navbar from '../components/Navbar';

const Testimonials = () => {
  const testimonialsleft=[{
    name:'VP of Engineering',
    company:'Fortune 500 technology company',
    review:"Nobody understands how to generate high-quality human data like Soomuch AI. Our engineering team had been spending 50% of their time managing contractors, after unsuccessfully iterating with other data providers for 18 months. The Surge AI team came in, redesigned our data collection methods, and doubled the amount of high-quality data for training our models in two weeks. That data gave us the biggest gain in metrics we’ve ever seen."
  },{
    name:'Sam Bowman',
    company:'Research Scientist at Anthropic Professor at NYU',
    review:"If you need an NLP data collection process and don't want to be manage annotators directly, Soomuch is remarkably easy to work with and their team does very good work."
  },{
    name:'CTO',
    company:'Billion-dollar fintech startup',
    review:'The data Surge AI produces is worth its weight in gold. I used to work at Google and Facebook, and we’d have accelerated our ML development by years if we’d had Soomuch AI. Their speed and quality has enabled new machine learning products, and they get it all right on the first try, without needing to iterate for months.'
  },]

  const testimonialsmid=[{
    name:'VP of Product',
    company:'Unicorn AI startup',
    review:'The Soomuch AI team are experts at collecting data for training large language models. They worked closely with us every step of the way, from helping us understand what types of data we should collect to designing our tasks and guidelines. Their experience and expertise accelerated our timelines for training new human feedback models from 1 year to 1 month.'
  },{
    name:'Ethan Perez',
    company:'Research Scientist at Anthropic',
    review:'The biggest game-changer for my research recently has been using Soomuch AI for human data collection. With Surge, the workflow for collecting human data now looks closer to “launching a job on a cluster” which is wild to me.'
  },]

  const testimonialsright=[{
    name:'Prem Viswanathan',
    company:'Director of Machine Learning at Artifact, Professor at CMU',
    review:"Anytime it's pro level NLP data labeling for hard problems, it inevitably leads to the team at Soomuch AI."
  },{
    name:'Director of Engineering',
    company:'Trust & Safety at a large social media company',
    review:'When I joined our company, one of my first realizations was that low-quality training data was holding our machine learning models back. We talked to Surge AI, and in 2 weeks, they replaced a year’s worth of training data. Retraining our models gave us a 63% boost in model AUC – which was larger than our entire team of ML engineers had produced in 2 years.'
  },{
    name:'Jared Kaplan',
    company:'Anthropic Co-Founder',
    review:'The team at Soomuch AI understands the unique challenges of training large language models and AI systems. Their human data labeling platform is tailored to provide the unique, high-quality feedback needed for cutting-edge AI work. Soomuch AI is an excellent partner to us in supporting our technical AI alignment research.'
  },]
  

  return (
    <>
      <div className="testi-main-cont">
        <Navbar/>
        <div className="testi-sub-cont">

          <div className="testi-top-cont">
            <h1 className='testi-heading'>Testimonials</h1>
            <h3 className='testi-subheading'>Real Voices, Real Triumphs: Hear the Echoes of Success!</h3>
          </div>
          <hr className="testi-divider-1" />      
          <div className="testi-bottom-cont">

            <div className="testi-bottom-left">
              {testimonialsleft.map((items)=>{return<>
                <div className="testi-card">
                  <div className="testi-review">{items.review}</div>
                  <span className="testi-divider"></span>

                  <div className="testi-bywhom">
                    <div className="testi-name">{items.name}</div>
                    <div className="testi-company">{items.company}</div>
                  </div>
                </div>
              </>})}
            </div>

            <div className="testi-bottom-mid">
            {testimonialsmid.map((items)=>{return<>
                <div className="testi-card testi-special-card">
                  <div className="testi-review testi-special-review">{items.review}</div>
                  <span className="testi-divider"></span>
                  <div className="testi-bywhom">
                    <div className="testi-name testi-special-name">{items.name}</div>
                    <div className="testi-company testi-special-company">{items.company}</div>
                  </div>
                </div>
              </>})}
            </div>
            
            <div className="testi-bottom-right">
            {testimonialsright.map((items)=>{return<>
                <div className="testi-card">
                  <div className="testi-review">{items.review}</div>
                  <span className="testi-divider"></span>
                  <div className="testi-bywhom">
                    <div className="testi-name">{items.name}</div>
                    <div className="testi-company">{items.company}</div>
                  </div>
                </div>
              </>})}
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Testimonials