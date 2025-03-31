import React, {useEffect, useRef} from 'react';
import {Box, Text, OrderedList, ListItem} from '@chakra-ui/react';
import LeftNav from '../../components/Leftsidenav/Leftsidenav';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';

export const Terms = () => {
  useEffect(() => {
    document.title = 'Terms of service';
  }, []);

  const account_termsRef = useRef(null);
  const account_activationRef = useRef(null);
  const veergeRef = useRef(null);
  const yourRef = useRef(null);
  const paymentRef = useRef(null);
  const confidentRef = useRef(null);
  const limitationRef = useRef(null);
  const intellectualRef = useRef(null);
  const betaRef = useRef(null);
  const feedbackRef = useRef(null);
  const privacyRef = useRef(null);
  const termsRef = useRef(null);
  const modificationRef = useRef(null);
  const generalRef = useRef(null);

  const account_termsCheck = useIsInViewport(account_termsRef);
  const account_activationCheck = useIsInViewport(account_activationRef);
  const veergeCheck = useIsInViewport(veergeRef);
  const yourCheck = useIsInViewport(yourRef);
  const paymentCheck = useIsInViewport(paymentRef);
  const confidentCheck = useIsInViewport(confidentRef);
  const limitationCheck = useIsInViewport(limitationRef);
  const intellectualCheck = useIsInViewport(intellectualRef);
  const betaCheck = useIsInViewport(betaRef);
  const feedbackCheck = useIsInViewport(feedbackRef);
  const privacyCheck = useIsInViewport(privacyRef);
  const termsCheck = useIsInViewport(termsRef);
  const modificationCheck = useIsInViewport(modificationRef);
  const generalCheck = useIsInViewport(generalRef);

  const articleContent = [
    {check: account_termsCheck, id: 'account_terms', title: 'Account Terms'},
    {check: account_activationCheck, id: 'account_activation', title: 'Account Activation'},
    {check: veergeCheck, id: 'veerge', title: 'Veerge Rights'},
    {check: yourCheck, id: 'your', title: 'Your Responsibilities '},
    {check: paymentCheck, id: 'payment', title: 'Payment of Fees and Taxes'},
    {check: confidentCheck, id: 'confident', title: 'Confidentiality'},
    {
      check: limitationCheck,
      id: 'limitation',
      title: 'Limitation of Liability and Indemnification ',
    },
    {
      check: intellectualCheck,
      id: 'intellectual',
      title: 'Intellectual Property and Your Materials',
    },
    {check: betaCheck, id: 'beta', title: 'Beta Services'},
    {check: feedbackCheck, id: 'feedback', title: 'Feedback and Reviews'},
    {check: privacyCheck, id: 'privacy', title: 'Privacy Policy'},
    {check: termsCheck, id: 'terms', title: 'Term and Termination'},
    {check: modificationCheck, id: 'modification', title: 'Modifications'},
    {check: generalCheck, id: 'general', title: 'General Conditions'},
  ];

  const relatedContent = [
    {link: '/first_time_setup', text: 'First time setup'},
    {link: '/approved_what_next', text: 'Approved, what next?'},
    {link: '/terms', text: 'Terms of service'},
    {link: '/users_experience', text: 'End-to-End experience'},
  ];

  return (
    <div className="main">
      {/* <LeadRightNav /> */}
      <Text className="head_">TERMS OF SERVICE</Text>
      <Text className="publish">Last updated on: March 23, 2025</Text>
      <LeftNav articleContent={articleContent} relatedContent={relatedContent} />
      <Box id="invite">
        <Text className="content" lineHeight={'25px'}>
          <Text>
            <b>Welcome to Myxellia!</b> Myxellia Inc. ("Myxellia") is the company behind the Veerge
            platform ("Veerge"), a suite of integrated apps and services that help property
            developers unify their business activities. By creating a Veerge account (as defined in
            Section 1) or by using any Veerge Services (as defined below), you agree to the
            following Terms of Service (the “Terms”).
          </Text>
          <Text mt="20px">
            References to “we,” “us,” and “our” refer to Myxellia as the operator of Veerge. “You”
            refers to the individual user of Veerge (if registering or using Veerge personally) or
            the business employing the user (if registering or using Veerge on behalf of a
            business), including any affiliates of that business. Collectively, Veerge’s platform,
            applications, features, and offerings are referred to in these Terms as the “Services.”
            Any new features or tools added to Veerge will also be subject to these Terms. The most
            current version of these Terms is always available at{' '}
            <a
              href="https://veerge-support.myxellia.io/terms"
              style={{color: '#4545FE', textDecoration: 'underline'}}
            >
              https://veerge-support.myxellia.io/terms
            </a>
          </Text>
          <Text mt="20px">
            By registering for a Veerge account or using any Veerge Services, you acknowledge that
            you have read, agreed to, and accepted all terms contained or expressly referenced in
            these Terms, including our Privacy Policy.
          </Text>
        </Text>
      </Box>

      <OrderedList className="content" fontSize={'24px'} fontWeight={'600'}>
        <ListItem id="account_terms" ref={account_termsRef}>
          <Text className="content_head">Account Terms</Text>
          <OrderedList className="content">
            <ListItem>
              <b>Account Registration: </b>
              To use the Services, you must open a Veerge account (the “Account”). During
              registration, you must provide a full legal name, business address, phone number,
              valid email address, and any other required information. Myxellia reserves the right
              to reject your application or cancel an existing Account at its discretion, for any
              reason.
            </ListItem>
            <ListItem>
              <b>Age Requirement: </b>
              You must be at least 18 years old—or the age of majority where you reside if older—to
              open an Account and use the Services.
            </ListItem>
            <ListItem>
              <b>Communication: </b>
              You authorize Myxellia to communicate with you primarily at the email address used to
              register or update your Account. You are responsible for ensuring that your provided
              email address is current, able to receive emails, and is secure. Only emails sent from
              this address will be treated as authentic communications.
            </ListItem>
            <ListItem>
              <b>Security: </b>
              You are solely responsible for safeguarding your Account credentials. Myxellia is not
              liable for losses resulting from unauthorized access due to your failure to protect
              Account information. We may request additional security measures at any time and
              reserve the right to implement them at our discretion.
            </ListItem>
            <ListItem>
              <b>Technical Support: </b>
              Veerge support is provided only to Account holders. For questions about these Terms or
              the Services, please contact Veerge Support.
            </ListItem>
            <ListItem>
              <b>Prohibited Reproduction: </b>
              You agree not to copy, reproduce, sell, resell, or exploit any part of Veerge or the
              Services without Myxellia’s written permission.
            </ListItem>
            <ListItem>
              <b>No Circumvention: </b>
              You must not bypass or circumvent any technical limitations of Veerge or the Services;
              nor engage in decompiling, reverse engineering, or using tools to enable features that
              have been disabled.
            </ListItem>
            <ListItem>
              <b>Automated Access: </b>
              You agree not to employ robots, scrapers, or other automated systems to monitor or
              access the Services unless specifically authorized in writing by Myxellia.
            </ListItem>
            <ListItem>
              You agree not to access the Services or monitor any material or information from the
              Services using any robot, spider, scraper, or other automated means.
            </ListItem>
            <ListItem>
              <b>Materials Transfer: </b>
              Your Materials (defined below) may be transmitted unencrypted and may be modified to
              comply with technical requirements of connecting networks or devices. “Materials”
              includes your trademarks, copyrighted works, products, services (including
              descriptions and prices), images, videos, graphics, written content, and any other
              data you provide to Myxellia or Veerge.
            </ListItem>
          </OrderedList>
        </ListItem>

        <ListItem id="account_activation" ref={account_activationRef}>
          <Text className="content_head">Account Activation</Text>
          <Text className="content_subhead">2.1 Veerge Owner </Text>
          <OrderedList className="content">
            <ListItem>
              <b>Owner: </b>
              The individual who creates the Account is the “Veerge Owner” and is bound by these
              Terms. This person is responsible for usage of any Account provided by Myxellia under
              Veerge, subject to Section 2.1.2.
            </ListItem>
            <ListItem>
              <b>Employer Registration: </b>
              If you register for Veerge on behalf of your employer, your employer is the Veerge
              Owner. You must use your employer-issued email address and warrant that you have
              authority to bind your employer to these Terms.
            </ListItem>
            <ListItem>
              <b>Single Ownership: </b>
              An Account can only be linked to one Veerge Owner. “Web Application” refers to any
              online platform built on Veerge’s APIs.
            </ListItem>
          </OrderedList>
          <Text className="content_subhead">2.2 Staff Accounts</Text>
          <OrderedList className="content">
            <ListItem>
              <b>Creation: </b>
              Depending on your pricing plan, you may create additional staff accounts (“Staff
              Accounts”) for others in your organization. Each Staff Account requires a full legal
              name and valid email. You can manage Staff Account permissions through your Veerge
              dashboard.
            </ListItem>
            <ListItem>
              <b>Responsibility: </b>
              The Veerge Owner bears responsibility for ensuring Staff Accounts comply with these
              Terms. Any violation by a Staff Account user is deemed a breach by the Veerge Owner.
            </ListItem>
            <ListItem>
              <b>Collective Reference: </b>
              The Veerge Owner and all staff users are collectively referred to as “Veerge Users.”
            </ListItem>
          </OrderedList>
          {/* <Text className="content_subhead">2.3 Domain Names</Text>
          <Text className="content">
            When you purchase a domain name through Veerge, domain registration will be set to
            automatically renew each year as long as your Veerge Account remains active. You
            acknowledge that it is your sole responsibility to deactivate the auto-renewal function
            if you choose to do so.
          </Text> */}
        </ListItem>

        <ListItem id="veerge" ref={veergeRef}>
          <Text className="content_head">Veerge Rights</Text>
          <OrderedList className="content">
            <ListItem>
              <b>Scope: </b>
              Veerge offers various features and functionalities. These may not be available to all
              users or in all jurisdictions, and we have no obligation to offer specific features in
              any region. We may modify the Services without notice at any time.
            </ListItem>
            <ListItem>
              <b>Refusal or Removal of Materials: </b>
              Myxellia does not pre-screen your Materials but reserves the right to remove any that
              we deem (in our sole discretion) to violate these Terms.
            </ListItem>
            <ListItem>
              <b>Abuse: </b>
              Any form of abuse, threats, or retribution toward Myxellia or Veerge personnel will
              result in immediate Account termination.
            </ListItem>
            <ListItem>
              <b>No Exclusivity: </b>
              Myxellia may provide the Services to your competitors and does not guarantee any form
              of exclusivity.
            </ListItem>
            <ListItem>
              <b>Ownership Disputes: </b>
              In case of disputed Account ownership, we may request relevant documentation (e.g.,
              business licenses, photo IDs) to ascertain the legitimate owner.
            </ListItem>
            <ListItem>
              <b>Account Transfer: </b>
              Myxellia reserves the right to determine the rightful Veerge Owner and transfer the
              Account to that person or entity. If we cannot determine ownership, we may suspend or
              disable the Account until a resolution is reached.
            </ListItem>
          </OrderedList>
        </ListItem>

        <ListItem id="your" ref={yourRef}>
          <Text className="content_head">Your Responsibilities</Text>
          <OrderedList className="content">
            <ListItem>
              <b> Public-Facing Information: </b>
              You agree to provide contact information, a refund policy, and fulfillment timelines
              on any Web Application that you create or manage with Veerge.
            </ListItem>
            <ListItem>
              <b>Seller of Record: </b>
              All sales made through Veerge are strictly between you and your customers. You are the
              seller of record and assume all associated responsibilities (e.g., refunds, fraud,
              compliance, legal disclosures). Myxellia (operating Veerge) is not the seller of
              record and bears no responsibility for your sales.
            </ListItem>
            <ListItem>
              <b>Product Compliance: </b>
              You alone are responsible for the properties or products you sell and must abide by
              all applicable legal and regulatory requirements.
            </ListItem>
            <ListItem>
              <b>Legal Use: </b>
              You must not use Veerge for illegal or unauthorized activities. You must comply with
              the laws of your jurisdiction, your customers’ jurisdictions, and any licensing or
              permitting obligations.
            </ListItem>
          </OrderedList>
        </ListItem>

        <ListItem id="payment" ref={paymentRef}>
          <Text className="content_head">Payment of Fees and Taxes</Text>
          <OrderedList className="content">
            <ListItem>
              <b>Billing: </b>
              We bill subscription fees monthly. You must pay all fees listed on our website.
              Myxellia does not charge transaction fees on your customer sales; however, your own
              payment processor may impose fees on you or your users. Myxellia is not responsible
              for those third-party fees. We may introduce or modify subscription fees upon 30 days’
              notice.
            </ListItem>
            <ListItem>
              <b>No Transaction Fees: </b>
              Since Myxellia does not process your customer transactions, we do not charge
              transaction fees. Any processing fees charged by your chosen payment processor are
              between you and that processor.
            </ListItem>
            <ListItem>
              <b>Non-Payment: </b>
              If you fail to pay the monthly subscription fees, we may suspend or terminate your
              Account. Once overdue amounts are settled, your Account may be reinstated. If fees
              remain unpaid for 60 days, we may permanently close your Account under Section 14.
            </ListItem>
            <ListItem>
              <b>Taxes: </b>
              You are responsible for determining, collecting, withholding, reporting, and remitting
              any applicable taxes or duties related to your sales. The contract of sale is strictly
              between you and the customer.
            </ListItem>
            <ListItem>
              <b>No Refunds: </b>
              Myxellia does not issue refunds for Veerge subscription fees.
            </ListItem>
            {/* <ListItem>Veerge does not provide refunds.</ListItem> */}
          </OrderedList>
        </ListItem>

        <ListItem id="confident" ref={confidentRef}>
          <Text className="content_head">Confidentiality</Text>
          <OrderedList className="content">
            <ListItem>
              <b>Definition: </b>
              “Confidential Information” means all non-public information regarding a party’s
              business, including technical processes, formulas, software, customer lists,
              prospective customer lists, names, addresses, sales data, cost data, marketing plans,
              business strategies, and other unpublished financial or proprietary information.
              Myxellia’s Confidential Information also includes any non-public information you learn
              about Veerge, including details of our security practices.
            </ListItem>
            <ListItem>
              <b>Use and Protection: </b>
              Each party will use the other’s Confidential Information only to fulfill obligations
              under these Terms, taking at least reasonable measures to protect it from unauthorized
              disclosure. Disclosure is permitted if required by law, provided the receiving party
              gives prompt notice and seeks confidential treatment where possible. Confidential
              Information does not include information already known to the receiving party,
              publicly available, independently developed without the disclosing party’s data, or
              lawfully obtained from a third party.
            </ListItem>
          </OrderedList>
        </ListItem>

        <ListItem id="limitation" ref={limitationRef}>
          <Text className="content_head">Limitation of Liability and Indemnification</Text>
          <OrderedList className="content">
            <ListItem>
              <b>No Liability for Certain Damages: </b>
              To the fullest extent allowed by law, Myxellia is not liable for indirect, incidental,
              special, consequential, or exemplary damages—such as lost profits, goodwill, or
              data—arising from your use or inability to use Veerge.
            </ListItem>
            <ListItem>
              <b>Indemnification: </b>
              You agree to indemnify and hold harmless Myxellia, its affiliates, officers,
              directors, employees, agents, and suppliers from any claims or demands (including
              legal fees) arising from (a) your breach of these Terms; (b) your violation of any law
              or third-party right; or (c) any issues related to your sales (e.g., refunds, fraud,
              regulatory breaches).
            </ListItem>
            <ListItem>
              <b>Third-Party Breaches: </b>
              You are responsible for breaches of these Terms by your affiliates, agents, or
              subcontractors.
            </ListItem>
            <ListItem>
              <b>As-Is: </b>
              Veerge is provided “as is” and “as available,” with no warranties, express or implied.
            </ListItem>
            <ListItem>
              <b> No Guarantee: </b>
              Myxellia does not warrant that Veerge will be uninterrupted, timely, secure, or
              error-free.
            </ListItem>
            <ListItem>
              <b>Accuracy: </b>
              We do not guarantee that results obtained from Veerge will be accurate or reliable.
            </ListItem>
            <ListItem>
              <b> Tax Liability: </b>
              We are not responsible for any taxes or duties arising from your use of Veerge.
            </ListItem>
            {/* <ListItem>
              Veerge does not warrant that the quality of any products, services, information, or
              other materials purchased or obtained by you through the Services will meet your
              expectations, or that any errors in the Services will be corrected.
            </ListItem> */}
          </OrderedList>
        </ListItem>

        <ListItem id="intellectual" ref={intellectualRef}>
          <Text className="content_head">Intellectual Property and Your Materials</Text>
          <Text className="content_subhead">8.1. Your Materials</Text>
          <OrderedList className="content">
            <ListItem>
              <b>License to Myxellia</b>
              Myxellia does not claim ownership of your Materials, but you grant us a worldwide,
              royalty-free, sub-licensable, transferrable license to host, use, distribute, modify,
              display, perform, reproduce, and create derivative works of them for operating and
              promoting Veerge. You represent that you have the rights to grant this license and
              waive any moral rights in your Materials.
            </ListItem>
            <ListItem>
              <b>Ownership: </b>
              If you owned the Materials before providing them to Veerge, you retain ownership
              subject to the licenses granted here. Removing your Web Application or deleting your
              Veerge Account does not terminate any licenses Myxellia requires for obligations or
              rights incurred before deletion.
            </ListItem>
            <ListItem>
              <b>Review Rights: </b>
              Myxellia may, but is not obligated to, review your Materials. We may remove any
              content we find in violation of these Terms.
            </ListItem>
            {/* <ListItem>
              You grant Veerge a non-exclusive, transferable, sub-licensable, royalty-free,
              worldwide right and license to use the names, trademarks, service marks and logos
              associated with your Store (“Your Trademarks”) to operate, provide, and promote the
              Services and to perform our obligations and exercise our rights under the Terms of
              Service. This license will survive any termination of the Terms of Service solely to
              the extent that Veerge requires the license to exercise any rights or perform any
              obligations that arose during the Term.
            </ListItem> */}
          </OrderedList>
          <Text className="content_subhead">8.2. INTELLECTUAL PROPERTY AND YOUR MATERIALS</Text>
          <OrderedList className="content">
            <ListItem>
              <b>Marks: </b>
              You must not use any Myxellia or Veerge marks, whether registered or not, without
              written approval. You shall not use confusingly similar marks.
            </ListItem>
            <ListItem>
              <b> Prohibited Registrations: </b>
              You must not purchase or register search engine keywords, domains, or social handles
              that incorporate Myxellia or Veerge or any mark that may be deemed confusingly
              similar.
            </ListItem>
            <ListItem>
              <b>No Patent Rights: </b>
              Nothing in these Terms grants you rights to any Myxellia patents.
            </ListItem>
          </OrderedList>
          <Text className="content_subhead">8.3. Themes and Templates</Text>
          <OrderedList className="content">
            <ListItem>
              <b>Basic Templates: </b>
              Basic templates provided by Veerge (“Basic Templates”) will display a “Powered by
              Myxellia.io” footer.
            </ListItem>
            <ListItem>
              <b> Exclusive Templates: </b>
              Certain “Exclusive Templates,” such as a “Brochure” template, do not require this
              footer notice. These templates generally cost more and come with higher maintenance
              fees.
            </ListItem>
            <ListItem>
              <b>Notice Retention: </b>
              If you use a Basic Template, the “Powered by Myxellia.io” footer notice cannot be
              removed.
            </ListItem>
          </OrderedList>
        </ListItem>

        <ListItem id="beta" ref={betaRef}>
          <Text className="content_head">Beta Services</Text>
          <Text className="content">
            <b>Beta Services: </b>
            Occasionally, Myxellia may offer test versions or beta features (“Beta Services”) for
            evaluation. These Beta Services are considered Confidential Information, may be
            discontinued at any time, and are provided on an “as is” basis. You agree not to
            publicly disclose your participation in Beta Services without our written consent.
          </Text>
        </ListItem>

        <ListItem id="feedback" ref={feedbackRef}>
          <Text className="content_head">Feedback and Reviews</Text>
          <Text className="content">
            <b>Feedback: </b>
            We welcome suggestions (“Feedback”) for improving Veerge. By submitting Feedback, you
            grant Myxellia the right to use it without obligation, license, or compensation. Any
            reviews of third-party services must be lawful, accurate, and may be edited or removed
            by Myxellia at our discretion.
          </Text>
        </ListItem>

        <ListItem id="privacy" ref={privacyRef}>
          <Text className="content_head">Privacy Policy</Text>
          <Text className="content">
            <b>Data Protection: </b>
            We respect your privacy and that of your customers. By using Veerge, you agree that
            Myxellia may collect, use, and disclose personal information in accordance with our
            Privacy Policy.
          </Text>
        </ListItem>

        <ListItem id="terms" ref={termsRef}>
          <Text className="content_head">Term and Termination</Text>
          <OrderedList className="content">
            <ListItem>
              <b>Term: </b>
              These Terms take effect when you register for Veerge and continue until terminated by
              you or Myxellia.
            </ListItem>
            <ListItem>
              <b>Cancellation: </b>
              You may cancel your Account by contacting Veerge Support and following any provided
              instructions.
            </ListItem>
            <ListItem>
              <b> Suspension or Termination: </b>
              Myxellia may suspend or terminate your Account at any time, with or without notice,
              for any reason permitted by law.
            </ListItem>
            <ListItem>
              <b>Effects of Termination: </b>
              Upon termination of the Services by either party for any reason:
              <OrderedList type="a" className="content">
                <ListItem>
                  We will cease providing the Services, and you will lose access to your Account.
                </ListItem>
                <ListItem>No refunds will be issued unless otherwise specified.</ListItem>
                <ListItem>Any outstanding fees must be paid immediately.</ListItem>
                <ListItem>Your Web Application will be taken offline.</ListItem>
              </OrderedList>
            </ListItem>
            <ListItem>
              <b> Final Invoice: </b>
              If any amounts remain due at termination, you will receive a final invoice via email.
              Once paid, no further charges will apply.
            </ListItem>
            {/* <ListItem>
              If there are any outstanding Fees owed by you at the date of termination of the
              Service, you will receive one final invoice via email. Once that invoice has been paid
              in full, you will not be charged again.
            </ListItem> */}
          </OrderedList>
        </ListItem>

        <ListItem id="modification" ref={modificationRef}>
          <Text className="content_head">Modifications</Text>
          <OrderedList className="content">
            <ListItem>
              <b>Amendments: </b>
              We may change these Terms at any time. We will give reasonable notice if changes
              significantly affect your rights or use of Veerge (e.g., via email or Veerge’s
              administrative console). Some changes may be effective immediately for legal,
              regulatory, or security reasons. Continued use of Veerge after changes become
              effective indicates your acceptance.
            </ListItem>
            <ListItem>
              <b>Fee Changes: </b>
              We may change subscription fees upon 30 days’ notice to your primary email address or
              via Veerge’s console. We are not liable for modifications, price changes, or
              discontinuation of any service.
            </ListItem>
          </OrderedList>
        </ListItem>

        <ListItem id="general" ref={generalRef}>
          <Text className="content_head">General Conditions</Text>
          <OrderedList className="content">
            <ListItem>
              <b>Entire Agreement: </b>
              These Terms—including any documents referenced—constitute the entire agreement between
              you and Myxellia, superseding all prior versions.
            </ListItem>
            <ListItem>
              <b>No Waiver: </b>
              Myxellia’s failure to enforce any provision of these Terms does not waive its right to
              enforce that provision.
            </ListItem>
            <ListItem>
              <b>Third-Party Rights: </b>
              Except as expressly stated, no person or entity other than Myxellia or you has any
              rights under these Terms.
            </ListItem>
            <ListItem>
              <b>Governing Law: </b>
              These Terms are governed by the laws of the State of Delaware, USA, without regard to
              conflicts of law. Legal actions must be brought in a competent court located in
              Delaware.
            </ListItem>
            <ListItem>
              <b>Language: </b>
              If these Terms appear in multiple languages, the most recent English version at{' '}
              <a
                href="https://veerge-support.myxellia.io/terms"
                style={{color: '#4545FE', textDecoration: 'underline'}}
              >
                https://veerge-support.myxellia.io/terms
              </a>{' '}
              prevails. Disputes will be handled in English unless otherwise required by law.
            </ListItem>
            <ListItem>
              <b>Assignment: </b>
              These Terms are binding on and inure to the benefit of each party’s successors and
              assigns. Myxellia may assign these Terms without notice or consent. You may not assign
              these Terms without prior written approval.
            </ListItem>
            <ListItem>
              <b>Severability: </b>
              If any provision is found to be invalid or unenforceable, the remaining provisions
              stay in effect, and the invalid portion is deemed modified to reflect the original
              intent as closely as possible.
            </ListItem>
            <ListItem>
              <b>Survival: </b>
              Sections 1, 5, 6, 7, 8.1, 10, 11, 12, 13.1, and 14 survive termination, along with any
              sections required by their nature to remain in effect.
            </ListItem>
          </OrderedList>
        </ListItem>
      </OrderedList>
    </div>
  );
};
