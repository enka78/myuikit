import { Card, Button, Tag } from "antd";
import {
  EyeOutlined,
  CodeOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { components } from "../../data/components";

const PopularComponents = ({ setActiveTab }) => (
  <section className="py-16 px-6 lg:px-16 bg-gray-50">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">
        Popular Components
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Discover our most used components that developers love.
      </p>
    </div>
    <div className="max-w-7xl mx-auto">
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
            <Card
              hoverable
              cover={
                <img
                  alt={component.name}
                  src={component.image}
                  className="h-48 object-cover object-top"
                />
              }
              className="shadow-md h-full"
            >
              <div className="flex flex-col h-full">
                <div className="mb-2 flex gap-1">
                  {component.frameworks &&
                    component.frameworks.map((framework) => (
                      <Tag
                        key={framework}
                        color={
                          framework === "React"
                            ? "blue"
                            : framework === "Vue"
                            ? "green"
                            : "purple"
                        }
                      >
                        {framework}
                      </Tag>
                    ))}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {component.name}
                </h3>
                <p className="text-gray-600 mb-4">{component.description}</p>
                <div className="mt-auto">
                  <div className="flex justify-between items-center">
                    <Button
                      type="primary"
                      icon={<EyeOutlined />}
                      size="small"
                      className="!rounded-button whitespace-nowrap cursor-pointer"
                    >
                      Demo
                    </Button>
                    <Button
                      icon={<CodeOutlined />}
                      size="small"
                      className="!rounded-button whitespace-nowrap cursor-pointer"
                    >
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="text-center mt-10">
      <Button
        type="primary"
        size="large"
        onClick={() => setActiveTab && setActiveTab("components")}
        className="!rounded-button whitespace-nowrap cursor-pointer"
      >
        View All Components <ArrowRightOutlined />
      </Button>
    </div>
  </section>
);

export default PopularComponents;
