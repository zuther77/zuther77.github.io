import React from 'react';
import "./skills.css";

import iconJavascript from '../../assets/skills/javascript.png';
import iconAws from '../../assets/skills/aws.png';
import iconPostgresql from '../../assets/skills/postgresql.png';
import iconDocker from '../../assets/skills/docker.png';
import iconReact from '../../assets/skills/react.png';
import iconGo from '../../assets/skills/go.png';
import iconPython from '../../assets/skills/python.png';
import iconKubernetes from '../../assets/skills/kubernetes.png';
import iconGit from '../../assets/skills/git.png';
import iconGithub from '../../assets/skills/github.png';
import iconGithubActions from '../../assets/skills/github-actions.png';
import iconLinux from '../../assets/skills/linux.png';
import iconReactNative from '../../assets/skills/react-native.png';
import iconExpo from '../../assets/skills/expo.png';
import iconRedis from '../../assets/skills/redis.png';
import iconGrafana from '../../assets/skills/grafana.png';

const skills = [
  { name: 'JavaScript', icon: iconJavascript },
  { name: 'AWS', icon: iconAws },
  { name: 'PostgreSQL', icon: iconPostgresql },
  { name: 'Docker', icon: iconDocker },
  { name: 'React', icon: iconReact },
  { name: 'Go', icon: iconGo },
  { name: 'Python', icon: iconPython },
  { name: 'Kubernetes', icon: iconKubernetes },
  { name: 'Git', icon: iconGit },
  { name: 'GitHub', icon: iconGithub },
  { name: 'GitHub Actions', icon: iconGithubActions },
  { name: 'Linux', icon: iconLinux },
  { name: 'React Native', icon: iconReactNative },
  { name: 'Expo', icon: iconExpo },
  { name: 'Redis', icon: iconRedis },
  { name: 'Grafana', icon: iconGrafana },
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title reveal">Skills</h2>
      <span className="section_subtitle reveal">Languages, frameworks, and cloud technologies from recent roles</span>

      <ul className="skills_grid container reveal">
        {skills.map((skill) => (
          <li className="skills_cell" key={skill.name}>
            <img
              className="skills_icon"
              src={skill.icon}
              alt={skill.name}
              width="360"
              height="240"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
