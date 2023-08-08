You can integrate your Jenkins instance with GitHub by using the GitHub plugin ¹. The primary avenues for integrating your Jenkins instance with GitHub are:

- **Build integration**: Using GitHub to trigger builds.
- **Authentication integration**: Using GitHub as the source of authentication information to secure a Jenkins instance.

With the help of the Git plugin, Jenkins can easily pull source code from any Git repository that the Jenkins build node can access. The GitHub plugin extends upon that integration further by providing improved bi-directional integration with GitHub. Allowing you to set up a Service Hook which will hit your Jenkins instance every time a change is pushed to GitHub. Going the other direction, the GitHub plugin can also feed information back into GitHub via the commit status API ¹. 

Here are some resources that can help you configure your Jenkins instance with GitHub:

- [Jenkins with GitHub](https://www.jenkins.io/solutions/github/)
- [Adding a GitHub Webhook in Your Jenkins Pipeline](https://dzone.com/articles/adding-a-github-webhook-in-your-jenkins-pipeline)
- [Jenkins GitHub Integration | How to Do It | Blazemeter by Perforce](https://www.blazemeter.com/blog/how-to-integrate-your-github-repository-to-your-jenkins-project)
- [Integrating Jenkins with Git: A Step-by-Step Guide](https://www.devopswithchay.com/posts/jenkins-connect-to-git/)

I hope this helps!

Origem: conversa com o Bing, 07/08/2023
(1) Jenkins with GitHub. https://www.jenkins.io/solutions/github/.
(2) Adding a GitHub Webhook in Your Jenkins Pipeline - DZone. https://dzone.com/articles/adding-a-github-webhook-in-your-jenkins-pipeline.
(3) Jenkins GitHub Integration | How to Do It | Blazemeter by Perforce. https://www.blazemeter.com/blog/how-to-integrate-your-github-repository-to-your-jenkins-project.
(4) Integrating Jenkins with Git: A Step-by-Step Guide. https://www.devopswithchay.com/posts/jenkins-connect-to-git/.