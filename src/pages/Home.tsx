import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Footer from '../components/common/Footer';
import Clients from '../components/Home/Clients';
import ContactSection from '../components/Home/Contact';
import ExpertiseSection from '../components/Home/Expertise';
import Hero from '../components/Home/Hero';
import OurServices from '../components/Home/OurServices';
import OurStorySection from '../components/Home/OurStory';
import StatsSection from '../components/Home/Statistic';
import TeamSection from '../components/Home/Team';
import TestimonialSection from '../components/Home/Testimonials';
import CenteredSpinner from "../components/common/Spinner";

const Home: React.FC = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulate loading delay (e.g., API calls, assets load)
		const timer = setTimeout(() => setLoading(false), 2000);
		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <CenteredSpinner />; // 👈 show spinner first
	}

	return (
		<>
			<Box id="hero">
				<Hero />
			</Box>

			<Box id="our-story">
				<OurStorySection />
			</Box>

			<Box id="stats">
				<StatsSection />
			</Box>

			<Box id="services">
				<OurServices />
			</Box>

			<Box id="expertise">
				<ExpertiseSection />
			</Box>

			<Box id="clients">
				<Clients />
			</Box>

			<Box id="contactus">
				<ContactSection />
			</Box>

			<Box id="team">
				<TeamSection />
			</Box>

			<Box id="testimonials">
				<TestimonialSection />
			</Box>

			<Footer />
		</>
	);
};

export default Home;
