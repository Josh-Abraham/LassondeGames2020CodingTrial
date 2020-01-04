# Lassonde Games 2020 Coding Trial
Programming Challenge Initialization

Prior to the competition it is expected that you have working programming environments with all needed dependencies ready for deployment. For the simulation you will need to have:
-	Node js (version 12.14.0 and npm) Nodejs Download

For Python:
-	A version of Python (including a package management system, the commands given below use pip) if your team wishes to use **Python** to code

For Java:
-	A working Java environment (an IDE may also be helpful, the examples assume Eclipse is being used) if your team wishes to use **Java** to code
-	The Json-simple-1.1 JAR  JSON Simple Download

## Trial Setup
_Note:_ You will be given the actual simulation during the competition, but the steps will be the same

In your command prompt/ terminal navigate to the following location _LassondeGames2020CodingTrial\Backend Module_
Once in that directory, you need to install your node modules. To do this type the following command: 

**npm install**

**node main.js**

_Note:_ npm should be installed when node js was installed, if not add npm in manually

Once this is done, your simulation should be running, to check go to the host address given (http://127.0.0.1:8081/) in your internet browser. At this point you should see the trial screen.

### Setup for Python Only
Go to the following directory in your command prompt: _LassondeGames2020CodingTrial\FrontEndDemoPython_
Type the following command in:
**pip install requests**
**python mainClass.py**

Running the mainClass will interact with the trial screen, if you see the animation take place and no errors, you have successfully finished the setup. During the challenge the mainClass.py will be where your code will go (along with any additional files you wish)

### Setup for Java Only
Go to the Eclipse IDE and open a new Java Project called **FrontEndDemoJava**
Go to the downloaded files given and add the files from _LassondeGames2020CodingTrial\FrontEndDemoJava\src_
Drag and drop both files: **MainClass.java** and **Request.java** into the src of your project

Left click on project folder and go to **Build Path**

Then go to **Configure Build Path**, then click on **Add External JARs…**

Once there, find the _JSON simple JAR_ and add it.

Click **Apply and Close** 

Finally, run the MainClass.java 

