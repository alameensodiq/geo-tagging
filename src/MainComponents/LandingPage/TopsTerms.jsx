import React from "react";
import styled from "styled-components";
import Product from "../../assets/productfirst.png";
import { ReactComponent as ArrowCircleRight } from "../../assets/ArrowCircleRight.svg";
import FeaturesCard from "../../Reusable/FeaturesCard";
import PricingCard from "./PricingCard";
import Aos from "aos";
import "aos/dist/aos.css";

const TopTerms = ({
  first,
  second,
  third,
  fourth,
  topimage,
  topimage2,
  wide,
  remove,
  card
}) => {
  return (
    <Flex topimage2={topimage2} wide={wide} data-aos="fade-right">
      <span className="first">TERMS AND CONDITIONS</span>
      <div className="div">
        <span className="second">Create a legal relationship between us</span>
      </div>
      <div className="details">
        <span className="detail">
          Welcome to
          <span className="colored">www.Defaucon.com</span>
          This site is provided as a service to our visitors and may be used for
          informational purposes
        </span>
        <span className="detail">
          only. Because the Terms and Conditions contain legal obligations,
          please read them carefully.
        </span>
      </div>
      <div className="main">
        <span className="heading">1. Your Agreement:</span>
        <div className="sub">
          <span className="title">
            By using this Site, you agree to be bound by, and to comply with,
            these Terms and Conditions. If you do not agree to these Terms
          </span>
          <span className="title">
            and Conditions, please do not use this site.
          </span>
        </div>
        <div className="sub">
          <span className="title">
            PLEASE NOTE: We reserve the right, at our sole discretion, to
            change, modify or otherwise alter these Terms and Conditions at
          </span>
          <span className="title">
            any time. Unless otherwise indicated, amendments will become
            effective immediately. Please review these Terms and
          </span>
          <span className="title">
            Conditions periodically. Your continued use of the Site following
            the posting of changes and/or modifications will constitute your
          </span>
          <span className="title">
            acceptance of the revised Terms and Conditions and the
            reasonableness of these standards for notice of changes. For your
          </span>
          <span className="title">
            information, this page was last updated as of the date at the top of
            these terms and conditions.
          </span>
        </div>
      </div>
      <div className="main">
        <span className="heading">2. Privacy:</span>
        <div className="sub">
          <span className="title">
            Please review our Privacy Policy, which also governs your visit to
            this Site, to understand our practices.
          </span>
        </div>
      </div>
      <div className="main">
        <span className="heading">3. Linked Sites:</span>
        <div className="sub">
          <span className="title">
            This Site may contain links to other independent third-party Web
            sites ("Linked Sites”). These Linked Sites are provided solely
          </span>
          <span className="title">
            as a convenience to our visitors. Such Linked Sites are not under
            our control, and we are not responsible for and does not
          </span>
          <span className="title">
            endorse the content of such Linked Sites, including any information
            or materials contained on such Linked Sites. You will need to
          </span>
          <span className="title">
            make your own independent judgment regarding your interaction with
            these Linked Sites.
          </span>
        </div>
      </div>
      <div className="main">
        <span className="heading">4. Forward Looking Statements</span>
        <div className="sub">
          <span className="title">
            All materials reproduced on this site speak as of the original date
            of publication or filing. The fact that a document is available on
          </span>
          <span className="title">
            this site does not mean that the information contained in such
            document has not been modified or superseded by events or by
          </span>
          <span className="title">
            a subsequent document or filing. We have no duty or policy to update
            any information or statements contained on this site and,
          </span>
          <span className="title">
            therefore, such information or statements should not be relied upon
            as being current as of the date you access this site.
          </span>
        </div>
      </div>
      <div className="main">
        <span className="heading">
          5. Disclaimer of Warranties and Limitation of Liability:
        </span>
        <div className="sub">
          <span className="title">
            A. THIS SITE MAY CONTAIN INACCURACIES AND TYPOGRAPHICAL ERRORS. WE
            DOES NOT WARRANT THE ACCURACY OR COMPLETENESS OF THE
          </span>
          <span className="title">
            MATERIALS OR THE RELIABILITY OF ANY ADVICE, OPINION, STATEMENT OR
            OTHER INFORMATION DISPLAYED OR DISTRIBUTED THROUGH THE SITE. YOU
          </span>
          <span className="title">
            EXPRESSLY UNDERSTAND AND AGREE THAT: (i) YOUR USE OF THE SITE,
            INCLUDING ANY RELIANCE ON ANY SUCH OPINION, ADVICE, STATEMENT,
          </span>
          <span className="title">
            MEMORANDUM, OR INFORMATION CONTAINED HEREIN, SHALL BE AT YOUR SOLE
            RISK; (ii) THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE"
          </span>
          <span className="title">
            BASIS; (iii) EXCEPT AS EXPRESSLY PROVIDED HEREIN WE DISCLAIM ALL
            WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT
          </span>
          <span className="title">
            NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, WORKMANLIKE EFFORT, TITLE AND NON-
          </span>
          <span className="title">
            INFRINGEMENT; (iv) WE MAKE NO WARRANTY WITH RESPECT TO THE RESULTS
            THAT MAY BE OBTAINED FROM THIS SITE, THE PRODUCTS OR SERVICES
          </span>
          <span className="title">
            ADVERTISED OR OFFERED OR MERCHANTS INVOLVED; (v) ANY MATERIAL
            DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SITE IS
          </span>
          <span className="title">
            DONE AT YOUR OWN DISCRETION AND RISK; and (vi) YOU WILL BE SOLELY
            RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR FOR ANY
          </span>
          <span className="title">
            LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF ANY SUCH MATERIAL
          </span>
        </div>
        <div className="sub">
          <span className="title">
            B. YOU UNDERSTAND AND AGREE THAT UNDER NO CIRCUMSTANCES, INCLUDING,
            BUT NOT LIMITED TO, NEGLIGENCE, SHALL WE BE LIABLE FOR ANY
          </span>
          <span className="title">
            DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE OR CONSEQUENTIAL
            DAMAGES THAT RESULT FROM THE USE OF, OR THE INABILITY TO USE, ANY OF
          </span>
          <span className="title">
            OUR SITES OR MATERIALS OR FUNCTIONS ON ANY SUCH SITE, EVEN IF WE
            HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE
          </span>
          <span className="title">
            FOREGOING LIMITATIONS SHALL APPLY NOTWITHSTANDING ANY FAILURE OF
            ESSENTIAL PURPOSE OF ANY LIMITED REMEDY.
          </span>
        </div>
      </div>
      <div className="main">
        <span className="heading">6. Exclusions and Limitation:</span>
        <div className="sub">
          <span className="title">
            SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES
            OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR
          </span>
          <span className="title">
            CONSEQUENTIAL DAMAGES. ACCORDINGLY, OUR LIABILITY IN SUCH
            JURISDICTION SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY
            LAW.
          </span>
        </div>
      </div>
      <div className="main">
        <span className="heading">7. Our Proprietary Rights:</span>
        <div className="sub">
          <span className="title">
            This Site and all its Contents are intended solely for personal,
            non-commercial use. Except as expressly provided, nothing within the
          </span>
          <span className="title">
            Site shall be construed as conferring any license under our or any
            third party's intellectual property rights, whether by estoppel,
          </span>
          <span className="title">
            implication, waiver, or otherwise. Without limiting the generality
            of the foregoing, you acknowledge and agree that all content
            available
          </span>
          <span className="title">
            through and used to operate the Site and its services is protected
            by copyright, trademark, patent, or other proprietary rights. You
          </span>
          <span className="title">
            agree not to: (a) modify, alter, or deface any of the trademarks,
            service marks, trade dress (collectively "Trademarks") or other
          </span>
          <span className="title">
            intellectual property made available by us in connection with the
            Site; (b) hold yourself out as in any way sponsored by, affiliated
            with,
          </span>
          <span className="title">
            or endorsed by us, or any of our affiliates or service providers;
            (c) use any of the Trademarks or other content accessible through
            the
          </span>
          <span className="title">
            Site for any purpose other than the purpose for which we have made
            it available to you; (d) defame or disparage us, our Trademarks,
          </span>
          <span className="title">
            or any aspect of the Site; and (e) adapt, translate, modify,
            decompile, disassemble, or reverse engineer the Site or any software
            or
          </span>
          <span className="title">
            programs used in connection with it or its products and services.
          </span>
          <span className="title">
            The framing, mirroring, scraping or data mining of the Site or any
            of its content in any form and by any method is expressly prohibited
          </span>
        </div>
      </div>
      <div className="main">
        <span className="heading">8. Indemnity:</span>
        <div className="sub">
          <span className="title">
            By using the Site web sites you agree to indemnify us and affiliated
            entities (collectively "Indemnities") and hold them harmless from
          </span>
          <span className="title">
            any and all claims and expenses, including (without limitation)
            attorney's fees, arising from your use of the Site web sites, your
            use of
          </span>
          <span className="title">
            the Products and Services, or your submission of ideas and/or
            related materials to us or from any person's use of any ID,
            membership
          </span>
          <span className="title">
            or password you maintain with any portion of the Site, regardless of
            whether such use is authorized by you.
          </span>
        </div>
      </div>
      <div className="main">
        <span className="heading">9. Copyright and Trademark Notice</span>
        <div className="sub">
          <span className="title">
            Except our generated dummy copy, which is free to use for private
            and commercial use, all other text is copyrighted.
          </span>
          <span className="title">
            www.residify.com © 2024, all rights reserved
          </span>
        </div>
      </div>
      <div className="main">
        <span className="heading">
          10. Intellectual Property Infringement Claims
        </span>
        <div className="sub">
          <span className="title">
            It is our policy to respond expeditiously to claims of intellectual
            property infringement. We will promptly process and investigate
          </span>
          <span className="title">
            notices of alleged infringement and will take appropriate actions
            under the Digital Millennium Copyright Act ("DMCA") and other
          </span>
          <span className="title">
            applicable intellectual property laws. Notices of claimed
            infringement should be directed to:
          </span>
        </div>
        <span className="web">www.residify.ng</span>
        <div className="webs">
          <span className="web">29 Berkley Street,</span>
          <span className="web">Off King George Street,</span>
          <span className="web">Onikan, Lagos, Nigeria.</span>
        </div>
        <span className="web">Support@residify.ng</span>
      </div>
      <div className="main">
        <span className="heading">11. Place of Performance:</span>
        <div className="sub">
          <span className="title">
            This Site is controlled, operated and administered by us from our
            office in Lagos, Nigeria. We make no representation that materials
          </span>
          <span className="title">
            at this site are appropriate or available for use at other locations
            outside of the Nigeria and access to them from territories where
          </span>
          <span className="title">
            their contents are illegal is prohibited. If you access this Site
            from a location outside of the Nigeria, you are responsible for
          </span>
          <span className="title">compliance with all local laws.</span>
        </div>
      </div>
      <div className="main">
        <span className="heading">12. General:</span>
        <div className="sub">
          <span className="title">
            A. If any provision of these Terms and Conditions is held to be
            invalid or unenforceable, the provision shall be removed (or
            interpreted,
          </span>
          <span className="title">
            if possible, in a manner as to be enforceable), and the remaining
            provisions shall be enforced. Headings are for reference purposes
          </span>
          <span className="title">
            only and in no way define, limit, construe or describe the scope or
            extent of such section. Our failure to act with respect to a breach
          </span>
          <span className="title">
            by you or others does not waive our right to act with respect to
            subsequent or similar breaches. These Terms and Conditions set forth
          </span>
          <span className="title">
            the entire understanding and agreement between us with respect to
            the subject matter contained herein and supersede any other
          </span>
          <span className="title">
            agreement, proposals and communications, written or oral, between
            our representatives and you with respect to the subject matter
          </span>
          <span className="title">
            hereof, including any terms and conditions on any of customer's
            documents or purchase orders.
          </span>
          <span className="title">
            B. No Joint Venture, No Derogation of Rights. You agree that no
            joint venture, partnership, employment, or agency relationship
            exists
          </span>
          <span className="title">
            between you and us as a result of these Terms and Conditions or your
            use of the Site. Our performance of these Terms and
          </span>
          <span className="title">
            Conditions is subject to existing laws and legal process, and
            nothing contained herein is in derogation of our right to comply
            with
          </span>
          <span className="title">
            governmental, court and law enforcement requests or requirements
            relating to your use of the Site or information provided to or
          </span>
          <span className="title">
            gathered by us with respect to such use.
          </span>
        </div>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 140px;
  padding-bottom: 140px;
  padding-inline: 65px;
  gap: 30px;
  /* background-image: url(${Product});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
  align-items: center;
  .first {
    font-size: 35px;
    font-weight: 700;
    line-height: 56.7px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #28385c;
  }
  .div {
    display: flex;
    flex-direction: column;
    .second {
      font-size: 17px;
      font-weight: 400;
      line-height: 30.05px;
      text-align: center;
      color: #28385c;
    }
  }
  .details {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 400;
    line-height: 40px;
    text-align: left;
    color: #121212;
    width: 80%;
    .detail {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 3px;
      .colored {
        color: #1a87d7;
      }
    }
  }
  .main {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    width: 80%;
    .heading {
      font-size: 16px;
      font-weight: 500;
      line-height: 31.25px;
      text-align: left;
      color: #1a87d7;
    }
    .sub {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .title {
        font-size: 16px;
        font-weight: 400;
        line-height: 40px;
        text-align: left;
        color: #1a1a1a;
        text-transform: lowercase;
      }
    }
    .web {
      font-size: 14px;
      font-weight: 400;
      line-height: 32px;
      text-align: justified;
      color: #1a1a1a;
    }
    .webs {
      display: flex;
      flex-direction: column;
      .web {
        font-size: 14px;
        font-weight: 400;
        line-height: 32px;
        text-align: justified;
        color: #1a1a1a;
      }
    }
  }
`;

export default TopTerms;
