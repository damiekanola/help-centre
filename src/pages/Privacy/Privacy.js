import React, { useEffect, useRef } from "react";
import { Text, Image, OrderedList, ListItem, UnorderedList } from "@chakra-ui/react";
import LeftNav from "../../components/Leftsidenav/Leftsidenav";
import useIsInViewport from "../../utils/useOnScreen/useOnScreen";

export const Privacy = () => {
  useEffect(() => {
    document.title = 'Privacy policy';
  }, []);

  const introductionRef = useRef(null)
  const our_valuesRef = useRef(null)
  const why_weRef = useRef(null)
  const your_rightsRef = useRef(null)
  const retentionRef = useRef(null)
  const our_userRef = useRef(null)
  const protectionRef = useRef(null)
  const contactingRef = useRef(null)

  const introductionCheck = useIsInViewport(introductionRef)
  const our_valuesCheck = useIsInViewport(our_valuesRef)
  const why_weCheck = useIsInViewport(why_weRef)
  const your_rightsCheck = useIsInViewport(your_rightsRef)
  const retentionCheck = useIsInViewport(retentionRef)
  const our_userCheck = useIsInViewport(our_userRef)
  const protectionCheck = useIsInViewport(protectionRef)
  const contactingCheck = useIsInViewport(contactingRef)


  const articleContent = [
    { check: introductionCheck, id: 'introduction', title: 'Introduction' },
    { check: our_valuesCheck, id: 'our_values', title: 'Our Values' },
    { check: why_weCheck, id: 'why_we', title: 'Why We Process Your Information' },
    { check: your_rightsCheck, id: 'your_rights', title: 'Your Rights Over your Infromation' },
    { check: retentionCheck, id: 'retention', title: 'Retention Of Your Information' },
    { check: our_userCheck, id: 'our_user', title: 'Our Use of Machine Learning' },
    { check: protectionCheck, id: 'protection', title: 'Protection of Your Information' },
    { check: contactingCheck, id: 'contacting', title: 'Contacting Us' },
  ]



  const headStyle = {
    minHeight: '30px',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '30px',
    // letterSpacing: '0.10em',
    color: '#000000',
    paddingBottom: '40px',
    // textTransform: 'uppercase',
  }

  const relatedContent = [
    { link: '/first_time_setup', text: 'First time setup' },
    { link: "/approved_what_next", text: 'Approved, what next?' },
    { link: "/terms", text: 'Terms of service' }
  ]

  return (
    <div className="main">
      <LeftNav articleContent={articleContent} relatedContent={relatedContent} />
      {/* <LeadRightNav /> */}
      <Text className="head_">PRIVACY POLICY</Text>
      <Text className="publish">Last updated on: May 23, 2022</Text>
      <OrderedList className="content">
        <ListItem style={headStyle} id='introduction' ref={introductionRef}>
          <Text my='20px' style={{ textTransform: 'capitalize' }}>INTRODUCTION</Text>
          <Text className="content">
            At Veerge, our mission is to enhance the Real Estate industry for everyone involved. This Privacy Policy outlines how we collect, use, and share personal information concerning various individuals associated with Veerge. These include:
          </Text>
          <OrderedList className="content">
            <ListItem>
              <b>Property development companies:</b> These are businesses that utilize Veerge to enhance their operations.
            </ListItem>
            <ListItem>
              <b>Users:</b> Individuals who make purchases at businesses powered by Veerge.
            </ListItem>
            <ListItem>
              <b>Partners:</b> Individuals or entities who develop apps for Property development companies, build applications on behalf of property development companies, refer potential property development companies to Veerge, or provide support to property development companies using the Veerge platform.
            </ListItem>
            <ListItem>
              <b>Visitors:</b> Individuals who visit Veerge's websites or contact Veerge support.
            </ListItem>
            <ListItem>
              We may update this privacy policy if we make changes to our privacy practices, and if any changes are significant, we will inform you through the Veerge admin or via email.
            </ListItem>
          </OrderedList>
        </ListItem>

        <ListItem style={headStyle} id='our_values' ref={our_valuesRef}>
          <Text my='20px' style={{ textTransform: 'capitalize' }}>Our Values</Text>
          <Text className="content">
            At Veerge, we prioritize trust and commit to handling your information responsibly. Three core values guide our approach to information and privacy:
          </Text>
          <OrderedList className="content">
            <ListItem>
              <b>Your information belongs to you:</b> We analyze the types of information necessary to provide our services and strive to collect only what is truly essential. We aim to delete or anonymize information when it is no longer needed. Our engineers collaborate with privacy and security teams to ensure privacy is a fundamental consideration in our product development. We believe your information is your property, and we utilize it solely for your benefit.
            </ListItem>
            <ListItem>
              <b>We protect your information from others:</b> Unless we have your permission or are legally obligated, we refuse to share your personal information with third parties. If legal requirements mandate sharing, we will inform you in advance unless legally prohibited.
            </ListItem>
            <ListItem>
              <b>We assist property development companies and partners with privacy obligations:</b> Recognizing that many property development companies and partners lack dedicated privacy teams, we prioritize supporting them in meeting their privacy obligations. We design our products and services to facilitate privacy-friendly usage. We provide detailed FAQs, documentation, and address privacy-related inquiries.
            </ListItem>
          </OrderedList>
        </ListItem>

        <ListItem style={headStyle} id='why_we' ref={why_weRef}>
          <Text my='20px' style={{ textTransform: 'capitalize' }}>Why We Process Your Information</Text>
          <Text className="content">
            We process your information when fulfilling contractual obligations, such as processing subscription payments for using the Veerge platform. We or our affiliates may also use your personal information for business-related purposes, including:
          </Text>
          <UnorderedList className="content">
            <ListItem>
              Preventing risk and fraud
            </ListItem>
            <ListItem>
              Providing support and addressing inquiries
            </ListItem>
            <ListItem>
              Generating reports and conducting analytics
            </ListItem>
            <ListItem>
              Testing new features or additional services
            </ListItem>
            <ListItem>
              Assisting with marketing, advertising, or communication endeavors
            </ListItem>

            <Text className="content">
              Before processing personal information, we consider the potential risks to your privacy and employ measures to mitigate these risks. We maintain transparency in our privacy practices, grant you appropriate control over your personal information, limit the data we retain, determine how we use your information, restrict its sharing, define retention periods, and employ technical safeguards.
            </Text>
            <Text className="content">
              In certain cases, we may process your personal information based on your consent. This includes instances where an alternative legal basis for processing is unavailable, where you direct us to transfer information to a third party, where we receive data with existing consent, or when required by law. You have the right to withdraw your consent by changing communication preferences, opting out of our communications, or contacting us.
            </Text>

            <Text className="content">
              Depending on your role as a property development company, customer, partner, user, or visitor, please refer to our supplemental privacy policies for specific information on processing purposes, categories of recipients, and legal bases for processing various types of personal data.
            </Text>

          </UnorderedList>
        </ListItem>

        <ListItem style={headStyle} id='your_rights' ref={your_rightsRef}>
          <Text my='20px' style={{ textTransform: 'capitalize' }}>Your Rights Over Your Information</Text>
          <Text className="content">
            We believe you should have access to and control over your personal information, regardless of your location. Depending on how you utilize Veerge, you may have rights to:
          </Text>
          <UnorderedList className="content">
            <ListItem>
              Request access, correction, amendment, deletion, or portability of your personal information
            </ListItem>
            <ListItem>
              Restrict or object to certain uses of your personal information
            </ListItem>

            <Text className="content">
              Exercising these rights will not result in additional charges or a change in the level of service you receive. Please note that some of these rights apply only in specific circumstances and may be limited by applicable laws.
            </Text>
            <Text className="content">
              If you have purchased something from or provided your information to a Veerge-powered application and wish to exercise these rights regarding your purchase or interaction, you should directly contact the property development company with which you engaged. We act as a processor on their behalf and will assist these companies in fulfilling your requests within the confines of the law.
            </Text>
          </UnorderedList>
        </ListItem>

        <ListItem style={headStyle} id='retention' ref={retentionRef}>
          <Text my='20px' style={{ textTransform: 'capitalize' }}>Retention of Your Information</Text>
          <Text className="content">
            We retain your personal data only for as long as necessary to fulfill the purposes for which we collected it. To determine the appropriate retention period, we consider factors such as the nature, sensitivity, and volume of personal data, potential risks associated with unauthorized use or disclosure, the purposes of processing, the availability of alternative means to achieve these purposes, and relevant legal requirements. We also retain and utilize your personal information as necessary to comply with legal obligations, resolve disputes, and enforce our policies. If you cease using our services or delete your account, we will delete your information or anonymize it in an aggregated format.
          </Text>
        </ListItem>

        <ListItem style={headStyle} id='our_user' ref={our_userRef}>
          <Text my='20px' style={{ textTransform: 'capitalize' }}>Our Use of Machine Learning</Text>
          <Text className="content">
            To support property development companies utilizing Veerge, we employ techniques like machine learning to enhance our services. In these instances, either a human is involved in the process, making it partially automated, or machine learning is used in ways that do not have significant legal effects.
          </Text>
        </ListItem>

        <ListItem style={headStyle} id='protection' ref={protectionRef}>
          <Text my='20px' style={{ textTransform: 'capitalize' }}>Protection of Your Information</Text>
          <Text className="content">
            Our teams work tirelessly to protect your information and ensure the security and integrity of our platform. We subject our data storage and financial information processing systems to independent audits. However, it's important to note that no method of transmission over the Internet or electronic storage can guarantee 100% security. While we strive to safeguard your personal information, absolute security cannot be guaranteed.
          </Text>
        </ListItem>


        <ListItem style={headStyle} id='contacting' ref={contactingRef}>
          <Text my='20px' style={{ textTransform: 'capitalize' }}>Contacting Us</Text>
          <Text className="content">
            If you have any questions, requests, or complaints regarding the processing of your personal information, please don't hesitate to contact Veerge Support. For concerns specifically related to how a property development company processes your personal information, we recommend reaching out directly to the respective property development company or referring to their privacy policy. It's important to note that when interacting with Veerge-powered applications, the property development company serves as the data controller, while we act as a processor on their behalf. We are committed to assisting property development companies in fulfilling their legal obligations by providing the necessary tools and addressing their inquiries.
          </Text>
        </ListItem>
      </OrderedList>
    </div>
  );
};
