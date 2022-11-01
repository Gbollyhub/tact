<template>
  <div>
    <div class="section contact wf-section" :style="{  backgroundColor: this.$store.state.global.SiteColor, backgroundImage: `url('${ this.$store.state.global.SiteBannerBackground.url }')` }">
      <div class="container-default w-container">
        <div>
          <div class="inner-container-700px align-center mg-bottom-40px">
            <h1 class="subtitle color-white">{{this.$store.state.contactPage.Text1}}</h1>
            <h2 class="h1-size color-white">{{this.$store.state.contactPage.Text2}}</h2>
            <div class="inner-container-550px">
              <p class="paragraph-2">
                {{this.$store.state.contactPage.Text3}}
              </p>
            </div>
          </div>
          <div
            data-w-id="071cde0c-e76a-2555-6e58-736bfba13956"
            style="opacity: 0"
            class="grid-3-columns"
          >
            <a
            v-for="(item,index) in this.$store.state.addresses"
            :key="index"
              data-w-id="69c4516d-99ba-e4bb-2bd0-395ec2774dde"
              :href="`tel:${item.PhoneNumber}`"
              class="card contact-link w-inline-block"
              ><img
                src="~/assets/images/contact.png"
                loading="lazy"
                alt=""
                class="icon round-icon mg-bottom-32px"
              />
              <h3>{{item.Office}}</h3>
              <p>{{item.Address}}</p>
              <div class="accent-line mg-bottom-24px"></div>
              <div class="title color-neutral-800">{{item.PhoneNumber}}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="section wf-section">
      <div class="container-default w-container">
        <div class="contact-form-main-wrap">
          <div
            data-w-id="cfafdf21-9180-59a7-8b91-d47c8ecfba8c"
            style="opacity: 0"
            class="split-content contact-form-left"
          >
            <h2 class="subtitle">Contact us</h2>
            <h3 class="h2-size">
              Get in touch with Senator Tokunbo Abiru today!
            </h3>
            <p class="contact-paragraph">I am waiting to hear from you.</p>
            <div>
              <h4 class="h3-size">Follow us</h4>
              <div class="social-links-wrapper contact">
                <a
                  :href="this.$store.state.footer.FacebookLink"
                  target="_blank"
                  class="contact-social-link facebook"
                  ></a
                >
                <a
                  :href="this.$store.state.footer.TwitterLink"
                  target="_blank"
                  class="contact-social-link twitter"
                  ></a
                >
                <a
                  :href="this.$store.state.footer.InstagramLink"
                  target="_blank"
                  class="contact-social-link instagram"
                  ></a
                >
                <a
                  :href="this.$store.state.footer.YoutubeLink"
                  target="_blank"
                  class="contact-social-link youtube"
                  ></a
                >
              </div>
            </div>
          </div>
          <div
            data-w-id="579043a7-80f1-4cd4-2c9e-2d57f34286ee"
            style="opacity: 0"
            class="split-content contact-form-main-wrapper"
          >
            <div class="card contact-form-card">
              <form
              @submit.prevent="onSubmit" 
              v-show="form"
                class="contact-form"
              >
                <div>
                  <label for="name">Name</label
                  ><input
                    v-model="name"
                    type="text"
                    class="input w-input"
                    maxlength="256"
                    name="name"
                    data-name="Name"
                    placeholder="Full name"
                    id="name"
                  />
                </div>
                <div>
                  <label for="Email-2">Email</label
                  ><input
                  v-model="email"
                    type="email"
                    class="input w-input"
                    maxlength="256"
                    name="Email"
                    data-name="Email"
                    placeholder="Email address"
                    id="Email-2"
                    required=""
                  />
                </div>
                <div>
                  <label for="Phone-number">Phone number</label
                  ><input
                  v-model="phone"
                    type="tel"
                    class="input w-input"
                    maxlength="256"
                    name="Phone-number"
                    data-name="Phone number"
                    placeholder="+234 809 393 4546"
                    id="Phone-number"
                    required=""
                  />
                </div>
                <div>
                  <label for="Subject">Subject</label
                  ><input
                  v-model="subject"
                    type="text"
                    class="input w-input"
                    maxlength="256"
                    name="Subject"
                    data-name="Subject"
                    placeholder="Our Community..."
                    id="Subject"
                    required=""
                  />
                </div>
                <div id="w-node-_0cc69ca4-312e-7dbc-c839-a3b5b8e3ea30-b551fab9">
                  <label for="Message">Message</label
                  ><textarea
                  v-model="message"
                    placeholder="Enter your message here..."
                    maxlength="5000"
                    id="Message"
                    name="Message"
                    data-name="field"
                    class="input text-area w-input"
                  ></textarea>
                </div>
                <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" />
                <div id="w-node-_3b8e74a2-2d76-5897-55bd-9f17720f4199-b551fab9">
                  <button
                    type="submit"
                    class="submit-button w-button"
                  >Submit</button>
                </div>
              </form>
              <div v-show="formSuccess" class="success-message">
                <img
                  src="~/assets/images/newsletter-politician-template.svg"
                  loading="eager"
                  alt=""
                  class="icon mg-bottom-24px"
                />
                <div class="h3-size color-neutral-800">
                  Your message has been submitted.<br />We will get back to you
                  within 24-48 hours.
                </div>
              </div>
              <div v-show="formError" class="error-message text-center ">
                <div>Oops! Something went wrong.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section bg-neutral-200 mask wf-section">
      <div class="container-default w-container">
        <div class="grid-2-columns">
          <div id="w-node-e0ca5de3-8170-1561-19eb-f77ba4c40aa8-b551fab9">
            <div class="subtitle">FAQs</div>
            <h2>Frequently Asked Questions</h2>
            <div class="faq-main-wrapper">
              <div class="faq-item" v-for="(item,index) in this.$store.state.faqs" :key="index">
                <div class="faq-top-content">
                  <h3 class="title text-300 mg-bottom-0px">
                    {{item.Title}}
                  </h3>
                  <div class="faq-icon"></div>
                </div>
                <div class="faq-content">
                  <div class="faq-spacer"></div>
                  <p class="mg-bottom-0px">
                    {{item.Summary}}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-w-id="2e5f1e9f-463e-7de8-98c2-cfecfbe29525"
        style="opacity: 0"
        class="image-full-width-left contact-faqs"
        :style="{backgroundImage: `url('${ this.$store.state.contactPage.FAQImage.url }')` }"
      ></div>
    </div>
  </div>
</template>

<script>
import HeroSection from "~/components/banner/hero-section.vue";
import axios from 'axios'
export default {
  name: "IndexPage",
  components: { HeroSection },
  data(){
  return {
    apiKey: '6LdKIXohAAAAAEvZXS5V12slR60kpT8yTAgEbd62',
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
        form:true,
    formError: false,
    formSuccess: false,

  }
  },  
  methods:{
 onError(error) {
      console.log('Error happened:', error)
    },
    async onSubmit() {
      console.log("clcikeda")
      try {
        const token = await this.$recaptcha.getResponse()
        console.log('ReCaptcha token:', token)
        await this.$recaptcha.reset()
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Login error:', error)
      }
    },
    async onSuccess(token) {

          const mail = axios.post('https://api-tact.herokuapp.com/send-mail', {
       name: this.name,
       email: this.email,
       phone: this.phone,
       subject: this.subject,
       message: this.message
     })
         this.form = false
    this.formSuccess = true
       
    },
    onExpired() {
      console.log('Expired')
    }
  },
  head() {
    return {
      htmlAttrs: {
        "data-wf-page": "61d454e57ae5923ab551fab9",
        "data-wf-site": "61d454e57ae5920f3051faad",
      },
      title: "Contact - Senator Mukhail Adetokunbo Abiru, FCA",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Contact - Senator Mukhail Adetokunbo Abiru, FCA",
        },
      ],
    };
  },
};
</script>
