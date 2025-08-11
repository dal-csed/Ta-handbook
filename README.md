This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Updating the Website

Use FileZilla to update the files on the server.

SFTP Credentials:

- Host: ```sftp://csed-graduate-ta-handbook.cs.dal.ca```
- Username: ```project-tahandbook```
- Password: ```Roo7shaeS3codei```

Run project:

1. SSH into the server:

    ``` 
    ssh project-tahandbook@csed-graduate-ta-handbook.cs.dal.ca
    ```
2. Start or attach to a tmux session:

    ```
    tmux
    ```
- To detach: ```Ctrl + b```, then ```d```
- tmux a 
- To list sessions: ``` tmus ls ```

## Project Structure

```components/``` -
Contains all reusable custom components and row layouts.

```constant/``` -
Contains static data arrays used throughout the site (e.g., for dynamic rows).

```page.tsx``` - 
The landing page and main entry point of the site.

 

