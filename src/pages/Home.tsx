import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Button, Card } from 'antd';
import { 
  AppstoreOutlined,
  FileTextOutlined,
  ArrowRightOutlined,
  ThunderboltOutlined,
  GithubOutlined,
  EyeOutlined,
  CodeOutlined
} from '@ant-design/icons';

import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import GettingStarted from '../components/sections/GettingStarted';
import { components } from '../data/components';

const Home = ({ setActiveTab }) => {
  return (
    <div className="min-h-screen">
      <HeroSection setActiveTab={setActiveTab} />
      
      <div className="py-16 px-6 lg:px-16 bg-gray-50">
        {/* Framework Support Section */}
      </div>

      <FeaturesSection />
      
      <div className="py-16 px-6 lg:px-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Components</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most used components that developers love.
          </p>
        </div>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {components.map((component) => (
            <SwiperSlide key={component.id}>
              <Card cover={<img alt={component.name} src={component.image} className="h-48 object-cover" />}>
                <h3 className="text-xl font-semibold mb-2">{component.name}</h3>
                <p className="text-gray-600 mb-4">{component.description}</p>
                <div className="flex justify-between">
                  <Button icon={<EyeOutlined />}>Demo</Button>
                  <Button icon={<CodeOutlined />}>Code</Button>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <GettingStarted setActiveTab={setActiveTab} />
      
      {/* Stats Section */}
    </div>
  );
};

export default Home;