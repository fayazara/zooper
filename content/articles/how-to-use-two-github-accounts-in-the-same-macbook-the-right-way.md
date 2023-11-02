---
title: "How to Use Two GitHub Accounts on a Macbook the Right Way"
description: "Using multiple GitHub accounts on a Macbook can be challenging, but there's a way to do it correctly."
date: "Nov 2, 2023"
slug: "how-to-use-two-github-accounts-on-a-macbook-the-right-way"
---

Recently, I joined HeadshotPro as a full-stack developer, completed my onboarding, and received an invitation to their GitHub organization. The catch? It was sent to my new email address, which was perfectly fine, except that I had already linked my personal GitHub account to my Macbook, which I use a lot, since I make a lot of side projects and some open-source contributions as well.

Now, I faced two options: either create a new user on my Macbook for my work or use my existing user and add a new GitHub account to it. However, it wasn't that straightforward.

My friend [Akshara Hegde](https://twitter.com/akshara_dev) advised me to create a new SSH key and link it to my work GitHub account. He also suggested creating terminal aliases to switch between my personal and work GitHub accounts. While this method worked, it meant running a script each time I needed to switch, which was far from ideal. Here's what it looked like:

```bash
alias git_personal="(ssh-agent) && ssh-add ~/.ssh/personal"
alias git_work="(ssh-agent) && ssh-add ~/.ssh/work"
```

This meant that whenever I wanted to work on my personal projects, I had to run git_personal, and for work, it was git_work.

I also found some other complicated solutions that involved SSH configs with different hostnames meant specifically for respective repositories.

### The solution

There had to be a better way, and I discovered that I could use conditional statements in my global .gitconfig file.

The first step was to add the SSH key to my work GitHub account and create a folder named work. Any Git command or operation executed in this folder would automatically use my work credentials.

### How does it work?

Your existing .gitconfig file likely looks like this:

```bash
[user]
name = Fayaz Ahmed
email = fayaz@personal-account.com

[github]
user = fayazara
```

Now, let's add some conditional statements to it:

```bash
[includeIf "gitdir:~/"]
path = ~/.gitconfig-personal

[includeIf "gitdir:~/Work/"]
path = ~/.gitconfig-work

[core]
excludesfile = ~/.gitignore
```

Next, create two new files in your home directory or your preferred location: .gitconfig-personal and .gitconfig-work.

**.gitconfig-personal**

```bash
[user]
name = Fayaz Ahmed
email = fayazara@personal-account.com

[github]
user = fayazara

[core]
sshCommand = ssh -i ~/.ssh/personal
```

**.gitconfig-work**

```bash
[user]
name = Fayaz Ahmed
email = fayaz@work-account.com

[github]
user = fayazwork

[core]
sshCommand = ssh -i ~/.ssh/work
```

That's it! Now, when you run any Git command in your Work folder, it will automatically use your work credentials, while in other locations, it will use your personal credentials.

### How do we test this?

Navigate to your work directory repositories and run the following command to check if it's using your work credentials:

```bash
git config --list | grep user
```

This command will only work if the folder you are running it in is a Git repository.
