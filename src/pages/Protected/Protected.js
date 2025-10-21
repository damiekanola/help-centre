import React, {useRef} from 'react';
import {Box, Text, ListItem, OrderedList, UnorderedList,} from '@chakra-ui/react';
import protectedImg from '../../assets/images/home/protected.jpg';
import useIsInViewport from '../../utils/useOnScreen/useOnScreen';
import {BlogLayout} from '../../layouts/BlogLayout';
import { useSearchParams } from 'react-router-dom';
import { gettingStarteddata } from '../../constant/pages';

export const Protected = () => {
  const [searchParams] = useSearchParams();
  const toView = true;

  const introRef = useRef(null);
  const safetyRef = useRef(null);
  const commitmentRef = useRef(null);
  const signupsRef = useRef(null);
  // const commitmentRef = useRef(null);
  const securitymeasureRef = useRef(null);
  const thirdpartyRef = useRef(null);
  const complianceRef = useRef(null);
  const conclusionRef = useRef(null);
  const backupRef = useRef(null);
  const downtimeRef = useRef(null);

  const introCheck = useIsInViewport(introRef);
  const safetyCheck = useIsInViewport(safetyRef);
  const commitmentCheck = useIsInViewport(commitmentRef);
  const signupsCheck = useIsInViewport(signupsRef);
  const securitymeasureCheck = useIsInViewport(securitymeasureRef);
  const thirdpartyCheck = useIsInViewport(thirdpartyRef);
  const complianceCheck = useIsInViewport(complianceRef);
  const conclusionCheck = useIsInViewport(conclusionRef);
  const backupCheck = useIsInViewport(backupRef);
  const downtimeCheck = useIsInViewport(downtimeRef);

  const articleContent = [
    {check: introCheck, id: 'intro', title: 'Introduction'},
    {check: safetyCheck, id: 'safety', title: 'Safety First'},
    {check: commitmentCheck, id: 'commitment', title: 'Commitment to data protection'},
    {check: signupsCheck, id: 'signups', title: 'Authorized sign ups and verification'},
    {check: securitymeasureCheck, id: 'securitymeasure', title: 'Rigorous security measure'},
    {check: backupCheck, id: 'backup', title: 'Rigorous security measure'},
    {check: thirdpartyCheck, id: 'thirdparty', title: 'Trusted third party payment processors'},
    {check: complianceCheck, id: 'compliance', title: 'Global compliance'},
    {check: downtimeCheck, id: 'downtime', title: 'How we mititgate downtime'},
    {check: conclusionCheck, id: 'conclusion', title: 'In Conclusion'},
  ];

  const articleMeta = {
    title: 'How you’re protected',
    author: 'Myxellia Team',
    published: 'February 04, 2025',
    updated: 'March 05, 2025',
    image: protectedImg,
  };



  return (
    <BlogLayout
      articleContent={articleContent}
      articleMeta={articleMeta}
      otherresources={gettingStarteddata}
    >
      <Box id="intro" ref={introRef}>
        <Text as="p" marginTop={'30px'}>
          At Myxellia, our mission is clear: <b>democratize real estate for everyone</b>. We believe
          everyone should have access to the tools they need to thrive in the real estate industry.
          Yet, our vision extends beyond accessibility. We aim to be the{' '}
          <b>most trusted, lowest-cost, and culturally relevant real estate software provider</b>.
          Recognizing that many of our users are new to technology, we prioritize <b>reliability</b>{' '}
          and security above all else. We’re here for you when you need us most, ensuring a safe and
          dependable experience on our platform.
        </Text>
        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
      </Box>

      <Box ref={safetyRef} id="safety">
        <Text className="content_head">Safety First</Text>

        <OrderedList mt={'40px'}>
          <ListItem>
            While we firmly believe in democratization and the power of participation, we hold
            “Safety First” as our most important value. Democratization without safety would be
            reckless. By placing safety at the forefront, we empower our customers to explore
            financial engineering and technology confidently. In doing so, we aim to cultivate a
            lasting reputation built on trust, reliability, and an unwavering commitment to your
            security and well-being.
          </ListItem>
        </OrderedList>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
      </Box>
      <Box ref={commitmentRef} id="commitment">
        <Text className="content_head">Commitment to data protection</Text>
        <Text as="p" marginTop="40px">
          In today’s digital era, data protection is paramount—especially for real estate companies
          handling sensitive personal and financial information. At Myxellia, we have established
          robust measures in line with GDPR, NDPR, NITDA, and CCPA to ensure your data remains
          secure. From modern security protocols to stringent internal practices, we leave no stone
          unturned in safeguarding your information.
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
      </Box>
      <Box ref={signupsRef} id="signups">
        <Text className="content_head">Authorized sign ups and verification</Text>

        <UnorderedList mt={'30px'}>
          <ListItem>
            The person signing up from a property development company must be authorized to enter
            contracts on behalf of that company and will be deemed the account owner.
          </ListItem>
          <ListItem>
            Any applicant not representing a property development company will be rejected.
          </ListItem>
          <ListItem>
            The account owner is required to use an official company email for registration.
          </ListItem>
          <ListItem>
            Identification documents (e.g., driver’s license, passport data page) may be requested.
          </ListItem>
          <ListItem>
            Additional verifications may be needed depending on regional requirements (e.g., Bank
            Verification Number in Nigeria, bank card number in Ghana, or Social Security
            Number/Employer Identification Number in the United States).
          </ListItem>
        </UnorderedList>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
      </Box>
      <Box ref={securitymeasureRef} id="securitymeasure">
        <Text className="content_head">Rigorous security measure</Text>

        <UnorderedList mt={'30px'}>
          <ListItem>
            Two-Factor Authentication (2FA), regular password updates, and access controls ensure
            that only authorized individuals can access sensitive data.
          </ListItem>
          <ListItem>
            We conduct regular security audits and updates to stay ahead of emerging threats, with
            our vigilance team ready to respond immediately to any suspicious activity.
          </ListItem>
          <ListItem>
            Data in transit is encrypted using industry-standard protocols, making any intercepted
            information indecipherable without the correct key.
          </ListItem>
          <ListItem>
            Passwords are safeguarded with the BCrypt hashing algorithm, ensuring they are virtually
            impossible to crack.
          </ListItem>
        </UnorderedList>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
      </Box>
      <Box ref={backupRef} id="backup">
        <Text className="content_head">Encrypted backup and disaster resillience</Text>

        <UnorderedList mt={'30px'}>
          <ListItem>
            We perform encrypted backups on a regular schedule, storing them securely in off-site
            locations.
          </ListItem>
          <ListItem>
            These backups ensure your data remains intact and recoverable in the face of unexpected
            disasters.
          </ListItem>
          <ListItem>
            During the backup process, we conduct careful security audits, guarding against both
            insider threats and external attacks.
          </ListItem>
        </UnorderedList>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
      </Box>
      <Box ref={thirdpartyRef} id="thirdparty">
        <Text className="content_head">Trusted third party payment processors</Text>
        <Text mt={'40px'}>
          At Myxellia, we value collaboration. We partner with reputable third-party service
          providers for transaction processing and do not directly manage funds. Once you transition
          from testing to live operations, you can integrate your own payment processor and collect
          your funds directly.
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
      </Box>
      <Box ref={complianceRef} id="compliance">
        <Text className="content_head">Global compliance</Text>
        <Text mt={'40px'}>
          We recognize that different regions and industries have unique regulations governing data
          protection. Our dedicated compliance team ensures Myxellia meets all relevant standards,
          including GDPR, NDPR, NITDA, and CCPA. We continuously monitor regulatory changes to keep
          our platform in full compliance, so you can trust that your data is managed with integrity
          and responsibility.
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
      </Box>
      <Box ref={downtimeRef} id="downtime">
        <Text className="content_head">How we mitigate downtime</Text>
        <Text mt={'40px'}>
          At Myxellia, mitigating downtime is critical to delivering the availability and
          reliability our customers expect. We have implemented a range of proactive measures
          throughout our microservices architecture, designed to minimize interruptions and ensure
          continuous service:
        </Text>
        <Box my="30px">
          <OrderedList spacing={'2px'}>
            <ListItem>
              <Text fontWeight="600" color="#000000EB">
                Multi-Region Architecture
              </Text>
              <Text>
                We distribute our applications across geographically distinct data centers. If one
                region faces an outage, services remain operational through other regions,
                preventing a single point of failure.
              </Text>
            </ListItem>

            <ListItem>
              <Text fontWeight="600" color="#000000EB">
                Load Balancing
              </Text>
              <Text>
                Incoming requests are automatically directed to the most suitable server, ensuring
                that if one server or zone becomes unavailable, traffic is seamlessly rerouted. This
                helps maintain consistent performance even under high load or partial outages.
              </Text>
            </ListItem>

            <ListItem>
              <Text fontWeight="600" color="#000000EB">
                Auto Scaling
              </Text>
              <Text>
                Our systems dynamically adjust computing resources based on real-time demand. This
                ensures that we can handle usage spikes without downtime—and scale down during
                quieter periods to remain cost-effective.
              </Text>
            </ListItem>

            <ListItem>
              <Text fontWeight="600" color="#000000EB">
                Fault-Tolerant Design
              </Text>
              <Text>
                Redundancy and backup mechanisms are integrated into every layer. We store data in
                multiple, synchronized locations and implement failover strategies so that if one
                resource fails, another immediately takes over.
              </Text>
            </ListItem>

            <ListItem>
              <Text fontWeight="600" color="#000000EB">
                Disaster Recovery
              </Text>
              <Text>
                We maintain well-tested disaster recovery protocols to handle large-scale outages
                swiftly. Regular rehearsals of these scenarios enable us to restore essential
                services with minimal disruption when unforeseen events occur.
              </Text>
            </ListItem>

            <ListItem>
              <Text fontWeight="600" color="#000000EB">
                Monitoring and Alerting
              </Text>
              <Text>
                We continuously monitor key performance metrics and set automated alerts to detect
                anomalies. This proactive approach helps us address potential issues before they
                escalate, keeping downtime to a minimum.
              </Text>
            </ListItem>

            <ListItem>
              <Text fontWeight="600" color="#000000EB">
                Regular Backups and Data Replication
              </Text>
              <Text>
                We routinely back up critical data and replicate it across multiple regions. This
                redundancy protects against data loss and ensures swift recovery even if an entire
                region experiences a failure.
              </Text>
            </ListItem>
          </OrderedList>
        </Box>
        <Text mt={'20px'}>
          By combining these strategies, Myxellia maintains a resilient infrastructure that
          minimizes service disruptions and provides a reliable experience for all users
        </Text>

        <Box w={'60px'} h={'4px'} bgColor={'#D4D4D8'} ml={'10px'} my={'40px'}></Box>
      </Box>
      <Box ref={conclusionRef} id="conclusion">
        <Text className="content_head">In conclusion</Text>
        <Text mt={'40px'}>
          Myxellia is dedicated to empowering the real estate sector by providing secure, reliable,
          and trusted software solutions. From advanced security frameworks and strict compliance
          measures to comprehensive downtime mitigation strategies, every aspect of our platform is
          engineered to help our customers operate with confidence and peace of mind. We invite you
          to join us and experience a new standard of excellence in real estate technology.
        </Text>
      </Box>
    </BlogLayout>
  );
};
