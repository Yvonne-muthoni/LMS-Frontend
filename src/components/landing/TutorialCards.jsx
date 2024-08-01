import TutorialCard from './TutorialCard';
import dash from "../../assets/images/dashboard.png";
import backend from "../../assets/images/backend.png";
import payment from '../../assets/images/payment.png';

function TutorialCards() {
  const tutorials = [
    {
      title: 'Full Stack Analytics Dashboard',
      description: 'Build a functional dashboard to track your app\'s user information, payments, and more!',
      tags: ['Next.JS', 'Typescript'],
      imageUrl: dash,
      link: 'http://localhost:5173/courses'
    },
    {
      title: 'Functional Backend & Database',
      description: 'Learn the basics of backend development by connecting to & storing user data in a database!',
      tags: ['Prisma', 'Postgres', 'NeonDB'],
      imageUrl: backend,
      link: 'http://localhost:5173/courses'
    },
    {
      title: 'StripeJS Payment Integration',
      description: 'Receive payments from your users by building & connecting to Stripe to your software.',
      tags: ['Next.JS', 'Typescript', 'Stripe'],
      imageUrl: payment,
      link: 'http://localhost:5173/courses'
    }
  ];

  return (
    <section className="py-16 bg-[#FF6247]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-4 text-center text-white">
          Tutorials That Actually Help
        </h2>
        <p className="text-xl text-white text-opacity-90 mb-12 text-center max-w-7xl mx-auto">
          Our courses include a mix of building & learning. The perfect mix for anyone trying to learn!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <TutorialCard key={index} {...tutorial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TutorialCards;
