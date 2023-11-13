import { Button } from "@silverweb/ui/components/shared";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Privacy Notice - Whats do we do with your data? Nothing unless you are a client, candidate or employee.`,
};

export default function PrivacyPolicy(): JSX.Element {
  return (
    <div className="max-w-4xl mx-auto px-4  ">
      <div className="grid justify-center text-center mt-20 mb-20">
        <h1 className="max-w-2xl font-bold tracking-tight text-4xl sm:text-6xl ">
          Privacy Notice for SilverBack Staffing Ltd
        </h1>
        <h2 className="max-w-xl sm:font-medium mx-auto px-12 sm:px-4 text-lg sm:text-xl tracking-tighter mt-5 text-warm">
          Is your privacy important to you? It is to us too.
        </h2>
      </div>
      <p className="font-bold text-lg">
        We do not track you or store your information, unless your are a
        candidate, employee or client, but we need this anyways. So here is our
        privacy policy.
      </p>
      <p className="pt-4">
        (doing business as SilverBack) (&apos;we&apos;, &apos;us&apos;, or
        &apos;our&apos;), describes how and why we might collect, store, use,
        and/or share (&apos;process&apos;) your information when you use our
        services (&apos;Services&apos;), such as when you:
      </p>
      <ul className="list-disc pl-12 space-y-2 py-2">
        <li>
          Visit our website at{" "}
          <Button asChild className="p-0 text-base h-auto" variant="link">
            <Link href="https://silverback-group.eu">
              https://silverback-group.eu
            </Link>
          </Button>
          , or any website of ours that links to this privacy notice
        </li>
        <li>
          Engage with us in other related ways, including any sales, marketing,
          or events
        </li>
      </ul>
      <p>
        Questions or concerns? Reading this privacy notice will help you
        understand your privacy rights and choices. If you do not agree with our
        policies and practices, please do not use our Services. If you still
        have any questions or concerns, please contact us at{" "}
        <Button asChild className="p-0 text-base h-auto" variant="link">
          <Link href="mailto:work@silverback.ie">work@silverback.ie</Link>
        </Button>
        .
      </p>
      <h2 className="text-xl pt-20 sm:text-2xl font-bold tracking-tighter mb-2">
        SUMMARY OF KEY POINTS
      </h2>
      <p>
        This summary provides key points from our privacy notice, but you can
        find out more details about any of these topics by clicking the link
        following each key point or by using our table of contents below to find
        the section you are looking for.
      </p>
      <p />
      <p className="px-3 py-2">
        <br />
        <b>What personal information do we process?</b>
        <br /> When you visit, use, or navigate our Services, we may process
        personal information depending on how you interact with us and the
        Services, the choices you make, and the products and features you use.
        Learn more about personal information you disclose to us.
        <br />
        <br /> <b>Do we process any sensitive personal information?</b>
        <br />
        We do not process sensitive personal information.
        <br />
        <br />
        <b>Do we receive any information from third parties?</b>
        <br />
        We do not receive any information from third parties.
        <br />
        <br />
        <b>How do we process your information? </b>
        <br />
        We process your information to provide, improve, and administer our
        Services, communicate with you, for security and fraud prevention, and
        to comply with law. We may also process your information for other
        purposes with your consent. We process your information only when we
        have a valid legal reason to do so. Learn more about how we process your
        information.
        <br />
        <br />
        <b>
          In what situations and with which parties do we share personal
          information?
        </b>
        <br /> We may share information in specific situations and with specific
        third parties. Learn more about when and with whom we share your
        personal information.
        <br />
        <br />
        <b>How do we keep your information safe?</b> <br />
        We have organisational and technical processes and procedures in place
        to protect your personal information. However, no electronic
        transmission over the internet or information storage technology can be
        guaranteed to be 100% secure, so we cannot promise or guarantee that
        hackers, cybercriminals, or other unauthorised third parties will not be
        able to defeat our security and improperly collect, access, steal, or
        modify your information. Learn more about how we keep your information
        safe.
        <br />
        <br />
        <b>What are your rights?</b>
        <br /> Depending on where you are located geographically, the applicable
        privacy law may mean you have certain rights regarding your personal
        information. Learn more about your privacy rights.
        <br />
        <br /> <b>How do you exercise your rights?</b>
        <br /> The easiest way to exercise your rights is by visiting
        https://silverback-group.eu, or by contacting us. We will consider and
        act upon any request in accordance with applicable data protection laws.
        <br />
        <br />
        <b>
          Want to learn more about what we do with any information we collect?
        </b>
        <br />
        Review the privacy notice in full.
      </p>
      <h2 className="text-xl pt-20 sm:text-2xl font-bold tracking-tighter mb-2">
        Table of Contents
      </h2>
      <ol className="list-decimal pl-12 space-y-2 py-2">
        <li>
          <Button asChild className="p-0 text-base h-auto" variant="link">
            <Link href="#what-information-do-we-collect">
              What information do we collect?
            </Link>
          </Button>
        </li>
        <li>
          <Button asChild className="p-0 text-base h-auto" variant="link">
            <Link href="#how-do-we-process-your-information">
              How do we process your information?
            </Link>
          </Button>
        </li>
        <li>
          <Button asChild className="p-0 text-base h-auto" variant="link">
            <Link href="#what-legal-bases-do-we-rely-on-to-process-your-personal-information">
              What legal bases do we rely on to process your personal
              information?
            </Link>
          </Button>
        </li>
        <li>
          <Button asChild className="p-0 text-base h-auto" variant="link">
            <Link href="#when-and-with-whom-do-we-share-your-personal-information">
              When and with whom do we share your personal information?
            </Link>
          </Button>
        </li>
        <li>
          <Button asChild className="p-0 text-base h-auto" variant="link">
            <Link href="#how-long-do-we-keep-your-information">
              How long do we keep your information?
            </Link>
          </Button>
        </li>
        <li>
          <Button asChild className="p-0 text-base h-auto" variant="link">
            <Link href="#how-do-we-keep-your-information-safe">
              How do we keep your information safe?
            </Link>
          </Button>
        </li>
        <li>
          <Button asChild className="p-0 text-base h-auto" variant="link">
            <Link href="#do-we-collect-information-from-minors">
              Do we collect information from minors?
            </Link>
          </Button>
        </li>
        <li>
          <Button asChild className="p-0 text-base h-auto" variant="link">
            <Link href="#what-are-your-privacy-rights">
              What are your privacy rights?
            </Link>
          </Button>
        </li>
        <li>
          <Button asChild className="p-0 text-base h-auto" variant="link">
            <Link href="#controls-for-do-not-track-features">
              Controls for do-not-track features
            </Link>
          </Button>
        </li>
        <li>
          <Button asChild className="p-0 text-base h-auto" variant="link">
            <Link href="#do-we-make-updates-to-this-notice">
              Do we make updates to this notice?
            </Link>
          </Button>
        </li>
        <li>
          <Button asChild className="p-0 text-base h-auto" variant="link">
            <Link href="#how-can-you-contact-us-about-this-notice">
              How can you contact us about this notice?
            </Link>
          </Button>
        </li>
        <li>
          <Button asChild className="p-0 text-base h-auto" variant="link">
            <Link href="#how-can-you-review-update-or-delete-the-data-we-collect-from-you">
              How can you review, update, or delete the data we collect from
              you?
            </Link>
          </Button>
        </li>
      </ol>
      <h2
        className="text-xl pt-20 sm:text-2xl font-bold tracking-tighter mb-2"
        id="what-information-do-we-collect"
      >
        1. WHAT INFORMATION DO WE COLLECT?
      </h2>
      <h3 className="text-lg font-bold tracking-tight mb-2">
        Personal information you disclose to us.
      </h3>
      <p>
        <em className="italic">In Short:</em> We collect personal information
        that you provide to us. We collect personal information that you
        voluntarily provide to us when you express an interest in obtaining
        information about us or our products and Services, when you participate
        in activities on the Services, or otherwise when you contact us.
      </p>
      <h3 className="text-lg font-bold tracking-tight pt-4 mb-2">
        Personal Information Provided by You.
      </h3>
      <p>
        The personal information that we collect depends on the context of your
        interactions with us and the Services, the choices you make, and the
        products and features you use. The personal information we collect may
        include the following:
      </p>
      <ul className="list-disc pl-12 space-y-2 py-2">
        <li>phone numbers</li>
        <li>email addresses</li>
        <li>names</li>
        <li>job titles</li>
        <li>contact or authentication data</li>
      </ul>
      <p>
        The personal information that we may collect are only for ordering and
        hire purposes. So if you are a client or a candidate, we will collect
        your personal information to be able to provide you with our services
        without sended Adds or selling your data.
      </p>
      <h3 className="text-lg font-bold tracking-tight pt-4 mb-2">
        Sensitive Information.
      </h3>
      <p>
        We do not process sensitive information. All personal information that
        you provide to us must be true, complete, and accurate, and you must
        notify us of any changes to such personal information.
      </p>
      <h2
        className="text-xl pt-20 sm:text-2xl font-bold tracking-tighter mb-2"
        id="how-do-we-process-your-information"
      >
        2. HOW DO WE PROCESS YOUR INFORMATION?
      </h2>
      <p>
        <em className="italic">In Short:</em> We process your information to
        provide, improve, and administer our Services, communicate with you, for
        security and fraud prevention, and to comply with law. We may also
        process your information for other purposes with your consent.
      </p>
      <p className="pt-4">
        We process your personal information for a variety of reasons, depending
        on how you interact with our Services, including:
      </p>
      <ul className="list-disc pl-12 space-y-2 py-2">
        <li>
          To save or protect an individual&apos;s vital interest. We may process
          your information when necessary to save or protect an
          individual&apos;s vital interest, such as to prevent harm.
        </li>
        <li>
          To provide you with our Services. We may process your information form
          order and hire purposes.
        </li>
      </ul>
      <h2
        className="text-xl pt-20 sm:text-2xl font-bold tracking-tighter mb-2"
        id="what-legal-bases-do-we-rely-on-to-process-your-personal-information"
      >
        3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?
      </h2>
      <p>
        <em className="italic">In Short:</em> We only process your personal
        information when we believe it is necessary and we have a valid legal
        reason (i.e. legal basis) to do so under applicable law, like with your
        consent, to comply with laws, to provide you with services to enter into
        or fulfil our contractual obligations, to protect your rights, or to
        fulfil our legitimate business interests.
      </p>
      <p className="pt-4">
        The General Data Protection Regulation (GDPR) and UK GDPR require us to
        explain the valid legal bases we rely on in order to process your
        personal information. As such, we may rely on the following legal bases
        to process your personal information: Consent. We may process your
        information if you have given us permission (i.e. consent) to use your
        personal information for a specific purpose. You can withdraw your
        consent at any time. Learn more about withdrawing your consent. Legal
        Obligations. We may process your information where we believe it is
        necessary for compliance with our legal obligations, such as to
        cooperate with a law enforcement body or regulatory agency, exercise or
        defend our legal rights, or disclose your information as evidence in
        litigation in which we are involved.
      </p>
      <p className="pt-4">
        Vital Interests. We may process your information where we believe it is
        necessary to protect your vital interests or the vital interests of a
        third party, such as situations involving potential threats to the
        safety of any person. In legal terms, we are generally the &apos;data
        controller&apos; under European data protection laws of the personal
        information described in this privacy notice, since we determine the
        means and/or purposes of the data processing we perform. This privacy
        notice does not apply to the personal information we process as a
        &apos;data processor&apos; on behalf of our customers. In those
        situations, the customer that we provide services to and with whom we
        have entered into a data processing agreement is the &apos;data
        controller&apos; responsible for your personal information, and we
        merely process your information on their behalf in accordance with your
        instructions. If you want to know more about our customers&apos; privacy
        practices, you should read their privacy policies and direct any
        questions you have to them.
      </p>
      <h2
        className="text-xl pt-20 sm:text-2xl font-bold tracking-tighter m b-2"
        id="when-and-with-whom-do-we-share-your-personal-information"
      >
        4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
      </h2>
      <p>
        <em className="italic">In Short:</em> We may share information in
        specific situations described in this section and/or with the following
        third parties.
      </p>
      <p className="pt-4">
        We may need to share your personal information in the following
        situations:
      </p>
      <ul className="list-disc pl-12 space-y-2 py-2">
        <li>
          Business Transfers. We may share or transfer your information in
          connection with, or during negotiations of, any merger, sale of
          company assets, financing, or acquisition of all or a portion of our
          business to another company.
        </li>
        <li>
          Affiliates. We may share your information with our affiliates, in
          which case we will require those affiliates to honour this privacy
          notice. Affiliates include our parent company and any subsidiaries,
          joint venture partners, or other companies that we control or that are
          under common control with us.
        </li>
        <li>
          Business Partners. We may share your information with our business
          partners to offer you certain products, services, or promotions.
        </li>
      </ul>
      <h2
        className="text-xl pt-20 sm:text-2xl font-bold tracking-tighter mb-2"
        id="how-long-do-we-keep-your-information"
      >
        5. HOW LONG DO WE KEEP YOUR INFORMATION?
      </h2>
      <p>
        <em className="italic">In Short:</em> We keep your information for as
        long as necessary to fulfil the purposes outlined in this privacy notice
        unless otherwise required by law.
      </p>
      <p className="pt-4">
        We will only keep your personal information for as long as it is
        necessary for the purposes set out in this privacy notice, unless a
        longer retention period is required or permitted by law (such as tax,
        accounting, or other legal requirements). No purpose in this notice will
        require us keeping your personal information for longer than 90 days.
      </p>
      <p className="pt-4">
        When we have no ongoing legitimate business need to process your
        personal information, we will either delete or anonymise such
        information, or, if this is not possible (for example, because your
        personal information has been stored in backup archives), then we will
        securely store your personal information and isolate it from any further
        processing until deletion is possible.
      </p>
      <h2
        className="text-xl pt-20 sm:text-2xl font-bold tracking-tighter mb-2"
        id="how-do-we-keep-your-information-safe"
      >
        6. HOW DO WE KEEP YOUR INFORMATION SAFE?
      </h2>
      <p>
        <em className="italic">In Short:</em> We may share information in
        specific situations described in this section and/or with the following
        third parties.
      </p>
      <p className="pt-4">
        We have implemented appropriate and reasonable technical and
        organisational security measures designed to protect the security of any
        personal information we process. However, despite our safeguards and
        efforts to secure your information, no electronic transmission over the
        Internet or information storage technology can be guaranteed to be 100%
        secure, so we cannot promise or guarantee that hackers, cybercriminals,
        or other unauthorised third parties will not be able to defeat our
        security and improperly collect, access, steal, or modify your
        information. Although we will do our best to protect your personal
        information, transmission of personal information to and from our
        Services is at your own risk. You should only access the Services within
        a secure environment.
      </p>
      <h2
        className="text-xl pt-20 sm:text-2xl font-bold tracking-tighter mb-2"
        id="do-we-collect-information-from-minors"
      >
        7. DO WE COLLECT INFORMATION FROM MINORS?
      </h2>
      <p>
        <em className="italic">In Short:</em> We do not knowingly collect data
        from or market to children under 18 years of age.
      </p>
      <p className="pt-4">
        We do not knowingly solicit data from or market to children under 18
        years of age. By using the Services, you represent that you are at least
        18 or that you are the parent or guardian of such a minor and consent to
        such minor dependent&apos;s use of the Services. If we learn that
        personal information from users less than 18 years of age has been
        collected, we will deactivate the account and take reasonable measures
        to promptly delete such data from our records. If you become aware of
        any data we may have collected from children under age 18, please
        contact us at{" "}
        <Button asChild className="p-0 text-base h-auto" variant="link">
          <Link href="mailto:work@silverback.ie">work@silverback.ie</Link>
        </Button>
        .
      </p>
      <h2
        className="text-xl pt-20 sm:text-2xl font-bold tracking-tighter mb-2"
        id="what-are-your-privacy-rights"
      >
        8. WHAT ARE YOUR PRIVACY RIGHTS?
      </h2>
      <p>
        <em className="italic">In Short:</em> In some regions, such as the
        European Economic Area (EEA), United Kingdom (UK), and Switzerland, you
        have rights that allow you greater access to and control over your
        personal information. You may review, change, or terminate your account
        at any time.
      </p>
      <p className="pt-4">
        In some regions (like the EEA, UK, and Switzerland ), you have certain
        rights under applicable data protection laws. These may include the
        right (i) to request access and obtain a copy of your personal
        information, (ii) to request rectification or erasure; (iii) to restrict
        the processing of your personal information; (iv) if applicable, to data
        portability; and (v) not to be subject to automated decision-making. In
        certain circumstances, you may also have the right to object to the
        processing of your personal information. You can make such a request by
        contacting us by using the contact details provided in the section
        &apos;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&apos; below.
      </p>
      <p className="pt-4">
        We will consider and act upon any request in accordance with applicable
        data protection laws.
      </p>
      <p className="pt-4">
        If you are located in the EEA or UK and you believe we are unlawfully
        processing your personal information, you also have the right to
        complain to your Member State data protection authority or UK data
        protection authority.
      </p>
      <p className="pt-4">
        If you are located in Switzerland, you may contact the Federal Data
        Protection and Information Commissioner.
      </p>
      <p className="pt-4">
        Withdrawing your consent: If we are relying on your consent to process
        your personal information, you have the right to withdraw your consent
        at any time. You can withdraw your consent at any time by contacting us
        by using the contact details provided in the section &apos;HOW CAN YOU
        CONTACT US ABOUT THIS NOTICE?&apos; below.
      </p>
      <p className="pt-4">
        However, please note that this will not affect the lawfulness of the
        processing before its withdrawal nor, will it affect the processing of
        your personal information conducted in reliance on lawful processing
        grounds other than consent.
      </p>
      <p className="pt-4">
        If you have questions or comments about your privacy rights, you may
        email us at{" "}
        <Button asChild className="p-0 text-base h-auto" variant="link">
          <Link href="mailto:work@silverback.ie">work@silverback.ie</Link>
        </Button>
        .
      </p>
      <h2
        className="text-xl pt-20 sm:text-2xl font-bold tracking-tighter mb-2"
        id="controls-for-do-not-track-features"
      >
        9. CONTROLS FOR DO-NOT-TRACK FEATURES
      </h2>
      <p>
        Most web browsers and some mobile operating systems and mobile
        applications include a Do-Not-Track (&apos;DNT&apos;) feature or setting
        you can activate to signal your privacy preference not to have data
        about your online browsing activities monitored and collected. At this
        stage no uniform technology standard for recognising and implementing
        DNT signals has been finalised. As such, we do not currently respond to
        DNT browser signals or any other mechanism that automatically
        communicates your choice not to be tracked online. If a standard for
        online tracking is adopted that we must follow in the future, we will
        inform you about that practice in a revised version of this privacy
        notice.
      </p>
      <h2
        className="text-xl pt-20 sm:text-2xl font-bold tracking-tighter mb-2"
        id="do-we-make-updates-to-this-notice"
      >
        10. DO WE MAKE UPDATES TO THIS NOTICE?
      </h2>
      <p>
        <em className="italic">In Short:</em> Yes, we will update this notice as
        necessary to stay compliant with relevant laws.
      </p>
      <p className="pt-2">
        We may update this privacy notice from time to time. The updated version
        will be indicated by an updated &apos;Revised&apos; date and the updated
        version will be effective as soon as it is accessible. If we make
        material changes to this privacy notice, we may notify you either by
        prominently posting a notice of such changes or by directly sending you
        a notification. We encourage you to review this privacy notice
        frequently to be informed of how we are protecting your information.
      </p>
      <h2
        className="text-xl pt-20 sm:text-2xl font-bold tracking-tighter mb-2"
        id="how-can-you-contact-us-about-this-notice"
      >
        11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
      </h2>
      <p className="pt-2">
        If you have questions or comments about this notice, you may email us at{" "}
        <Button asChild className="p-0 text-base h-auto" variant="link">
          <Link href="mailto:work@silverback.ie">work@silverback.ie</Link>
        </Button>{" "}
        or contact us by post at:
      </p>
      <p className="pt-2 px-3">
        SilverBack Staffing Ltd
        <br /> Station Mews
        <br /> Lindsay Grove
        <br /> Dublin 9,
        <br /> Dublin
        <br /> D09CC92
        <br /> Ireland
      </p>
      <p className="pt-2">
        If you are a resident in the European Economic Area or Switzerland, we
        are the &apos;data controller&apos; of your personal information. We
        have appointed Patrick John Lyons to be our representative in the EEA
        and Switzerland. You can contact them directly regarding our processing
        of your information, by email at{" "}
        <Button asChild className="p-0 text-base h-auto" variant="link">
          <Link href="mailto:work@silverback.ie">work@silverback.ie</Link>
        </Button>
        , by visiting{" "}
        <Button asChild className="p-0 text-base h-auto" variant="link">
          <Link href="https://silverback-group.eu">
            https://silverback-group.eu
          </Link>
        </Button>{" "}
        by phone at{" "}
        <Button asChild className="p-0 text-base h-auto" variant="link">
          <Link href="tel:+35314410102">+353 1 441 0102</Link>
        </Button>
        , or by post to:
      </p>
      <p className="pt-2 px-3">
        SilverBack Staffing Ltd
        <br /> Station Mews,
        <br /> Lindsay Grove,
        <br /> Dublin 9,
        <br /> Dublin,
        <br /> D09CC92,
        <br /> Ireland
      </p>
      <p className="pt-2">
        If you are a resident in the United Kingdom, we are the &apos;data
        controller&apos; of your personal information. We have appointed Patrick
        John Lyons to be our representative in the UK. You can contact them
        directly regarding our processing of your information, by email at
        <Button asChild className="p-0 text-base h-auto" variant="link">
          <Link href="mailto:work@silverback.ie">work@silverback.ie</Link>
        </Button>
        , by visiting{" "}
        <Button asChild className="p-0 text-base h-auto" variant="link">
          <Link href="https://silverback-group.eu">
            https://silverback-group.eu
          </Link>
        </Button>
        , by phone at +353 1 441 0102{" "}
        <Button asChild className="p-0 text-base h-auto" variant="link">
          <Link href="tel:+35314410102">+353 1 441 0102</Link>
        </Button>
        , or by post to:
      </p>
      <p className="pt-2 px-3">
        SilverBack Staffing Ltd
        <br /> Suite 3,
        <br /> 25 Town Street,
        <br /> Duffield,
        <br /> Belper,
        <br /> DE564EG,
        <br /> England
      </p>
      <h2
        className="text-xl pt-20 sm:text-2xl font-bold tracking-tighter mb-2"
        id="how-can-you-review-update-or-delete-the-data-we-collect-from-you"
      >
        12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
      </h2>
      <p>
        Based on the applicable laws of your country, you may have the right to
        request access to the personal information we collect from you, change
        that information, or delete it. To request to review, update, or delete
        your personal information, please write an email to{" "}
        <Button asChild className="p-0 text-base h-auto" variant="link">
          <Link href="mailto:work@silverback.ie">work@silverback.ie</Link>
        </Button>
        .
      </p>
    </div>
  );
}
