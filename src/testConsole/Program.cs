using testLibrary;

namespace testConsole
{
    public class Program
    {
        public static void Main()
        {
            ILogger logger = new ConsoleLogger();
            WidgetMaker widgetMaker = new WidgetMaker(logger);
            widgetMaker.DoSomeWork();
        }
    }
}