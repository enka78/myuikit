import { useEffect, useState } from "react";
import { Card, Button } from "antd";
import {
  StarOutlined,
  ForkOutlined,
  TeamOutlined,
  DownloadOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const GITHUB_REPO = "enka78/myuikit";

const CommunityStats = () => {
  const [stats, setStats] = useState(null);
  const [contributors, setContributors] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${GITHUB_REPO}`)
      .then((res) => res.json())
      .then((data) => setStats(data));
    fetch(`https://api.github.com/repos/${GITHUB_REPO}/contributors`)
      .then((res) => res.json())
      .then((data) => setContributors(data.length));
  }, []);

  return (
    <section className="py-16 px-6 lg:px-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Community & Stats</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Join our growing community of developers building amazing interfaces.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div>
          <Card className="shadow-md h-full border-none">
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-6">GitHub Activity</h3>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <StarOutlined className="text-yellow-500 text-xl" />
                    <span className="text-3xl font-bold">
                      {stats ? stats.stargazers_count : "-"}
                    </span>
                  </div>
                  <p className="text-gray-600">Stars</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <ForkOutlined className="text-blue-500 text-xl" />
                    <span className="text-3xl font-bold">
                      {stats ? stats.forks_count : "-"}
                    </span>
                  </div>
                  <p className="text-gray-600">Forks</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <TeamOutlined className="text-green-500 text-xl" />
                    <span className="text-3xl font-bold">
                      {contributors !== null ? contributors : "-"}
                    </span>
                  </div>
                  <p className="text-gray-600">Contributors</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <DownloadOutlined className="text-purple-500 text-xl" />
                    <span className="text-3xl font-bold">-</span>
                  </div>
                  <p className="text-gray-600">Downloads</p>
                </div>
              </div>
              <div className="mt-auto text-center">
                <Button
                  icon={<GithubOutlined />}
                  size="large"
                  className="!rounded-button whitespace-nowrap cursor-pointer"
                  href={`https://github.com/${GITHUB_REPO}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </Button>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Card className="shadow-md h-full border-none">
            <h3 className="text-xl font-semibold mb-6">Component Downloads</h3>
            <div
              id="downloads-chart"
              style={{ width: "100%", height: "300px" }}
            ></div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
