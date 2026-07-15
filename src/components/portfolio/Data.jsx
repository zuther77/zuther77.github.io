import Project1 from "../../assets/proj1.jpg";
import Project2 from "../../assets/image.jpg";
import Project3 from "../../assets/work-5.jpg";
import Project4 from "../../assets/proj3.jpg";
import Project5 from "../../assets/work-3.jpg";
import Project6 from "../../assets/work-4.jpg";

export const projectsData = [
  {
    id: 1,
    image: Project2,
    title: 'BroCode',
    category: 'Cloud',
    description:
      'Multi-tenant, containerized code execution platform on AWS ECS with auto-scaling Docker containers and OpenAI Codex autocomplete.',
    link: 'https://github.com/zuther77/Brocode',
  },
  {
    id: 2,
    image: Project1,
    title: 'KitchenKontrol',
    category: 'Backend',
    description:
      'Restaurant management backend in Go with MongoDB and JWT auth, covering users, menus, orders, and table management.',
    link: 'https://github.com/zuther77/KitchenKontrol',
  },
  {
    id: 3,
    image: Project4,
    title: 'Memories',
    category: 'Serverless',
    description:
      'Voice-based smart photo album using AWS Rekognition, Lex, and OpenSearch, provisioned with Terraform and CodePipeline CI/CD.',
    link: 'https://github.com/zuther77/Smart-Photo-Album',
  },
  {
    id: 4,
    image: Project3,
    title: 'Payroll Management',
    category: 'Full stack',
    description:
      'Payroll management system for employee compensation workflows, records, and administrative operations.',
    link: 'https://github.com/zuther77/Payroll-Management-System',
  },
  {
    id: 5,
    image: Project5,
    title: 'Restaurant Chatbot',
    category: 'AI',
    description:
      'Conversational restaurant recommendation chatbot that helps users discover dining options through natural-language queries.',
    link: 'https://github.com/zuther77/Restaurant-Recommendation-Chatbot',
  },
  {
    id: 6,
    image: Project6,
    title: 'DANNC Audio',
    category: 'ML',
    description:
      'Audio-focused machine learning project exploring neural approaches to sound processing and classification.',
    link: 'https://github.com/zuther77/DANNC-Audio',
  },
];
