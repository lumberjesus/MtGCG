# Setting up C# projects
1. In the terminal navigate to the src folder in the repo
2. run command
```
dotnet new sln -n csharpsolution

dotnet new classlib -n testLibrary
dotnet sln csharpsolution.sln add testLibrary/testLibrary.csproj
dotnet new console -n testConsole
dotnet sln csharpsolution.sln add testConsole/testConsole.csproj
dotnet new xunit -n unitTests.Tests
dotnet sln csharpsolution.sln add unitTests.Tests/unitTests.Tests.csproj

dotnet add unitTests.Tests/unitTests.Tests.csproj reference testLibrary/testLibrary.csproj
dotnet add testConsole/testConsole.csproj reference testLibrary/testLibrary.csproj
```