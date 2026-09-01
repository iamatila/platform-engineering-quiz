// ============================================================
// PLATFORM ENGINEERING QUIZ — ALL QUESTIONS
// 7 topics × 20 questions = 140 total
// ============================================================

const TOPICS = [
  {
    id: "intro",
    title: "Introduction to Platform Engineering",
    icon: "🏗️",
    level: "Beginner",
    color: "#58a6ff",
    desc: "Concepts, definitions, roles, and the case for platform engineering.",
    questions: [
      {
        q: "What is the core discipline of platform engineering?",
        opts: [
          "Writing application code for product teams",
          "Designing, building, and maintaining internal platforms that enable software teams to deliver efficiently",
          "Managing cloud provider billing and cost allocation",
          "Replacing DevOps engineers with automation"
        ],
        answer: 1,
        explain: "Platform engineering is explicitly about building internal platforms that act as products, with developers as the customers — abstracting infrastructure complexity away from product teams."
      },
      {
        q: "According to Gartner, what percentage of software engineering organizations will have dedicated platform engineering teams by 2026?",
        opts: ["50%", "65%", "80%", "95%"],
        answer: 2,
        explain: "Gartner predicts 80% of organizations will have dedicated platform engineering teams by 2026, reflecting the rapid industry adoption of the discipline."
      },
      {
        q: "What is an Internal Developer Platform (IDP)?",
        opts: [
          "A paid SaaS product sold to external developers",
          "A self-service layer that abstracts infrastructure complexity for development teams",
          "A Git repository hosting service for internal code",
          "A monitoring dashboard for operations teams"
        ],
        answer: 1,
        explain: "An IDP is a self-service layer built by platform teams. Developers use it to provision services, deploy code, and access tooling without needing deep infrastructure knowledge."
      },
      {
        q: "What is a 'Golden Path' in platform engineering?",
        opts: [
          "The CI/CD pipeline that runs in production",
          "A Kubernetes upgrade strategy",
          "A pre-approved, standardised workflow that makes the right way the easy way",
          "A financial model for calculating platform ROI"
        ],
        answer: 2,
        explain: "Golden Paths are pre-built, opinionated workflows that encode best practices. When a developer follows a golden path, they automatically get security, compliance, CI/CD, and observability configured correctly."
      },
      {
        q: "How does Platform Engineering primarily differ from DevOps?",
        opts: [
          "Platform Engineering focuses on culture, DevOps focuses on tools",
          "Platform Engineering builds the product (platform) that implements DevOps principles",
          "DevOps is for startups, Platform Engineering is for enterprises",
          "They are identical disciplines with different names"
        ],
        answer: 1,
        explain: "DevOps is a culture and set of practices. Platform Engineering builds the systems (the platform product) that make those DevOps practices accessible and automated for every developer."
      },
      {
        q: "Which company created Backstage — the open-source developer portal that became a CNCF project?",
        opts: ["Netflix", "Google", "Spotify", "Microsoft"],
        answer: 2,
        explain: "Spotify built Backstage to solve its own internal problem of 1000+ engineers and 1000+ microservices with fragmented tooling. They open-sourced it in 2020 and it is now a CNCF incubating project."
      },
      {
        q: "What does the term 'ticket-ops' describe?",
        opts: [
          "Automated ticketing systems for incidents",
          "A model where developers must open tickets and wait for ops teams to provision resources",
          "Kubernetes operator pattern for managing tickets",
          "Jira integration in CI/CD pipelines"
        ],
        answer: 1,
        explain: "Ticket-ops is the anti-pattern that platform engineering aims to eliminate. Developers raise a ticket, wait days or weeks for ops to provision something manually — slowing delivery and frustrating both sides."
      },
      {
        q: "What is the output of an SRE team, according to the Platform Engineering vs DevOps vs SRE comparison?",
        opts: [
          "Platform product",
          "Processes",
          "SLOs/SLIs",
          "Golden path templates"
        ],
        answer: 2,
        explain: "SREs focus on reliability. Their output is Service Level Objectives (SLOs) and Service Level Indicators (SLIs) — measurable reliability targets. Platform teams output a platform product."
      },
      {
        q: "What does 'cognitive load' mean in the context of platform engineering?",
        opts: [
          "The amount of CPU required to run Kubernetes",
          "The mental effort developers must expend to understand and manage infrastructure",
          "A metric for measuring developer happiness scores",
          "The number of microservices a team maintains"
        ],
        answer: 1,
        explain: "Cognitive load refers to the mental effort required. A good platform reduces cognitive load by abstracting infrastructure complexity — developers focus on writing business logic, not configuring Kubernetes clusters."
      },
      {
        q: "Which of these is NOT listed as a core tool in the platform engineering stack?",
        opts: [
          "Backstage",
          "Kubernetes",
          "Terraform",
          "Microsoft Excel"
        ],
        answer: 3,
        explain: "The core platform engineering stack includes Backstage (developer portal), Docker, Kubernetes, Terraform, and GitHub Actions. Excel is not a platform engineering tool."
      },
      {
        q: "What is the primary programming language recommended for Backstage customisation?",
        opts: [
          "Go (Golang)",
          "Python",
          "TypeScript / JavaScript",
          "Ruby"
        ],
        answer: 2,
        explain: "Backstage is built with React and Node.js. TypeScript/JavaScript is required for customising or building Backstage plugins. Go is recommended for Kubernetes operators and CLI tools."
      },
      {
        q: "Which metric measures how long it takes from a code commit to it running in production?",
        opts: [
          "Mean Time to Recovery (MTTR)",
          "Lead Time for Changes",
          "Deployment Frequency",
          "Change Failure Rate"
        ],
        answer: 1,
        explain: "Lead Time for Changes is one of the four DORA metrics. It measures the time from a code commit to that code running successfully in production — a key measure of platform effectiveness."
      },
      {
        q: "What is 'Platform as a Product' thinking?",
        opts: [
          "Selling your internal platform to other companies",
          "Treating the platform like a commercial product with developers as customers — gathering feedback, measuring NPS, and iterating",
          "Using product management software to track platform bugs",
          "Building platforms exclusively for product engineering teams"
        ],
        answer: 1,
        explain: "Platform as a Product means applying product thinking to your internal platform. Developers are the customers. You measure their satisfaction (NPS), gather feedback, and iterate — just like building an external product."
      },
      {
        q: "What developer-to-platform-engineer ratio do mature platforms typically achieve?",
        opts: ["5:1", "10:1", "20:1", "100:1"],
        answer: 2,
        explain: "Mature platforms achieve a 20:1 developer-to-platform-engineer ratio. One platform engineer can support 20 product developers because the platform handles the repetitive infrastructure work."
      },
      {
        q: "Which of the following best describes the role of the CNCF in platform engineering?",
        opts: [
          "It is a cloud provider that hosts Kubernetes clusters",
          "It is a vendor that sells platform engineering tools",
          "It is a vendor-neutral foundation that hosts open-source cloud-native projects like Kubernetes and Backstage",
          "It is a certification body for platform engineers"
        ],
        answer: 2,
        explain: "The Cloud Native Computing Foundation (CNCF) is a vendor-neutral home for open-source cloud-native projects including Kubernetes, Backstage, Prometheus, Argo, and many others central to platform engineering."
      },
      {
        q: "What percentage reduction in time-to-market do mature platforms typically achieve?",
        opts: ["10%", "25%", "50%", "75%"],
        answer: 2,
        explain: "Mature platforms achieve approximately 50% reduction in time-to-market by eliminating manual provisioning, standardising workflows, and automating CI/CD pipelines."
      },
      {
        q: "Which of these is a SOFT skill important for platform engineers?",
        opts: [
          "Kubernetes administration",
          "Terraform module development",
          "Product thinking and empathy for developers",
          "Writing Dockerfile instructions"
        ],
        answer: 2,
        explain: "Platform engineers must combine technical skills with product thinking and empathy. Understanding developer pain points and designing for developer experience is as important as the technical implementation."
      },
      {
        q: "What is the Developer NPS (Net Promoter Score) used to measure in platform engineering?",
        opts: [
          "How many deployments happen per day",
          "How satisfied developers are with the platform — would they recommend it?",
          "The number of bugs in the platform codebase",
          "Platform infrastructure cost per developer"
        ],
        answer: 1,
        explain: "Developer NPS measures platform satisfaction. It asks developers: 'Would you recommend this platform to a colleague?' A high NPS means the platform is genuinely helping developers. It is a key Developer Experience metric."
      },
      {
        q: "Which conference is most specifically dedicated to platform engineering as a discipline?",
        opts: [
          "AWS re:Invent",
          "Google I/O",
          "PlatformCon",
          "DockerCon"
        ],
        answer: 2,
        explain: "PlatformCon is the dedicated annual platform engineering conference. KubeCon covers the cloud-native ecosystem broadly. PlatformCon focuses exclusively on platform engineering teams, tools, and practices."
      },
      {
        q: "A common misconception is 'Only large companies need platform engineering.' What is the correct view?",
        opts: [
          "This is true — small teams don't have enough services to justify a platform",
          "Even small teams benefit from standardisation, golden paths, and self-service tooling",
          "Platform engineering is only valuable once you have 50+ engineers",
          "Small companies should use DevOps instead of platform engineering"
        ],
        answer: 1,
        explain: "Even a small team benefits from a simple golden path template and a Backstage catalog. The cognitive load reduction and consistency gains apply at any scale — the platform just looks different for 5 engineers vs 5000."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "docker",
    title: "Docker & Containers",
    icon: "🐳",
    level: "Beginner",
    color: "#2496ed",
    desc: "Container fundamentals, Dockerfile best practices, and Docker Compose.",
    questions: [
      {
        q: "What is a container in the context of software delivery?",
        opts: [
          "A virtual machine with its own kernel and full OS",
          "A lightweight, standalone package that includes an application and all its dependencies",
          "A cloud storage bucket for application artefacts",
          "A Kubernetes namespace that isolates workloads"
        ],
        answer: 1,
        explain: "A container packages the application code, runtime, system tools, and libraries into a single portable unit. Unlike a VM, containers share the host OS kernel, making them lightweight and fast to start."
      },
      {
        q: "What is the key advantage of containers over virtual machines?",
        opts: [
          "Containers are more secure because they use a full guest OS",
          "Containers are lighter and faster because they share the host OS kernel instead of running a full guest OS",
          "Containers can run on hardware without an operating system",
          "Virtual machines are always cheaper to run"
        ],
        answer: 1,
        explain: "VMs require a full guest OS (often gigabytes). Containers share the host kernel — a container image might be just 10–50 MB. This makes containers start in seconds, not minutes, and allows much higher density per host."
      },
      {
        q: "What is a Docker Image?",
        opts: [
          "A running instance of a container",
          "A read-only template used to create containers, built from a Dockerfile",
          "A virtual machine snapshot stored on Docker Hub",
          "A Kubernetes Pod specification"
        ],
        answer: 1,
        explain: "A Docker Image is the blueprint — a read-only template built from a Dockerfile. When you run an image, Docker creates a container (a running instance). One image can produce many containers."
      },
      {
        q: "What is the base image used in the python-app Dockerfile in this project?",
        opts: [
          "ubuntu:22.04",
          "node:18-alpine",
          "python:3.13-alpine",
          "debian:bookworm-slim"
        ],
        answer: 2,
        explain: "The python-app Dockerfile starts with `FROM python:3.13-alpine`. Alpine Linux is a minimal Linux distribution (~5 MB) that keeps the image small and reduces the attack surface."
      },
      {
        q: "Why is it a best practice to copy requirements.txt and run pip install BEFORE copying the application source code in a Dockerfile?",
        opts: [
          "Because Python requires it in that specific order",
          "To take advantage of Docker layer caching — dependency layers only rebuild when requirements.txt changes, not every time app code changes",
          "Because pip install must always run as root before code is present",
          "To reduce the final image size by at least 50%"
        ],
        answer: 1,
        explain: "Docker caches each layer. If you copy requirements.txt first, the `pip install` layer is cached until requirements.txt changes. Copying app code later means code changes don't invalidate the expensive dependency install layer."
      },
      {
        q: "What does the -p flag do in `docker run -p 8080:5000 my-app`?",
        opts: [
          "Sets the container name to 8080:5000",
          "Maps port 8080 on the host machine to port 5000 inside the container",
          "Runs the container on CPU core 8080",
          "Pulls image version 5000 from port 8080"
        ],
        answer: 1,
        explain: "The -p flag maps ports: HOST:CONTAINER. So `-p 8080:5000` means requests to port 8080 on your machine are forwarded to port 5000 inside the container, where the app is listening."
      },
      {
        q: "What is a .dockerignore file used for?",
        opts: [
          "To prevent Docker from starting certain containers automatically",
          "To list files and directories that should NOT be copied into the Docker image during build",
          "To specify which Docker commands require elevated permissions",
          "To configure Docker Desktop settings on the host machine"
        ],
        answer: 1,
        explain: "Like .gitignore, a .dockerignore file excludes files from the build context sent to the Docker daemon. Common exclusions: node_modules, .git, .env, *.log. This speeds up builds and avoids accidentally including secrets."
      },
      {
        q: "What is the purpose of a multi-stage Docker build?",
        opts: [
          "To run the container across multiple cloud providers simultaneously",
          "To use a large build image to compile/build, then copy only the final artefact into a minimal production image",
          "To create multiple versions of the same application in one Dockerfile",
          "To allow multiple developers to build images at the same time"
        ],
        answer: 1,
        explain: "Multi-stage builds use a full build environment (e.g., with compilers) in an intermediate stage, then copy only the compiled output into a minimal final image. This dramatically reduces final image size."
      },
      {
        q: "What command do you use to list all currently running containers?",
        opts: [
          "docker images",
          "docker list",
          "docker ps",
          "docker containers show"
        ],
        answer: 2,
        explain: "`docker ps` lists running containers. `docker ps -a` lists ALL containers including stopped ones. `docker images` lists available images, not running containers."
      },
      {
        q: "What is Docker Compose used for?",
        opts: [
          "Composing music playlists for developers while they code",
          "Defining and running multi-container applications using a single YAML configuration file",
          "Building Docker images from multiple Dockerfiles simultaneously",
          "Orchestrating containers across multiple production servers"
        ],
        answer: 1,
        explain: "Docker Compose lets you define a multi-service application (e.g., web app + database + cache) in a docker-compose.yml file and start everything with `docker-compose up`. It is ideal for local development environments."
      },
      {
        q: "Why should you avoid running containers as the root user in production?",
        opts: [
          "Root containers use more memory than non-root containers",
          "If a container running as root is compromised, the attacker gains root-level access to the container and potentially the host",
          "Docker Hub does not allow root containers to be pushed",
          "Kubernetes will not schedule pods that run as root"
        ],
        answer: 1,
        explain: "Running as root is a security risk. If an attacker exploits a vulnerability in a root container, they can escape the container with elevated privileges. Always add a non-root user in your Dockerfile and switch to it."
      },
      {
        q: "What tool can be used to scan Docker images for known security vulnerabilities?",
        opts: [
          "docker inspect",
          "Trivy",
          "kubectl debug",
          "docker diff"
        ],
        answer: 1,
        explain: "Trivy (by Aqua Security) is a popular open-source vulnerability scanner for container images. It checks image layers against CVE databases and reports vulnerabilities. Docker Scout is another option built into Docker Desktop."
      },
      {
        q: "Which Docker network type allows a container to use the host machine's network stack directly?",
        opts: [
          "bridge",
          "none",
          "host",
          "overlay"
        ],
        answer: 2,
        explain: "The `host` network mode removes network isolation — the container shares the host's network namespace. The default is `bridge`, which creates an isolated network. `none` disables networking entirely."
      },
      {
        q: "What problem do Docker volumes solve?",
        opts: [
          "They allow containers to communicate over HTTP",
          "They persist data beyond the container's lifecycle — data survives container stops and removals",
          "They compress container images for faster registry pushes",
          "They allow multiple images to share the same base layer"
        ],
        answer: 1,
        explain: "Container filesystems are ephemeral — data is lost when a container is removed. Docker volumes persist data independently of the container lifecycle. They are essential for stateful services like databases."
      },
      {
        q: "What is Docker Hub?",
        opts: [
          "A Kubernetes dashboard for managing containers",
          "A public container image registry where you can push and pull Docker images",
          "A paid service that runs Docker in the cloud",
          "Docker's project management tool for tracking issues"
        ],
        answer: 1,
        explain: "Docker Hub is the default public container image registry. It hosts official images (nginx, postgres, python) and allows you to push your own images. Private registries include AWS ECR, Azure ACR, and GitHub Container Registry."
      },
      {
        q: "What does `docker exec -it <container-id> sh` do?",
        opts: [
          "Exports the container as a .sh shell script",
          "Opens an interactive shell session inside a running container",
          "Executes a shell script file on the Docker host",
          "Stops the container and outputs its logs"
        ],
        answer: 1,
        explain: "`docker exec -it` executes a command inside a running container with an interactive terminal (-i = interactive, -t = allocate a pseudo-TTY). It is the primary debugging tool for inspecting a live container's environment."
      },
      {
        q: "What is the HEALTHCHECK instruction in a Dockerfile used for?",
        opts: [
          "Scanning the image for security vulnerabilities during build",
          "Telling Docker how to test whether the container is still working correctly",
          "Checking the host machine's system health before starting the container",
          "Monitoring network traffic in and out of the container"
        ],
        answer: 1,
        explain: "The HEALTHCHECK instruction defines a command Docker runs periodically to check if the container is healthy. If it fails repeatedly, the container is marked as `unhealthy`. This is used by orchestrators like Kubernetes via readiness probes."
      },
      {
        q: "What is the difference between `docker stop` and `docker kill`?",
        opts: [
          "They are identical — both send SIGKILL immediately",
          "`docker stop` sends SIGTERM allowing graceful shutdown, then SIGKILL after a timeout; `docker kill` sends SIGKILL immediately",
          "`docker stop` removes the container, `docker kill` only pauses it",
          "`docker kill` is used for images, `docker stop` is used for containers"
        ],
        answer: 1,
        explain: "`docker stop` sends SIGTERM, giving the process time to clean up (default 10 second grace period), then SIGKILL. `docker kill` sends SIGKILL immediately. Always prefer `docker stop` for graceful shutdowns."
      },
      {
        q: "In a docker-compose.yml, what does `depends_on` control?",
        opts: [
          "The order in which services are listed in `docker ps` output",
          "The startup order of services — ensuring one service starts before another",
          "Which services share the same Docker network",
          "Which services use the same Docker volume"
        ],
        answer: 1,
        explain: "`depends_on` controls startup order. `depends_on: db` means this service starts after the `db` service container starts. Note: it does not wait for the service to be ready — only for the container to start."
      },
      {
        q: "What command cleans up stopped containers, dangling images, unused networks, and build cache?",
        opts: [
          "docker rm -a",
          "docker clean --all",
          "docker system prune -a",
          "docker flush"
        ],
        answer: 2,
        explain: "`docker system prune -a` removes all stopped containers, all images not used by at least one container, all build cache, and all unused networks. It is the most thorough cleanup command and is useful when disk space runs low."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "backstage",
    title: "Introduction to Backstage",
    icon: "🎭",
    level: "Beginner",
    color: "#9c61f5",
    desc: "Developer portals, software catalogs, templates, and TechDocs.",
    questions: [
      {
        q: "What is Backstage?",
        opts: [
          "A Kubernetes cluster management dashboard",
          "An open-source platform for building developer portals, created by Spotify",
          "A Docker image registry for internal teams",
          "A CI/CD pipeline tool that replaces GitHub Actions"
        ],
        answer: 1,
        explain: "Backstage is an open-source framework for building developer portals, originally created by Spotify and donated to the CNCF in 2020. It provides a Software Catalog, Software Templates, TechDocs, and a plugin system."
      },
      {
        q: "What problem did Spotify originally build Backstage to solve?",
        opts: [
          "Slow music streaming performance for users",
          "1000+ engineers with 1000+ microservices, fragmented tooling, and onboarding taking months",
          "Lack of a CI/CD system for their monorepo",
          "Inability to deploy to multiple cloud providers"
        ],
        answer: 1,
        explain: "Spotify faced massive fragmentation — thousands of engineers, thousands of services, no single source of truth. Onboarding a new engineer took months. Backstage unified everything into one portal, reducing onboarding to two weeks."
      },
      {
        q: "What is the Backstage Software Catalog?",
        opts: [
          "A marketplace for buying third-party software tools",
          "A central registry of all software assets — services, libraries, websites, APIs — with ownership and metadata",
          "A list of approved Docker images for internal use",
          "A catalog of Kubernetes namespaces in the cluster"
        ],
        answer: 1,
        explain: "The Software Catalog is the core feature of Backstage. It is a searchable registry of every component, API, resource, and team in your organisation — answering 'what exists, who owns it, and where is the documentation?'"
      },
      {
        q: "Which file format is used to define a component in the Backstage Software Catalog?",
        opts: [
          "catalog.json in the project root",
          "backstage.config.ts in the src folder",
          "catalog-info.yaml stored in the service's repository",
          "A SQL record inserted via the Backstage CLI"
        ],
        answer: 2,
        explain: "Each service defines its catalog entry in a `catalog-info.yaml` file that lives in its repository. This keeps the catalog metadata with the code — when the code moves, the metadata moves with it."
      },
      {
        q: "In a catalog-info.yaml, what does the `kind: Component` field indicate?",
        opts: [
          "The type of Kubernetes resource to create",
          "That this entity is a software component (service, library, or website) in the catalog",
          "The programming language the service is written in",
          "The cloud provider where the service is deployed"
        ],
        answer: 1,
        explain: "Backstage entities have a `kind` field. `Component` is the most common — it represents a piece of software. Other kinds include `API`, `Resource`, `System`, `Domain`, `Group`, and `User`."
      },
      {
        q: "What are Backstage Software Templates used for?",
        opts: [
          "Creating HTML email templates for developer notifications",
          "Scaffolding new projects that automatically follow golden path standards, creating repos and registering catalog entries",
          "Defining Kubernetes deployment templates for the cluster",
          "Generating automated test suites for existing services"
        ],
        answer: 1,
        explain: "Software Templates in Backstage are the golden path mechanism. A developer fills in a form, the template runs actions: creating a GitHub repo with the right structure, registering the service in the catalog, and setting up CI/CD."
      },
      {
        q: "What is TechDocs in Backstage?",
        opts: [
          "A paid documentation hosting service by Backstage",
          "A docs-as-code system that renders Markdown documentation from service repositories directly in Backstage",
          "A plugin that generates API documentation from source code automatically",
          "A separate website for Backstage's own documentation"
        ],
        answer: 1,
        explain: "TechDocs is the docs-as-code feature. Documentation is written in Markdown, version-controlled with the code, and automatically published to Backstage. Powered by MkDocs under the hood."
      },
      {
        q: "What is the role of Backstage plugins?",
        opts: [
          "They allow Backstage to run inside Kubernetes pods",
          "They extend Backstage's functionality — integrating with Kubernetes, CI/CD systems, monitoring, security tools, and more",
          "They replace the need for a backend database",
          "They are required to authenticate with GitHub"
        ],
        answer: 1,
        explain: "Backstage has a rich plugin ecosystem with 100+ open-source plugins. Plugins integrate with Kubernetes, ArgoCD, GitHub Actions, Grafana, Prometheus, Snyk, PagerDuty, and many more tools — all surfaced in one portal."
      },
      {
        q: "What technology does Backstage use for its frontend?",
        opts: [
          "Angular",
          "Vue.js",
          "React",
          "Svelte"
        ],
        answer: 2,
        explain: "Backstage's frontend is built with React and Material UI. Its backend is Node.js. This is why TypeScript/JavaScript knowledge is required to build custom Backstage plugins and themes."
      },
      {
        q: "What database should you use for Backstage in production (not development)?",
        opts: [
          "SQLite (the default)",
          "MongoDB",
          "PostgreSQL",
          "Redis"
        ],
        answer: 2,
        explain: "SQLite (the default) is for development only — it is a single-file database that cannot handle concurrent writes or scale. Production Backstage requires PostgreSQL for reliability, concurrent access, and proper backup support."
      },
      {
        q: "How does Backstage perform service discovery — how does it find catalog-info.yaml files across your organisation?",
        opts: [
          "A developer must manually upload each file through the Backstage UI",
          "Via integrations and location configs — e.g., GitHub Discovery automatically scans repos for catalog-info.yaml",
          "By scanning every file in all Docker images in the registry",
          "Backstage requires services to push their catalog entry to a central API"
        ],
        answer: 1,
        explain: "Backstage can be configured with GitHub/GitLab Discovery that automatically scans all repositories in your organisation for catalog-info.yaml files and imports them. You can also manually register URLs to individual catalog files."
      },
      {
        q: "What does the Backstage Kubernetes plugin allow developers to do?",
        opts: [
          "Create and delete Kubernetes clusters from the Backstage UI",
          "View the real-time status of their service's Kubernetes pods, deployments, and events directly in Backstage",
          "Write Kubernetes YAML manifests using a visual editor",
          "Automatically scale deployments based on traffic from within Backstage"
        ],
        answer: 1,
        explain: "The Kubernetes plugin shows developers the live status of their pods, replica sets, deployments and services — directly in their service's Backstage page. Developers don't need kubectl access; the platform surfaces the relevant info."
      },
      {
        q: "What is the minimum Node.js version required to install Backstage?",
        opts: [
          "Node.js 12",
          "Node.js 14",
          "Node.js 16",
          "Node.js 18"
        ],
        answer: 3,
        explain: "Backstage requires Node.js 18 or higher. Using an older version will cause installation errors. Always check the official Backstage documentation for the current supported Node.js versions."
      },
      {
        q: "What command is used to create a new Backstage application?",
        opts: [
          "npm install backstage",
          "npx @backstage/create-app@latest",
          "backstage init my-portal",
          "kubectl apply -f backstage.yaml"
        ],
        answer: 1,
        explain: "`npx @backstage/create-app@latest` is the official Backstage scaffolding command. It asks for a name, database preference (SQLite for dev), and generates a fully working Backstage monorepo."
      },
      {
        q: "In the python-app's catalog-info.yaml, what is the purpose of the `backstage.io/kubernetes-id` annotation?",
        opts: [
          "It tells Backstage which database table to store this component in",
          "It links the catalog component to Kubernetes workloads — the Kubernetes plugin uses this to show pod status",
          "It specifies the Kubernetes version required to run the service",
          "It assigns a unique ID for billing purposes"
        ],
        answer: 1,
        explain: "The `backstage.io/kubernetes-id` annotation tells the Backstage Kubernetes plugin which Kubernetes resources belong to this catalog component. The plugin matches it against the `backstage.io/kubernetes-id` label on your Kubernetes Deployment."
      },
      {
        q: "What authentication methods does production Backstage support?",
        opts: [
          "Only username/password stored in a local file",
          "Only GitHub OAuth",
          "OAuth providers (GitHub, Google), SAML, LDAP, Okta/Auth0, and Microsoft Entra ID (Azure AD)",
          "Backstage has no authentication — it relies on network-level access control only"
        ],
        answer: 2,
        explain: "Production Backstage supports many authentication providers via its auth backend: GitHub OAuth, Google OAuth, Microsoft Entra ID (Azure AD), Okta, Auth0, SAML, and LDAP. Development mode offers a guest login."
      },
      {
        q: "What does the `spec.owner` field in a catalog-info.yaml represent?",
        opts: [
          "The cloud account that pays for the service",
          "The Backstage group or user responsible for this component",
          "The Git branch that owns the latest version of the service",
          "The Kubernetes namespace where the service is deployed"
        ],
        answer: 1,
        explain: "`spec.owner` defines accountability. It references a Backstage Group or User entity — the team responsible for this component. This powers the 'Owned Components' view and on-call routing in integrations like PagerDuty."
      },
      {
        q: "How do you update the port Backstage's development server runs on if 3000 is already in use?",
        opts: [
          "Edit the package.json scripts section",
          "Change the `baseUrl` in app-config.yaml and update the backend baseUrl accordingly",
          "Set the PORT environment variable before running yarn dev",
          "Reinstall Backstage with a different port specified at install time"
        ],
        answer: 1,
        explain: "Backstage's ports are configured in `app-config.yaml`. Change `app.baseUrl` to `http://localhost:3001` and `backend.baseUrl` to `http://localhost:7008` (or whichever ports are free) and restart."
      },
      {
        q: "Which companies are cited as real-world Backstage users (beyond Spotify)?",
        opts: [
          "Only Spotify uses Backstage",
          "Netflix, American Airlines, HP, and Zalando",
          "Amazon, Microsoft, and Google",
          "Red Hat, Canonical, and SUSE"
        ],
        answer: 1,
        explain: "Backstage has been adopted by thousands of organisations. Notable users include Netflix, American Airlines, HP, Zalando, Expedia, and many others. Its community has over 1,000 contributors and 10,000+ users."
      },
      {
        q: "What is the `lifecycle` field in a Backstage catalog component typically set to for a service not yet in production?",
        opts: [
          "draft",
          "experimental",
          "pending",
          "staging"
        ],
        answer: 1,
        explain: "Backstage uses lifecycle values like `experimental`, `production`, and `deprecated` to indicate a component's maturity. `experimental` is the correct value for something not yet production-ready. The python-app catalog-info.yaml in this project uses `experimental`."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "kubernetes",
    title: "Kubernetes Fundamentals",
    icon: "⚙️",
    level: "Beginner",
    color: "#326ce5",
    desc: "Pods, Deployments, Services, Namespaces, probes, and kubectl.",
    questions: [
      {
        q: "What does K8s stand for and why?",
        opts: [
          "Kubernetes 8-bit — referring to its 8-bit architecture",
          "Kubernetes abbreviated — there are 8 letters between 'K' and 's' in Kubernetes",
          "Kubernetes version 8 — the current stable release",
          "K-8 Security — the built-in security layer"
        ],
        answer: 1,
        explain: "K8s is a numeronym: 'K' + 8 letters (ubernete) + 's'. Similarly, i18n = internationalisation, a11y = accessibility. Kubernetes itself comes from Greek meaning 'helmsman' or 'governor'."
      },
      {
        q: "What is the smallest deployable unit in Kubernetes?",
        opts: [
          "Container",
          "Deployment",
          "Pod",
          "Node"
        ],
        answer: 2,
        explain: "A Pod is the smallest deployable unit in Kubernetes. A Pod wraps one or more containers that share the same network IP, storage volumes, and lifecycle. However, you should use Deployments to manage Pods in production."
      },
      {
        q: "Why should you avoid deploying bare Pods directly in production?",
        opts: [
          "Pods are only supported in development clusters",
          "Pods are more expensive to run than Deployments",
          "If a bare Pod crashes, Kubernetes will NOT automatically restart it — you need a Deployment controller for self-healing",
          "Pods cannot use ConfigMaps or Secrets"
        ],
        answer: 2,
        explain: "Bare Pods have no controller watching over them. If a Pod crashes or is deleted, nothing recreates it. A Deployment's controller continuously reconciles — if a Pod disappears, it creates a new one automatically."
      },
      {
        q: "What does the `replicas: 3` field in a Deployment spec tell Kubernetes?",
        opts: [
          "To deploy 3 different versions of the application",
          "To maintain exactly 3 identical running Pod instances at all times",
          "To restart the application 3 times if it crashes",
          "To create 3 separate Kubernetes namespaces for the app"
        ],
        answer: 1,
        explain: "`replicas: 3` is a desired state declaration. The Deployment controller continuously ensures exactly 3 Pods are running. If one crashes, a new one is created. If you scale down to 1, 2 are terminated."
      },
      {
        q: "What is the role of a Kubernetes Service?",
        opts: [
          "To build and push Docker images to a registry",
          "To provide a stable network endpoint (IP + DNS name) to a dynamic set of Pods",
          "To monitor the health of Pods and restart them when they fail",
          "To store configuration data for Pods"
        ],
        answer: 1,
        explain: "Pods are ephemeral and get new IPs when recreated. A Service provides a stable virtual IP and DNS name that load-balances across matching Pods using label selectors. This decouples consumers from the Pod lifecycle."
      },
      {
        q: "Which Service type makes an application accessible ONLY within the Kubernetes cluster?",
        opts: [
          "NodePort",
          "LoadBalancer",
          "ExternalName",
          "ClusterIP"
        ],
        answer: 3,
        explain: "ClusterIP (the default) assigns a virtual IP reachable only from within the cluster. NodePort exposes on each node's IP. LoadBalancer creates a cloud load balancer. Use ClusterIP for internal service-to-service communication."
      },
      {
        q: "What is a Kubernetes Namespace?",
        opts: [
          "The name of a container's hostname within a Pod",
          "A logical partition within a cluster that provides isolation between workloads",
          "A folder in etcd that stores cluster configuration",
          "A unique identifier assigned to each Kubernetes node"
        ],
        answer: 1,
        explain: "Namespaces provide logical isolation within a cluster. You can have dev, staging, production, and monitoring namespaces on the same cluster with separate RBAC policies, resource quotas, and network policies."
      },
      {
        q: "What is the difference between a ConfigMap and a Secret in Kubernetes?",
        opts: [
          "ConfigMaps are for Kubernetes internal data, Secrets are for application data",
          "They are identical — the names are interchangeable",
          "ConfigMaps store non-sensitive configuration data; Secrets store sensitive data and are base64-encoded with restricted access",
          "ConfigMaps are cluster-scoped; Secrets are namespace-scoped"
        ],
        answer: 2,
        explain: "ConfigMaps hold non-sensitive config (e.g., LOG_LEVEL, APP_ENV). Secrets hold sensitive data (passwords, tokens) — base64-encoded and with tighter RBAC. In production, use an external secrets manager (Vault, AWS Secrets Manager) feeding Kubernetes Secrets."
      },
      {
        q: "What does a readinessProbe do in a Kubernetes Pod spec?",
        opts: [
          "It restarts the container if the application becomes unresponsive",
          "It checks whether the container is ready to receive traffic — only routes traffic after the probe succeeds",
          "It verifies that the correct Docker image was pulled",
          "It monitors CPU usage and scales the pod automatically"
        ],
        answer: 1,
        explain: "readinessProbe determines when a Pod is ready to serve traffic. During a deployment, new Pods must pass the readiness probe before the Service routes traffic to them. This enables zero-downtime rolling updates."
      },
      {
        q: "What happens if a container's livenessProbe fails repeatedly?",
        opts: [
          "The node is cordoned and drained",
          "The Pod is evicted and rescheduled on a different node",
          "Kubernetes restarts the container inside the Pod",
          "The entire Deployment is rolled back automatically"
        ],
        answer: 2,
        explain: "If the livenessProbe fails `failureThreshold` times, Kubernetes restarts the specific container (not the Pod, not the Deployment). This handles scenarios where the app is alive but stuck in a deadlock or infinite loop."
      },
      {
        q: "What does `kubectl apply -f deployment.yaml` do?",
        opts: [
          "Deletes the resources defined in deployment.yaml",
          "Creates or updates Kubernetes resources defined in deployment.yaml",
          "Validates the YAML file without making any changes",
          "Runs the deployment.yaml as a shell script"
        ],
        answer: 1,
        explain: "`kubectl apply` is declarative — it creates the resource if it doesn't exist, or patches it if it does. It is idempotent and the preferred way to manage Kubernetes resources. `kubectl create` will error if the resource already exists."
      },
      {
        q: "What does the `selector.matchLabels` field in a Deployment do?",
        opts: [
          "It selects which node the Pod should run on",
          "It defines which Pods belong to this Deployment — the controller manages Pods that have these labels",
          "It selects which container image to pull from the registry",
          "It matches the Deployment to a specific Kubernetes version"
        ],
        answer: 1,
        explain: "`selector.matchLabels` tells the Deployment controller which Pods it owns and manages. It must match the `template.metadata.labels`. Services also use label selectors to find which Pods to route traffic to."
      },
      {
        q: "What is a rolling update strategy in Kubernetes Deployments?",
        opts: [
          "Deleting all old Pods and then creating all new Pods at the same time (big bang)",
          "Gradually replacing old Pods with new ones — new Pods become ready before old ones are terminated, enabling zero-downtime",
          "Rolling back to a previous version of the application automatically",
          "A strategy that only updates Pods on one node at a time"
        ],
        answer: 1,
        explain: "Rolling updates incrementally replace old Pods with new ones. Combined with readinessProbes, this ensures traffic only goes to healthy Pods. `maxSurge` and `maxUnavailable` control the speed and availability guarantee."
      },
      {
        q: "What does `kubectl rollout undo deployment/python-app` do?",
        opts: [
          "Deletes the python-app Deployment permanently",
          "Pauses the current deployment rollout",
          "Rolls back the Deployment to the previous ReplicaSet (previous version)",
          "Undoes all kubectl commands made in the current session"
        ],
        answer: 2,
        explain: "`kubectl rollout undo` reverts a Deployment to the previous ReplicaSet. Kubernetes keeps a history of ReplicaSets (configurable via `revisionHistoryLimit`). You can also specify a particular revision with `--to-revision=N`."
      },
      {
        q: "What does `cpu: 100m` mean in a Kubernetes resource request?",
        opts: [
          "100 megabytes of CPU cache",
          "100 milliseconds of CPU time per request",
          "100 millicores — which equals 0.1 of one CPU core",
          "100 MHz of CPU frequency"
        ],
        answer: 2,
        explain: "In Kubernetes, CPU is measured in millicores. 1000m = 1 CPU core. So 100m = 0.1 cores. Memory is in bytes (Mi = mebibytes, Gi = gibibytes). Always set both requests AND limits for predictable scheduling."
      },
      {
        q: "What is the `ImagePullBackOff` error status in a Pod?",
        opts: [
          "The container ran out of memory and was killed",
          "Kubernetes cannot pull the specified Docker image — wrong name, wrong tag, or missing registry credentials",
          "The application inside the container crashed on startup",
          "The node does not have enough disk space to store the image"
        ],
        answer: 1,
        explain: "ImagePullBackOff means Kubernetes tried to pull the container image and failed. Common causes: typo in image name, wrong tag, private registry without pull secret, or (in Kind) forgetting to run `kind load docker-image`. Check with `kubectl describe pod`."
      },
      {
        q: "What is Kind (used in this project)?",
        opts: [
          "Kubernetes in Docker — a tool that runs a real Kubernetes cluster inside Docker containers, for local development",
          "A Kubernetes distribution optimised for IoT devices",
          "A cloud-hosted Kubernetes service by the CNCF",
          "A Kubernetes ingress controller"
        ],
        answer: 0,
        explain: "Kind stands for Kubernetes IN Docker. It creates a real, multi-node Kubernetes cluster where each 'node' is a Docker container. It is perfect for local development and CI testing. The kind.exe binary is already in this project."
      },
      {
        q: "Why must you run `kind load docker-image python-app:v1 --name platform-study` before deploying to Kind?",
        opts: [
          "To push the image to Docker Hub before Kubernetes can pull it",
          "Kind's internal cluster cannot pull from the local Docker daemon by default — you must explicitly load images into its registry",
          "To tag the image with the correct Kubernetes-compatible format",
          "To scan the image for vulnerabilities before deployment"
        ],
        answer: 1,
        explain: "Kind runs Kubernetes inside Docker containers, isolated from your local Docker daemon's image cache. You must load images into Kind's internal registry with `kind load docker-image`. Without this you get ImagePullBackOff."
      },
      {
        q: "What command do you use to test a ClusterIP service locally without an Ingress?",
        opts: [
          "kubectl expose service",
          "kubectl tunnel",
          "kubectl port-forward service/<name> <local-port>:<service-port>",
          "docker run --network host"
        ],
        answer: 2,
        explain: "`kubectl port-forward` creates a tunnel from a local port to the service. E.g. `kubectl port-forward service/python-app-service 8080:80` makes the service accessible at localhost:8080. It is a development/debugging tool, not for production."
      },
      {
        q: "What information does `kubectl describe pod <pod-name>` show that `kubectl get pods` does not?",
        opts: [
          "The container logs from the last hour",
          "The node the pod is running on, events, conditions, probe status, and environment variables — essential for debugging",
          "The resource usage (CPU/memory) in real time",
          "The network traffic in and out of the pod"
        ],
        answer: 1,
        explain: "`kubectl describe pod` is the primary debugging command. The `Events` section at the bottom shows exactly what happened — ImagePullBackOff, OOMKilled, probe failures, and scheduling decisions. `kubectl get pods` only shows high-level status."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "terraform",
    title: "Infrastructure as Code — Terraform",
    icon: "🏗️",
    level: "Beginner",
    color: "#7b42bc",
    desc: "IaC concepts, HCL, state, variables, outputs, and modules.",
    questions: [
      {
        q: "What is Infrastructure as Code (IaC)?",
        opts: [
          "Writing Python scripts to monitor cloud resources",
          "Managing and provisioning infrastructure through configuration files instead of manual UI interactions",
          "Containerising infrastructure services using Docker",
          "Running infrastructure workloads inside application code"
        ],
        answer: 1,
        explain: "IaC means defining your infrastructure (servers, networks, databases, Kubernetes namespaces) in version-controlled configuration files. This enables reproducibility, peer review, and automation — treating infrastructure with the same rigour as application code."
      },
      {
        q: "What does 'declarative' mean in the context of Terraform?",
        opts: [
          "You write step-by-step instructions for how to create resources",
          "You describe the desired end state and Terraform figures out how to achieve it",
          "You declare variables before using them in the code",
          "Terraform declares errors loudly when configuration is wrong"
        ],
        answer: 1,
        explain: "Declarative IaC means you describe WHAT you want ('I want 3 EC2 instances'), not HOW to create it. Terraform compares current state to desired state and makes only the necessary changes. Ansible (imperative) specifies the steps to execute."
      },
      {
        q: "What language does Terraform use for its configuration files?",
        opts: [
          "YAML",
          "JSON",
          "HCL (HashiCorp Configuration Language)",
          "Python"
        ],
        answer: 2,
        explain: "Terraform uses HCL (HashiCorp Configuration Language), a domain-specific language designed to be human-readable. Files use the .tf extension. HCL is more expressive than YAML and supports functions, loops, and conditions."
      },
      {
        q: "What does `terraform init` do?",
        opts: [
          "Creates the initial infrastructure defined in your .tf files",
          "Initialises the working directory — downloads required provider plugins and sets up the backend",
          "Creates a new Terraform workspace",
          "Validates the syntax of your .tf files"
        ],
        answer: 1,
        explain: "`terraform init` must be run first in any Terraform project. It downloads provider plugins (e.g., hashicorp/aws), initialises the backend for state storage, and prepares the working directory. Run it whenever you add a new provider."
      },
      {
        q: "What does `terraform plan` do?",
        opts: [
          "Applies all changes immediately without confirmation",
          "Destroys all existing infrastructure",
          "Shows a preview of what changes Terraform will make — additions, modifications, and deletions — without actually making them",
          "Plans the order in which resources will be billed"
        ],
        answer: 2,
        explain: "`terraform plan` is a dry run. It compares your configuration to the current state and shows exactly what will be created (+), changed (~), or destroyed (-). Always review the plan output before running `terraform apply`."
      },
      {
        q: "What is the Terraform state file (`terraform.tfstate`)?",
        opts: [
          "A log file that records all Terraform commands run",
          "The .tf file that defines the desired infrastructure state",
          "Terraform's record of the real-world infrastructure it has created — used to plan changes",
          "A file that stores Terraform provider credentials"
        ],
        answer: 2,
        explain: "The state file is Terraform's source of truth about what it has created. It maps resource blocks in .tf files to real cloud resources (e.g., specific AWS EC2 instance IDs). Without state, Terraform cannot determine what already exists."
      },
      {
        q: "Why should you never commit `terraform.tfstate` to version control?",
        opts: [
          "Because it is too large for most Git repositories",
          "Because it may contain sensitive values like passwords, access keys, and private IPs in plain text",
          "Because Terraform regenerates it automatically and committing it causes conflicts",
          "Because it is in a binary format that Git cannot diff"
        ],
        answer: 1,
        explain: "State files often contain sensitive data — database passwords, access keys, private endpoints. They should be stored in a remote backend (S3, Terraform Cloud, Azure Storage) with encryption at rest and access controls, never in git."
      },
      {
        q: "What is a Terraform remote backend?",
        opts: [
          "A Terraform provider for managing remote servers",
          "A storage location for the state file outside of the local filesystem — enabling team collaboration and state locking",
          "A remote GitHub repository for storing .tf files",
          "A cloud VM that runs terraform apply commands"
        ],
        answer: 1,
        explain: "Remote backends store the state file in a shared, secure location (AWS S3, Azure Blob, GCS, Terraform Cloud). They support state locking to prevent concurrent modifications. Required for any team using Terraform."
      },
      {
        q: "What is the correct HCL format for defining a resource block?",
        opts: [
          "resource: type: name: { ... }",
          "create resource \"type\" \"name\" { ... }",
          "resource \"resource_type\" \"local_name\" { ... }",
          "new resource(type, name) { ... }"
        ],
        answer: 2,
        explain: "The Terraform resource block syntax is: `resource \"<provider_resource_type>\" \"<local_name>\" { ... }`. For example: `resource \"aws_s3_bucket\" \"my_bucket\" { ... }`. The local name is used to reference this resource within the configuration."
      },
      {
        q: "What does `terraform destroy` do?",
        opts: [
          "Removes the .tf files from the working directory",
          "Destroys all infrastructure managed by the current Terraform state",
          "Deletes the Terraform state file",
          "Removes unused provider plugins"
        ],
        answer: 1,
        explain: "`terraform destroy` deletes ALL resources tracked in the state file. It shows a plan first and asks for confirmation. Use it to tear down environments (e.g., dev environments at the end of the day) to avoid unnecessary cloud costs."
      },
      {
        q: "What is the purpose of Terraform variables?",
        opts: [
          "To store the output of terraform apply for later use",
          "To make Terraform configurations reusable and environment-agnostic by parameterising values",
          "To define the order in which resources are created",
          "To declare which Terraform version is required"
        ],
        answer: 1,
        explain: "Variables make configurations reusable. Instead of hardcoding `environment = 'prod'` in every resource, you define `variable \"environment\" {}` and pass different values for dev, staging, and prod — often via .tfvars files or environment variables."
      },
      {
        q: "How do you pass variable values to Terraform without hardcoding them?",
        opts: [
          "Only by modifying the .tf files directly",
          "Using a .tfvars file, -var flags on the command line, or TF_VAR_ environment variables",
          "By creating a separate variables.json file",
          "Variables cannot be passed at runtime — they must have defaults"
        ],
        answer: 1,
        explain: "Terraform accepts variable values via: a .tfvars file (`terraform apply -var-file=prod.tfvars`), individual flags (`-var=\"key=value\"`), or environment variables prefixed with `TF_VAR_` (e.g., `TF_VAR_environment=prod`)."
      },
      {
        q: "What is a Terraform output?",
        opts: [
          "The terminal output printed during terraform apply",
          "A value exported from a Terraform configuration — such as an IP address or ARN — that can be used by other configurations or displayed to users",
          "A log file generated after each terraform plan",
          "An error message when a resource fails to create"
        ],
        answer: 1,
        explain: "Outputs expose values from your Terraform configuration — e.g., the load balancer IP, database endpoint, or cluster name. They can be queried with `terraform output` and used as inputs to other modules or configurations."
      },
      {
        q: "What are Terraform modules?",
        opts: [
          "Individual .tf files within a project",
          "Reusable, self-contained packages of Terraform configuration that can be called with different input variables",
          "Terraform's built-in functions like length() and tostring()",
          "Plugins that connect Terraform to specific cloud providers"
        ],
        answer: 1,
        explain: "Modules are like functions in Terraform. They package a set of resources (e.g., 'create an EKS cluster with VPC and node groups') into a reusable unit. The Terraform Registry hosts hundreds of community modules (terraform-aws-modules/eks/aws, etc.)."
      },
      {
        q: "What does the `~>` version constraint mean for a Terraform provider? (e.g., `version = \"~> 5.0\"`).",
        opts: [
          "Use exactly version 5.0 — no other version is accepted",
          "Use any version greater than 5.0",
          "Use version 5.x — allow patch and minor updates within the 5 major version, but not 6.0",
          "Use the latest available version regardless of breaking changes"
        ],
        answer: 2,
        explain: "`~> 5.0` is a pessimistic constraint operator. It allows 5.0, 5.1, 5.2, etc., but NOT 6.0. This protects against breaking changes in major versions while still allowing bug-fix and minor updates. Always pin provider versions in production."
      },
      {
        q: "What is the `terraform fmt` command used for?",
        opts: [
          "Formatting error messages to be more readable",
          "Automatically formatting .tf files to follow the canonical Terraform code style",
          "Converting .tfvars files to JSON format",
          "Reformatting the state file after manual edits"
        ],
        answer: 1,
        explain: "`terraform fmt` automatically rewrites .tf files to canonical style (consistent indentation, alignment). Running it in CI ensures all team members' code is consistently formatted. Use `terraform fmt -check` in CI to fail if files are not formatted."
      },
      {
        q: "Which IaC tool is most appropriate for teams that prefer writing infrastructure code in Python, Go, or TypeScript instead of HCL?",
        opts: [
          "Ansible",
          "CloudFormation",
          "Pulumi",
          "Terraform"
        ],
        answer: 2,
        explain: "Pulumi allows you to write infrastructure definitions in general-purpose languages: Python, Go, TypeScript, C#, and Java. It is a popular Terraform alternative for developers who prefer familiar languages over HCL."
      },
      {
        q: "In the context of platform engineering, what is Crossplane?",
        opts: [
          "A multi-cloud cost management tool",
          "A Kubernetes-native IaC tool that lets you provision cloud resources using kubectl and YAML — extending the Kubernetes API",
          "A cross-platform CI/CD pipeline tool",
          "A Terraform wrapper that adds a GUI interface"
        ],
        answer: 1,
        explain: "Crossplane extends Kubernetes to manage cloud infrastructure. Developers can provision an S3 bucket or RDS database using a Kubernetes YAML manifest and kubectl — the same workflow they use for application resources. It is increasingly popular in platform engineering."
      },
      {
        q: "What is the recommended Terraform team workflow for applying changes to production?",
        opts: [
          "Each developer runs terraform apply locally on their own machine",
          "Changes go through version control → CI runs terraform plan → team reviews in PR → merge triggers automated terraform apply",
          "The team lead reviews and manually runs terraform apply from their laptop",
          "Changes are applied directly in the Terraform web UI without any review"
        ],
        answer: 1,
        explain: "The GitOps pattern for Terraform: code changes go through pull requests, CI runs `terraform fmt`, `terraform validate`, and `terraform plan` (posting the plan as a PR comment), the team reviews the plan, and merging triggers automated `terraform apply`. Nobody applies locally in production."
      },
      {
        q: "Which command shows the current values of all Terraform outputs for the current workspace?",
        opts: [
          "terraform show --outputs",
          "terraform output",
          "terraform get outputs",
          "terraform state list"
        ],
        answer: 1,
        explain: "`terraform output` displays all output values defined in the configuration. `terraform output <name>` shows a specific output. Add `-json` for machine-readable format. `terraform state list` shows resources in state, not outputs."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "production_idp",
    title: "Building Production IDPs",
    icon: "🚀",
    level: "Intermediate",
    color: "#3fb950",
    desc: "Production Backstage, GitOps with ArgoCD, golden paths, and DORA metrics.",
    questions: [
      {
        q: "What is the primary reason to switch from SQLite to PostgreSQL for production Backstage?",
        opts: [
          "PostgreSQL is open source while SQLite requires a licence",
          "SQLite cannot handle concurrent writes, has no backup story, and is not designed for multi-replica deployments",
          "PostgreSQL has a built-in plugin marketplace for Backstage",
          "Kubernetes requires PostgreSQL for all stateful workloads"
        ],
        answer: 1,
        explain: "SQLite is a single-file database — it locks during writes and cannot support multiple Backstage replicas reading/writing simultaneously. PostgreSQL is the only supported production database for Backstage."
      },
      {
        q: "What is cert-manager used for in a production Backstage deployment?",
        opts: [
          "Managing TLS certificates — automating their issuance and renewal using Let's Encrypt or internal CAs",
          "Certifying that Kubernetes operators are properly configured",
          "Managing Backstage plugin certification and approval",
          "Storing authentication certificates in Kubernetes Secrets"
        ],
        answer: 0,
        explain: "cert-manager is a Kubernetes add-on that automates TLS certificate management. It integrates with Let's Encrypt, Vault, and other CAs. You annotate your Ingress and cert-manager automatically provisions and renews the TLS certificate."
      },
      {
        q: "What is GitOps?",
        opts: [
          "Using Git as a deployment mechanism — the desired state is declared in Git, and automated tooling reconciles the actual state to match",
          "A branching strategy where all deployments happen from the main branch",
          "A GitHub feature that auto-merges pull requests",
          "Storing infrastructure credentials in a Git repository"
        ],
        answer: 0,
        explain: "GitOps uses Git as the single source of truth for infrastructure and application deployments. Developers push changes to Git; a GitOps controller (ArgoCD, Flux) detects the change and applies it to the cluster. The cluster state is always reconciled to Git."
      },
      {
        q: "What does ArgoCD do?",
        opts: [
          "It is a CI tool that builds Docker images from source code",
          "It watches a Git repository and automatically deploys changes to Kubernetes, continuously reconciling desired vs actual state",
          "It is a secret management tool for storing Kubernetes credentials",
          "It manages Helm chart repositories and versions"
        ],
        answer: 1,
        explain: "ArgoCD is a declarative GitOps controller for Kubernetes. It monitors a Git repo for changes to Kubernetes manifests and automatically syncs them to the cluster. With `selfHeal: true`, it also fixes manual changes (drift correction)."
      },
      {
        q: "What is the External Secrets Operator used for?",
        opts: [
          "Encrypting Kubernetes Secrets using AES-256",
          "Syncing secrets from external managers (AWS Secrets Manager, HashiCorp Vault, Azure Key Vault) into Kubernetes Secrets automatically",
          "Sharing Kubernetes Secrets between namespaces",
          "Exposing secrets to external services outside the cluster"
        ],
        answer: 1,
        explain: "External Secrets Operator bridges external secret managers and Kubernetes. You define an ExternalSecret resource pointing to a secret in Vault or AWS Secrets Manager, and the operator creates/syncs the corresponding Kubernetes Secret."
      },
      {
        q: "What are the four DORA metrics?",
        opts: [
          "Uptime, Latency, Throughput, Error Rate",
          "Deployment Frequency, Lead Time for Changes, Mean Time to Recovery (MTTR), Change Failure Rate",
          "CPU Usage, Memory Usage, Network I/O, Disk I/O",
          "NPS Score, Adoption Rate, Time to First Deploy, Support Tickets"
        ],
        answer: 1,
        explain: "The four DORA (DevOps Research & Assessment) metrics are: Deployment Frequency, Lead Time for Changes, Mean Time to Recovery (MTTR), and Change Failure Rate. They are the industry standard for measuring software delivery performance."
      },
      {
        q: "What does 'self-healing' mean in the context of ArgoCD?",
        opts: [
          "ArgoCD restarts itself if it crashes",
          "ArgoCD automatically reverts manual changes to Kubernetes resources to match the desired state in Git",
          "Kubernetes restarts failed ArgoCD Pods automatically",
          "ArgoCD rolls back failed deployments to the previous version"
        ],
        answer: 1,
        explain: "With `selfHeal: true` in ArgoCD's sync policy, any manual change to the cluster (e.g., someone manually editing a Deployment via kubectl) is automatically reverted to what Git declares. Git is the absolute source of truth."
      },
      {
        q: "What is the key measure of a 'mature' golden path template?",
        opts: [
          "The number of lines of YAML it generates",
          "How long it takes to run",
          "How quickly a developer can go from clicking 'Create' to having a production-ready service deployed and observable",
          "The number of cloud providers it supports"
        ],
        answer: 2,
        explain: "The gold standard for platform maturity is time-to-first-deployment for a new service. World-class platforms get developers from zero to a running, observable, production-ready service in under 10 minutes via golden path templates."
      },
      {
        q: "What is 'drift' in a GitOps context?",
        opts: [
          "When a Kubernetes node's clock drifts from NTP time",
          "When the actual state of the cluster differs from the desired state declared in Git",
          "When a Docker image drifts from its base image due to security patches",
          "When a developer's local git branch drifts from main"
        ],
        answer: 1,
        explain: "Drift occurs when someone manually modifies a resource in the cluster (kubectl edit, kubectl scale) and the cluster state no longer matches Git. ArgoCD detects and reports drift, and with selfHeal can automatically correct it."
      },
      {
        q: "Which Helm chart installs Prometheus, Grafana, and Alertmanager together?",
        opts: [
          "prometheus/prometheus",
          "grafana/grafana-stack",
          "prometheus-community/kube-prometheus-stack",
          "monitoring/full-stack"
        ],
        answer: 2,
        explain: "`kube-prometheus-stack` from the prometheus-community Helm repository installs the complete monitoring stack: Prometheus Operator, Prometheus, Grafana, Alertmanager, and node exporters. It is the standard way to bootstrap observability."
      },
      {
        q: "What is an 'error budget' in platform engineering?",
        opts: [
          "The financial budget allocated to fixing production bugs",
          "The amount of downtime permitted within an SLO — if your SLO is 99.9%, you have 43 minutes/month of allowed downtime",
          "The number of deployment failures allowed per sprint",
          "A cost allocation for cloud infrastructure errors"
        ],
        answer: 1,
        explain: "An error budget is the flip side of an SLO. 99.9% availability = 0.1% allowed downtime = ~43 minutes/month. If the error budget is exhausted, new deployments are halted until reliability improves. This creates shared accountability between dev and platform teams."
      },
      {
        q: "What does the `prune: true` setting in an ArgoCD Application do?",
        opts: [
          "It removes old Docker images from the container registry",
          "It automatically deletes Kubernetes resources that exist in the cluster but no longer exist in Git",
          "It compresses the ArgoCD application manifests to save storage",
          "It removes completed Kubernetes Jobs after they finish"
        ],
        answer: 1,
        explain: "`prune: true` makes ArgoCD delete resources that have been removed from Git. Without it, deleting a manifest from Git leaves the resource orphaned in the cluster. Together with selfHeal, it enforces Git as the complete source of truth."
      },
      {
        q: "What is a ClusterIssuer in cert-manager?",
        opts: [
          "A Kubernetes CRD that issues Kubernetes cluster administrator certificates",
          "A cert-manager resource that defines how to obtain TLS certificates cluster-wide (e.g., from Let's Encrypt)",
          "A tool that issues JWTs for Kubernetes service accounts",
          "A cert-manager plugin for issuing wildcard certificates only"
        ],
        answer: 1,
        explain: "A ClusterIssuer is a cert-manager Custom Resource that defines a certificate authority or ACME server (like Let's Encrypt) to use for issuing certificates across the entire cluster. An `Issuer` is namespace-scoped; `ClusterIssuer` is cluster-scoped."
      },
      {
        q: "What authentication provider is most commonly used in enterprises integrating Backstage with Microsoft's identity system?",
        opts: [
          "GitHub OAuth",
          "Google OAuth",
          "Microsoft Entra ID (Azure Active Directory)",
          "Okta"
        ],
        answer: 2,
        explain: "In Microsoft-centric enterprises, Backstage integrates with Microsoft Entra ID (formerly Azure Active Directory) via OAuth. This allows employees to log into Backstage with their corporate Microsoft accounts using single sign-on."
      },
      {
        q: "What is the platform maturity level where teams first see significant ROI from their investment?",
        opts: [
          "Level 1 — Shared tooling",
          "Level 2 — Basic self-service",
          "Level 3 — Full IDP with observability and GitOps",
          "Level 5 — Platform as competitive advantage"
        ],
        answer: 2,
        explain: "Level 3 (Full IDP with observability, GitOps, and self-service golden paths) is where DORA metrics measurably improve and the ROI calculation becomes compelling. Levels 1 and 2 are foundation-building. Level 4+ is optimisation."
      },
      {
        q: "What Kubernetes object type does the Backstage Kubernetes plugin use to match a catalog component to its cluster resources?",
        opts: [
          "ConfigMap annotations in the kube-system namespace",
          "Labels on Kubernetes resources matching the `backstage.io/kubernetes-id` annotation in the catalog entry",
          "A separate CRD installed by the Backstage Kubernetes operator",
          "ServiceAccount names matching the component name"
        ],
        answer: 1,
        explain: "The Kubernetes plugin matches resources using labels. Add `backstage.io/kubernetes-id: my-service` to your Kubernetes Deployment labels, and set the same value in your `catalog-info.yaml` annotation. The plugin then finds and displays all matching resources."
      },
      {
        q: "In a production Backstage deployment on Kubernetes, why are 2+ replicas recommended?",
        opts: [
          "Because Backstage requires exactly 2 replicas to function",
          "For high availability — if one Pod fails or is rescheduled, the portal remains accessible via the second replica",
          "Because PostgreSQL requires two application connections at minimum",
          "To comply with Kubernetes resource quotas that require even numbers"
        ],
        answer: 1,
        explain: "Running 2+ replicas ensures Backstage remains available during node failures, Pod restarts, and rolling updates. A single replica creates a single point of failure for the entire developer portal — unacceptable in production."
      },
      {
        q: "What is the purpose of `imagePullPolicy: Always` in a Kubernetes Deployment?",
        opts: [
          "To always pull the image even if it already exists on the node, ensuring you always run the latest version of a tag",
          "To pull the image from all available registries simultaneously",
          "To prevent the image from being evicted from the node's cache",
          "To always pull the image as the root user"
        ],
        answer: 0,
        explain: "`imagePullPolicy: Always` forces Kubernetes to always pull the image from the registry, even if the tag already exists on the node. Useful when using mutable tags like `latest` (though using immutable version tags is best practice)."
      },
      {
        q: "What is a Kubernetes HorizontalPodAutoscaler (HPA)?",
        opts: [
          "A tool that horizontally scales the Kubernetes cluster by adding nodes",
          "A controller that automatically scales the number of Pod replicas based on CPU, memory, or custom metrics",
          "A load balancer that distributes traffic horizontally across nodes",
          "A Kubernetes RBAC role for horizontal scaling operations"
        ],
        answer: 1,
        explain: "HPA watches metrics (CPU, memory, or custom) and automatically adjusts the number of Pod replicas to meet demand. Scale up during traffic spikes, scale down during quiet periods. Essential for cost-efficient production deployments."
      },
      {
        q: "What should a golden path template create BESIDES the application repository?",
        opts: [
          "Only the code repository — everything else is the developer's responsibility",
          "A GitHub repository, Backstage catalog entry, Kubernetes namespace, ArgoCD Application, CI/CD pipeline, and optionally monitoring dashboards",
          "Only the Kubernetes manifests — the developer creates the repository manually",
          "A cost estimate and cloud provider account"
        ],
        answer: 1,
        explain: "A mature golden path template provisions the full stack: Git repo with Dockerfile and K8s manifests, Backstage catalog-info.yaml, Kubernetes namespace with RBAC, ArgoCD Application, CI/CD pipeline, and observability configuration. Developers should get all of this in < 5 minutes."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "observability",
    title: "Observability Stack",
    icon: "📊",
    level: "Intermediate",
    color: "#f97316",
    desc: "Prometheus, Grafana, Loki, tracing, alerting, and SLOs.",
    questions: [
      {
        q: "What are the three pillars of observability?",
        opts: [
          "Uptime, Latency, and Throughput",
          "Metrics, Logs, and Traces",
          "CPU, Memory, and Network",
          "Dashboards, Alerts, and Reports"
        ],
        answer: 1,
        explain: "The three pillars are Metrics (what happened — aggregated numbers), Logs (why it happened — detailed event records), and Traces (where it happened — the journey of a request through distributed systems). You need all three for complete observability."
      },
      {
        q: "How does Prometheus collect metrics?",
        opts: [
          "Applications push metrics to Prometheus via a REST API",
          "Prometheus pulls (scrapes) metrics from /metrics endpoints exposed by applications and infrastructure",
          "Prometheus reads metrics from log files on each node",
          "Metrics are pushed via a message queue like Kafka"
        ],
        answer: 1,
        explain: "Prometheus uses a pull model — it scrapes HTTP /metrics endpoints exposed by targets (apps, node exporters, kube-state-metrics). This is opposite to push-based systems like Datadog. The pull model simplifies service discovery."
      },
      {
        q: "What Python library can you add to a Flask app to automatically expose a /metrics endpoint for Prometheus?",
        opts: [
          "flask-prometheus",
          "prometheus-flask-exporter",
          "metrics-flask",
          "flask-monitor"
        ],
        answer: 1,
        explain: "`prometheus-flask-exporter` is the standard library. With just two lines of code (`from prometheus_flask_exporter import PrometheusMetrics` and `metrics = PrometheusMetrics(app)`), your Flask app exposes request counts, latencies, and error rates at /metrics."
      },
      {
        q: "What is Grafana used for in the observability stack?",
        opts: [
          "Collecting and storing metrics data",
          "Sending alert notifications to Slack and PagerDuty",
          "Visualising metrics, logs, and traces through interactive dashboards",
          "Shipping logs from Pods to a central store"
        ],
        answer: 2,
        explain: "Grafana is the visualisation layer. It connects to data sources (Prometheus, Loki, Tempo, Elasticsearch) and renders dashboards. It also supports alerting, but its primary role is the UI for exploring and displaying observability data."
      },
      {
        q: "What is the kube-prometheus-stack Helm chart?",
        opts: [
          "A Helm chart maintained by Grafana that installs Grafana only",
          "A community Helm chart that installs Prometheus Operator, Prometheus, Grafana, Alertmanager, and exporters in one command",
          "A Kubernetes CRD for defining custom metrics",
          "A paid Prometheus enterprise offering for Kubernetes"
        ],
        answer: 1,
        explain: "`prometheus-community/kube-prometheus-stack` is the standard way to deploy a full production observability stack on Kubernetes. One Helm install gives you Prometheus, Grafana, Alertmanager, node-exporter, kube-state-metrics, and pre-built dashboards."
      },
      {
        q: "What is a PodMonitor in the context of Prometheus Operator?",
        opts: [
          "A Kubernetes tool that restarts Pods when they fail memory checks",
          "A Custom Resource that tells the Prometheus Operator which Pods to scrape for metrics and how",
          "A Grafana plugin that displays Pod health",
          "A Kubernetes admission controller that monitors Pod creation"
        ],
        answer: 1,
        explain: "PodMonitor is a Custom Resource Definition (CRD) from the Prometheus Operator. It declaratively defines which Pods Prometheus should scrape. The operator watches for PodMonitor and ServiceMonitor resources and reconfigures Prometheus automatically."
      },
      {
        q: "What is Loki?",
        opts: [
          "A Kubernetes secrets management solution",
          "A full-text search engine for metrics",
          "A log aggregation system that indexes log metadata (labels) rather than full log content, making it cost-efficient",
          "A distributed tracing system built by Grafana"
        ],
        answer: 2,
        explain: "Loki is Grafana's log aggregation tool, inspired by Prometheus but for logs. It indexes only labels (like Prometheus does for metrics), not the full log content — making it much cheaper to run than Elasticsearch while still being highly queryable."
      },
      {
        q: "What query language does Loki use?",
        opts: [
          "SQL",
          "PromQL",
          "LogQL",
          "KQL (Kusto Query Language)"
        ],
        answer: 2,
        explain: "Loki uses LogQL, its own query language inspired by PromQL. A simple query looks like `{app=\"python-app\"}`. Add a filter: `{app=\"python-app\"} |= \"ERROR\"`. Add aggregations: `count_over_time({app=\"python-app\"} |= \"ERROR\" [5m])`."
      },
      {
        q: "What tool ships logs from Kubernetes Pods to Loki?",
        opts: [
          "Prometheus node-exporter",
          "Grafana agent or Promtail",
          "Fluent Bit or Fluentd",
          "Both B and C are correct"
        ],
        answer: 3,
        explain: "Both Promtail (by Grafana) and Fluent Bit/Fluentd are widely used log shippers for Kubernetes-to-Loki pipelines. Promtail is the official Loki companion. Fluent Bit is more commonly used in multi-destination pipelines."
      },
      {
        q: "What is distributed tracing?",
        opts: [
          "Tracking the physical location of distributed Kubernetes nodes",
          "Recording the journey of a single request as it flows through multiple microservices, showing latency at each step",
          "Monitoring network packets between pods across namespaces",
          "Tracing the git history of distributed team contributions"
        ],
        answer: 1,
        explain: "Distributed tracing follows a request across service boundaries. Each service adds a 'span' to the trace. The resulting trace shows exactly which service took how long — essential for debugging latency in microservice architectures."
      },
      {
        q: "What standard does OpenTelemetry provide for observability?",
        opts: [
          "A paid cloud service for collecting telemetry data",
          "A vendor-neutral, open-source framework for generating, collecting, and exporting metrics, logs, and traces from applications",
          "A Kubernetes CRD for defining observability pipelines",
          "A replacement for Prometheus and Grafana"
        ],
        answer: 1,
        explain: "OpenTelemetry (OTel) is the CNCF project that standardises observability instrumentation. It provides SDKs for all major languages to instrument applications for traces, metrics, and logs — sending data to any compatible backend (Tempo, Jaeger, Prometheus, etc.)."
      },
      {
        q: "What is a PrometheusRule CRD used for?",
        opts: [
          "Defining Prometheus scrape targets",
          "Configuring Prometheus storage retention",
          "Defining alerting and recording rules that Prometheus evaluates",
          "Setting up Prometheus federation across clusters"
        ],
        answer: 2,
        explain: "PrometheusRule is a CRD from the Prometheus Operator. It defines alert rules (fire an alert when a condition is true for N minutes) and recording rules (pre-compute expensive queries). The operator automatically loads these into Prometheus."
      },
      {
        q: "What is an SLO (Service Level Objective)?",
        opts: [
          "A contract between a cloud provider and a customer",
          "A target reliability level for a service — e.g., 99.9% of requests succeed within 200ms — measured against an SLI",
          "A Kubernetes resource that limits service resource consumption",
          "A security policy for limiting who can access a service"
        ],
        answer: 1,
        explain: "An SLO is an internal reliability target. SLI (indicator) is the measurement ('% of successful requests'). SLO is the target ('99.9% of requests succeed'). SLA (agreement) is the external contract with consequences for missing the SLO."
      },
      {
        q: "A 99.9% availability SLO equals how much allowed downtime per month?",
        opts: [
          "About 7 minutes",
          "About 43 minutes",
          "About 2 hours",
          "About 8 hours"
        ],
        answer: 1,
        explain: "99.9% uptime = 0.1% downtime. In a 30-day month (43,200 minutes): 0.001 × 43,200 = 43.2 minutes. This is the error budget — the total allowed downtime before the SLO is breached."
      },
      {
        q: "How can you expose Grafana dashboards to developers inside Backstage?",
        opts: [
          "It is impossible — Grafana and Backstage are separate tools",
          "By embedding Grafana iframes in Backstage using the Grafana plugin, linking dashboards via `grafana/dashboard-selector` annotations in catalog-info.yaml",
          "By exporting Grafana dashboards as PDFs and uploading them to TechDocs",
          "Developers must log in to Grafana directly — there is no Backstage integration"
        ],
        answer: 1,
        explain: "The Backstage Grafana plugin embeds dashboards and alerts in the catalog component page. Add `grafana/dashboard-selector` and `grafana/alert-label-selector` annotations to your catalog-info.yaml and developers see their service's dashboards without leaving Backstage."
      },
      {
        q: "What is the purpose of `initialDelaySeconds` in a Kubernetes probe?",
        opts: [
          "The number of seconds between probe checks",
          "The time Kubernetes waits before starting to execute the probe — allowing the application time to start up",
          "The maximum time a single probe check can take before timing out",
          "The number of seconds to delay the entire Pod startup"
        ],
        answer: 1,
        explain: "`initialDelaySeconds` gives your application time to start before Kubernetes begins probing. If your app takes 10 seconds to start, set `initialDelaySeconds: 15`. Without this, probes fail during startup and Kubernetes restarts the container unnecessarily."
      },
      {
        q: "Which Grafana dashboard import ID provides a Kubernetes cluster overview?",
        opts: [
          "ID 1234",
          "ID 315",
          "ID 9999",
          "ID 42"
        ],
        answer: 1,
        explain: "Grafana Dashboard ID 315 ('Kubernetes cluster monitoring') is a widely-used community dashboard for cluster-level metrics. Dashboard IDs are identifiers from grafana.com/grafana/dashboards — you can import them directly into Grafana."
      },
      {
        q: "What is Alertmanager responsible for?",
        opts: [
          "Defining alert rules and evaluating them against metrics",
          "Receiving alerts from Prometheus and routing them to the right receivers (Slack, PagerDuty, email) with deduplication and silencing",
          "Displaying alert history in Grafana dashboards",
          "Automatically remediating alerts by restarting Pods"
        ],
        answer: 1,
        explain: "Alertmanager is the routing layer. Prometheus evaluates rules and sends alerts to Alertmanager. Alertmanager deduplicates, groups, silences, and routes alerts to the correct receiver (Slack channel, PagerDuty, email) based on labels and routing rules."
      },
      {
        q: "What does the `for: 5m` field in a PrometheusRule alert definition control?",
        opts: [
          "The alert fires for 5 minutes then automatically resolves",
          "The alert only fires if the condition has been true continuously for 5 minutes — preventing false alarms from transient spikes",
          "Alertmanager sends a reminder every 5 minutes",
          "The alert is evaluated every 5 minutes"
        ],
        answer: 1,
        explain: "`for: 5m` adds a pending period. The alert condition must be true for 5 consecutive minutes before firing. This prevents alert fatigue from transient blips. The alert state goes: Inactive → Pending → Firing."
      },
      {
        q: "What is Tempo in the Grafana observability stack?",
        opts: [
          "A high-performance time-series database for Prometheus metrics",
          "A distributed tracing backend that stores traces and integrates with Grafana for trace visualisation",
          "A log streaming tool for real-time log monitoring",
          "A Grafana plugin for creating tempo maps of deployment frequencies"
        ],
        answer: 1,
        explain: "Grafana Tempo is a cost-efficient distributed tracing backend. Unlike Jaeger, it requires only object storage (S3) and integrates natively with Grafana. It accepts traces in multiple formats (OTLP, Jaeger, Zipkin) and correlates them with Loki logs."
      }
    ]
  }
,

  // ─────────────────────────────────────────────────────────────
  {
    id: "cicd",
    title: "CI/CD with GitHub Actions",
    icon: "⚡",
    level: "Beginner",
    color: "#2dba4e",
    desc: "Workflows, triggers, jobs, secrets, and automating builds and deployments.",
    questions: [
      {
        q: "What does CI/CD stand for?",
        opts: [
          "Code Integration / Code Deployment",
          "Continuous Integration / Continuous Delivery (or Deployment)",
          "Centralised Infrastructure / Centralised Delivery",
          "Container Integration / Container Deployment"
        ],
        answer: 1,
        explain: "CI (Continuous Integration) is the practice of automatically building and testing code on every commit. CD is either Continuous Delivery (artefacts are always releasable) or Continuous Deployment (every passing build goes to production automatically)."
      },
      {
        q: "Where are GitHub Actions workflow files stored in a repository?",
        opts: [
          "In the root of the repository as .workflow files",
          "In the .github/workflows/ directory as YAML files",
          "In a workflows/ folder at the project root",
          "Uploaded through the GitHub web UI only — not stored in the repository"
        ],
        answer: 1,
        explain: "GitHub Actions workflows live in `.github/workflows/*.yml` (or `.yaml`). Storing them in the repository means they are version-controlled alongside the code — you can see the history of pipeline changes just like code changes."
      },
      {
        q: "What is the purpose of the `on:` key in a GitHub Actions workflow?",
        opts: [
          "It turns the workflow on or off",
          "It defines the events that trigger the workflow — such as push, pull_request, or schedule",
          "It specifies which operating system the runner uses",
          "It lists the GitHub Actions marketplace actions to install"
        ],
        answer: 1,
        explain: "The `on:` key defines triggers. Common triggers: `push` (runs on every push), `pull_request` (runs when a PR is opened or updated), `schedule` (cron), `workflow_dispatch` (manual trigger). You can also filter by branch or tag."
      },
      {
        q: "What is a GitHub Actions Runner?",
        opts: [
          "A container image used to build Docker images",
          "The virtual machine or container that executes the steps in a workflow job",
          "A GitHub feature that runs tests in parallel",
          "A deployment agent installed on the production server"
        ],
        answer: 1,
        explain: "A Runner is the execution environment for a job. GitHub provides hosted runners (ubuntu-latest, windows-latest, macos-latest). You can also host your own self-hosted runners on your own infrastructure for custom environments or faster builds."
      },
      {
        q: "What does `runs-on: ubuntu-latest` mean in a workflow job?",
        opts: [
          "The workflow runs only on Ubuntu operating systems locally",
          "The job runs on GitHub's hosted Ubuntu runner with the latest LTS version",
          "The job requires Ubuntu 22.04 specifically — other versions are rejected",
          "The workflow publishes artefacts to an Ubuntu server"
        ],
        answer: 1,
        explain: "`runs-on` specifies the runner. `ubuntu-latest` uses GitHub's hosted runner with the latest Ubuntu LTS. GitHub also offers `windows-latest` and `macos-latest`. For specific versions, use `ubuntu-22.04` or `ubuntu-20.04`."
      },
      {
        q: "What is the difference between a `job` and a `step` in GitHub Actions?",
        opts: [
          "They are the same thing — the terms are interchangeable",
          "A job is a collection of steps that run on the same runner; steps are individual tasks within a job",
          "A step is a collection of jobs that run in parallel",
          "Jobs run in the cloud; steps run locally on the developer's machine"
        ],
        answer: 1,
        explain: "A workflow contains one or more jobs. Each job runs on its own runner and contains a sequence of steps. Steps within a job share the same filesystem and environment. Jobs run in parallel by default; use `needs:` to create dependencies."
      },
      {
        q: "What does `uses: actions/checkout@v4` do in a workflow step?",
        opts: [
          "It checks out the GitHub Actions marketplace for available actions",
          "It clones the repository's code into the runner's workspace so subsequent steps can access it",
          "It checks out a specific branch for comparison",
          "It verifies the workflow file for syntax errors"
        ],
        answer: 1,
        explain: "`actions/checkout@v4` is the most used action. It clones your repository into the runner's workspace. Without it, subsequent steps have no access to your source code. Always pin to a specific version (v4) rather than `main` for security."
      },
      {
        q: "How do you store sensitive values like Docker Hub passwords or API keys in GitHub Actions?",
        opts: [
          "Hardcode them directly in the workflow YAML file",
          "Store them in GitHub Secrets and reference them with `${{ secrets.SECRET_NAME }}`",
          "Store them in a .env file committed to the repository",
          "Pass them as workflow_dispatch inputs when manually triggering the workflow"
        ],
        answer: 1,
        explain: "GitHub Secrets are encrypted environment variables stored in the repository or organisation settings. They are never exposed in logs. Reference them in workflows as `${{ secrets.SECRET_NAME }}`. Never hardcode credentials in YAML files."
      },
      {
        q: "What does the `needs:` key do when specified in a job definition?",
        opts: [
          "It lists the npm packages the job needs to install",
          "It creates a dependency — the job only starts after the listed jobs have completed successfully",
          "It specifies the secrets required by the job",
          "It defines the minimum runner specifications needed"
        ],
        answer: 1,
        explain: "`needs: [build, test]` makes a job wait for `build` AND `test` to succeed before starting. This creates a sequential pipeline: build → test → deploy. Without `needs`, all jobs run in parallel."
      },
      {
        q: "What is a GitHub Actions `matrix` strategy?",
        opts: [
          "A security feature that encrypts workflow outputs",
          "A way to run the same job multiple times with different variable combinations — e.g., testing across Node 18, 20, 22 simultaneously",
          "A visual diagram of workflow job dependencies",
          "A billing model for parallel workflow execution"
        ],
        answer: 1,
        explain: "A matrix strategy runs a job across multiple combinations. Example: `matrix: { node: [18, 20, 22] }` runs the job three times in parallel, each with a different Node.js version. This is how projects test cross-version compatibility efficiently."
      },
      {
        q: "What does `if: github.ref == 'refs/heads/main'` in a job do?",
        opts: [
          "It makes the job fail if it is not on the main branch",
          "It runs the job only when the workflow is triggered on the main branch",
          "It checks if the main branch exists in the repository",
          "It creates the main branch if it does not exist"
        ],
        answer: 1,
        explain: "The `if:` condition controls whether a job or step runs. `github.ref == 'refs/heads/main'` means 'only run this on pushes to main'. Common use: run tests on every branch, but only deploy to production from main."
      },
      {
        q: "What is a reusable workflow in GitHub Actions?",
        opts: [
          "A workflow that automatically retries on failure",
          "A workflow that can be called by other workflows using `workflow_call` — enabling DRY principles across repositories",
          "A workflow template saved in GitHub marketplace",
          "A workflow that caches its results and skips re-running if inputs have not changed"
        ],
        answer: 1,
        explain: "Reusable workflows use the `workflow_call` trigger and can be called from other workflows with `uses: org/repo/.github/workflows/build.yml@main`. This lets platform teams define standard pipelines that product teams call — a golden path for CI/CD."
      },
      {
        q: "What is the purpose of `actions/cache@v4` in a GitHub Actions workflow?",
        opts: [
          "It caches the workflow run results to skip the workflow next time",
          "It saves and restores directories (like node_modules or pip packages) between runs to speed up workflows",
          "It caches Docker layers between workflow runs",
          "It saves GitHub Actions logs permanently"
        ],
        answer: 1,
        explain: "`actions/cache` saves a directory (keyed by a hash, e.g., of package-lock.json) and restores it in future runs. For a project with 500 npm packages, restoring from cache takes seconds vs minutes for a fresh install on every run."
      },
      {
        q: "In the context of platform engineering, what makes a CI/CD workflow a 'golden path'?",
        opts: [
          "It uses the most expensive GitHub Actions runner available",
          "It is pre-configured in a Software Template so every new service automatically gets security scanning, testing, image builds, and deployments wired up from day one",
          "It runs on every commit to every branch regardless of what changed",
          "It is written in YAML and stored in the repository root"
        ],
        answer: 1,
        explain: "A golden path CI workflow is baked into the Backstage Software Template. When a developer creates a new service via the template, they get a complete, pre-configured workflow: lint → test → build Docker image → push to registry → deploy to Kubernetes. Zero manual setup."
      },
      {
        q: "What does `docker/build-push-action@v5` do in a GitHub Actions step?",
        opts: [
          "It builds a Docker Compose stack and pushes it to GitHub Packages",
          "It builds a Docker image from a Dockerfile and pushes it to a container registry",
          "It pulls a Docker image from a registry and runs it as a service",
          "It scans a Docker image for vulnerabilities"
        ],
        answer: 1,
        explain: "`docker/build-push-action` is the official Docker GitHub Action. It builds a Docker image (with optional BuildKit and multi-platform support), tags it, and pushes it to a registry (Docker Hub, GitHub Container Registry, ECR, etc.)."
      },
      {
        q: "What is the `GITHUB_TOKEN` secret in GitHub Actions?",
        opts: [
          "A personal access token you must create manually for each repository",
          "An automatically generated token that GitHub injects into every workflow run — used to authenticate to the repository's GitHub API",
          "A token that provides admin access to all repositories in an organisation",
          "A secret that must be rotated every 24 hours for security"
        ],
        answer: 1,
        explain: "`GITHUB_TOKEN` is automatically created by GitHub for each workflow run. It has scoped permissions to the current repository. Use it for actions like pushing to GitHub Container Registry, creating releases, commenting on PRs, and updating check statuses."
      },
      {
        q: "What is the purpose of `continue-on-error: true` on a workflow step?",
        opts: [
          "It retries the step indefinitely until it succeeds",
          "It allows the workflow to continue even if this step fails, treating it as non-fatal",
          "It continues the step even after the timeout expires",
          "It skips the step if a previous step failed"
        ],
        answer: 1,
        explain: "`continue-on-error: true` marks a step as non-blocking. Even if it fails, subsequent steps still run. Useful for optional checks like code coverage badges or non-critical security scans where failure should not block the pipeline."
      },
      {
        q: "What is the correct way to pass an output value from one step to a later step in the same job?",
        opts: [
          "Write the value to a file and read it in the next step",
          "Use environment variables set with `echo \"NAME=VALUE\" >> $GITHUB_OUTPUT` and reference with `steps.<id>.outputs.NAME`",
          "Use a global variable declaration at the top of the workflow",
          "Outputs cannot be passed between steps — only between jobs"
        ],
        answer: 1,
        explain: "Since the old `set-output` command was deprecated, the correct pattern is: `echo \"version=1.2.3\" >> $GITHUB_OUTPUT` in one step, then `${{ steps.my-step.outputs.version }}` in a later step. The step must have an `id:` for the reference to work."
      },
      {
        q: "What does `on: workflow_dispatch:` allow?",
        opts: [
          "The workflow runs automatically when another workflow dispatches an event",
          "The workflow can be triggered manually from the GitHub Actions UI or via the GitHub API",
          "The workflow runs on every dispatch (push) event in the repository",
          "The workflow runs once per day on a schedule"
        ],
        answer: 1,
        explain: "`workflow_dispatch` adds a 'Run workflow' button in the GitHub Actions tab. You can also define `inputs:` so the user provides parameters at trigger time. The GitHub API's `workflow_dispatch` event can also trigger it programmatically."
      },
      {
        q: "What is the recommended way to handle a failed deployment in a GitHub Actions CD pipeline?",
        opts: [
          "Immediately retry the deployment automatically without any checks",
          "Notify the team, halt subsequent deployments, and roll back using a `kubectl rollout undo` step or ArgoCD sync to the previous revision",
          "Delete the failing workflow run and re-run it manually",
          "Deployments should never fail if tests pass — no rollback strategy is needed"
        ],
        answer: 1,
        explain: "A mature CD pipeline includes a rollback step triggered on failure — `kubectl rollout undo` or triggering an ArgoCD sync to the last good Git SHA. It also sends a notification to Slack or PagerDuty and blocks further deployments until the failure is resolved."
      }
    ]
  }
,

  // ─────────────────────────────────────────────────────────────
  {
    id: "security",
    title: "Platform Security",
    icon: "🔒",
    level: "Beginner",
    color: "#f85149",
    desc: "Secrets management, RBAC, image scanning, network policies, and secure defaults.",
    questions: [
      {
        q: "What is the principle of least privilege in a Kubernetes context?",
        opts: [
          "Running all workloads as root to avoid permission errors",
          "Granting every service account cluster-admin to simplify configuration",
          "Giving each workload only the minimum permissions it needs to function — nothing more",
          "Using the fewest number of namespaces possible to reduce complexity"
        ],
        answer: 2,
        explain: "Least privilege means each Pod, service account, and user gets only the exact permissions required. A web app Pod should not have the ability to list Secrets cluster-wide. Scope RBAC tightly to reduce blast radius if a component is compromised."
      },
      {
        q: "What is RBAC in Kubernetes?",
        opts: [
          "Remote Build and Cache — a feature for faster image builds",
          "Role-Based Access Control — a mechanism to control who can perform which actions on which resources in the cluster",
          "Repository Branch and Commit — a GitOps term for managing cluster state",
          "Resource Budget and Capacity Control — a tool for managing cluster quotas"
        ],
        answer: 1,
        explain: "Kubernetes RBAC controls access via Roles (namespaced) and ClusterRoles (cluster-wide). You bind a Role to a subject (user, group, or service account) with a RoleBinding. Every API call is checked against the caller's RBAC permissions."
      },
      {
        q: "What is the difference between a Role and a ClusterRole in Kubernetes RBAC?",
        opts: [
          "A Role has more permissions than a ClusterRole",
          "A Role is namespace-scoped — it grants permissions within one namespace; a ClusterRole grants permissions across all namespaces or on cluster-scoped resources",
          "ClusterRoles are deprecated in favour of Roles in Kubernetes 1.28+",
          "They are identical — the naming is just a convention"
        ],
        answer: 1,
        explain: "A Role applies only within the namespace it is defined in. A ClusterRole applies cluster-wide and is needed for cluster-scoped resources (nodes, PersistentVolumes, namespaces). Use the most restrictive scope that satisfies the requirement."
      },
      {
        q: "Why should you never store secrets in plaintext in a Git repository?",
        opts: [
          "Git cannot store binary files, so secrets get corrupted",
          "Once committed, secrets are in the repository history forever and can be exposed even after deletion — requiring key rotation and potentially catastrophic breaches",
          "GitHub blocks pushes containing passwords automatically",
          "Plaintext secrets slow down git clone operations"
        ],
        answer: 1,
        explain: "Git history is permanent. Even if you delete a secret in a new commit, it remains in every earlier commit. Anyone who clones the repo can recover it. Leaked secrets require immediate rotation. Use tools like GitGuardian or Gitleaks in CI to detect secrets before they are pushed."
      },
      {
        q: "What is HashiCorp Vault used for in platform engineering?",
        opts: [
          "Building container images securely",
          "A centralised secrets management system — storing, rotating, and dynamically generating secrets with fine-grained access control and audit logs",
          "Encrypting Kubernetes YAML manifests at rest",
          "A code quality tool for detecting secrets in source code"
        ],
        answer: 1,
        explain: "Vault is the industry-standard secrets manager. It stores API keys, passwords, and certificates. Vault can dynamically generate short-lived database credentials — instead of a static password, a service gets a unique credential that expires in minutes."
      },
      {
        q: "What is a Kubernetes NetworkPolicy?",
        opts: [
          "A firewall rule applied to the cluster's cloud provider network",
          "A resource that defines which Pods are allowed to communicate with each other — implementing network segmentation within the cluster",
          "A policy that limits the bandwidth each Pod can use",
          "A Kubernetes admission controller that validates network configurations"
        ],
        answer: 1,
        explain: "NetworkPolicies are the Kubernetes firewall for Pod-to-Pod traffic. By default all Pods can talk to all Pods. A NetworkPolicy restricts traffic using label selectors — e.g., 'only the frontend Pod can talk to the backend Pod; nothing else can reach backend'."
      },
      {
        q: "What does a 'default-deny' NetworkPolicy do?",
        opts: [
          "It denies all network traffic to the entire Kubernetes cluster",
          "It blocks all ingress and egress traffic to Pods in a namespace by default, requiring explicit NetworkPolicy rules to allow specific communication",
          "It denies access to the Kubernetes API server by default",
          "It prevents Pods from being created without network annotations"
        ],
        answer: 1,
        explain: "A default-deny policy blocks all traffic to/from Pods in a namespace unless explicitly allowed by another NetworkPolicy. This is the secure baseline — you then add policies to permit only the specific paths your services need."
      },
      {
        q: "What is Trivy used for in a CI/CD pipeline?",
        opts: [
          "Running integration tests against a live Kubernetes cluster",
          "Scanning container images, filesystems, and git repos for known CVEs, misconfigurations, and exposed secrets",
          "Building Docker images using BuildKit",
          "Signing container images to verify their provenance"
        ],
        answer: 1,
        explain: "Trivy (by Aqua Security) is a comprehensive vulnerability scanner. In CI, add a step after `docker build` to run `trivy image my-app:latest`. It checks image layers against CVE databases and can fail the pipeline if HIGH or CRITICAL vulnerabilities are found."
      },
      {
        q: "What is a Pod Security Admission (PSA) in Kubernetes?",
        opts: [
          "A plugin that requires Pods to pass a security exam before scheduling",
          "A built-in Kubernetes admission controller that enforces security standards (Privileged, Baseline, Restricted) on Pods at the namespace level",
          "A third-party tool that replaces Kubernetes RBAC for Pod access control",
          "A feature that encrypts Pod environment variables at rest"
        ],
        answer: 1,
        explain: "Pod Security Admission replaced the deprecated PodSecurityPolicy. Namespaces are labelled with a security level: `privileged` (unrestricted), `baseline` (minimal restrictions), or `restricted` (hardened). Pods violating the policy are rejected or warned at creation time."
      },
      {
        q: "What does running a container as a non-root user achieve?",
        opts: [
          "It makes the container run faster by reducing kernel overhead",
          "It limits the damage if the container is compromised — the attacker has user-level access rather than root, making container escape harder",
          "It prevents the container from using more than 512MB of memory",
          "It allows the container to run without a securityContext"
        ],
        answer: 1,
        explain: "Root inside a container can mean root on the host if the container escapes. Running as a non-root user (e.g., uid 1000) adds a critical security layer. Set `runAsNonRoot: true` and `runAsUser: 1000` in the Pod's `securityContext`."
      },
      {
        q: "What is image signing, and why does it matter for supply chain security?",
        opts: [
          "Adding your company logo to Docker images for branding",
          "Cryptographically signing container images so consumers can verify the image was built by a trusted source and has not been tampered with",
          "Encrypting image layers so they cannot be decompressed by attackers",
          "Adding a digital watermark to identify who pushed the image to the registry"
        ],
        answer: 1,
        explain: "Image signing (using tools like Cosign from the Sigstore project) attaches a cryptographic signature to an image. Combined with a policy admission controller like Kyverno or OPA Gatekeeper, you can ensure only signed images from your own CI pipelines are allowed to run in the cluster."
      },
      {
        q: "What is Open Policy Agent (OPA) / Gatekeeper used for in Kubernetes?",
        opts: [
          "A service mesh that encrypts all Pod-to-Pod traffic",
          "A policy engine that enforces custom admission policies — e.g., 'all Deployments must have resource limits', 'images must come from our approved registry'",
          "A secrets manager that integrates with HashiCorp Vault",
          "A Kubernetes dashboard for visualising RBAC policies"
        ],
        answer: 1,
        explain: "OPA Gatekeeper is a Kubernetes admission controller powered by the Rego policy language. Platform teams write policies as ConstraintTemplates, and any resource violating the policy is rejected at creation time. This enforces organisational standards automatically."
      },
      {
        q: "What does `readOnlyRootFilesystem: true` do in a container securityContext?",
        opts: [
          "Makes the container's filesystem visible to other containers in the Pod",
          "Mounts the container's root filesystem as read-only — preventing malware from writing to disk or modifying the application",
          "Prevents the container from reading files outside its working directory",
          "Encrypts all files written to the container's filesystem"
        ],
        answer: 1,
        explain: "`readOnlyRootFilesystem: true` is a defence-in-depth control. Even if an attacker gains code execution, they cannot write malware to disk, modify binaries, or persist changes. Applications that need to write files should use mounted volumes instead."
      },
      {
        q: "What is a Kubernetes Secret and what is its main limitation?",
        opts: [
          "Kubernetes Secrets are fully encrypted and completely secure by default",
          "Kubernetes Secrets store sensitive data but are only base64-encoded (not encrypted) by default in etcd — requiring encryption at rest and access controls to be truly secure",
          "Kubernetes Secrets are binary files that cannot be viewed in plain text",
          "Kubernetes Secrets expire after 30 days automatically"
        ],
        answer: 1,
        explain: "Kubernetes Secrets are base64-encoded, not encrypted. Anyone with etcd access can decode them. Enable encryption at rest (EncryptionConfiguration), use RBAC to restrict Secret access, and consider external secret managers (Vault, AWS Secrets Manager) for production."
      },
      {
        q: "What tool helps developers detect secrets accidentally committed to a Git repository?",
        opts: [
          "kubectl audit",
          "Gitleaks",
          "Trivy",
          "kube-bench"
        ],
        answer: 1,
        explain: "Gitleaks scans Git history for hardcoded secrets — API keys, passwords, tokens, private keys. It can be run as a pre-commit hook or in CI to catch secrets before or after they reach the repository. GitGuardian is a SaaS alternative."
      },
      {
        q: "What is kube-bench?",
        opts: [
          "A load testing tool for Kubernetes APIs",
          "A tool that runs the CIS Kubernetes Benchmark — checking cluster configuration against security best practices",
          "A Kubernetes-native penetration testing tool",
          "A benchmarking tool for measuring Pod startup times"
        ],
        answer: 1,
        explain: "kube-bench by Aqua Security runs the CIS (Center for Internet Security) Kubernetes Benchmark checks. It tests node and control plane configurations against security best practices — checking things like API server flags, etcd security, and file permissions."
      },
      {
        q: "What is the purpose of `allowPrivilegeEscalation: false` in a securityContext?",
        opts: [
          "It prevents the container from being assigned more CPU than requested",
          "It prevents processes inside the container from gaining more privileges than the container process itself — blocking setuid binaries and sudo",
          "It stops the container from escalating its resource limits",
          "It prevents privilege escalation at the cluster level by other users"
        ],
        answer: 1,
        explain: "`allowPrivilegeEscalation: false` corresponds to the `no_new_privs` Linux flag. It prevents child processes from gaining additional privileges via setuid or setgid bits. This is a key hardening control in the Kubernetes restricted Pod security standard."
      },
      {
        q: "In a zero-trust security model, what is the guiding principle?",
        opts: [
          "Trust all traffic inside the cluster network; only validate traffic entering from outside",
          "Never trust, always verify — every request must be authenticated and authorised regardless of network location",
          "Trust all traffic from internal IPs; block all external traffic",
          "Zero trust means using no TLS certificates inside the cluster"
        ],
        answer: 1,
        explain: "Zero trust assumes breach — never trust based on network location alone. Every service-to-service call must be authenticated (mTLS via a service mesh like Istio or Linkerd) and authorised. This prevents lateral movement if one service is compromised."
      },
      {
        q: "What is mTLS (mutual TLS) and why is it important in microservice architectures?",
        opts: [
          "A TLS extension that doubles encryption strength",
          "Both sides of a connection authenticate each other with certificates — ensuring service A can only talk to verified service B, encrypting all traffic in transit",
          "A multi-tenant TLS policy for Kubernetes namespaces",
          "TLS with multiple certificate authorities for redundancy"
        ],
        answer: 1,
        explain: "In standard TLS, only the server presents a certificate. In mTLS, both client and server present certificates. Service meshes (Istio, Linkerd) can enforce mTLS automatically for all Pod-to-Pod communication, providing authentication and encryption without code changes."
      },
      {
        q: "What should a platform team do when a critical CVE is found in a base image used across many services?",
        opts: [
          "Wait for each team to update their own Dockerfile manually",
          "Update the base image version in the shared golden path template and trigger automated rebuilds — all services using the template get the fix when they next rebuild",
          "Mark the CVE as accepted risk and document it in the runbook",
          "Rebuild only the services that are externally exposed"
        ],
        answer: 1,
        explain: "This is where platform engineering shows its value. A platform team maintains a curated set of base images. When a CVE is found, they update the base image, update the golden path template, and notify teams. Services that use the standard base get patched through their normal pipeline without manual intervention."
      }
    ]
  }
,

  // ─────────────────────────────────────────────────────────────
  {
    id: "golden_paths",
    title: "Golden Path Templates",
    icon: "✨",
    level: "Intermediate",
    color: "#e3b341",
    desc: "Backstage Software Templates, scaffolding, cookiecutter patterns, and paved roads.",
    questions: [
      {
        q: "What is the core purpose of a golden path template in platform engineering?",
        opts: [
          "To enforce a single programming language across all teams",
          "To provide a pre-approved, opinionated starting point that encodes best practices so developers get security, CI/CD, and observability correctly configured from day one",
          "To generate infrastructure cost estimates before a project starts",
          "To replace the need for code reviews by automating compliance checks"
        ],
        answer: 1,
        explain: "Golden path templates make the right way the easy way. A developer fills in a form, and the template provisions a repository with a Dockerfile, Kubernetes manifests, CI/CD pipeline, catalog entry, and monitoring config — all pre-wired to platform standards."
      },
      {
        q: "In Backstage, what file type defines a Software Template?",
        opts: [
          "A template.json file in the Backstage app directory",
          "A catalog-info.yaml with kind: Template stored in the template's own repository",
          "A .backstage file at the root of each service repository",
          "A TypeScript file registered in the Backstage app-config.yaml"
        ],
        answer: 1,
        explain: "A Backstage Software Template is defined as a `catalog-info.yaml` with `kind: Template`. It includes the input form (`spec.parameters`), the actions to execute (`spec.steps`), and an output declaration. It lives in its own repository and is registered in the catalog."
      },
      {
        q: "What does the `spec.parameters` section of a Backstage Software Template define?",
        opts: [
          "The Kubernetes resource limits for the scaffolded service",
          "The input form presented to the developer — collecting values like service name, owner, language, and description",
          "The list of Backstage plugins required to run the template",
          "The environment variables injected into the scaffolded service at runtime"
        ],
        answer: 1,
        explain: "`spec.parameters` uses JSON Schema to define a form rendered in the Backstage UI. Each field collects input that is later used in template steps — e.g., `{{ values.name }}` for the service name. You can add validation, descriptions, and default values."
      },
      {
        q: "What does the `publish:github` action in a Backstage template step do?",
        opts: [
          "Publishes the template itself to the GitHub Marketplace",
          "Creates a new GitHub repository and pushes the scaffolded files from the workspace to it",
          "Triggers a GitHub Actions workflow in the template repository",
          "Publishes a GitHub release with the scaffolded code as an artefact"
        ],
        answer: 1,
        explain: "`publish:github` is a built-in Backstage scaffolder action. It creates a new GitHub repository (with the specified name, owner, and visibility) and pushes all files accumulated in the scaffolding workspace to it. The repository URL is available as an output."
      },
      {
        q: "What does the `catalog:register` action do at the end of a Backstage template?",
        opts: [
          "Registers the template itself in the Backstage catalog for reuse",
          "Registers the newly created service's catalog-info.yaml in the Backstage catalog so it immediately appears in the Software Catalog",
          "Creates a new catalog database entry in PostgreSQL",
          "Registers the service's container image in the Docker registry"
        ],
        answer: 1,
        explain: "`catalog:register` tells Backstage to import the `catalog-info.yaml` from the newly created repository. Without this step, the developer would need to manually register their new service. With it, the service appears in the catalog as soon as scaffolding completes."
      },
      {
        q: "What is a Cookiecutter template and how does it relate to Backstage templates?",
        opts: [
          "Cookiecutter is a Backstage plugin for generating cookies (session tokens)",
          "Cookiecutter is a Python-based project scaffolding tool; Backstage can use `fetch:cookiecutter` to scaffold from Cookiecutter templates, enabling reuse of existing templates",
          "Cookiecutter and Backstage templates are mutually exclusive — you must choose one",
          "Cookiecutter is the file format Backstage uses internally for all templates"
        ],
        answer: 1,
        explain: "Cookiecutter is an older Python templating tool with a large library of community templates. The Backstage `fetch:cookiecutter` scaffolder action can use Cookiecutter templates, letting teams migrate existing templates to Backstage without rewriting them."
      },
      {
        q: "What templating syntax does Backstage use inside skeleton files to inject values from the parameter form?",
        opts: [
          "Jinja2 syntax: {{ variable_name }}",
          "Nunjucks/Jinja-style: ${{ values.name }}",
          "Handlebars syntax: {{ values.name }}",
          "ERB syntax: <%= values.name %>"
        ],
        answer: 2,
        explain: "Backstage's scaffolder uses Nunjucks (a JavaScript templating engine similar to Jinja2). Inside skeleton files, `${{ values.name }}` is replaced with the value collected in the form. The `${{` prefix distinguishes it from GitHub Actions expressions."
      },
      {
        q: "What is a 'skeleton' directory in a Backstage Software Template?",
        opts: [
          "A minimal Backstage installation with no plugins",
          "The directory containing the template files that will be copied and rendered to create the new service's repository contents",
          "A Kubernetes manifest skeleton generated by the Helm chart",
          "An empty directory structure created in the developer's local machine"
        ],
        answer: 1,
        explain: "The `skeleton/` directory (referenced by `fetch:template`) contains the actual files that will be templated and committed to the new repository. It includes the `Dockerfile`, `k8s/` manifests, `catalog-info.yaml`, GitHub Actions workflows, and `README.md` — all with `${{ values.* }}` placeholders."
      },
      {
        q: "What is the golden path anti-pattern known as the 'ivory tower platform'?",
        opts: [
          "A platform built entirely from open-source tools without vendor support",
          "A platform built by platform engineers in isolation without developer input — resulting in tooling that is theoretically correct but practically ignored because it does not solve real developer pain points",
          "A platform that costs too much to maintain and is decommissioned",
          "A platform that only supports one programming language"
        ],
        answer: 1,
        explain: "The ivory tower anti-pattern occurs when platform teams design golden paths based on what they think developers need, rather than what developers actually struggle with. The result is low adoption. The fix is talking to developers, measuring pain points, and iterating."
      },
      {
        q: "How can a Backstage template enforce that a new service name follows a naming convention (e.g., lowercase, no spaces)?",
        opts: [
          "It cannot — naming validation must be done in a separate CI check",
          "By adding a `pattern` constraint in the JSON Schema parameter definition for the name field",
          "By using a custom Backstage plugin that validates names post-scaffolding",
          "By requiring the developer to fill in a separate validation form after the template runs"
        ],
        answer: 1,
        explain: "JSON Schema supports `pattern` for regex validation, `minLength`/`maxLength`, and `enum` for allowed values. Example: `pattern: '^[a-z0-9-]+$'` enforces lowercase alphanumeric with hyphens only. Invalid input shows an error before the template runs."
      },
      {
        q: "What is the purpose of a 'technology picker' step in a golden path template?",
        opts: [
          "It automatically picks the cheapest cloud provider for the service",
          "It presents the developer with a curated list of approved languages, frameworks, or deployment targets — ensuring choice within boundaries the platform team supports",
          "It selects the Kubernetes node with the most available resources",
          "It picks the best Grafana dashboard template for the service type"
        ],
        answer: 1,
        explain: "A technology picker gives developers freedom within guardrails. Instead of allowing any stack, the template offers approved options (e.g., Node.js, Python, Go). Each choice renders different skeleton files. This balances developer autonomy with platform supportability."
      },
      {
        q: "What Backstage template action would you use to create a new namespace in Kubernetes as part of scaffolding?",
        opts: [
          "kubernetes:create-namespace",
          "A custom scaffolder action written in TypeScript that calls the Kubernetes API",
          "kubectl:apply",
          "fetch:template with namespace.yaml in the skeleton"
        ],
        answer: 1,
        explain: "Backstage has no built-in `kubernetes:create-namespace` action. You write a custom scaffolder action in TypeScript using the `@backstage/plugin-scaffolder-backend` SDK, which calls the Kubernetes API. Custom actions are a core extensibility pattern for platform-specific provisioning."
      },
      {
        q: "Why should a golden path template create a Kubernetes namespace per service rather than deploying all services to a shared default namespace?",
        opts: [
          "Kubernetes requires one namespace per service for technical reasons",
          "Separate namespaces provide isolation boundaries for RBAC, NetworkPolicies, resource quotas, and make it easy to tear down all resources for a service at once",
          "It reduces Kubernetes API calls because namespace-scoped queries are faster",
          "Docker images are namespace-specific and cannot be shared across namespaces"
        ],
        answer: 1,
        explain: "Per-service namespaces enable clean RBAC (the service's CI only has access to its own namespace), NetworkPolicies that scope traffic, resource quotas per service, and trivial teardown (`kubectl delete namespace my-service` removes everything). The default namespace is an anti-pattern for production."
      },
      {
        q: "What output should a well-designed Backstage template display to the developer after successful scaffolding?",
        opts: [
          "Only a success message — links are not necessary",
          "The links to the new GitHub repository, the Backstage catalog entry, the CI pipeline run, and (if deployed) the service URL",
          "A list of all files created in the skeleton directory",
          "The raw YAML of the catalog-info.yaml that was registered"
        ],
        answer: 1,
        explain: "The `spec.output.links` section of a template definition provides actionable links. A developer should immediately be able to click through to their new GitHub repo, see their catalog entry in Backstage, and check their first CI pipeline run — reducing friction and demonstrating platform value."
      },
      {
        q: "What is the difference between a 'paved road' and a 'guardrail' in platform engineering terminology?",
        opts: [
          "They are identical terms used interchangeably",
          "A paved road is the happy path (making best practices easy); a guardrail prevents dangerous choices (blocking non-compliant configurations) — both together create a safe, productive developer experience",
          "A paved road is for beginner developers; guardrails are for senior engineers",
          "Paved roads are automated; guardrails require manual approval"
        ],
        answer: 1,
        explain: "Paved roads (golden paths) make correct behaviour easy and fast. Guardrails (OPA policies, admission controllers, required branch protections) prevent dangerous behaviour. The best platforms combine both: developers move quickly on the paved road, guardrails catch mistakes automatically."
      },
      {
        q: "What is Roadie in the context of Backstage?",
        opts: [
          "A Backstage plugin for managing on-call schedules",
          "A managed SaaS platform for Backstage that handles hosting, upgrades, and plugin management so teams can focus on templates and content rather than infrastructure",
          "The Backstage CLI tool for scaffolding new plugins",
          "A Kubernetes operator that manages Backstage deployments"
        ],
        answer: 1,
        explain: "Roadie.io is a managed Backstage-as-a-service platform. Instead of self-hosting Backstage, teams use Roadie for the portal infrastructure and focus their time on building golden path templates and catalog content. It is popular with teams that want Backstage value without operational overhead."
      },
      {
        q: "How should a golden path template handle the CI/CD pipeline for a new service?",
        opts: [
          "Leave CI/CD setup to the developer — templates should only scaffold code",
          "Include a pre-configured GitHub Actions (or equivalent) workflow file in the skeleton that is ready to build, test, and deploy on first commit",
          "Send an automated ticket to the DevOps team to set up the pipeline",
          "Create CI/CD configuration only after the service passes a manual review"
        ],
        answer: 1,
        explain: "A mature golden path includes a `.github/workflows/ci.yml` in the skeleton. The developer's first `git push` triggers a working pipeline — build, test, image build, push to registry, and deploy to dev. Zero manual pipeline setup. This is a defining feature of a productive platform."
      },
      {
        q: "What is a 'template adoption rate' metric and why does it matter?",
        opts: [
          "The number of templates created per month by the platform team",
          "The percentage of new services created using platform-provided golden path templates vs started from scratch — a key indicator of platform value and developer trust",
          "The speed at which templates execute in the Backstage scaffolder",
          "The number of template downloads from the Backstage plugin marketplace"
        ],
        answer: 1,
        explain: "Template adoption rate measures whether developers actually use what the platform team built. Low adoption (< 50%) signals templates are too restrictive, hard to use, or don't match real needs. High adoption (> 80%) proves platform value. Track it per template and over time."
      },
      {
        q: "What is the recommended way to test a Backstage Software Template before making it available to all developers?",
        opts: [
          "Templates cannot be tested — only deployed directly to production Backstage",
          "Run the template in a staging Backstage instance, verify all actions complete, check the generated repository, and have a developer unfamiliar with the template walk through it",
          "Validate only the catalog-info.yaml with `backstage-cli validate`",
          "Test templates by reading the YAML — no execution is needed"
        ],
        answer: 1,
        explain: "Test templates end-to-end in a staging environment. Verify each action completes (repository created, catalog registered, CI triggered), review the generated skeleton files, and conduct user testing with a real developer. The goal is zero friction from form to running service."
      },
      {
        q: "What does it mean to 'version' a golden path template?",
        opts: [
          "Assigning a numeric version to each template run for audit purposes",
          "Maintaining multiple versions of a template (e.g., v1, v2) so existing services continue to work while new services get updated defaults — enabling non-breaking evolution of platform standards",
          "Versioning is not applicable to templates — they are always replaced in place",
          "Using Git tags on the Backstage repository to track template changes"
        ],
        answer: 1,
        explain: "Platform standards evolve. A v2 template might add OpenTelemetry instrumentation by default. Instead of breaking services on v1, maintain both versions and migrate teams incrementally. Reference the template version in catalog-info.yaml annotations for traceability."
      }
    ]
  }
,

  // ─────────────────────────────────────────────────────────────
  {
    id: "adoption_metrics",
    title: "Platform Adoption & Metrics",
    icon: "📈",
    level: "Intermediate",
    color: "#58a6ff",
    desc: "Driving adoption, measuring platform ROI, DORA metrics deep-dive, and developer experience.",
    questions: [
      {
        q: "What is the most reliable leading indicator that a platform is genuinely helping developers?",
        opts: [
          "The number of features the platform has shipped",
          "Developer NPS (Net Promoter Score) — whether developers would recommend the platform to a colleague",
          "The uptime percentage of the platform infrastructure",
          "The number of Backstage plugins installed"
        ],
        answer: 1,
        explain: "Developer NPS directly measures the thing that matters: do developers find the platform valuable enough to recommend? High NPS (50+) signals genuine usefulness. Track it quarterly with a simple survey. Low NPS is an early warning before developers abandon the platform."
      },
      {
        q: "What is the SPACE framework in the context of developer productivity?",
        opts: [
          "A Kubernetes scheduling algorithm for resource allocation",
          "A framework measuring developer productivity across five dimensions: Satisfaction, Performance, Activity, Communication/Collaboration, and Efficiency",
          "A GitHub project management framework for platform teams",
          "A set of SLOs for measuring platform infrastructure performance"
        ],
        answer: 1,
        explain: "SPACE (by GitHub researchers) defines developer productivity holistically — not just lines of code. Satisfaction & Wellbeing, Performance, Activity, Communication, and Efficiency. It helps platform teams design metrics that capture the full developer experience rather than just deployment counts."
      },
      {
        q: "What does 'time to first deployment' measure and why is it important?",
        opts: [
          "How long it takes to deploy to production after a PR is merged",
          "How long it takes a brand-new developer or service to go from nothing to a service running in the target environment — the ultimate test of platform onboarding experience",
          "The total time a deployment pipeline takes to run",
          "How long the platform has been running since its first ever deployment"
        ],
        answer: 1,
        explain: "Time to first deployment is the end-to-end onboarding metric. World-class platforms get a new developer from zero to a deployed, observable service in under a day (often under an hour). It measures whether your golden paths, docs, and self-service actually work."
      },
      {
        q: "What is Deployment Frequency (one of the four DORA metrics)?",
        opts: [
          "The number of deployments that failed in the last 30 days",
          "How often a team successfully deploys code to production — elite performers deploy multiple times per day",
          "How often the deployment pipeline runs, including failed runs",
          "The frequency at which deployment approvals are requested"
        ],
        answer: 1,
        explain: "Deployment Frequency measures how often a team ships to production. DORA research classifies performers: Elite (multiple times/day), High (daily–weekly), Medium (weekly–monthly), Low (< monthly). A good platform removes friction, enabling teams to move from Low/Medium to High/Elite."
      },
      {
        q: "What is Change Failure Rate (CFR)?",
        opts: [
          "The percentage of deployments that cause a degradation requiring hotfix, rollback, or incident",
          "The rate at which developers reject platform team change requests",
          "How often a Kubernetes rolling update fails to complete",
          "The percentage of CI pipeline runs that fail due to test failures"
        ],
        answer: 0,
        explain: "Change Failure Rate is the % of deployments that result in a failure requiring remediation. Elite teams achieve < 5% CFR. A high CFR (> 30%) indicates poor test coverage, inadequate staging environments, or insufficient canary/progressive delivery practices."
      },
      {
        q: "What is Mean Time to Recovery (MTTR)?",
        opts: [
          "The average time it takes to deploy a hotfix after a bug is discovered in code review",
          "The average time from a production incident starting to service being fully restored",
          "The time it takes to recover a deleted Kubernetes namespace",
          "How long it takes for a new engineer to recover from onboarding and become productive"
        ],
        answer: 1,
        explain: "MTTR measures incident recovery speed. Elite teams restore service in under an hour. A platform contributes to low MTTR by providing fast rollback mechanisms (ArgoCD, `kubectl rollout undo`), runbooks in TechDocs, and observability (Grafana/Loki) that accelerates root cause analysis."
      },
      {
        q: "What is a platform adoption funnel?",
        opts: [
          "A marketing funnel for recruiting platform engineers",
          "A framework tracking developer progression: Aware → Trying → Using → Advocating — showing where developers drop off in platform adoption",
          "The sequence of steps a new service must complete to get to production",
          "A Kubernetes resource quota funnel that limits resource consumption"
        ],
        answer: 1,
        explain: "The adoption funnel tracks: do developers know the platform exists (Aware)? Have they tried it (Trying)? Do they use it regularly (Using)? Do they advocate for it (Advocating)? Drop-offs at each stage point to specific problems — docs, usability, missing features, or trust."
      },
      {
        q: "What is an effective strategy for increasing platform adoption when developers are resistant?",
        opts: [
          "Mandate platform use by policy and enforce compliance checks",
          "Embed platform engineers in product teams as internal consultants — demonstrating platform value by solving real team problems, then letting word of mouth drive adoption",
          "Block deployments unless teams use the platform's golden paths",
          "Offer financial incentives to teams that adopt the platform first"
        ],
        answer: 1,
        explain: "Mandates create resentment and workarounds. The most successful adoption strategy is embedding platform engineers in product teams (office hours, pair programming) to demonstrate value on real problems. Teams that see a 10x improvement become advocates who pull in their peers."
      },
      {
        q: "What does 'cognitive load' reduction look like quantitatively?",
        opts: [
          "Measuring IQ scores before and after platform training",
          "Tracking the number of systems a developer needs to understand and configure to ship a service — reducing from 15 tools to 1 portal is a measurable cognitive load reduction",
          "Counting the number of Slack channels a developer is in",
          "Measuring the number of browser tabs open during a deployment"
        ],
        answer: 1,
        explain: "Before a platform: a developer must know Git, Docker, Kubernetes, Terraform, CI/CD system, monitoring tool, secrets manager, registry — 8+ tools. After: they use one portal (Backstage) to do everything. Track 'number of tools a developer interacts with to deploy' as a concrete metric."
      },
      {
        q: "What is the Platform Engineering Maturity Model Level 1?",
        opts: [
          "Full IDP with self-service, GitOps, and observability",
          "Shared tooling — teams use common tools (Git, CI/CD) but there is no self-service; operations still require tickets",
          "AI-powered platform with automated remediation",
          "Multi-cloud platform with full cost management"
        ],
        answer: 1,
        explain: "Level 1 is 'Shared Tooling' — the organisation standardises on common tools but there is no real self-service. Developers still open tickets for infrastructure. This is where most organisations start. It is the foundation, but not yet a true platform."
      },
      {
        q: "How do you calculate the ROI of a platform engineering investment?",
        opts: [
          "ROI cannot be calculated for internal tools",
          "By measuring: time saved per developer per week × number of developers × cost per hour, minus platform team cost — typically a 5:1 to 20:1 return for mature platforms",
          "By counting the number of deployments per month before and after",
          "By comparing cloud infrastructure costs before and after platform adoption"
        ],
        answer: 1,
        explain: "Platform ROI = (developer time saved × number of developers × hourly cost) − platform team cost. If 100 developers save 4 hours/week at $100/hr: $40,000/week saved. A 5-person platform team costs ~$2,500/week in time. That is a 16:1 return — the standard business case."
      },
      {
        q: "What is an Internal Developer Portal (IDP) adoption metric that reflects catalog health?",
        opts: [
          "The number of Backstage plugins installed",
          "Catalog coverage — the percentage of production services registered in the software catalog with up-to-date ownership and documentation",
          "The number of daily active users of the Backstage UI",
          "The size of the catalog database in megabytes"
        ],
        answer: 1,
        explain: "Catalog coverage measures: what fraction of your production services are in the catalog with correct owners and linked docs? 100% coverage is the goal. Gaps mean orphaned services with no accountable owner. Track this weekly and use it to drive catalog hygiene."
      },
      {
        q: "What does 'platform toil' refer to?",
        opts: [
          "Hard work done by the platform team that is genuinely valuable",
          "Repetitive, manual, automatable work that platform engineers do instead of building features — e.g., manually provisioning environments, answering the same questions repeatedly",
          "Infrastructure cost from over-provisioned cloud resources",
          "Technical debt in the platform codebase"
        ],
        answer: 1,
        explain: "Toil (from Google SRE) is work that is manual, repetitive, automatable, and grows with scale. Platform teams should track toil as a percentage of their work time. If > 50% is toil, the team is an operations team, not a platform team. Automate toil to free capacity for platform improvement."
      },
      {
        q: "What metric directly measures whether your golden path templates are saving time?",
        opts: [
          "The number of lines of code in the template skeleton files",
          "Service bootstrapping time — the median time from a developer deciding to create a new service to having it deployed and observable, compared to before templates existed",
          "The number of template parameters in the scaffolding form",
          "How long the Backstage scaffolder takes to run"
        ],
        answer: 1,
        explain: "Before templates: bootstrapping might take 2 days (set up repo, Dockerfile, CI, K8s manifests, register catalog, wire monitoring). After templates: 10 minutes. Track this as P50 and P90 over time. It is the most compelling demonstration of template value."
      },
      {
        q: "What is 'platform SLA' and why should platform teams define one?",
        opts: [
          "A legal contract between the platform team and external customers",
          "A commitment on platform availability and support response times — e.g., '99.9% portal uptime, < 4 hour P1 incident response' — setting clear expectations and accountability",
          "A list of features the platform team commits to shipping each quarter",
          "A Service Level Agreement with the cloud provider for infrastructure"
        ],
        answer: 1,
        explain: "Platform teams are a service provider to developers. Defining a platform SLA (uptime, support response, deployment pipeline p99 duration) treats developers as customers and creates accountability. It also elevates the team's credibility — you cannot manage what you do not measure."
      },
      {
        q: "What is developer experience (DevEx) and how does it relate to platform engineering?",
        opts: [
          "The number of years of experience developers have",
          "The holistic quality of the tools, processes, and environment developers work in — platform engineering's core goal is to improve DevEx so developers can focus on building product features",
          "A user experience design practice applied to developer tools",
          "A certification framework for professional developers"
        ],
        answer: 1,
        explain: "Developer Experience (DevEx) encompasses every touchpoint a developer has with tools, processes, and systems. Platform engineering improves DevEx by reducing friction, eliminating toil, and providing fast, self-service paths to getting work done. High DevEx = more productive, happier developers."
      },
      {
        q: "What is a 'platform office hours' programme?",
        opts: [
          "Scheduled downtime windows for platform maintenance",
          "Regular time slots where platform engineers are available for developers to ask questions, get help, and provide feedback — a key adoption and feedback strategy",
          "Working hours during which the platform team is not allowed to make changes",
          "A weekly meeting where the platform team reviews its roadmap with leadership"
        ],
        answer: 1,
        explain: "Platform office hours create a regular, low-friction channel for developers to interact with the platform team. They surface adoption blockers, generate user feedback, and build relationships. Teams that run weekly office hours consistently report higher adoption and satisfaction scores."
      },
      {
        q: "What does it mean when a platform has 'high MTTR but low deployment frequency'?",
        opts: [
          "The platform is performing at elite DORA levels",
          "Teams take a long time to recover from incidents AND ship infrequently — indicating both reliability and agility problems, likely caused by fear of change and lack of automated rollback",
          "The platform is optimised for stability over speed",
          "This combination is normal for enterprise platforms"
        ],
        answer: 1,
        explain: "High MTTR + low deployment frequency is a dangerous combination: teams are afraid to deploy (low frequency) and when things break, recovery is slow (high MTTR). Root causes: inadequate testing, no automated rollback, poor observability. The platform needs golden paths that include all three."
      },
      {
        q: "What is the most effective way to demonstrate platform value to senior leadership?",
        opts: [
          "Show the architecture diagram of the platform infrastructure",
          "Present before/after DORA metrics, developer NPS scores, and a financial model showing developer time saved vs platform team cost",
          "List all the Backstage plugins that have been installed",
          "Show the GitHub repository commit history of the platform codebase"
        ],
        answer: 1,
        explain: "Executives care about business outcomes. Before/after DORA metrics show delivery improvement. Developer NPS shows satisfaction. A financial model (time saved × headcount × cost) shows ROI in terms leadership understands. Avoid technical details — lead with business impact."
      },
      {
        q: "What is 'inner source' and how does it relate to platform adoption?",
        opts: [
          "Using open-source software inside the company firewall",
          "Applying open-source collaboration practices (pull requests, issues, contributions) to internal platform code — allowing product teams to contribute improvements, building ownership and adoption",
          "An internal code review process modelled on GitHub code review",
          "A security model for keeping platform source code confidential"
        ],
        answer: 1,
        explain: "Inner source means the platform is not a black box — product teams can contribute to it via PRs. This turns users into co-owners, accelerates platform improvement, and dramatically increases adoption. Teams that contribute to a platform are far more likely to use it."
      }
    ]
  }
,

  // ─────────────────────────────────────────────────────────────
  {
    id: "security_compliance",
    title: "Security & Compliance",
    icon: "🛡️",
    level: "Intermediate",
    color: "#f85149",
    desc: "Policy as code, Vault, OPA, audit logging, supply chain security, and compliance frameworks.",
    questions: [
      {
        q: "What is 'policy as code' in platform engineering?",
        opts: [
          "Writing security policies in Python scripts that run on a schedule",
          "Expressing compliance and security rules as machine-readable code (e.g., Rego, YAML) that is version-controlled and automatically enforced by admission controllers — not relying on manual review",
          "Generating PDF policy documents from code comments",
          "Storing corporate security policies in a Git repository as markdown files"
        ],
        answer: 1,
        explain: "Policy as code means rules like 'all containers must set resource limits' or 'images must come from our registry' are written in code (Rego for OPA, YAML for Kyverno), version-controlled, tested, and enforced automatically. Manual policy review cannot scale; automated enforcement does."
      },
      {
        q: "What is Kyverno and how does it differ from OPA Gatekeeper?",
        opts: [
          "They are identical tools with different names",
          "Kyverno is a Kubernetes-native policy engine using YAML policies; OPA Gatekeeper uses the Rego language — Kyverno is generally easier to adopt, Rego offers more expressive power",
          "Kyverno is a secret management tool; OPA is a policy engine",
          "Kyverno enforces network policies; OPA enforces admission policies"
        ],
        answer: 1,
        explain: "Both are Kubernetes admission controllers, but with different policy languages. Kyverno policies are written in YAML — familiar to anyone who knows Kubernetes manifests. OPA Gatekeeper uses Rego, a purpose-built policy language that is more powerful but has a steeper learning curve."
      },
      {
        q: "What is HashiCorp Vault's dynamic secrets feature?",
        opts: [
          "Secrets that change value every time you read them",
          "Vault generates short-lived, unique credentials on demand — e.g., a database password valid for 15 minutes, automatically revoked after use — eliminating long-lived static credentials",
          "A feature that automatically rotates long-lived static secrets monthly",
          "Secrets stored in environment variables that update dynamically"
        ],
        answer: 1,
        explain: "Dynamic secrets are Vault's killer feature. Instead of a shared database password, each service gets a unique credential generated on request with a TTL (e.g., 15 minutes). When it expires, Vault revokes it automatically. A leaked credential is useless before anyone can misuse it."
      },
      {
        q: "What is SBOM (Software Bill of Materials) and why does it matter for compliance?",
        opts: [
          "A bill from a software vendor itemising licensing costs",
          "A formal inventory of all components, libraries, and dependencies in a software artefact — enabling organisations to identify affected services when a vulnerability (like Log4Shell) is discovered",
          "A Kubernetes manifest listing all deployed services",
          "A Git commit log formatted as a compliance document"
        ],
        answer: 1,
        explain: "An SBOM is like a food ingredients list for software. When a vulnerability like Log4Shell is disclosed, an SBOM lets you instantly query 'which of our services use log4j?' without manual scanning. Regulations (US Executive Order 14028) now require SBOMs for software sold to the US government."
      },
      {
        q: "What is the CIS Kubernetes Benchmark?",
        opts: [
          "A performance benchmark for Kubernetes API server throughput",
          "A set of security configuration best practices for Kubernetes clusters, published by the Center for Internet Security — covering API server, etcd, kubelet, and network configuration",
          "A compliance framework for Kubernetes licensing",
          "A tool that measures Kubernetes cluster resource utilisation"
        ],
        answer: 1,
        explain: "The CIS Kubernetes Benchmark provides prescriptive guidance on hardening Kubernetes. It covers settings like disabling anonymous authentication, enabling audit logging, restricting API server access, and securing etcd. kube-bench automates the checks."
      },
      {
        q: "What is audit logging in Kubernetes and what does it record?",
        opts: [
          "Application-level logs from containers",
          "A chronological record of all requests to the Kubernetes API server — who made the request, what action, on which resource, and what the response was",
          "Performance metrics from the Kubernetes scheduler",
          "Error logs from the container runtime"
        ],
        answer: 1,
        explain: "Kubernetes audit logs record every API server interaction: `user=alice, verb=delete, resource=pods/my-pod, namespace=production`. They are essential for security incident investigation, compliance (SOC 2, PCI), and detecting anomalous behaviour. Store them in a SIEM."
      },
      {
        q: "What is SOC 2 and when does it become relevant for a platform team?",
        opts: [
          "A Kubernetes security configuration standard",
          "A US auditing standard for service organisations covering security, availability, and confidentiality — platform teams must document controls around access management, encryption, logging, and change management to help their company achieve SOC 2 certification",
          "A cloud provider security certification for AWS and Azure",
          "A software development methodology focused on security"
        ],
        answer: 1,
        explain: "SOC 2 is a Type II audit evaluating how a company protects customer data over time. Platform teams are critical because they manage the infrastructure and tooling that processes data. Controls they implement — RBAC, audit logging, secret management, change management — directly feed SOC 2 evidence."
      },
      {
        q: "What is Sigstore's Cosign used for?",
        opts: [
          "Signing Git commits with GPG keys",
          "Signing and verifying container images — attaching a cryptographic signature so consumers can verify an image was built by a trusted CI pipeline and has not been tampered with",
          "Signing Kubernetes YAML manifests for GitOps",
          "Generating TLS certificates for internal services"
        ],
        answer: 1,
        explain: "Cosign (part of Sigstore) enables keyless container image signing using OIDC identity. A GitHub Actions workflow signs the image after build: `cosign sign --key cosign.key my-image:tag`. Combined with a Kyverno policy that requires signatures, only verified images can deploy."
      },
      {
        q: "What is the purpose of Kubernetes admission controllers in a security context?",
        opts: [
          "They authenticate users logging into the Kubernetes dashboard",
          "They intercept API requests before resources are persisted and can validate or mutate them — enforcing policies like 'no privileged containers' or 'all pods must have resource limits'",
          "They admit new nodes into the cluster after security checks",
          "They control which container registries nodes are allowed to pull from at the network level"
        ],
        answer: 1,
        explain: "Admission controllers (validating and mutating webhooks) are the last line of defence before a resource is written to etcd. OPA Gatekeeper and Kyverno are both webhook-based admission controllers. They can reject non-compliant resources at creation time, preventing bad configs from ever reaching the cluster."
      },
      {
        q: "What is the supply chain security risk known as a 'dependency confusion attack'?",
        opts: [
          "Using too many open-source dependencies causing build failures",
          "An attacker publishes a malicious package to a public registry (npm, PyPI) with the same name as a private internal package — package managers that check public registries first may pull the malicious version",
          "A misconfiguration where the wrong version of a dependency is pinned",
          "A social engineering attack targeting package maintainers"
        ],
        answer: 1,
        explain: "Dependency confusion exploits the search order of package managers. If your company has an internal package `acme-utils` and an attacker publishes a public `acme-utils` with a higher version number, npm/pip may pull the public (malicious) version. Mitigate by using private registry scoping and pinning exact versions."
      },
      {
        q: "What does 'shift-left security' mean in the context of platform engineering?",
        opts: [
          "Moving the security team to sit on the left side of the office floor plan",
          "Integrating security checks as early as possible in the development lifecycle — linting, secret detection, SAST, and image scanning in CI rather than a gate at the end",
          "Rotating secrets every 30 days instead of 90 days",
          "Shifting security responsibilities from the platform team to developers"
        ],
        answer: 1,
        explain: "Shift-left means catching security issues earlier when they are cheapest to fix. A vulnerability found in a developer's editor costs $80 to fix; found in production it costs $7,600 (NIST study). Platform golden paths implement shift-left by running Gitleaks, SAST (Semgrep), and Trivy scans in every CI pipeline."
      },
      {
        q: "What is a mutating admission webhook and what can it do?",
        opts: [
          "It permanently modifies the Kubernetes API server configuration",
          "It intercepts resource creation requests and can automatically modify the resource — e.g., inject sidecar containers, add default resource limits, or add security context settings that developers forgot",
          "It blocks API requests that violate mutation policies",
          "It mutates (rotates) secrets automatically"
        ],
        answer: 1,
        explain: "Mutating webhooks modify resources before they are stored. A platform team can use them to automatically inject: Istio sidecar proxies, Vault agent sidecars, default resource limits (if missing), and security context defaults. Developers get these automatically without needing to know about them."
      },
      {
        q: "What is SLSA (Supply-chain Levels for Software Artefacts)?",
        opts: [
          "A Kubernetes RBAC framework for service level access",
          "A security framework from Google defining four levels of supply chain integrity — from basic build provenance (Level 1) to fully hermetic, reproducible builds (Level 4)",
          "An SLA framework for software vendors",
          "A compliance checklist for ISO 27001 certification"
        ],
        answer: 1,
        explain: "SLSA (pronounced 'salsa') is a Google-originated framework for software supply chain security. Level 1: build is scripted. Level 2: signed provenance. Level 3: isolated build environment. Level 4: hermetic, reproducible builds. Most organisations target Level 2-3 for production services."
      },
      {
        q: "What is the principle behind Vault's AppRole authentication method?",
        opts: [
          "Application developers approve each other's Vault access requests",
          "A machine authentication method where an application uses a Role ID (public) and Secret ID (private) to authenticate to Vault — the Secret ID is injected at deploy time rather than stored with the app",
          "Applications authenticate to Vault using the Kubernetes service account token",
          "Vault creates a unique role for each application user automatically"
        ],
        answer: 1,
        explain: "AppRole separates the Role ID (can be stored in code/config) from the Secret ID (a one-time use secret injected at deploy time by the orchestrator). This is the 'two-man rule' for machine authentication. Kubernetes auth is often preferred in K8s environments as it uses the pod's native identity."
      },
      {
        q: "What does enabling etcd encryption at rest protect against?",
        opts: [
          "Network eavesdropping on etcd traffic between cluster nodes",
          "An attacker with direct filesystem access to the etcd data directory reading Kubernetes Secrets in plaintext",
          "Unauthorised API server access to etcd",
          "Data loss from etcd node failure"
        ],
        answer: 1,
        explain: "By default, Kubernetes Secrets stored in etcd are base64-encoded (not encrypted). If an attacker gains access to the etcd data directory (e.g., via a compromised node or cloud snapshot), they can read all Secrets. Encryption at rest (EncryptionConfiguration with AES-CBC or AES-GCM) prevents this."
      },
      {
        q: "What is a service mesh's role in platform security?",
        opts: [
          "It provides a graphical interface for managing Kubernetes security policies",
          "It automatically enforces mTLS between all services, provides traffic-level authorisation policies, and generates telemetry for security monitoring — without requiring application code changes",
          "It is a network security scanner for detecting misconfigurations",
          "It manages TLS certificates for ingress only"
        ],
        answer: 1,
        explain: "Service meshes (Istio, Linkerd, Cilium) operate at the infrastructure layer. They automatically add mTLS to every pod-to-pod connection, enforce AuthorizationPolicy (who can call which service), and generate rich telemetry. Developers get zero-trust networking without writing any auth code."
      },
      {
        q: "What compliance control is satisfied by requiring all Kubernetes Deployments to have a specific label set (e.g., `team`, `environment`, `cost-centre`)?",
        opts: [
          "Network segmentation control",
          "Asset inventory and accountability — every workload is tagged with ownership and business context, enabling audit trails, cost allocation, and incident routing",
          "Encryption at rest control",
          "Vulnerability management control"
        ],
        answer: 1,
        explain: "Mandatory labelling satisfies asset management and accountability controls required by SOC 2, ISO 27001, and PCI-DSS. A Kyverno policy that rejects deployments missing required labels ensures 100% coverage automatically. Platform teams enforce this as a baseline standard."
      },
      {
        q: "What is the purpose of a Security Champion programme in relation to platform engineering?",
        opts: [
          "Training platform engineers to replace the security team",
          "Embedding security-focused individuals in each product team who champion platform security tools, spread best practices, and act as a liaison between the platform/security team and developers",
          "A bug bounty programme for developers who find platform vulnerabilities",
          "A certification programme for Kubernetes security specialists"
        ],
        answer: 1,
        explain: "Security Champions are developers in product teams who have received security training and act as security advocates. They help their team use platform security tools (Trivy, Gitleaks, Vault), translate security requirements into developer-friendly terms, and reduce the bottleneck on a central security team."
      },
      {
        q: "What is the risk of using `latest` as a container image tag in production Kubernetes deployments?",
        opts: [
          "It causes slower image pulls because the registry must calculate the latest version",
          "It makes deployments non-reproducible — the same manifest can deploy different code depending on when it was applied, and `imagePullPolicy: IfNotPresent` may silently run stale images",
          "Kubernetes automatically blocks `latest` tags from deploying",
          "The `latest` tag requires additional permissions to pull from private registries"
        ],
        answer: 1,
        explain: "Using `latest` violates immutable infrastructure principles. Two identical deploys at different times may run different code. If something breaks, you cannot reproduce the previous state reliably. Always tag images with the Git SHA or semantic version. A Kyverno policy can reject `latest` tags at admission."
      },
      {
        q: "What is DAST (Dynamic Application Security Testing) and how can it be integrated into a platform's golden path CI pipeline?",
        opts: [
          "A static code analysis tool that runs before compilation",
          "Security testing that runs against a live, deployed application — e.g., OWASP ZAP scanning the staging URL — integrated as a CI step after deployment to catch runtime vulnerabilities",
          "A dependency scanning tool that checks package versions",
          "A type of penetration testing that is always done manually"
        ],
        answer: 1,
        explain: "DAST tests a running application by sending requests and analysing responses — finding issues like SQL injection, XSS, and auth bypasses that static analysis misses. Integrating OWASP ZAP or Burp API into the CD pipeline (scanning the staging deployment) automates DAST for every release."
      }
    ]
  }
,

  // ─────────────────────────────────────────────────────────────
  {
    id: "enterprise_platform",
    title: "Enterprise Platform Architecture",
    icon: "🏢",
    level: "Expert",
    color: "#ff7b72",
    desc: "Large-scale IDP design, multi-tenancy, platform teams, federated models, and organisational change.",
    questions: [
      {
        q: "What is Conway's Law and how does it influence enterprise platform design?",
        opts: [
          "A law stating that platforms must follow open-source standards",
          "The observation that software architecture mirrors the communication structure of the organisation that built it — enterprise platforms must be designed alongside org structure, not in spite of it",
          "A security law requiring separation of duties in platform teams",
          "A cost optimisation principle for cloud resource allocation"
        ],
        answer: 1,
        explain: "Conway's Law: 'organisations which design systems are constrained to produce designs which are copies of the communication structures of these organisations.' If your platform team is siloed from developers, the platform will be siloed from developer needs. Inverse Conway Manoeuvre: design the org structure to produce the desired architecture."
      },
      {
        q: "What is a 'platform team topology' in Team Topologies terminology?",
        opts: [
          "A network diagram showing how platform services communicate",
          "A dedicated team that provides self-service internal platforms that reduce cognitive load for stream-aligned (product) teams — one of the four fundamental team types in Team Topologies",
          "The hierarchical structure of engineers within the platform organisation",
          "A Kubernetes topology-spread constraint for platform workloads"
        ],
        answer: 1,
        explain: "Team Topologies (Skelton & Pais) defines four team types: Stream-aligned, Platform, Enabling, and Complicated Subsystem. Platform teams build and run internal products consumed by stream-aligned (product) teams via clear APIs, reducing cognitive load for product teams."
      },
      {
        q: "What is multi-tenancy in the context of an enterprise Kubernetes platform?",
        opts: [
          "Running multiple versions of Kubernetes side by side",
          "A single cluster serving multiple teams (tenants) with isolation between them via namespaces, RBAC, NetworkPolicies, and resource quotas — each team gets a secure, isolated slice of the cluster",
          "Multiple cloud providers serving the same cluster",
          "Multiple container runtimes installed on the same node"
        ],
        answer: 1,
        explain: "Multi-tenant Kubernetes lets many teams share cluster infrastructure cost-efficiently while maintaining security isolation. Isolation layers: namespaces (logical), RBAC (access control), NetworkPolicies (network), ResourceQuotas (resource fairness), and PodSecurity standards (workload hardening)."
      },
      {
        q: "What is a 'federated platform model' in a large enterprise?",
        opts: [
          "A platform that federates authentication across multiple identity providers",
          "A model where a central platform team sets standards and provides shared infrastructure, while federated platform engineers embedded in business units build domain-specific extensions on top",
          "Multiple independent platform teams with no coordination",
          "A Kubernetes federation that manages multiple clusters from one control plane"
        ],
        answer: 1,
        explain: "Pure centralisation does not scale in large enterprises. The federated model has a Core Platform Team (sets standards, manages shared clusters, provides base golden paths) and Embedded Platform Engineers in business units who build domain-specific templates and tooling on top of the core. This balances consistency and autonomy."
      },
      {
        q: "What is a Platform Engineering 'product roadmap' and why is it essential at enterprise scale?",
        opts: [
          "A technical document listing all Kubernetes versions the platform supports",
          "A prioritised plan of platform capabilities to build, based on developer feedback, business impact, and engineering capacity — communicated transparently to stakeholders like any external product roadmap",
          "A deployment schedule for platform updates",
          "A vendor evaluation matrix for platform tooling decisions"
        ],
        answer: 1,
        explain: "Without a roadmap, platform teams react to the loudest stakeholder rather than highest-value work. A public roadmap (quarterly themes, upcoming capabilities, what's in progress) builds trust with developers, enables capacity planning, and aligns platform investment with business priorities."
      },
      {
        q: "What is the 'thinnest viable platform' principle?",
        opts: [
          "Building the cheapest possible platform to reduce costs",
          "Starting with the minimum platform capabilities that provide measurable developer value — avoiding over-engineering and instead expanding based on real adoption and feedback",
          "A platform that runs only one service type",
          "A Kubernetes cluster with minimal node resources"
        ],
        answer: 1,
        explain: "Coined by Evan Bottcher: 'the thinnest viable platform that provides value to developers.' Over-building a platform before anyone uses it wastes engineering capacity and creates shelfware. Build the thin slice, measure adoption and pain points, then expand. Lean product thinking applied to platforms."
      },
      {
        q: "How should a platform team handle 'escape hatches' — teams that want to deviate from the golden path?",
        opts: [
          "Block all deviations — the golden path must be mandatory",
          "Allow deviations but with a formal RFC process, documented exception, and the team accepting ownership of the additional operational burden — the golden path remains the easy default",
          "Let teams do whatever they want — the golden path is only a suggestion",
          "Require executive approval for any deviation from platform standards"
        ],
        answer: 1,
        explain: "Good platforms have paved roads, not walls. Blocking all deviations creates adversarial relationships and shadow IT. Instead, have a lightweight RFC (request for comment) process: teams explain the deviation, document the trade-off, and accept operational ownership. The golden path stays easy; deviations are possible but explicit."
      },
      {
        q: "What is GitOps at enterprise scale and what are its main challenges?",
        opts: [
          "Using Git for all engineering communication, including email",
          "Using Git as the source of truth for all infrastructure and deployments across dozens of clusters and teams — challenges include repository structure, access control, secret management, and preventing config drift across clusters",
          "A branching strategy for platform teams managing multiple environments",
          "Running Git servers on-premise to avoid cloud dependency"
        ],
        answer: 1,
        explain: "Enterprise GitOps manages many clusters across environments. Key challenges: repo structure (mono-repo vs multi-repo), RBAC for who can change which environment, secrets (ESO or Vault), drift between clusters, and blast radius of changes. Tools: ArgoCD ApplicationSets, Flux with tenancy, and structured folder conventions."
      },
      {
        q: "What is ArgoCD ApplicationSet and why is it important for enterprise-scale deployments?",
        opts: [
          "A set of ArgoCD best practices published by the CNCF",
          "A controller that generates ArgoCD Application resources automatically from templates — enabling a single ApplicationSet to manage deployments to hundreds of clusters or across dozens of teams without manual Application creation",
          "A paid enterprise feature of ArgoCD for large organisations",
          "A Kubernetes CRD that groups multiple Deployments into a single release unit"
        ],
        answer: 1,
        explain: "ApplicationSet uses generators (List, Cluster, Git, Matrix) to create hundreds of ArgoCD Applications from a single template. Example: a Cluster generator creates one Application per cluster, deploying the same service to all 50 clusters automatically. Essential for enterprise GitOps at scale."
      },
      {
        q: "What is the Platform Engineering 'Enabling Team' pattern from Team Topologies?",
        opts: [
          "A team that manages access control and permissions for the platform",
          "A temporary team of specialists that helps other teams (stream-aligned or platform) acquire new capabilities — e.g., helping product teams adopt Kubernetes, then stepping back once the team is self-sufficient",
          "A team that enables the platform team by providing infrastructure resources",
          "A team responsible for enabling monitoring and alerting on the platform"
        ],
        answer: 1,
        explain: "Enabling teams run as temporary specialists who uplift capability. A platform team might stand up an enabling team to help product teams migrate to Kubernetes or adopt observability tooling. The goal is always for the enabling team to work itself out of a job by making the product team self-sufficient."
      },
      {
        q: "What is a 'capability model' for platform engineering maturity assessment?",
        opts: [
          "A list of cloud provider capabilities the platform uses",
          "A structured framework (like the CNCF Platform Maturity Model) that defines capability domains — provisioning, observability, security, developer experience — and maturity levels for each, used to assess gaps and plan investments",
          "A diagram of the platform team's technical skills",
          "A capacity planning tool for Kubernetes resource allocation"
        ],
        answer: 1,
        explain: "Capability models (Microsoft's six-capability model, CNCF's Platform Maturity Model, Gartner's) give a structured way to assess where you are and where to invest next. Each capability domain (self-service, observability, security, etc.) has levels 1-5. Assessing against it produces a heat map of gaps."
      },
      {
        q: "What is the primary risk of a platform team becoming a 'platform tax' on the organisation?",
        opts: [
          "The platform team hires too many expensive engineers",
          "When the overhead of complying with platform standards costs teams more time than the platform saves — caused by overly rigid processes, excessive required metadata, or slow self-service that still requires tickets",
          "The platform team charges internal chargebacks for resource usage",
          "The platform costs too much in cloud infrastructure spending"
        ],
        answer: 1,
        explain: "Platform tax happens when compliance burden exceeds the value delivered. Signs: teams route around the platform, build shadow tooling, or complain that the platform slows them down. Fix: measure the overhead you impose (required labels, mandatory reviews, pipeline gates) and ensure each one delivers value greater than its cost."
      },
      {
        q: "What is 'platform engineering org design' — how should a platform team be structured at a 1000-person engineering organisation?",
        opts: [
          "One platform engineer per 10 developers, reporting to the CTO directly",
          "Typically a Core Platform team (10-15 engineers) for shared infrastructure and standards, plus embedded platform engineers (1-2 per business unit) for domain-specific tooling — total: 40-60 platform engineers for 1000 developers",
          "A single centralised platform team of 5 engineers handling all requests",
          "Platform engineering should be outsourced at this scale"
        ],
        answer: 1,
        explain: "At 1000 developers the federated model applies: a Core Platform team owns shared clusters, golden paths, and standards; embedded platform engineers in each business unit (50-100 developers) handle domain needs. The 20:1 developer-to-platform-engineer ratio suggests 50 platform engineers total — split roughly 15 core + 35 embedded."
      },
      {
        q: "What is a 'platform API contract' and why is it important?",
        opts: [
          "A legal agreement between the platform team and product teams",
          "The stable interface the platform exposes to developers — e.g., Backstage template inputs, Kubernetes namespace request process, secret access patterns — that must be versioned and backwards-compatible to avoid breaking product teams",
          "An OpenAPI specification for the platform's REST API",
          "A service level agreement between the platform and security team"
        ],
        answer: 1,
        explain: "Platform teams are like an internal open-source project — they have 'users' (developers) who build on their APIs. Breaking the platform API (changing template input names, removing features) breaks product teams. Version your APIs, communicate deprecations in advance, and maintain compatibility windows like any external API."
      },
      {
        q: "What is the 'platform team as product team' operating model?",
        opts: [
          "Platform teams are identical to product teams and should be managed the same way",
          "Treating the platform as a product with developers as customers — running a product backlog, quarterly planning, user research, measuring NPS, and prioritising features by developer impact rather than technical preference",
          "Product teams should own and operate the platform instead of a dedicated team",
          "Platform teams should build commercial products to generate revenue"
        ],
        answer: 1,
        explain: "The most successful platform teams operate with full product discipline: product manager (or TPM), designer for developer experience, quarterly themes, user interviews, backlog grooming, and metrics-driven prioritisation. The platform roadmap is informed by what developers need to deliver business value, not what platform engineers find interesting."
      },
      {
        q: "What is Backstage's TechDocs contribution to enterprise knowledge management?",
        opts: [
          "It replaces Confluence and all existing documentation systems",
          "It enables docs-as-code — documentation lives with the code, is reviewed in PRs, and is rendered in Backstage alongside the service's catalog entry — reducing documentation drift and making docs discoverable",
          "It automatically generates documentation from code comments and OpenAPI specs",
          "It provides a wiki system that only platform engineers can edit"
        ],
        answer: 1,
        explain: "TechDocs solves the 'documentation cemetery' problem — docs that are out of date the moment they are published. By keeping docs in the same repository as the service, they are updated with the code, reviewed in PRs, and versioned with Git. Developers find service documentation directly in Backstage without hunting through Confluence."
      },
      {
        q: "What is a 'golden path library' (as distinct from individual golden path templates)?",
        opts: [
          "A npm package containing Backstage utility functions",
          "A curated collection of approved, maintained golden path templates covering the organisation's full technology portfolio — microservices, ML models, data pipelines, frontend apps — versioned and discoverable in Backstage",
          "A library of Terraform modules for cloud resources",
          "A catalogue of Helm charts maintained by the platform team"
        ],
        answer: 1,
        explain: "A mature platform maintains a library of templates covering every service archetype the organisation builds. Each template is versioned, maintained, and rated by developer satisfaction. Teams can browse and compare templates in Backstage. The library grows as new archetypes emerge (ML inference endpoints, event-driven services, etc.)."
      },
      {
        q: "In an enterprise, what is the recommended approach for Kubernetes cluster topology — one large cluster or many smaller clusters?",
        opts: [
          "Always one large cluster — it is cheaper and simpler to manage",
          "Always many small clusters — one per team",
          "A hub-spoke model: one or a few management/tooling clusters, plus separate clusters per environment (dev, staging, prod) and possibly per business domain — balancing isolation, cost, and operational complexity",
          "The number of clusters is determined solely by the cloud provider"
        ],
        answer: 2,
        explain: "The hub-spoke topology is the enterprise standard: a management cluster runs GitOps controllers and shared tooling; spoke clusters are dedicated to environments (dev, prod) and optionally domains. This gives blast-radius isolation (a prod incident does not affect dev), RBAC boundaries, and compliance separation, while remaining manageable."
      },
      {
        q: "What is 'platform observability' — observability of the platform itself, not just user workloads?",
        opts: [
          "Using Grafana to monitor the Backstage UI uptime",
          "Measuring the health, performance, and usage of all platform components (CI pipelines, Backstage, ArgoCD, Vault, cluster control planes) and platform-level SLOs — with dashboards, alerts, and capacity planning",
          "Observability of the platform team's productivity",
          "Monitoring network traffic between platform services"
        ],
        answer: 1,
        explain: "Platform observability means the platform team monitors its own product: ArgoCD sync latency, Backstage API response times, Vault secret fetch rates, CI pipeline p99 duration, cluster control plane health. Platform SLOs ('99.9% of deployments via ArgoCD complete in < 5 minutes') and error budgets apply to the platform team itself."
      },
      {
        q: "What does a successful enterprise platform transformation look like at the 18-month mark?",
        opts: [
          "All teams are using every platform feature; there are no exceptions or deviations",
          "DORA metrics have improved (higher deploy frequency, lower MTTR), developer NPS is positive and trending up, > 70% of new services use golden paths, and the platform has a clear roadmap aligned with business priorities",
          "The platform team has been dissolved because automation handles everything",
          "The platform has replaced all existing tooling — no legacy tools remain"
        ],
        answer: 1,
        explain: "Transformation success at 18 months: measurably better DORA metrics, high developer NPS, strong golden path adoption, and a platform team operating as a mature product organisation. 100% adoption and zero legacy tools is an unrealistic target — steady improvement, clear metrics, and growing trust are the real indicators of success."
      }
    ]
  }
,

  // ─────────────────────────────────────────────────────────────
  {
    id: "multicloud_ai",
    title: "Multi-Cloud & AI-Powered Platforms",
    icon: "🤖",
    level: "Expert",
    color: "#bc8cff",
    desc: "Crossplane, multi-cluster GitOps, FinOps, LLM integration, and AI-assisted developer experience.",
    questions: [
      {
        q: "What is Crossplane and how does it extend the Kubernetes API?",
        opts: [
          "A cross-cloud network overlay for Kubernetes clusters",
          "A Kubernetes add-on that lets you provision and manage cloud infrastructure (S3 buckets, RDS databases, VPCs) using Kubernetes YAML manifests and kubectl — turning Kubernetes into a universal control plane",
          "A tool for migrating workloads between cloud providers",
          "A Helm chart that packages multiple cloud provider CLIs"
        ],
        answer: 1,
        explain: "Crossplane installs CRDs into your Kubernetes cluster representing cloud resources. A developer applies a YAML manifest for an `RDSInstance`, and Crossplane's provider (e.g., provider-aws) reconciles that into a real AWS RDS instance. Developers use one workflow (kubectl) for both applications and infrastructure."
      },
      {
        q: "What is a Crossplane Composition?",
        opts: [
          "A Helm chart that composes multiple Kubernetes resources",
          "A Crossplane resource that defines how a high-level 'platform claim' (e.g., DatabaseInstance) is composed from lower-level managed resources (e.g., VPC + Subnet + RDS) — abstracting cloud-specific details from developers",
          "A GitOps configuration that composes ArgoCD Applications",
          "A multi-stage Terraform configuration"
        ],
        answer: 1,
        explain: "Compositions are the golden path mechanism in Crossplane. A developer requests a `DatabaseInstance` (the claim). The Composition defines how to fulfil that claim using real cloud resources. Developers never see AWS/Azure-specific details — the platform team owns the Composition and can change the underlying resources without affecting consumers."
      },
      {
        q: "What is the main challenge of multi-cloud Kubernetes management?",
        opts: [
          "Different cloud providers use incompatible container runtimes",
          "Consistent identity, networking, security policies, and tooling across clusters that each have provider-specific control planes, IAM models, networking primitives, and managed service APIs",
          "Kubernetes is not available on all three major cloud providers",
          "Multi-cloud requires running a different version of Kubernetes per cloud"
        ],
        answer: 1,
        explain: "Multi-cloud complexity is real: AWS uses IAM roles, Azure uses Managed Identity, GCP uses Workload Identity — all different. Networking models differ. Each cloud's managed services have unique APIs. The platform's job is to abstract these differences behind consistent interfaces so developers do not need to understand each cloud."
      },
      {
        q: "What is Cluster API (CAPI) used for?",
        opts: [
          "An API for querying Kubernetes cluster resource usage",
          "A Kubernetes sub-project that provides declarative, Kubernetes-style APIs for provisioning, upgrading, and managing the lifecycle of Kubernetes clusters themselves — on any infrastructure provider",
          "A REST API standard for Kubernetes cluster federation",
          "A tool for managing multi-cluster Kubernetes service meshes"
        ],
        answer: 1,
        explain: "Cluster API extends Kubernetes to manage Kubernetes. You define a Cluster object in YAML, and CAPI provisions the cluster on AWS, Azure, GCP, vSphere, or bare metal. This enables GitOps for cluster lifecycle — creating, upgrading, and deleting clusters the same way you manage applications."
      },
      {
        q: "What is FinOps and why is it important for platform engineering teams?",
        opts: [
          "A financial management framework for platform team headcount",
          "The practice of bringing financial accountability to cloud spending — platform teams implement FinOps through cost visibility (tagging, chargebacks), rightsizing automation, and tooling that surfaces per-team cloud costs",
          "A cloud provider billing management tool",
          "A certification for cloud cost management professionals"
        ],
        answer: 1,
        explain: "Cloud costs can spiral without visibility. Platform teams enable FinOps by enforcing mandatory cost-allocation tags (team, env, product), providing cost dashboards (Grafana + cloud billing APIs, or tools like OpenCost/Kubecost), and implementing idle resource detection. Chargebacks (or showbacks) create accountability without blocking teams."
      },
      {
        q: "What is Kubecost and what problem does it solve for platform teams?",
        opts: [
          "A Kubernetes cost optimisation tool that automatically rightsizes all pods",
          "An open-source tool that provides per-namespace, per-team, and per-workload cloud cost visibility inside Kubernetes — answering 'exactly how much is each team spending?'",
          "A billing integration between Kubernetes and cloud providers",
          "A FinOps certification platform for Kubernetes engineers"
        ],
        answer: 1,
        explain: "Kubecost (and OpenCost, the open-source spin-off) analyses Kubernetes resource usage and maps it to cloud costs. Platform teams use it to provide per-team cost dashboards, set budget alerts, identify expensive idle workloads, and do chargeback/showback reports. It integrates with Grafana for unified dashboards."
      },
      {
        q: "What is an LLM (Large Language Model) and how can it enhance a developer portal like Backstage?",
        opts: [
          "A Large Linux Module — a kernel extension for container security",
          "A machine learning model trained on large text datasets — integrated into Backstage as an AI assistant that answers questions about services, generates catalog descriptions, explains runbooks, and suggests golden path templates",
          "A log management layer for Kubernetes",
          "A licensing model for enterprise software"
        ],
        answer: 1,
        explain: "LLMs (GPT-4, Claude, Gemini) can be integrated into Backstage to create an AI developer assistant. Use cases: 'Which team owns the payment service?' (catalog search), 'Show me the runbook for database failover' (TechDocs RAG), 'Create a service using the Python template' (natural language scaffolding). This is the frontier of AI-powered developer experience."
      },
      {
        q: "What is RAG (Retrieval-Augmented Generation) in the context of an AI platform assistant?",
        opts: [
          "A Kubernetes resource allocation policy for GPU workloads",
          "A technique where an LLM's responses are grounded in real, up-to-date context retrieved from your actual documentation, catalog, and runbooks — preventing hallucinations and providing accurate, organisation-specific answers",
          "A CI/CD pattern for running AI model training jobs",
          "A role-based access control model for AI systems"
        ],
        answer: 1,
        explain: "RAG combines vector search (finding relevant documents from your TechDocs, runbooks, incident history) with LLM generation. Instead of the LLM relying on training data, it retrieves relevant context from your actual knowledge base first. This is how you build an AI assistant that knows your platform's actual architecture, not a generic answer."
      },
      {
        q: "What is predictive autoscaling in an AI-powered platform?",
        opts: [
          "Scaling Kubernetes nodes based on CPU thresholds",
          "Using ML models trained on historical traffic patterns to scale workloads BEFORE demand hits — provisioning capacity 10 minutes ahead of a predictable traffic spike instead of reacting after the fact",
          "An AI system that predicts which services will fail and pre-restarts them",
          "Automatic Kubernetes version upgrades triggered by AI analysis"
        ],
        answer: 1,
        explain: "Reactive HPA scales after load hits. Predictive autoscaling (KEDA with external metrics + ML model, or KEDA's Scheduled ScaledObject) pre-scales before the spike. For organisations with predictable patterns (daily 9am traffic surge, weekly batch jobs), predictive scaling reduces latency during ramp-up and avoids throttling."
      },
      {
        q: "What is a vector database and why is it foundational for AI-powered platform tooling?",
        opts: [
          "A high-performance database optimised for Kubernetes event streams",
          "A database that stores and efficiently retrieves high-dimensional numerical embeddings — enabling semantic search over documentation, code, and incidents to power AI assistants and recommendation systems",
          "A database designed for storing Prometheus time-series metrics",
          "A distributed key-value store for ML model configuration"
        ],
        answer: 1,
        explain: "Vector databases (Pinecone, Weaviate, pgvector in PostgreSQL) store text as numerical embeddings. Semantic search finds 'similar' documents even without exact keyword matches — e.g., 'how do I deploy?' finds the 'Getting Started with Golden Paths' TechDoc even if it does not say 'deploy'. This powers the retrieval step in RAG systems."
      },
      {
        q: "What is KEDA (Kubernetes Event-Driven Autoscaling)?",
        opts: [
          "A Kubernetes Dashboard for monitoring event-driven workloads",
          "A CNCF project that enables scaling Kubernetes workloads to zero (and from zero) based on external event sources — Kafka queue depth, SQS message count, Prometheus metrics, cron schedules",
          "A Kubernetes admission controller for event validation",
          "A replacement for HPA that uses AI to determine scale targets"
        ],
        answer: 1,
        explain: "KEDA extends Kubernetes autoscaling beyond CPU/memory. A service consuming a Kafka topic can scale from 0 to 50 replicas as messages queue up, then back to 0 when idle. Scale-to-zero is crucial for cost efficiency — batch workloads and ML inference services consume no resources when idle."
      },
      {
        q: "What is the role of a service mesh in a multi-cloud platform architecture?",
        opts: [
          "It connects Kubernetes clusters across cloud providers into a single virtual network",
          "It provides a consistent layer for traffic management, mTLS, observability, and access policy across services — regardless of which cloud the services run on — enabling a unified developer experience for networking",
          "It replicates Kubernetes etcd data across multiple cloud providers",
          "It is a multi-cloud load balancer for distributing traffic across regions"
        ],
        answer: 1,
        explain: "Service meshes (Istio, Linkerd, Consul Connect) abstract cloud-specific networking. In a multi-cloud setup, Istio can span clusters on AWS and GCP — developers configure traffic policies (canary, circuit breaker, retries) the same way regardless of the underlying cloud. This is a key layer of the abstraction the platform provides."
      },
      {
        q: "What is GitOps engine fleet management with ArgoCD ApplicationSets at enterprise multi-cloud scale?",
        opts: [
          "Using multiple ArgoCD installations in each cloud provider independently",
          "A single ArgoCD installation managing thousands of Applications across dozens of clusters in multiple clouds via ApplicationSet generators, with cluster registration via Crossplane or Cluster API",
          "A commercial ArgoCD product for multi-cloud deployments",
          "Running ArgoCD inside each application's namespace for isolation"
        ],
        answer: 1,
        explain: "At enterprise multi-cloud scale, a centralised ArgoCD hub manages all spoke clusters (registered via Cluster API or manually). ApplicationSets with Cluster generators automatically create Application objects for every registered cluster — one template deploys a service across 100 clusters. Changes in Git propagate globally."
      },
      {
        q: "What is AI-assisted incident response and how does it work in a mature platform?",
        opts: [
          "AI that automatically resolves incidents without human intervention",
          "An AI system that correlates signals from Prometheus, Loki, and traces during an incident — suggesting probable root causes, linking to relevant runbooks in TechDocs, and identifying similar past incidents from history",
          "A chatbot that pages on-call engineers faster than PagerDuty",
          "Machine learning that predicts which engineers are most likely to resolve an incident"
        ],
        answer: 1,
        explain: "AI-assisted incident response (pioneered by companies like PagerDuty, Datadog, and internal platforms at Netflix/Google) correlates metrics spikes, error log patterns, and recent deployments to generate a probable root cause hypothesis. It surfaces the most relevant runbook and links to similar past incidents, cutting MTTR significantly."
      },
      {
        q: "What is eBPF and why is it increasingly important in the platform engineering toolchain?",
        opts: [
          "Extended Berkeley Packet Filter — a Linux kernel technology enabling efficient, programmable observability, security, and networking without kernel modules or code changes to applications",
          "A blockchain-based package format for Kubernetes operators",
          "An enterprise build pipeline format for containerised applications",
          "A cloud provider network accelerator for Kubernetes nodes"
        ],
        answer: 0,
        explain: "eBPF allows safe programs to run in the Linux kernel without modifying kernel source or loading kernel modules. Platform tools like Cilium (networking + security), Pixie (observability), and Falco use eBPF to get deep visibility and control with minimal overhead. Key advantage: instrument any application without code changes or sidecar injection."
      },
      {
        q: "What is Falco and what does it protect against in a Kubernetes platform?",
        opts: [
          "A Kubernetes network policy tool for blocking external traffic",
          "A CNCF runtime security tool that uses eBPF/syscall monitoring to detect anomalous behaviour at runtime — e.g., unexpected shell execution in a container, privilege escalation, or file writes to sensitive paths",
          "A static analysis tool for Kubernetes YAML manifests",
          "A container image scanning tool for known CVEs"
        ],
        answer: 1,
        explain: "Falco monitors Linux syscalls and Kubernetes audit events in real time. It fires alerts when containers do unexpected things: opening a shell, reading /etc/shadow, making outbound connections to unexpected IPs. This is runtime threat detection — catching attacks that static scanning and admission control cannot see."
      },
      {
        q: "What is Platform Engineering's role in enabling ML/AI workloads in an enterprise?",
        opts: [
          "Platform engineers should become ML engineers to build AI models",
          "Building the infrastructure abstractions for ML workloads: GPU node pools, model serving golden paths (KServe, Seldon), experiment tracking integration (MLflow), feature store access, and cost management for expensive GPU instances",
          "Preventing data scientists from deploying their own models for security reasons",
          "ML workloads should always be managed by a separate MLOps team with no platform involvement"
        ],
        answer: 1,
        explain: "Platform teams extend golden paths to ML: GPU-enabled namespaces, KServe-based model serving templates, integration with MLflow/Weights & Biases, feature store access patterns, and GPU cost visibility. ML engineers get self-service access to expensive GPU infra within guardrails — the same platform-as-product model applied to AI/ML."
      },
      {
        q: "What is OpenCost and how does it fit into a multi-cloud FinOps strategy?",
        opts: [
          "An open-source billing platform for cloud providers",
          "A CNCF sandbox project providing a vendor-neutral, open specification and implementation for Kubernetes cloud cost monitoring — integrating with AWS, Azure, GCP, and on-premises to give unified cost visibility",
          "A cost calculator tool for estimating Kubernetes migration costs",
          "An open-source alternative to HashiCorp Vault"
        ],
        answer: 1,
        explain: "OpenCost is the open-source core of Kubecost, now a CNCF sandbox project. It provides standardised cost allocation for Kubernetes workloads across clouds. The OpenCost spec means data can be consumed by any FinOps tool. Platform teams deploy it to give per-team, per-namespace cost visibility across all clusters."
      },
      {
        q: "What is the 'platform as a competitive advantage' concept at the Expert level of maturity?",
        opts: [
          "The platform being more advanced than competitors' platforms",
          "When platform capabilities (faster deployments, self-healing infra, AI-assisted development) directly enable the business to ship features faster, maintain higher reliability, and attract engineering talent — becoming a differentiator in market competition",
          "When the platform team starts a commercial product based on internal tooling",
          "Competitive pricing for cloud infrastructure achieved through platform-level reserved instances"
        ],
        answer: 1,
        explain: "At expert maturity, the platform is not just an internal cost centre — it is a strategic asset. Companies like Netflix, Shopify, and Spotify ship faster and more reliably than competitors partly because their platforms are years ahead. The platform enables the business to win, and the best engineers want to work at companies with great developer platforms."
      },
      {
        q: "What is chaos engineering and how does it relate to platform reliability at expert maturity?",
        opts: [
          "Deliberately introducing bugs into the codebase to test developer alertness",
          "The practice of intentionally injecting failures (pod kills, network latency, node drain) into systems in a controlled way to discover weaknesses before they cause real incidents — tools include Chaos Monkey, LitmusChaos, and Chaos Mesh",
          "A release management methodology that deploys changes without change control",
          "Random deployment of untested code to production"
        ],
        answer: 1,
        explain: "Chaos engineering (pioneered by Netflix) validates that systems are resilient by breaking them on purpose. Expert-level platforms run automated chaos experiments (LitmusChaos, Chaos Mesh) in staging and production — e.g., randomly killing pods, injecting network latency, draining nodes — to verify that self-healing, failover, and alerts all work as expected."
      }
    ]
  }

];
