Activity 2 - VCS research report

Version Control System (VSC) is a method to track and manage changes to software code. Usage of a Version Control Systems (VCS) is now the norm not just in the software industry, but also in most document management systems where a document is expected to go through iterations over a period.

Different VCS investigated

I investigated the following VCS - CVS, SVN and Git 
    Source of truth: 
    Previously popular VCS tools such as CVS (Concurrent Version System) and later SVN (Subversion) had one single place for the full version history of the software. Recent generation of VCS tools such as Git allows every developer's working copy to contain the full history of all changes.
    Content vs Filenames: 
    Unlike SVN / CVS, Git prioritizes content over filenames when determining what the storage and version history should be. This is because source code files are frequently renamed, split, and rearranged.
    Storage: 
    The object format of Git's repository files is extremely efficient - owing to its use of a combination of delta encoding and compression. It is also secure - owing to its use of a cryptographically secure hashing algorithm called SHA1, which protects against both accidental and malicious change (unlike prior generations of VCS’ that had no similar protections).
    Benefits of different VCS

Benefit comparison:
The main benefit Concurrent Version System (CVS) is that is conceptually simpler to understand (than a Distributed VCS)
Subversion (SVN) on the other hand has a few benefits that newer VCS software (such as Git) are not able to match. For e.g.
-SVN allows partial (branch) checkout
-Similarly, SVN can be a little more efficient with multiple versions of large binary files
-SVN allows “locking” the repository from concurrent changes, extremely helpful with some hard to merge files
Benefits of Git are its core features of Decentralised usage / efficiency / security.

How the VCS I chose fits with the organisational requirements:
Git is free, open source and distributed VCS designed to handle small to very large projects with speed and efficiency. Git is easy to learn, light and comes with lightning-fast performance. It outclasses other tools like Subversion, CVS, Perforce, and ClearCase with features like cheap local-branching, convenient staging-areas, and multiple workflows. I chose Git over other VCS because of
●	Feature branches - Git has been designed to support branching and tagging and so operations that affect branches and tags are extremely fast and efficient.
●	Distributed development - each developer gets their own local repository with a full history of commits
●	Pull requests - to keep the team in sync

Installation process
Installation of Git was simple from the official Git website. Considering that the website supports Binaries for all common Platforms (Windows / Mac / Linux etc.), installation was as simple as Download -> Install -> Run, especially since it automatically took care of dependencies required.

What disruptions installation may cause
One aspect to keep in mind when installing Git is to check if the Operating system has a pre-existing version and thus whether any existing tools / software need attention. A common case of disruption is when Git installation updates a previous version of Git, which is used for other tools (for e.g., VSCode pointing to the correct version of git, Testing Framework that gets invoked on Git commit etc.)

Configuration process
For making sure that Git has my name as the author of commits, I use the following commands for the Musoplan repository:
$ git config user.name "Smita Jacob"
$ git config user.email "smitajcb@gmail.com"

Bibliography
Atlassian. 2021. Why Git | Atlassian Git Tutorial. [online] Available at: <https://www.atlassian.com/git/tutorials/why-git> [Accessed 26 August 2021].
