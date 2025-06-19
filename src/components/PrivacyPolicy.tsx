import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 my-10 text-gray-800">
            <h1 className="text-3xl font-bold mb-2 text-blue-700">Privacy Policy</h1>
            <p className="text-sm text-gray-500 mb-1">
                <strong>Effective Date:</strong> 23.06.2025
            </p>
            <p className="text-sm text-gray-500 mb-6">
                <strong>Last Updated:</strong> 23.06.2025
            </p>
            <p className="mb-6">
                At <span className="font-semibold">EduStarr Scholastic Aptitude Test (ESAT)</span>, we are committed to protecting your privacy and handling your personal data with transparency and care. This Privacy Policy explains how we collect, use, store, and share the information provided through our registration form and digital platforms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-600">1. Information We Collect</h2>
            <p className="mb-2">When you register for ESAT, we collect the following types of information:</p>
            <h3 className="text-lg font-semibold mt-4 mb-1 text-blue-500">A. Personal Details</h3>
            <ul className="list-disc list-inside mb-3 ml-4 space-y-1">
                <li>Full Name (including middle and last name)</li>
                <li>Date of Birth</li>
                <li>Gender</li>
                <li>Mobile Number &amp; WhatsApp Number</li>
                <li>Email Address (student/parental)</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-1 text-blue-500">B. Family Details</h3>
            <ul className="list-disc list-inside mb-3 ml-4 space-y-1">
                <li>Father’s Name, Occupation, and Phone Number</li>
                <li>Mother’s Name, Occupation, and Phone Number</li>
                <li>Guardian’s Name and Relationship (if applicable)</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-1 text-blue-500">C. Address Information</h3>
            <ul className="list-disc list-inside mb-3 ml-4 space-y-1">
                <li>Permanent Address (house number, street, locality, city, district, state, pincode)</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-1 text-blue-500">D. Academic Information</h3>
            <ul className="list-disc list-inside mb-3 ml-4 space-y-1">
                <li>Current Class (including stream selection)</li>
                <li>Board of Education</li>
                <li>School Name and Address</li>
                <li>School Pincode</li>
                <li>Medium of Instruction</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-1 text-blue-500">E. Other Information</h3>
            <ul className="list-disc list-inside mb-3 ml-4 space-y-1">
                <li>Access to smartphone or internet</li>
                <li>Hobbies (open text)</li>
                <li>Source of awareness (how you heard about EduStarr)</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-1 text-blue-500">F. Payment Information</h3>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-1">
                <li>Transaction ID or basic payment confirmation (Note: We do not store credit/debit card details; payment is processed via secure third-party payment gateways.)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-600">2. How We Use Your Data</h2>
            <p className="mb-2">The information we collect is used for the following purposes:</p>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-1">
                <li>To process your registration and verify your eligibility</li>
                <li>To communicate with you about the test, instructions, and results</li>
                <li>To send important updates and opportunities related to education</li>
                <li>To personalize your experience and academic recommendations</li>
                <li>To analyze participation data and improve our test services</li>
                <li>To verify authenticity and prevent fraudulent registrations</li>
                <li>To issue certificates, awards, and mentorship access (where applicable)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-600">3. Data Sharing &amp; Disclosure</h2>
            <p className="mb-2">We do not sell or rent your personal information. However, we may share it with:</p>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-1">
                <li>Authorized personnel and EduStarr team members for registration processing and evaluation</li>
                <li>Mentors, teachers, or partners, with your or your parent’s consent, for further learning opportunities</li>
                <li>Payment gateway providers, for processing transactions</li>
                <li>Government authorities or legal entities, if required under applicable laws or court orders</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-600">4. Data Retention &amp; Security</h2>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-1">
                <li>All personal information is stored securely and retained only for as long as necessary for academic, legal, or audit purposes.</li>
                <li>We use encryption, firewall protections, and access controls to safeguard your data.</li>
                <li>Your uploaded photographs and documents are stored in compliance with secure server protocols.</li>
                <li>Despite best efforts, no method of data transmission over the internet is 100% secure. In the rare event of a data breach, we will inform affected users promptly.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-600">5. Children’s Privacy</h2>
            <p className="mb-6">
                If you are under the age of 18, your parent or guardian must approve your registration. We assume that all data submitted by minors is with informed parental consent.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-600">6. Your Rights</h2>
            <p className="mb-2">You or your parent/guardian have the right to:</p>
            <ul className="list-disc list-inside mb-2 ml-4 space-y-1">
                <li>Access and review your personal data</li>
                <li>Request corrections or updates</li>
                <li>Request deletion of your data (where legally permissible)</li>
                <li>Withdraw consent for further communication</li>
            </ul>
            <p className="mb-6">
                To exercise these rights, contact us at{' '}
                <a href="mailto:support@edustarr.in" className="text-blue-700 underline">
                    support@edustarr.in
                </a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-600">7. Cookies &amp; Tracking (If applicable on website/app)</h2>
            <p className="mb-2">If the registration or test process is conducted online:</p>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-1">
                <li>We may use cookies to remember user sessions and improve test performance.</li>
                <li>No third-party advertisements are shown.</li>
                <li>You can control cookies through your browser settings.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-600">8. Updates to this Privacy Policy</h2>
            <p className="mb-6">
                This Privacy Policy may be updated from time to time. The revised version will be posted on our website or communicated to you through email or WhatsApp.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-600">9. Contact Us</h2>
            <p className="mb-1">If you have any questions or concerns about this Privacy Policy or your data, please reach out to:</p>
            <p className="mb-1 font-semibold">EduStarr Scholastic Aptitude Test (ESAT)</p>
            <p className="mb-1">
                📧 Email:{' '}
                <a href="mailto:support@edustarr.in" className="text-blue-700 underline">
                    support@edustarr.in
                </a>
            </p>
            <p className="mb-1">📞 Phone: <span className="font-mono">+91 90651 86488</span></p>
        </div>
    );
};

export default PrivacyPolicy;
