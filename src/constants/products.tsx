import nomadProject from "public/images/nomad-Project.png";
import nomadProject2 from "public/images/nomad-project-2.png";
import EduVerse from "public/images/Edu-verse.png";
import EduVerse2 from "public/images/Edu-verse2.png";
import smartWaste from "public/images/smart-waste.png";
import smartWaste2 from "public/images/smart-waste2.png";
import lendsqr from "public/images/lendsqr.png";
import lendsqr2 from "public/images/lendsqr2.png";

export const products = [
  {
    href: "https://nomadpay.vercel.app/",
    title: "Nomad",
    description:
      "A revolutionary financial platform that bridges the gap between blockchain and traditional finance",
    thumbnail: nomadProject,
    images: [nomadProject, nomadProject2],
    stack: ["Reactjs", "Tailwindcss"],
    slug: "Nomad",
    content: (
      <div>
        <p>
          Nomad is a revolutionary financial platform that bridges the gap
          between blockchain and traditional finance, enabling seamless payments
          across Africa and beyond. With Nomad, users can make local currency
          payments, pay bills and subscriptions, and access financial services
          without internet or bank account requirements, promoting financial
          inclusion and empowerment.
        </p>
      </div>
    ),
  },
  {
    href: "https://dev-eduverse.vercel.app/",
    title: "EduVerse",
    description: "Eduverse is a cutting-edge Learning Management System",
    thumbnail: EduVerse,
    images: [EduVerse, EduVerse2],
    stack: ["ReactJs", "Tailwindcss"],
    slug: "EduVerses",
    content: (
      <div>
        <p>
          Eduverse is a cutting-edge Learning Management System (LMS) designed
          to revolutionize the way we learn. This intuitive platform empowers
          educators to create, share, and manage engaging content, while
          students can access a vast array of courses, track progress, and
          collaborate with peers. With Eduverse, unlock a universe of limitless
          learning possibilities.
        </p>
        <ul>
          <li>Interactive learning experiences</li>
          <li>Personalized learning paths</li>
          <li>Real-time feedback and assessment</li>
          <li>Collaborative tools and community building</li>
          <li>Scalable and secure infrastructure</li>
        </ul>
      </div>
    ),
  },
  {
    href: "https://smartwaste.gopodlab.com/",
    title: "Smart Waste",
    description:
      "Smart Waste is an innovative solution transforming the way we manage waste",
    thumbnail: smartWaste,
    images: [smartWaste, smartWaste2],
    stack: ["ReactJs", "Laravel", "Tailwindcss"],
    slug: "moonbeam",
    content: (
      <div>
        <p>
          Smart Waste is an innovative solution transforming the way we manage
          waste. Our cutting-edge technology and data-driven approach enable:
        </p>
        <ul>
          <li>
            Efficient waste collection: Optimized routes and real-time
            monitoring
          </li>
          <li>
            Intelligent waste sorting: Advanced sensors and AI-powered sorting
          </li>
          <li>
            Data-driven insights: Analytics and reporting for informed
            decision-making
          </li>
          <li>
            Community engagement: Education and participation tools for a
            cleaner environment
          </li>
        </ul>
      </div>
    ),
  },
  {
    href: "https://dev-lendsqr.vercel.app/user/profile",
    title: "lendsqr",
    description:
      "Lendsqr is a modern money borrowing platform that provides quick and easy access to loans.",
    thumbnail: lendsqr,
    images: [lendsqr, lendsqr2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "lendsqr",
    content: (
      <div>
        <p>
          Lendsqr is a modern money borrowing platform that provides quick and
          easy access to loans. platform offers:
        </p>
        <ul>
          <li>Fast and convenient loans: Get approved in minutes, not days</li>
          <li>Flexible repayment terms: Choose a plan that works for you</li>
          <li>Competitive interest rates: Borrow at rates that make sense</li>
          <li>
            Secure and trusted: Your data is protected with top-notch security
          </li>
        </ul>
        <p>
          Borrow money with confidence and take control of your finances with
          Lendsqr.
        </p>
      </div>
    ),
  },
];
