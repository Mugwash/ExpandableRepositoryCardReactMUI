export interface Commit {
    sha: string;
    message: string;
    date: string;
    patch: string;
  }
  
  export interface Repository {
    name: string;
    commits: Commit[];
  }
  
  export interface GitProfile {
    git_username: string;
    repositories: Repository[];
  }