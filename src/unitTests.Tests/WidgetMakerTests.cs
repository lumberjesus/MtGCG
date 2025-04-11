using testLibrary;
using Moq;

namespace unitTests.Tests
{

    public class WidgetMakerTests
    {
        [Fact]
        public void TestConsoleLoggerDoesNotThrowException()
        {
            ConsoleLogger logger = new ConsoleLogger();
            logger.LogInfo("test message asdfasdf");
        }

        [Fact]
        public void TestLogOutputWithMock()
        {
            
            Mock<ILogger> mockLogger = new Mock<ILogger>();
            int workCounter = 0;
            mockLogger.Setup(x => x.LogWarn(It.IsAny<string>(), It.IsAny<Exception?>(), It.IsAny<object?[]>())).Callback<string, Exception?, object?[]>((a, b, c) => 
            {
                workCounter++;
            });
            
            ILogger mockedLogger = mockLogger.Object;
            WidgetMaker widgetMaker = new WidgetMaker(mockedLogger);

            widgetMaker.DoSomeWork();

            Assert.Equal(1, workCounter);
        }
    }
}