"use client";

import { Button } from "@/components/ui/button";
import useContainer from "@/hooks/useContainer";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const TEMPLATES = {
  frontend: {
    javascript: {
      icon: <i className="devicon-javascript-plain colored"></i>,
      label: "JavaScript",
    },
    react: {
      icon: <i className="devicon-react-original colored"></i>,
      label: "React",
    },
  },
  backend: {
    nodejs: {
      icon: <i className="devicon-nodejs-plain colored"></i>,
      label: "Node.js",
    },
    python: {
      icon: <i className="devicon-python-plain colored"></i>,
      label: "Python",
    },
  },
  database: {
    mysql: {
      icon: <i className="devicon-mysql-plain colored"></i>,
      label: "MySQL",
    },
    mongodb: {
      icon: <i className="devicon-mongodb-plain colored"></i>,
      label: "MongoDB",
    },
  },
};

const CreateProject = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const { spinContainer } = useContainer();

  const handleCreateProject = async () => {
    if (selectedTemplate) {
      const payload = {
        env: {
          PROJECT_ID: "demo-project-id",
          USER_ID: "demo-user-id",
          TEMPLATE: selectedTemplate,
        },
      };
      const result = await spinContainer(payload);
      console.log("Container spun up:", result);
    }
  };

  return (
    <div className="relative h-screen overflow-y-auto p-6">
      <h1 className="scroll-m-20 text-left text-4xl font-extrabold tracking-tight mb-4">
        Select Environment
      </h1>
      <hr className="border-t mb-8" />

      <div className="space-y-8">
        {Object.entries(TEMPLATES).map(([category, templates]) => (
          <div key={category} className="space-y-3">
            <h2 className="text-xl font-semibold capitalize mb-2">
              {category}
            </h2>
            <div className="flex flex-wrap gap-2 items-start">
              {Object.entries(templates).map(([key, { icon, label }]) => (
                <div
                  key={key}
                  className={`cursor-pointer flex flex-col items-center px-4 py-3 rounded-xl transition border-2 ${
                    selectedTemplate === key
                      ? "border-blue-500 bg-blue-50"
                      : "border-transparent hover:border-gray-400"
                  }`}
                  onClick={() => setSelectedTemplate(key)}
                  style={{ width: "fit-content" }}
                >
                  <div className="text-7xl mb-2">{icon}</div>
                  <span className="text-sm font-semibold text-center mt-1 tracking-wide text-gray-700">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-8 right-8 z-50">
        <Button
          variant="default"
          disabled={!selectedTemplate}
          onClick={handleCreateProject}
          className="shadow-lg px-6 py-3 text-lg"
        >
          Create Project
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default CreateProject;
