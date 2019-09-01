import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import HeroImage from '../components/heroImage';
import Programs from '../components/programs';
import ContentBlock from '../components/contentBlock';

const content = {
  title: "Why KCK?",
  paragraphs: [
      "At KCK Beauty & Barber Academy Inc., we recognize that the demand for creative and well trained professionals in the beauty and barber industry is growing daily. We offer dynamic programs in a modern facility to successfully train and prepare you for a limitless career. Our students not only learn technical skills needed in their chosen field of study but interpersonal, professional and business fundamentals as well. Our Instructors are well versed in the use of innovative equipment and effective techniques to present and enhance the school’s state approved curriculum.",
      "KCK Beauty & Barber Academy Inc. is the place where students are able to pursue their passion, unleash their skills, creativity and be equipped with the tools and knowledge required to succeed."
  ]
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroImage />
    <Programs />
    <ContentBlock title={content.title} paragraphs={content.paragraphs} />
    {/* <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="bot-field" />
              <div className="field half first">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />
              </div>
              <div className="field half">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" id="email" />
              </div>
              <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows="6"></textarea>
              </div>
              <ul className="actions">
                  <li><input type="submit" value="Send Message" className="special" /></li>
                  <li><input type="reset" value="Clear" /></li>
              </ul>
          </form> */}

<form name="SignUpForm" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                            <input type="hidden" name="bot-field" />
                            <div class="form-group">
                                <label>First Name</label>
                                <input type="text" class="form-control" name="firstName"/>
                            </div>
                            <div class="form-group">
                                <label>Last Name</label>
                                <input type="text" class="form-control" name="lastName"/>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" name="email"/>
                            </div>
                            <div class="form-group">
                                <label>Phone Number</label>
                                <input type="text" class="form-control" name="phoneNumber"/>
                            </div>
                            <div class="form-group">
                                <label>Address</label>
                                <input type="text" class="form-control" name="address"/>
                            </div>
                            <div class="form-group">
                                <label>State</label>
                                <input type="text" class="form-control" name="state"/>
                            </div>
                            <div class="form-group">
                                <label>City</label>
                                <input type="text" class="form-control" name="city"/>
                            </div>
                            <div class="form-group">
                                <label>Zip Code</label>
                                <input type="text" class="form-control" name="zipCode"/>
                            </div>
                            <div class="form-group">
                                <label>Questions/Comments?</label>
                                <textarea type="type" class="form-control" name="comments"/>
                            </div>
                            <input type="submit" value="Send Message" className="special" />
                            {/* <ModalFooter>
                                <Button type="submit" color="danger" onClick={this.toggle}>Get Information</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                            </ModalFooter> */}
                        </form>
  </Layout>
)

export default IndexPage