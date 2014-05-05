# User Interface Style Guide

[Deployed Here](http://protected-citadel-1295.herokuapp.com/)

The User Interface Style Guide is here to help maintain your brand across multiple platforms (desktop, tablet, mobile, ios, android, etc) and across multiple markets. Constant iteration requires both an efficient workflow and a well defined collection of core UI elements that can be assembled quickly. Reinventing the wheel is out and standards are in.

This documentation references our core UI patterns. It is our hope this guide will decrease uncertainty in the workplace and increase efficiency. This uniform lexicon of code and UI elements benefits us in a many ways:

We can build consistently and focus on workflows and logic, not web forms and list items
We can reuse code instead of roping in a developer
We can maintain our code by seeing our patterns in one place, define elements in our application, and keep redundancy to a minimum
We add new patterns only when the case for doing so is sound. New patterns come at a high cost—they require new design elements, additional code, maintenance, and they increase the cognitive load on users.


## Keeping local repo up to date
Your local repo will be an independent version of the original repo from the moment you fork the repo. In order to keep your local repo up to date with the original repo, you need to do what is called an [upstream pull][3].

To manage an upstream pull, I suggest updating your `.bash_profile` and your `.gitconfig` file with easy to remember aliases. 

### .bash_profile

In your `.bash_profile` add the following alias

```
alias upstream="git remote add upstream \$@"
```

From the command line you simply need to refer to the alias and add the path to the upstream repo as shown in the following example.

```
$ upstream https://github.com/blackfalcon/unicorn-class-css-section.git
```

Once the upstream repo is configured for your local repo, this never needs to be reset again, unless you delete your local repo. 

### .gitconfig
In your `.gitconfig` add the following alias

```
pu = !"git fetch origin -v; git fetch upstream -v; git merge upstream/master"
```

From the command line, within the project repo, enter the following command to pull latest code from the upstream master.

```
git pu 
```




[1]:https://help.github.com/articles/fork-a-repo
[2]:https://help.github.com/articles/fork-a-repo#step-2-clone-your-fork
[3]:https://help.github.com/articles/syncing-a-fork
