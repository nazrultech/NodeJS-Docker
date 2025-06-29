# NodeJS-Docker
🔧 1. docker run -p 3000:3000 my-node-app </br>
Starts a container from the image my-node-app.</br>

Maps host port 3000 to container port 3000, allowing external access to the app on port 3000. </br>

🛑 2. docker stop $(docker ps -q) </br>
Stops all running containers. </br>

$(docker ps -q) gets a list of all running container IDs. </br>

🔍 3. docker ps </br>
Lists currently running containers. </br>

Useful for checking container status after starting/stopping. </br>

🛠️ 4. docker build -t my-node-app . </br>
Builds a Docker image from the current directory (.) using the Dockerfile. </br>

Tags it as my-node-app. </br>

🛑 5. docker stop $(docker ps -q) </br>
Same as #2 — again, stops all running containers (maybe before cleanup). </br>

🗑️ 6. docker rm $(docker ps -a -q) </br>
Removes all containers (both running and exited). </br>

$(docker ps -a -q) fetches all container IDs. </br>

🔄 7. git pull origin main </br>
Updates local codebase from the remote main branch. </br>

Ensures you're using the latest project code before building or running.</br>

📋 8. docker image ls </br>
Lists all locally available Docker images. </br>

Displays: </br>

Repository (image name) </br>

Tag (version, like latest) </br>

Image ID </br>

Created time </br>

Size </br>

✅ Use this to see what images are available on your system. </br>

🔍 9. docker image inspect 4112930a531a </br>
Shows detailed metadata about a specific image using its ID (4112930a531a).</br>

      Outputs a JSON object containing: </br>
      
        Configuration info </br>
      
        Environment variables </br>
      
        Layer history </br>
      
        Entrypoint and command </br>
      
        File system layers </br>

Architecture and OS </br>

✅ Useful for debugging or understanding how an image is constructed.
