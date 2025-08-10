import React from 'react';

const styles = {
    container: {
        maxWidth: '800px',
        margin: '40px auto',
        padding: '32px',
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
        fontFamily: 'Segoe UI, Arial, sans-serif',
        color: '#222',
        lineHeight: 1.7,
    } as React.CSSProperties,
    h1: {
        fontSize: '2.2rem',
        marginBottom: '16px',
        color: '#2B6CB0',
        fontWeight: 700,
        letterSpacing: '0.5px',
    },
    h2: {
        fontSize: '1.25rem',
        margin: '32px 0 12px 0',
        color: '#2B6CB0',
        fontWeight: 600,
        borderLeft: '4px solid #3182ce',
        paddingLeft: '10px',
        background: '#f7fafc',
    },
    p: {
        margin: '12px 0',
        fontSize: '1rem',
    },
    ul: {
        paddingLeft: '22px',
        margin: '10px 0 20px 0',
    },
    li: {
        marginBottom: '8px',
        fontSize: '1rem',
    },
    strong: {
        color: '#2B6CB0',
    },
    contact: {
        background: '#f1f8ff',
        borderRadius: '8px',
        padding: '16px',
        marginTop: '24px',
        fontSize: '1rem',
    },
    link: {
        color: '#3182ce',
        textDecoration: 'underline',
        wordBreak: 'break-all' as 'break-all',
    },
    agreement: {
        background: '#e6fffa',
        border: '1px solid #b2f5ea',
        borderRadius: '8px',
        padding: '14px 18px',
        margin: '18px 0',
    },
};

const TermsAndConditions: React.FC = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.h1}>Terms and Conditions</h1>
            <p style={styles.p}>
                <strong style={styles.strong}>Effective Date:</strong> 23.06.2025
            </p>
            <p style={styles.p}>
                <strong style={styles.strong}>Last Updated:</strong> 23.06.2025
            </p>
            <p style={styles.p}>
                By registering for and participating in the EduStarr Scholastic Aptitude Test (ESAT), you (“the participant” or “student”) and your parent/guardian agree to abide by the following Terms and Conditions:
            </p>

            <h2 style={styles.h2}>1. Eligibility</h2>
            <ul style={styles.ul}>
                <li style={styles.li}>The ESAT is open to students from Class 5 to 12 across India, depending on the category selected during registration.</li>
                <li style={styles.li}>Students must provide accurate and truthful information in the registration form.</li>
                <li style={styles.li}>If you are under 18 years of age, registration must be done or approved by a parent or legal guardian.</li>
            </ul>

            <h2 style={styles.h2}>2. Registration & Fees</h2>
            <ul style={styles.ul}>
                <li style={styles.li}>The registration form must be filled completely and accurately. Incomplete or false submissions may lead to disqualification.</li>
                <li style={styles.li}>The non-refundable registration fee is ₹200 and must be paid through the official payment gateway linked to ESAT.</li>
                <li style={styles.li}>A successful payment is mandatory to confirm your registration.</li>
                <li style={styles.li}>EduStarr reserves the right to reject or cancel any application that violates eligibility or ethical guidelines.</li>
            </ul>

            <h2 style={styles.h2}>3. Use of Personal Data</h2>
            <ul style={styles.ul}>
                <li style={styles.li}>By registering, you consent to the collection and use of your personal and academic data for test administration, evaluation, and communication.</li>
                <li style={styles.li}>
                    Refer to our{' '}
                    <a href="/privacy_policy" style={styles.link}>
                        Privacy Policy
                    </a>{' '}
                    for full details on how your data is handled.
                </li>
            </ul>

            <h2 style={styles.h2}>4. Test Rules and Conduct</h2>
            <ul style={styles.ul}>
                <li style={styles.li}>Participants must take the test honestly, without external assistance, cheating, or use of unfair means.</li>
                <li style={styles.li}>Use of multiple identities, impersonation, or false documents will lead to immediate disqualification.</li>
                <li style={styles.li}>Students must follow the test timing, platform rules, and instructions shared via email/WhatsApp.</li>
                <li style={styles.li}>Any violation of conduct may lead to suspension from ESAT and affiliated EduStarr opportunities.</li>
            </ul>

            <h2 style={styles.h2}>5. Results, Rewards & Recognition</h2>
            <ul style={styles.ul}>
                <li style={styles.li}>ESAT results will be declared on the official platform as per the timeline announced.</li>
                <li style={styles.li}>Top-performing students may receive digital certificates, premium resources, mentorship offers, or other recognition as communicated.</li>
                <li style={styles.li}>All awards and benefits are subject to eligibility criteria and verification. EduStarr reserves the right to withhold or revoke awards if misrepresentation or misconduct is discovered.</li>
            </ul>

            <h2 style={styles.h2}>6. Cancellation & Refunds</h2>
            <ul style={styles.ul}>
                <li style={styles.li}>The registration fee once paid is non-refundable, except in cases of technical failure during payment, where the student receives no access and can show valid proof.</li>
                <li style={styles.li}>In case of withdrawal after payment, no refund will be provided.</li>
            </ul>

            <h2 style={styles.h2}>7. Intellectual Property</h2>
            <ul style={styles.ul}>
                <li style={styles.li}>All test content, materials, branding, and communication belong to EduStarr and may not be copied, distributed, or reproduced without written consent.</li>
                <li style={styles.li}>Sharing or leaking test questions, answers, or system data will lead to strict legal and academic consequences.</li>
            </ul>

            <h2 style={styles.h2}>8. Communication</h2>
            <ul style={styles.ul}>
                <li style={styles.li}>Participants must ensure their mobile number, WhatsApp number, and email ID are active and accessible for test updates.</li>
                <li style={styles.li}>EduStarr is not responsible for missed communications due to incorrect contact details.</li>
            </ul>

            <h2 style={styles.h2}>9. Platform Availability</h2>
            <ul style={styles.ul}>
                <li style={styles.li}>While we strive for uninterrupted access, EduStarr is not liable for delays or failures caused by technical errors, server downtime, or internet issues on the user’s end.</li>
                <li style={styles.li}>In rare cases of platform outages during the test, appropriate compensation (rescheduling or reattempt) will be provided.</li>
            </ul>

            <h2 style={styles.h2}>10. Limitation of Liability</h2>
            <ul style={styles.ul}>
                <li style={styles.li}>EduStarr is not liable for any personal, academic, or financial loss resulting from participation or non-participation in ESAT.</li>
                <li style={styles.li}>All decisions regarding test evaluation, ranks, and recognition are final and binding.</li>
            </ul>

            <h2 style={styles.h2}>11. Modification of Terms</h2>
            <p style={styles.p}>
                EduStarr may update these Terms & Conditions at any time. The updated version will be published on the official website or communicated to registered users.
            </p>

            <h2 style={styles.h2}>12. Governing Law & Jurisdiction</h2>
            <p style={styles.p}>
                These Terms shall be governed by the laws of India. Any disputes arising shall be subject to the jurisdiction of the courts located in Ranchi.
            </p>

            <div style={styles.agreement}>
                <h2 style={{ ...styles.h2, margin: 0, background: 'none', borderLeft: 'none', paddingLeft: 0 }}>
                    ✅ Agreement
                </h2>
                <ul style={styles.ul}>
                    <li style={styles.li}>By checking the agreement box during registration and submitting the form, you confirm that:</li>
                    <li style={styles.li}>All information provided is true and correct to the best of your knowledge.</li>
                    <li style={styles.li}>You understand and accept these Terms and Conditions.</li>
                    <li style={styles.li}>You have read the Privacy Policy and agree to how your data may be used.</li>
                </ul>
            </div>

            <h2 style={styles.h2}>Contact Us</h2>
            <div style={styles.contact}>
                📧 Email:{' '}
                <a href="mailto:support@edustarr.in" style={styles.link}>
                    support@edustarr.in
                </a>
                <br />
                📞 Helpline: +91 90651 86488
                <br />
                🌐 Website:{' '}
                <a
                    href="https://www.edustarr.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.link}
                >
                    www.edustarr.in
                </a>
            </div>
        </div>
    );
};

export default TermsAndConditions;
