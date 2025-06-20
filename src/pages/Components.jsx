import { useState } from "react";
import { components } from "../data/components";
import { Card, Button, Tooltip } from "antd";
import { CopyOutlined } from "@ant-design/icons";

const Components = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, command) => {
    navigator.clipboard.writeText(command);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#a1c4fd] to-[#c2e9fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl mr-3">
            UI
          </div>
          <span className="text-2xl font-bold text-gray-900">
            UIKit Components
          </span>
        </div>
        <div
          className="bg-white rounded-2xl shadow-lg p-8 mb-10 relative overflow-hidden"
          style={{
            background: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              UIKit
            </span>{" "}
            Components
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Open-source UI components for modern web frameworks. Build beautiful
            interfaces faster.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              type="primary"
              size="large"
              className="!rounded-button whitespace-nowrap cursor-pointer bg-indigo-600 hover:bg-indigo-700 border-none h-12 px-8"
              onClick={() => window.scrollTo({ top: 400, behavior: "smooth" })}
            >
              Explore Components
            </Button>
            <Button
              size="large"
              className="!rounded-button whitespace-nowrap cursor-pointer bg-white/10 backdrop-blur-sm text-indigo-700 border-white/20 hover:bg-white/20 h-12 px-8"
            >
              Documentation
            </Button>
          </div>
          <div
            className="absolute right-0 top-0 w-1/2 h-full hidden md:block"
            style={{
              background:
                "url('/assets/hero-bg.jpg') no-repeat center right/cover",
            }}
          ></div>
        </div>
        <div className="bg-white rounded-2xl shadow p-8 mb-10">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Works With Your Framework
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
            Our components are designed to work seamlessly with popular
            JavaScript frameworks, giving you flexibility without compromise.
          </p>
          <div className="flex justify-center gap-8 lg:gap-16 flex-wrap">
            <div className="flex flex-col items-center">
              <i className="fab fa-react text-5xl text-blue-500 mb-2"></i>
              <span className="text-lg font-semibold">React</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fab fa-vuejs text-5xl text-green-500 mb-2"></i>
              <span className="text-lg font-semibold">Vue.js</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold mb-2 text-black">N</div>
              <span className="text-lg font-semibold">Next.js</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fab fa-angular text-5xl text-red-500 mb-2"></i>
              <span className="text-lg font-semibold">Angular</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fab fa-js text-5xl text-yellow-500 mb-2"></i>
              <span className="text-lg font-semibold">Vanilla JS</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
            All Components
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {components.map((comp) => (
              <Card
                key={comp.id}
                hoverable
                cover={
                  <img
                    alt={comp.name}
                    src={comp.image}
                    className="h-40 object-cover rounded-t-xl"
                  />
                }
                className="flex flex-col justify-between shadow-md rounded-xl"
              >
                <Card.Meta
                  title={
                    <span className="font-semibold text-lg text-gray-900">
                      {comp.name}
                    </span>
                  }
                  description={
                    <span className="text-gray-600 text-sm">
                      {comp.description}
                    </span>
                  }
                />
                <div className="mt-4 flex items-center justify-between">
                  <Tooltip
                    title={
                      copiedId === comp.id
                        ? "Kopyalandı!"
                        : "Kurulum komutunu kopyala"
                    }
                  >
                    <Button
                      icon={<CopyOutlined />}
                      onClick={() => handleCopy(comp.id, comp.installCommand)}
                      type={copiedId === comp.id ? "primary" : "default"}
                    >
                      {copiedId === comp.id ? "Kopyalandı" : "Kurulum"}
                    </Button>
                  </Tooltip>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;
