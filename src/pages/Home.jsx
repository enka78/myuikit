import { Button, Card } from "antd";
import {
  AppstoreOutlined,
  FileTextOutlined,
  ArrowRightOutlined,
  ThunderboltOutlined,
  GithubOutlined,
  EyeOutlined,
  CodeOutlined,
} from "@ant-design/icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import GettingStarted from "../components/sections/GettingStarted";
import FrameworkSupport from "../components/sections/FrameworkSupport";
import PopularComponents from "../components/sections/PopularComponents";
import CommunityStats from "../components/sections/CommunityStats";
import { components } from "../data/components";

const Home = ({ setActiveTab }) => {
  return (
    <div className="min-h-screen">
      <HeroSection setActiveTab={setActiveTab} />
      <FrameworkSupport />
      <FeaturesSection />
      <PopularComponents setActiveTab={setActiveTab} />
      <GettingStarted setActiveTab={setActiveTab} />
      <CommunityStats />
    </div>
  );
};

export default Home;
